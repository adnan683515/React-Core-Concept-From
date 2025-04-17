import React from 'react';

const FromAction = () => {
    const handleFromAction=(fromData)=>{
        console.log(fromData.get('name'))
    }
    return (
        <div>
            <form action={handleFromAction}>

            <input className= 'border-white border-2' name='name' type="text" placeholder='type your name'  />
            <br />

            <input className='border-2 border-white' name='email' type="text" placeholder='your email' />

            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FromAction;