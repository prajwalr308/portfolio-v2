import React from 'react'
import '../exp/exp.css'

const ExpCard = (props) => {
    const {title,body}=props;
   
    return (
        <div className="expCard">
            <h1 className="heading">{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default ExpCard
