import React from 'react'
import { Download } from "lucide-react";

const card = (props) => {
  console.log(props.company)
  return (
    <div className='card'>
  <div>
  <div className="top">
    <img src={props.logo}/>
    <button>save <Download size= {12}/></button>
  </div>
  <div className="center">
<h3>{props.company}<span>{props.datePosted}</span></h3>
<h2>Senior UI/UX desinger</h2>
<div className="tag">
  <h4>{props.time}</h4>
  <h4>{props.level}</h4>
</div>
  </div>
  </div>
  <div className="bottom">
  <div>
    <div>
      <h3>{props.pay}</h3>
      <p>{props.loc}</p>
    </div>
    <button>Apply now</button>
  </div>
  </div>
</div>
  )
}

export default card
