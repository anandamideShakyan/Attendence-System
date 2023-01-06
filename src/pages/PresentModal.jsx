import React from 'react'

const PresentModal = ({presentList,setCheckout}) => {
  return (
    <div className='flex flex-col justify-center justify-items-center content-center bg-slate-300 rounded-xl p-2 w-3/4'>
      <div className=" flex my-4 font-bold">
        <div className='w-1/6'>

                Name
        </div>
        <div className='w-1/6'>

                Roll no
              </div>
              <div className='w-1/3'>
Checkin
              </div>
              <div className='w-1/3'>

                Checkout
              </div>
      </div>
      <hr />
      
      {presentList.map((item,index) => {
          return (
            <div key={item.rollno} id={item.rollno} className=" py-3 flex">
              <div className='w-1/6'>

                {item.rollno} 
              </div>
              <div className='w-1/6'>

                {item.name}
              </div>
              <div className='w-1/3'>

                {item.checkin}
              </div>
              <div className='w-1/3'>

                {item.checkout===""?<button className=' p-2 border-solid rounded-xl bg-orange-400 hover:bg-orange-600 text-white'  onClick={setCheckout(index)}>Checkout</button>:item.checkout}
              </div>
              
              
            </div>
          )
        }
        )}
      
    </div>
  )
}

export default PresentModal