import React from 'react'

const AddModal = ({name,rollno,handleChange,handleClick}) => {
  return (
    <div className='flex flex-col justify-center justify-items-center content-center bg-slate-300 rounded-xl h-96 w-3/4'>

        
          <div className="">
						  <label htmlFor="name">Name</label>
						
						  <input
							id="name"
							className="w-1/2 mx-4 p-2 border-solid rounded-xl "
              type="text"
              value={name}
              onChange={handleChange}
						  />
          </div>
          <br />
					<div>
						<label htmlFor="rollno">Roll No</label>
						
						<input
							id="rollno"
							className="w-1/2 mx-4 p-2 border-solid  rounded-xl "
              type="text"
              onChange={handleChange}
              value={rollno}
						/>
          </div>
          <br />
          <div className="flex justify-center text-white ">
            <button className='w-1/5  p-2 border-solid rounded-xl bg-orange-400 hover:bg-orange-600' type='button' onClick={handleClick}>Mark Attendence</button>
          </div>
          </div>
  )
}

export default AddModal