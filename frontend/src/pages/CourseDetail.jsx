import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { fetchCourseDetail } from '../api'

const CourseDetail = () => {
	const { courseId } = useParams()
	const navigate = useNavigate()
	const [course, setCourse] = useState(null)

	useEffect(() => {
		const getCourseDetail = async () => {
			const course = await fetchCourseDetail(courseId)
			setCourse(course)
		}

		getCourseDetail()
	}, [courseId])

	if (!course) {
		return <div>Loading...</div>
	}

	const handleLessonClick = (lessonId) => {
		navigate(`/courses/${course.id}/lessons/${lessonId}`)
	}

	return (
		<CourseDetailContainer>
			<h1>{course.title}</h1>
			<p>{course.description}</p>
			<h2>Lessons</h2>
			<LessonList>
				{course.lessons.map((lesson, index) => (
					<LessonItem
						key={index}
						onClick={() => handleLessonClick(index + 1)}
					>
						{lesson}
					</LessonItem>
				))}
			</LessonList>
		</CourseDetailContainer>
	)
}

const CourseDetailContainer = styled.div`
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;

`

const LessonList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`

const LessonItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

export default CourseDetail
