import { User } from 'firebase/auth'
import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const subscibtion = (user: User | null) => {
    const [subscribtion, setSubscribtion] = useState(false)
    
    useEffect(() => {
     if(!user) return
     onSnapshot(
        collection(db, 'plans', user.uid,'myPlan' ),
        (snapshot) => {setSubscribtion(
            snapshot.docs.findIndex((result) =>result.data().selectedPlan.name === 'Basic'|| result.data().selectedPlan.name === 'Standard' || result.data().selectedPlan.name === 'Premium'
            ) !== -1 
          );
             }
      )
    }, [user])


    console.log("sub",subscribtion);
    
  return subscribtion
}

export default subscibtion