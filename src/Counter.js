import React, { useState } from 'react'

function Counter({ teamName }) {

  let textStyle = 'text-cyan-50 text-5xl font-extrabold rounded-xl';
  let bgColor = 'bg-cyan-500';
  let but2 = 'mx-2 my-2 py-3 md:px-8 md:col-span-1 col-span-2';

  const [count, setCount] = useState(0);

  return (
    <div className='bg-yellow-50 flex justify-center items-center'>
      <div className='grid grid-cols-2 md:grid-rows-5 grid-rows-6'>
        <span className='py-4 col-span-2 justify-self-center content-center font-bold text-gray-600 text'>{teamName}</span>
        <h1 className='col-span-2 row-span-2 justify-self-center content-center text-9xl font-extrabold text-gray-600'>{count}</h1>
        <button className={`${bgColor} ${textStyle} ${but2}`} onClick={() => { setCount(count + 1) }}>+1</button>
        <button className={`${bgColor} ${textStyle} ${but2}`} onClick={() => { setCount(count - 1) }}>-1</button>
        <button className={`m-2 px-4 py-4 col-span-2 ${bgColor} ${textStyle}`} onClick={() => { setCount(0) }}> Reset</button>
      </div>
    </div>
  )
}

export default Counter