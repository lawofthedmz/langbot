import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { fetchLessonContent } from '../api'
import PersonalizedLesson from '../components/PersonalizedLesson'
import RealTimeFeedback from '../components/RealTimeFeedback'
import InteractiveConversation from '../components/InteractiveConversation'
import AdaptiveReview from '../components/AdaptiveReview'

const Lesson = () => {
	const { courseId, lessonId } = useParams()
	const [lessonContent, setLessonContent] = useState('')

	useEffect(() => {
		const getLessonContent = async () => {
			const content = await fetchLessonContent(courseId, lessonId)
			setLessonContent(content)
		}

		getLessonContent()
	}, [courseId, lessonId])

	if (!lessonContent) {
		return <div>Loading...</div>
	}

	return (
		<LessonContainer>
			<PersonalizedLesson
				lesson={{ title: `Lesson ${lessonId}`, content: lessonContent }}
			/>
			<RealTimeFeedback />
			<InteractiveConversation />
			<AdaptiveReview />
		</LessonContainer>
	)
}

const LessonContainer = styled.div`
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
`

export default Lesson
