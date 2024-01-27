
// import { useState } from "react";
import Forms from "./components/forms";
// import Playbutton from "./components/playbuton";
// import Video from "./components/video";
// import Child from "./components/child"
import { createContext, useState } from "react";
// import Digi from "./components/digi"
// import A from "./components/a"
import Nav from "./components/navbar"
import Input from "./components/input"
import Note from "./components/note"
// import { Input } from "@mui/base";
// import Temp from "./components/temp"

let videosprop=[
  {
  verified:"true",
  namee:"NYE",
  singer:"ARR"
},
  {
  verified:"true",
  namee:"Iktara",
  singer:"Amit"
},
  {
  verified:"true",
  namee:"Oh",
  singer:"Anirudh"
},
]

const Fname=createContext()
const Lname=createContext()

function App(){
  // const [nayavid,setvid]=useState(videosprop)
  const [additem,setitem]=useState([])


function create(val){
  
  setitem((prev)=>{
    return [...prev,val]
    
  })
}

function dele(id){
  console.log("Deleted",id)
  setitem((prev)=>
  prev.filter((curr,ind)=>{
    return ind!=id
  })

    
    
  )
  
    
  

}

  return(
    <div>
    
    <Nav></Nav>
    <Input create={create}></Input>
    {
      additem.map((item,index)=>{
        return <Note item={item} id={index} del={dele}></Note>
      })
    }

    </div>
    

  )
}


export default App;
export {Fname,Lname};