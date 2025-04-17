import React from 'react';
import MakeHook from './MakeHook';


const HookFrom = () => {

    const [value,setValueOnchange] = MakeHook('')
    const [email,setEmail] = MakeHook('')
    const handleFrom = (e) => {
        e.preventDefault()
        console.log("SUBMIt",value,email)
    }
    return (
        <div className='w-[20%] m-auto'>


            <form className='space-y-3' onSubmit={handleFrom}>
                <input onChange={setValueOnchange} defaultValue={value} type="text" placeholder='Your Name' />
                <br />
                <input defaultValue={email} onChange={setEmail} type="email" placeholder='Your Email' />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default HookFrom;