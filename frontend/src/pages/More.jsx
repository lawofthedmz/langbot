import React from 'react'
import styled from 'styled-components'
import github from '../assets/github.png' // Update with the correct path
import linkedin from '../assets/linkedin.png' // Update with the correct path
import devpost from '../assets/devpost.png' // Update with the correct path

const More = () => {
	return (
		<MoreContainer>
			<Section>
				<Title>Connect with Me</Title>
				<Description>
					Follow me on my social media accounts to stay updated with
					my latest activities and projects.
				</Description>
				<SocialLinks>
					<SocialLink
						href="https://github.com/lawofthedmz"
						target="_blank"
					>
						<Icon src={github} alt="GitHub" /> GitHub
					</SocialLink>
					<SocialLink
						href="https://www.linkedin.com/in/murphy-glawe"
						target="_blank"
					>
						<Icon src={linkedin} alt="LinkedIn" /> LinkedIn
					</SocialLink>
					<SocialLink
						href="https://devpost.com/murphg04"
						target="_blank"
					>
						<Icon src={devpost} alt="Devpost" /> Devpost
					</SocialLink>
				</SocialLinks>
			</Section>
			<Section>
				<Title>Contact Me</Title>
				<Description>
					If you have any questions or just want to say hi, feel free
					to reach out!
				</Description>
			</Section>
			<Section>
				<Title>Contact Me</Title>
				<Description>
					If you have any questions or just want to say hi, feel free
					to reach out!
				</Description>
				<MailLink href="mailto:murphg04@gmail.com">
					Send me an email
				</MailLink>
			</Section>
		</MoreContainer>
	)
}

const MoreContainer = styled.div`
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  color: white;
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

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;

  &:hover {
    color: blue;
  }
  
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`

const MailLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #3a78c2;
  }
`

export default More
