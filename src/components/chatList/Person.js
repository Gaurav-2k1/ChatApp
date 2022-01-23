import React from 'react';
import './style.scss'

const Person = ({data}) => {
    return <div className='persontile'>
        <div className='profile'>
            <img src={data.imgURL} alt='profileimg' />
            <div>
                <h1>{data.name}</h1>
                <p>Hi there how are you</p>
            </div>

        </div>
        <h4>{data.time}</h4>
    </div>;
};

export default Person;
