// src/api.js 

import spain from './assets/spainflag.png'
import france from './assets/franceflag.png'
import germany from './assets/germanyflag.png'

export const fetchCourses = async () => {
	// Simulated response; replace with actual API call later
	return [
		{
			id: 1,
            flag: spain,
			title: 'Spanish for Beginners',
			description: 'Learn the basics of Spanish.'
		},
		{
			id: 2,
            flag: france,
			title: 'Advanced French',
			description: 'Improve your French skills.'
		},
		{
			id: 3,
            flag: germany, 
			title: 'German Grammar',
			description: 'Master German grammar.'
		}
	]
}

export const fetchCourseDetail = async (courseId) => {
	// Simulated response; replace with actual API call later
	const courses = {
		1: {
			id: 1,
			title: 'Spanish for Beginners',
			description: 'Learn the basics of Spanish.',
			lessons: ['Introduction', 'Basic Phrases', 'Grammar']
		},
		2: {
			id: 2,
			title: 'Advanced French',
			description: 'Improve your French skills.',
			lessons: ['Introduction', 'Advanced Grammar', 'Conversation']
		},
		3: {
			id: 3,
			title: 'German Grammar',
			description: 'Master German grammar.',
			lessons: ['Introduction', 'Nouns and Articles', 'Verbs']
		}
	}
	return courses[courseId]
}

export const fetchLessonContent = async (courseId, lessonId) => {
	// Simulated response; replace with actual API call later
	const lessonsContent = {
		1: {
			1: 'Welcome to Spanish for Beginners. In this lesson, we will cover the basics of Spanish.',
			2: 'Learn basic Spanish phrases to get started.',
			3: 'Understand the basics of Spanish grammar.'
		},
		2: {
			1: 'Welcome to Advanced French. This lesson introduces advanced grammar concepts.',
			2: 'Deep dive into advanced French grammar.',
			3: 'Practice conversation skills.'
		},
		3: {
			1: "Welcome to German Grammar. Let's start with an introduction.",
			2: 'Learn about German nouns and articles.',
			3: 'Master German verbs and their conjugations.'
		}
	}
	return lessonsContent[courseId][lessonId]
}
