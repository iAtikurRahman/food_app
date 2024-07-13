import { useState } from "react";

const RestaurantSignUp = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [modile,setMobile] = useState('');
    async function handleSignUp () {
        console.log(email,password,repassword,name,address,modile)
    }
    return (
        <>
        <h2> Sing up page </h2>
        <div className="input-wrapper">
            <input type="email" placeholder="Inter your email" value={email} 
            className="input-field" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
            <input type="password" placeholder="Inter your pass" value={password} 
            className="input-field" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="input-wrapper">
            <input type="password" placeholder="confirm your pass" value={repassword} 
            className="input-field" onChange={(e)=>setRepassword(e.target.value)} />
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder="restaurant name" value={name} 
            className="input-field" onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder="full address" value={address} 
            className="input-field" onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder="mobile number" value={modile} 
            className="input-field" onChange={(e)=>setMobile(e.target.value)} />
        </div>
        <div>
            <button className="button" onClick={handleSignUp}>Signup</button>
        </div>
        </>
    )
}

export default RestaurantSignUp;