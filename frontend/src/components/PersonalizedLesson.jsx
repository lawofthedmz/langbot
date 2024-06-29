import React from 'react'
import styled from 'styled-components'

const PersonalizedLesson = ({ lesson }) => {
	return (
		<LessonContainer>
			<LessonTitle>{lesson.title}</LessonTitle>
			<LessonContent>{lesson.content}</LessonContent>
		</LessonContainer>
	)
}

const LessonContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  margin-bottom: 20px;
`

const LessonTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

const LessonContent = styled.p`
  font-size: 16px;
`

export default PersonalizedLesson
