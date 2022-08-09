import React from 'react'

function FeedbackItem({itemProp}) {
    return (
        <div className="card">
            <div className="num-display">{itemProp.rating}</div>
            <div className="text-display"> {itemProp.text} </div>
        </div> 
    )
    }

export default FeedbackItem
