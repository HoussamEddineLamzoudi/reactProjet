import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedbackProp}) {
    if(!feedbackProp || feedbackProp.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedbackProp.map((item)=> (
                <FeedbackItem key={item.id} itemProp={item} />
            ))}
        </div>
    )
}

export default FeedbackList

