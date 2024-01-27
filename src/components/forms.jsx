import React from "react";

function Forms(){

    function handlebutton(e){
        e.prrventDefault()
        

    }




    function handlechange(e){
        // console.log(e.target.value)
        // let a=console.log(`${e.target.name}:${e.target.value}`)
        let key=e.target.name
        let valuee=e.target.value
        console.log(key,valuee)

    }
    return(
        <>
        <form>

        <input type="text" name="title" placeholder="Title" onChange={handlechange}></input>
        <input type="text" name="views" placeholder="views" onChange={handlechange}></input>
        <button onClick={(handlebutton)=>{
        // setvid([...nayavid,{
        //   verified:"true",
        //   namee:"ordinary",
        //   singer:"Nikita"

        // },
        // ]
        // )
        }
        }>ADDD</button>
        </form>
        </>
    )
}


export default Forms;