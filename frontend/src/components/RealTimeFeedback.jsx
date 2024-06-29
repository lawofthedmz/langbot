import React, { useState } from 'react'
import styled from 'styled-components'

const RealTimeFeedback = () => {
	const [input, setInput] = useState('')
	const [feedback, setFeedback] = useState('')

	const handleChange = (e) => {
		setInput(e.target.value)
		// Simulate real-time feedback
		setFeedback('Great pronunciation!')
	}

	return (
		<FeedbackContainer>
			<Input
				type="text"
				value={input}
				onChange={handleChange}
				placeholder="Say something..."
			/>
			<Feedback>{feedback}</Feedback>
		</FeedbackContainer>
	)
}

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`

const Feedback = styled.p`
  font-size: 16px;
  color: #4a90e2;
`

export default RealTimeFeedback
