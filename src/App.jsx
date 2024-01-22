import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MdPeopleAlt} from "react-icons/md"
import {RiMoneyDollarCircleLine} from "react-icons/ri"

function App() {
  const [tip, settip] = useState(5)
  const [bill, setbill] = useState(0)
  const [people, setpeople] = useState(1)

  const handleTip = (e)=>{
    if(e){
      settip(e)
    }
    const value = e.target.value
    settip(parseInt(value))
    
  }
  const handleBill = (e)=>{
    const value = e.target.value
    setbill(parseInt(value))
  }
  const handlePeople = (e)=>{
    const value = e.target.value
    setpeople(parseInt(value))
  }

  return (
    <div className='flex w-full lg:h-screen h-auto pt-10   bg-qu justify-center items-center ' >
      <div className='flex flex-col lg:w-[55%] lg:h-[55%] w-full items-center gap-10' >
        <span className='uppercase text-3xl text-sec' >
          spli<br/>tter
        </span>
        <div className='flex lg:flex-row flex-col gap-y-6 bg-qui p-6 w-full h-full lg:rounded-2xl rounded-t-2xl' >
          <div className='lg:w-1/2 w-full flex gap-4 flex-col justify-between' >
            <div className='flex flex-col lg:pr-4 lg:gap-2' >
              <span className='text-sec text-xl' >Bill</span>
              <div className='flex flex-row justify-between items-center rounded-md pl-4 bg-tri bg-opacity-10' >
                <RiMoneyDollarCircleLine className='text-2xl text-tri' />
                <input onChange={handleBill} type="text" value={bill} className=' text-right outline-none p-4 bg-transparent w-full' />
              </div>
            </div>
            <div className='flex flex-col gap-3' >
              <span className='text-xl text-sec' >Select Tip %</span>
              <div className='grid grid-cols-3 gap-2 lg:pr-4' >
                <button onClick={()=>handleTip(5)} className={tip!==5?'p-3 bg-sev text-six rounded-md text-xl':'p-3 bg-prim text-six rounded-md text-xl'}>5%</button>
                <button onClick={()=>handleTip(10)} className={tip!==10?'p-3 bg-sev text-six rounded-md text-xl':'p-3 bg-prim text-six rounded-md text-xl'}>10%</button>
                <button onClick={()=>handleTip(15)} className={tip!==15?'p-3 bg-sev text-six rounded-md text-xl':'p-3 bg-prim text-six rounded-md text-xl'}>15%</button>
                <button onClick={()=>handleTip(25)} className={tip!==25?'p-3 bg-sev text-six rounded-md text-xl':'p-3 bg-prim text-six rounded-md text-xl'}>25%</button>
                <button onClick={()=>handleTip(50)} className={tip!==50?'p-3 bg-sev text-six rounded-md text-xl':'p-3 bg-prim text-six rounded-md text-xl'}>50%</button>
                <input onChange={handleTip} type='text' className='p-3 bg-tri bg-opacity-20 text-sev rounded-md text-xl' placeholder='Custom'/>
              </div>
            </div>
            <div className='flex flex-col lg:pr-4 gap-2' >
              <span className='text-sec text-xl' >Number of People</span>
              <div className='flex flex-row justify-between items-center rounded-md pl-4 bg-tri bg-opacity-10' >
                <MdPeopleAlt className='text-2xl text-tri' />
                <input onChange={handlePeople} type="text" className=' text-right outline-none p-4 bg-transparent w-full' />
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 w-full flex flex-col p-6 bg-sev rounded-md justify-between ' >
            <div className='flex flex-col gap-10 pt-5' >
               <div className='flex items-center flex-row justify-between' >
                <div className='flex flex-col gap-1' >
                  <span className='text-white'>Tip Amount</span>
                  <span className='text-tri' >/ person</span>
                </div>
                <span className='text-5xl text-prim' >
                  ${(bill/100)*tip}
                </span>
               </div>
               <div className='flex items-center flex-row justify-between' >
                <div className='flex flex-col gap-1' >
                  <span className='text-white'>Total</span>
                  <span className='text-tri' >/ person</span>
                </div>
                <span className='text-5xl text-prim' >
                  ${((bill/100)*tip)*people}
                </span>
               </div>
            </div>
            <button onClick={()=>{
              setbill(0)
              setpeople(1)
            }} className={bill==0?'mt-8 uppercase text-sev text-xl font-extrabold bg-prim bg-opacity-15 p-4 rounded-md':'mt-8 uppercase text-sev text-xl font-extrabold bg-prim p-4 rounded-md'} >
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
