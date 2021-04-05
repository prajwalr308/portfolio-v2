import React from 'react'

const ExpCard = (props) => {
    const {title,body}=props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default ExpCard
