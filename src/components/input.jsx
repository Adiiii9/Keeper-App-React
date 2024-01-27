import React from "react"
import "./input.css"
import {useState} from "react"

function Input({create}){

    const [val,setvalue]=useState({
        title:"",
        addnote:""
    })

    // const [arr,setarr]=useState([])

    
    function handlechange(e){
        let {name,value}=e.target
        setvalue((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
        // console.log(val)

    
    }

    function handleclick(e){
        create(val)
        setvalue({
            title:"",
            addnote:""
        })
        
    }

    





    return(
        <>
        <div className="input-container">
        <div className="title">
            <input 
            name="title"
            className="title-input"
            placeholder="Title"
            onChange={handlechange}
            value={val.title}
             ></input>
        </div>

        <div className="addnote">
            <textarea
            rows="" 
            color=""
            name="addnote"
            className="addnote-input"
            placeholder="Add notes... "
            onChange={handlechange}
            value={val.addnote}
            ></textarea>
        </div>
        <div className="btndiv">
        <button 
        className="btn-btn"
        onClick={handleclick}
        >ADD</button>
        </div>
        </div>

        {/* {
            arr.map((val)=>{
                return <li>{val.title}</li>

            })

        } */}
        
        </>
    )
}


export default Input;