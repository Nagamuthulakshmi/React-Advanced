import React,{useState} from 'react';

const ControlInput= ()=>{
const [firstname,setFirstName] = useState('');
const [email,setEmail] = useState('');
const [people, setPeople] = useState([]);
const [error,setError] = useState('');
const [age,setAge] = useState('');

const handleClick =(e)=>{
    //Browser is submiting form, we want the submit to be handled by react
    e.preventDefault();//Restrict browser to submit
    if(firstname && email && age){
        const person = {firstname, email,age};
        
        setPeople((p)=>{
            return [...p, person];
        });
        console.log(people);
        setFirstName('');
        setEmail('');
        setAge('')
    }else{
setError('Please fill all the fields');
    }
}

    return <>
    <article>
    <form onSubmit={handleClick}>
    <div>
        <p style={{color:'red'}}>{error}</p>
    <label>Name</label>
    <input type="text" id="firstname" name="fname" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}}/>
    </div>
    <div>
    <label>Email</label>
    <input type="email" id="email" name="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div>
    <label>Age</label>
    <input type="text" id="age" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
    </div>
    <button > SUBMIT </button>
    </form>
   <h1>{people.map((p)=>{
    //p={firstname:'a', email:'a@g.c}
    const {firstname,email,age,id} = p;
    return (
        <div key ={id}>
            <i>{firstname}</i> &nbsp;
            <i>{email}</i>&nbsp;
            <i> {age}</i>
        </div>
    )
   })}</h1> 
    </article>
    </>
    }
export default ControlInput;