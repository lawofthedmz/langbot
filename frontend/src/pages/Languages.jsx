import React from 'react'
import styled from 'styled-components'
import germanFlag from '../assets/germanyflag.png' // Update with the correct path
import spanishFlag from '../assets/spainflag.png' // Update with the correct path
import frenchFlag from '../assets/franceflag.png' // Update with the correct path

const Languages = () => {
	return (
		<LanguagesContainer>
			<Section>
				<Title>Supported Languages</Title>
				<Description>
					Our app supports the following languages. Learn and master
					any of these languages with our interactive lessons and
					exercises.
				</Description>
				<LanguageList>
					<LanguageItem>
						<Flag src={germanFlag} alt="German Flag" />
						<LanguageDetails>
							<LanguageTitle>German</LanguageTitle>
							<LanguageDescription>
								Learn German from scratch or improve your skills
								with our comprehensive lessons. Whether you are
								a beginner or an advanced learner, we have
								something for everyone.
							</LanguageDescription>
						</LanguageDetails>
					</LanguageItem>
					<LanguageItem>
						<Flag src={spanishFlag} alt="Spanish Flag" />
						<LanguageDetails>
							<LanguageTitle>Spanish</LanguageTitle>
							<LanguageDescription>
								Spanish is one of the most spoken languages in
								the world. Start learning today and explore the
								rich culture and history of Spanish-speaking
								countries.
							</LanguageDescription>
						</LanguageDetails>
					</LanguageItem>
					<LanguageItem>
						<Flag src={frenchFlag} alt="French Flag" />
						<LanguageDetails>
							<LanguageTitle>French</LanguageTitle>
							<LanguageDescription>
								French is known as the language of love. Enhance
								your language skills and immerse yourself in the
								beautiful French culture with our tailored
								lessons.
							</LanguageDescription>
						</LanguageDetails>
					</LanguageItem>
				</LanguageList>
			</Section>
		</LanguagesContainer>
	)
}

const LanguagesContainer = styled.div`
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
`

const Section = styled.div`
  margin-bottom: 40px;
`

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`

const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

const Flag = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
`

const LanguageDetails = styled.div`
  flex: 1;
`

const LanguageTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`

const LanguageDescription = styled.p`
  font-size: 16px;
  margin: 0;
`

export default Languages
