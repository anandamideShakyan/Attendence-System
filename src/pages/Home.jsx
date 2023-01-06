import React, { useEffect } from 'react'
import { MdHomeMax } from 'react-icons/md'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { useState } from 'react'
import PresentModal from './PresentModal'
import AddModal from './AddModal'
const Home = () => {
  const [isHome,setIsHome] = useState(true)
  const [name,setName] = useState('')
  const [rollno,setRollno]=useState('')
  const [presentList,setPresentList] = useState(localStorage.getItem("Attendence")?JSON.parse(localStorage.getItem("Attendence")) : [])
  const[currentStrength,setCurrentStrength]=useState(JSON.parse(localStorage.getItem("CurrentStrength")|| 0))
  const handleClick = () => {
    if(name==='' || rollno==='') return
    let date = new Date(Date.now())
    const checkin= date.toLocaleDateString()+" "+date.toLocaleTimeString()
    const data = { name,rollno,checkin,checkout: '' };
    setPresentList(presentList=>[ ...presentList,data ])
    setCurrentStrength(currentStrength=>currentStrength+1) 
    setName('')
    setRollno('')

  }
  const handleChange = (e) => {
    e.target.id==="name" ?setName(e.target.value):setRollno(e.target.value)
  }
  const setCheckout = index=>(e) => {
    const rollno=e.target.id
    const date=new Date(Date.now())
    const checkout = date.toLocaleDateString() + " " + date.toLocaleTimeString()
    let newList = [...presentList]
    newList[index].checkout=checkout
    setPresentList([...newList])
    setCurrentStrength(currentStrength=>currentStrength-1) 

  }
  
  useEffect(() => {
    localStorage.setItem("Attendence",JSON.stringify(presentList))
  },[presentList])
  useEffect(() => {
    localStorage.setItem("CurrentStrength",currentStrength)
  },[currentStrength])
  
  return (
    
      <div className="Home px-20 flex flex-col bg-slate-100  h-full"  >
      <div className='flex flex-row justify-between  m-5 w-full'>

        <div className="flex justify-between w-4/5">

        <div className='' >
          <button onClick={()=>setIsHome(true)}>

            <MdHomeMax size={40}/>
          </button>
       
        </div>
        <div className=''>
          <button onClick={()=>setIsHome(false)}>
          <HiOutlineQueueList size={40}/>

          </button>
        
        </div>
        <div className="p-2 content-center flex justify-center text-lg text-white border-solid rounded-xl bg-red-700">
          Total Visited : {presentList.length}
          </div>
        </div>
          <div className="p-2 content-center flex justify-center text-lg text-white border-solid rounded-xl bg-orange-800">
           Current Strength: {currentStrength}
          </div>
        </div>
        
          
        
      
    
      <div className=' flex justify-center content-cneter border-solid   py-24 w-full '>
        {isHome ?
          <AddModal name={name} rollno={rollno} handleChange={handleChange} handleClick={ handleClick} />
          :
          <PresentModal setCheckout={setCheckout} presentList={presentList} />
        }
        
      </div>
      </div>  
      
  )
}

export default Home