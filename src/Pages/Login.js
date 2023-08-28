import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser})=>{
    const [fname,setFname] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!fname||!email){
            return;
        }
        setUser({fname:fname,email:email});
        navigate('/dashboard');
    }
    return (<>
    <section>
        <form onSubmit={handleSubmit}>
<input type="text" name="fname" value={fname} onChange = {(e)=>{setFname(e.target.value)}} />
<input type="text" name="email" value={email} onChange = {(e)=>{setEmail(e.target.value)}} />
<button> Login</button>
        </form>
    </section>
    </>)
}
export default Login;