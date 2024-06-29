import React from 'react'
import styled from 'styled-components'

const HowItWorks = () => {
	return (
		<HowItWorksContainer>
			<Section>
				<Title>How AI Enhances Our Language Learning App</Title>
				<Description>
					Our language learning app leverages the power of AI to
					provide a personalized and efficient learning experience.
					From interactive lessons to real-time feedback, AI is at the
					core of our platform, transforming the way users learn new
					languages.
				</Description>
			</Section>
			<Section>
				<Title>AI-Powered Features</Title>
				<FeatureList>
					<FeatureItem>
						<FeatureTitle>Personalized Learning Paths</FeatureTitle>
						<FeatureDescription>
							AI analyzes your learning progress and adjusts the
							difficulty of lessons and exercises to match your
							proficiency level. This ensures you are always
							challenged but never overwhelmed.
						</FeatureDescription>
					</FeatureItem>
					<FeatureItem>
						<FeatureTitle>Real-Time Feedback</FeatureTitle>
						<FeatureDescription>
							Our AI system provides instant feedback on your
							pronunciation, grammar, and vocabulary usage,
							helping you to improve your language skills more
							efficiently.
						</FeatureDescription>
					</FeatureItem>
					<FeatureItem>
						<FeatureTitle>Interactive Conversations</FeatureTitle>
						<FeatureDescription>
							Engage in simulated conversations with AI chatbots
							that mimic real-life interactions. Practice speaking
							and listening skills in a safe and supportive
							environment.
						</FeatureDescription>
					</FeatureItem>
					<FeatureItem>
						<FeatureTitle>Adaptive Review Sessions</FeatureTitle>
						<FeatureDescription>
							AI identifies areas where you need improvement and
							tailors review sessions to focus on these topics,
							reinforcing your learning and ensuring better
							retention.
						</FeatureDescription>
					</FeatureItem>
				</FeatureList>
			</Section>
			<Section>
				<Title>Project Structure</Title>
				<Description>
					This project is built with a React frontend, a Python
					backend using Flask, and is deployed using Vercel. Here's an
					overview of the structure:
				</Description>
				<CodeBlock>
					<pre>
						{`src/
├── assets/          # Static assets like images and icons
├── components/      # Reusable components
│   ├── Header.jsx
│   ├── Layout.jsx
│   └── ...
├── pages/           # Application pages
│   ├── Home.jsx
│   ├── HowItWorks.jsx
│   ├── Courses.jsx
│   └── ...
└── App.js           # Main application component
backend/
├── app.py           # Main application file
├── requirements.txt # Python dependencies
└── ...
`}
					</pre>
				</CodeBlock>
			</Section>
			<Section>
				<Title>Deployment</Title>
				<Description>
					The application is deployed using Vercel, which allows for
					continuous deployment and easy scalability. The frontend and
					backend are both hosted on Vercel.
				</Description>
				<CodeBlock>
					<pre>
						{`Deployment process:
1. Push code to GitHub
2. Vercel detects changes and automatically deploys the application
3. Access the live application at your Vercel domain`}
					</pre>
				</CodeBlock>
			</Section>
		</HowItWorksContainer>
	)
}

const HowItWorksContainer = styled.div`
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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const FeatureItem = styled.li`
  margin-bottom: 20px;
`

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 5px;
`

const FeatureDescription = styled.p`
  font-size: 16px;
`

const CodeBlock = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  overflow-x: auto;
`

export default HowItWorks
