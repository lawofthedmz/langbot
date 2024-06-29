import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fetchCourses } from '../api' // Simulated API call

const Courses = () => {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		const getCourses = async () => {
			const courses = await fetchCourses()
			setCourses(courses)
		}

		getCourses()
	}, [])

	return (
		<MainContainer>
			<Title>Courses</Title>
			<Description>Details about the available courses.</Description>
			<CourseList>
				{courses.map((course) => (
					<CourseItem key={course.id}>
						<StyledLink to={`/courses/${course.id}`}>
							<FlagContainer>
								<Flag
									src={course.flag}
									alt={`${course.title} flag`}
								/>
							</FlagContainer>
							<CourseContent>
								<h2>{course.title}</h2>
								<p>{course.description}</p>
							</CourseContent>
						</StyledLink>
					</CourseItem>
				))}
			</CourseList>
		</MainContainer>
	)
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`

const Description = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 800px;
`

const CourseItem = styled.div`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
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

const FlagContainer = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.5);
`

const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CourseContent = styled.div`
  h2 {
    margin: 0 0 10px;
    font-size: 24px;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
`

export default Courses
