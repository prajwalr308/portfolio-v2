import React from 'react'
import ExpCard from '../expCard/ExpCard'

import './exp.css'

const Exp = () => {
    const data={
        'body1':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ',
        'body2':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'
    }
    return (
        <div className="exp">
            <ExpCard title="webknot" body={data.body1} />
            <ExpCard title="lfs" body={data.body2} />
            <ExpCard title="lfs" body={data.body2} />
        </div>
    )
}

export default Exp
