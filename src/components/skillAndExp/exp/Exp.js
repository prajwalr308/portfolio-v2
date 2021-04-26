import React from 'react'
import ExpCard from '../expCard/ExpCard'

import './exp.css'

const Exp = () => {
    const data={
        body1:'Tech stack was MERN stack.Worked on API integration,Forms,Audio recorder and player in one of the project related law firm.also worked school database website which stored all vehicles enter to the school here worked on displaying the list based on authorizeed and unauthorized vechiles',
        body2:'Tech stack was React and Firebase.startup company.functionality worked on company was restuarant menu QR scanner.displaying menu using on QR code',
        body3:'Tech stack MERN stack.startup company currently closed built the whole website.It was an eccomerce website that allowed you to order fishes online'
    }
    return (
        <div className="exp">
            <ExpCard title="webknot" body={data.body1} />
            <ExpCard title="origano" body={data.body2} />
            <ExpCard title="fishokart" body={data.body3} />
        </div>
    )
}

export default Exp
