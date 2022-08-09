import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedbackProp, deleteFeedback}) {
    if(!feedbackProp || feedbackProp.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedbackProp.map((item)=> (
                <FeedbackItem key={item.id} itemProp={item} deleteFunc={deleteFeedback}  />
            ))}
        </div>
    )
}

export default FeedbackList

