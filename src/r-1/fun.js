import Recat from 'react';
import "./fun.css";

import React, { useState } from 'react'
import "./fun.css"
import Functio from './func'


const Func = () => {

const[data,setData]=useState(false)

const[data2,setData2]=useState(false)


  return (
    <div >


<h1>Styling Using Functional and Class Component</h1>

<br />

<br />
<br />

<br />
<br />

<br />
<br />

<br />

<button className='func' onClick={()=>setData(true)}>To see styling in Functional Component</button>

<button className='clas' >To see styling in Class Component</button>

{data&&<Functio/>}


{/* By default our data is going to be false whenever we hit the button our data is going to be true
on line No:34 whenever we click the button first it will check the data aso of now our data
 is true statement so if the first condition is sarisfied our fuctional component is going to 
 be executed   */}

    </div>
  )
}

export default Func