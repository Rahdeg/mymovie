import React from 'react'
import { Product } from '../typings';
import {BsCheck2} from 'react-icons/bs'
import {MdOutlineCancel} from 'react-icons/md'

interface Props {
    products : Product[];
    selectedPlan : Product | null;
}

const Table = ({products,selectedPlan}:Props) => {
  return (
    <table>
        <tbody className=' divide-y divide-[gray]'>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Monthly Price</td>
                {products && products.map((product)=>(
                    <td key={product.id} className={`tableDataFeat ${selectedPlan?.id === product.id? " text-[#e50914]" : "text-[gray]"}`}>NGR {product.price}</td>
                ))}
            </tr>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Video Quality</td>
                {products && products.map((product)=>(
                    <td key={product.id} className={`tableDataFeat ${selectedPlan?.id === product.id? "text-[#e50914]" : "text-[gray]"}`}>{product.video}</td>
                ))}
            </tr>
            <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableDataFeat ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeat ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.portability === 'true' ? (
                <BsCheck2 className="inline-block h-8 w-8" />
              ) :<MdOutlineCancel className="inline-block h-8 w-8"/>}
            </td>
          ))}
        </tr>
        </tbody>
    </table>
  )
}

export default Table