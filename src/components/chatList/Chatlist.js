import React from 'react';
import Person from './Person';
import './style.scss'
import Persondata from './Persondata';

const Chatlist = (setselected) => {



  return <div className='Chatlist'>

    {
      Persondata.map((data, i) => (
        <div value={i} onClick={(e) => setselected(e.target.value)}>

          <Person key={i}
            data={data}

          />
          <hr />

        </div>


      ))
    }



  </div>;
};

export default Chatlist;
