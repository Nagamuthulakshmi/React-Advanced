import React, {useEffect, useRef, useState} from "react";

const UseRefBasics=()=>{

    const data = useRef(null);
    const data2 = useRef(null);
    const data3 = useRef(null);
    const data4 = useRef(null);
    const data5 = useRef(null);
    
    let [a,setA] = useState();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
       setA(data.current.value+data3.current.value+data4.current.value+data5.current.value);
        
        console.log(data2.current)
    }
    useEffect(()=>{
     data.current.focus();
    })
    return (<>
    <form onSubmit={handleSubmit}>
<div>
    <br></br>
    <input type="text" ref={data}/>
    <input type="text" ref={data3}/>
    <input type="text" ref={data4}/>
    <input type="text" ref={data5}/>
    <button> Submit </button>
</div>
<br></br>
<div ref={data2}>
    {a}
    <br></br>
   
Good
</div>

    </form>
    
    </>)
};

export default UseRefBasics;