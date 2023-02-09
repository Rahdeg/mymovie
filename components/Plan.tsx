import Head from "next/head";
import{useState} from 'react'
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import {BsPatchCheckFill} from 'react-icons/bs'
import { Product } from "../typings";
import Table from "./Table";

interface Props {
    products : Product[];
}

const Plan = ({products}:Props) => {
    const {logOut} =useAuth();
    const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])

  return (
    <div className="">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" border-b border-white/10 bg-[#141414]">
        <Link href='/'>
        <img
          src="https://rb.gy/ulxxee"
          width={150}
          height={90}
          alt="netflix"
          className=" cursor-pointer object-contain"
        />
        </Link>
        <button className=" text-lg font-medium hover:underline" onClick={()=>logOut()}>SIgn out</button>
      </header>
      <main className="pt-28 max-w-5xl pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">Choose the plan that's right for you</h1>
        <ul>
        <li className="flex items-center gap-x-2 text-lg">
            <BsPatchCheckFill className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <BsPatchCheckFill className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <BsPatchCheckFill className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-x-4">
            {/* Plans */}
            <div className="flex w-full items-center justify-center self-end  md:w-3/5">
           {products && products.map((product)=>(
             <div className={`planBox ${selectedPlan?.id === product.id? "opacity-100" : "opacity-60"}`} 
             key={product.id}
             onClick={()=>setSelectedPlan(product)}
             >{product.name}</div>
           ))}
            </div>
            {/* Table*/}
            <Table products={products} selectedPlan={selectedPlan}/> 
            <button>Subscribe</button>
        </div>
      </main>

    </div>
  );
};

export default Plan;