


function List({arrs,key,id,del}){

    return(
        <>
        <div>
        <p onClick={()=>del(id)}>X</p>
        <li >{arrs}</li>
        </div>

        </>
    )
}

export default List;