 "use client"
import axios from "axios"
 import { useState } from "react"
const Dynamic = () => {
  const [name,setName]=useState('')
  const [value,setvalue]=useState('')

  const [player,setplayer]=useState('')
   const [sports,setsports]=useState('')


  async function handleSubmit(e){
    e.preventDefault()
    
    try {
      const respose1=await axios.post('/api/one',{name,value})
    const respose2=await axios.post('/api/two',{player,sports})
    console.log(respose1.data.message)
    console.log(respose2.data.message)
    } catch (error) {
      console.log(error)
    }
   }
  return (

    <>
    <div className="flex" style={{display:"grid"}}>

<form onSubmit={handleSubmit}  style={{display:"grid",gap:"20px",maxWidth:"250px"}}>
   <label >Name</label> <input type="text"  onChange={(e)=>setName(e.target.value)} value={name}/>
   <label >Value</label> <input type="text"  onChange={(e)=>setvalue(e.target.value)} value={value}/>
   <label >Player</label> <input type="text"  onChange={(e)=>setplayer(e.target.value)} value={player}/>
   <label >sports</label> <input type="text"  onChange={(e)=>setsports(e.target.value)} value={sports}/>
   <button type="submit"> Submit</button>
    </form>  
    <div>{name} {value} {player} {sports}</div>  
    </div>
    </>
  )
}

export default Dynamic