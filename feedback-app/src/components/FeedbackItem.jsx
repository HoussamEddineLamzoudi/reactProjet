import React from 'react'

function FeedbackItem({itemProp, deleteFunc}) {
    return (
        <div className="card">
            <div onClick={() => deleteFunc(itemProp.id)} className="num-display">{itemProp.rating}</div>
            <div className="text-display"> {itemProp.text} </div>
        </div> 
    )
    }

export default FeedbackItem
