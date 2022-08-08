// import React from 'react'
import {useState} from 'react'

function FeedbackItem() {
    const [R, setR] = useState(7)
    const [T, setT] = useState('Houssam-Eddine Lamzoudi')

    return (
        <div className="card">
            <div className="num-display">{R}</div>
            <div className="text-display"> {T} </div>
        </div> 
    )
    }

export default FeedbackItem
