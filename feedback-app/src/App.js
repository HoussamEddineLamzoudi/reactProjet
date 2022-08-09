import Header from "./components/Header"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
// import { useEffect } from "react"


function App() {
    // const [feedback, setFeedback] = useEffect(FeedbackData)
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id ))
    }

    
    return (
        <div>
            <Header />
            <div className="container">
                <FeedbackList feedbackProp={feedback} deleteFeedback={deleteFeedback} />
            </div>
        </div>
    )
}

export default App