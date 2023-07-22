import React from 'react'

const Dropdown = ({difficultyData,setSelect }) => {
  return (
    <div>
        <select onChange={(e)=> setSelect(e.target.value)}>
            {difficultyData.map((data, key)=>(
                
                <option value={data} key={key}>{data}</option>

            ))}
        </select>

    </div>
  )
}

export default Dropdown