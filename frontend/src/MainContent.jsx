import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainContent = () => {
	return (
		<Description>
			<Title>Learn to speak a language with confidence</Title>
			<FeatureList>
				<FeatureItem>Interactive lessons and exercises</FeatureItem>
				<FeatureItem>Real-time conversation practice</FeatureItem>
				<FeatureItem>Personalized feedback</FeatureItem>
			</FeatureList>
			<LanguageSelector>
				<select>
					<option>German</option>
					<option>Spanish</option>
					<option>French</option>
				</select>
				<ButtonContainer>
					<GetStartedButton to="/courses">
						Get started
					</GetStartedButton>
				</ButtonContainer>
			</LanguageSelector>
		</Description>
	)
}

const Description = styled.div`
  text-align: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
`

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`

const FeatureItem = styled.li`
  margin-bottom: 10px;
`

const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const GetStartedButton = styled(Link)`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #3a78c2;
  }
`

export default MainContent
