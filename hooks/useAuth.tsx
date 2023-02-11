import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuth {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  subscribe:() => Promise<void>;
  error: string | null;
  loading: boolean;
  sub : boolean,
}
const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logOut: async () => {},
  subscribe: async () => {},
  error: null,
  loading: false,
  sub : false,
});
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [sub, setSub] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true)
  const router = useRouter();

//   persisting the user
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user)
          setLoading(false)
        } else {
          // Not logged in...
          setUser(null)
          router.push('/login')
        }

        setInitialLoading(false)
      }),
    [auth]
  )

  const subscribe =async () =>{
    setSub(true);
  }

  const signUp = async (email: string, password: string) => {
    if(!email || !password) return;
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    if(!email && !password) return;
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const logOut = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };
  const memoedValue = useMemo(
    () => ({
      user,
      signIn,
      signUp,
      loading,
      logOut,
      error,
      sub,
      subscribe,
    }),
    [user, loading, error,]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{!initialLoading && children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
