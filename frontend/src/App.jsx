import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Languages from './pages/Languages'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Lesson from './pages/Lesson'
import More from './pages/More'

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/how-it-works" element={<HowItWorks />} />
					<Route path="/languages" element={<Languages />} />
					<Route path="/courses" element={<Courses />} />
					<Route
						path="/courses/:courseId"
						element={<CourseDetail />}
					/>
					<Route
						path="/courses/:courseId/lessons/:lessonId"
						element={<Lesson />}
					/>
					<Route path="/more" element={<More />} />
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
