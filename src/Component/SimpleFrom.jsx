import React from 'react';

const SimpleFrom = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form className='space-y-3' onSubmit={(e)=>handleSubmit(e)}>

                <input name='name' placeholder='type your name' className='border-2 border-white' type="text" />
                <br />
                <input className='border-2 border-white' type="text" name='email' placeholder='type your eamil' />
                <br />
                <input className='px-3 mt-3 py-1 bg-white text-black rounded-md' type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default SimpleFrom;