import React,{useState} from 'react'
import './SkillAndExp.css'
import Skill from './skills/Skill'

const SkillAndExp = () => {
   const [state, setstate] = useState({
       'skillSelected':false,
       'expSelected':false,
   })
    const skillHandler=()=>{
        setstate({
            'skillSelected':true,
       'expSelected':false,
        })
    }
    const expHandler=()=>{
        setstate({
            'skillSelected':false,
       'expSelected':true,
        })
    }
    return (
        <div className="skill">
            <div className="skill__buttons">
            <button className={state.skillSelected ? "skill__buttons__skills--selected": "skill__buttons__skills"} onClick={skillHandler} >skills</button>
            
            <button className={state.expSelected ? "skill__buttons__exp--selected":"skill__buttons__exp"} onClick={expHandler}>Experience</button>
            </div>
            <Skill />
            <div></div>
            
        </div>
    )
}

export default SkillAndExp
