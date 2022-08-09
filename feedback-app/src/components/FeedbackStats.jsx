import React from 'react'

function FeedbackStats({feedbackProp}) {
    let average = feedbackProp.reduce((acc, cur) => {
        return acc +cur.rating
    }, 0) / feedbackProp.length
    // average.toFixed(1)
    return (
        <div className='feedback-stats'>
            <h4>{feedbackProp.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats

