import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Abdul Mueed Shahbaz',
		phoneNumber: '+923234942960',
		// location: 'Berlin, Germany',
		website: 'abdulsdevfolio.vercel.app/#/',
		email: 'abdulmueedshahbaz@gmail.com',
		linkedIn: 'linkedin.com/in/-abdulmueed',
		github: 'github.com/abdul-mueed-shz'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'Information Technology University',
			location: 'Lahore, Pakistan'
			// duration: 'Oct 2018 - May 2022'
		}
	],
	skills: [
		{
			id: uuidv4(),
			name: 'Programming languages',
			skill: ['JavaScript', 'Python']
		},
		{
			id: uuidv4(),
			name: 'Technologies',
			skill: [
				'Git',
				'HTML',
				'CSS',
				'React',
				'Vue.js',
				'Django',
				'Redux Toolkit',
				'Vuex',
				'Pinia',
				'Tailwind CSS',
				'Quasar',
				'MySQL',
				'Web Sockets',
				'REST APIs'
			]
		},
		{
			id: uuidv4(),
			name: 'Soft Skills',
			skill: ['Ownership', 'Rigor', 'Team work', 'Communication']
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer II',
			company: 'Redmath',
			companyLink: 'redmath.com',
			location: 'Amsterdam, Netherlands',
			duration: 'Aug 2022 - Present',
			tasks: [
				`Designed and developed headless reusable components in React JS ,and Vue JS, enhancing code maintainability and flexibility through the implementation of <strong>Design patterns.</strong>`,
				`Elevated code quality and maintainability by refactoring component code, utilizing composables, custom hooks, and directives.`,
				`Engineered the Paper Generation Feature using Vue.js, Vuex, and Django, enriching Redmath's Ed-Tech product arsenal with enhanced capabilities.`,
				`Collaborated with cross-functional teams, translating stakeholder requirements into actionable development plans for successful project outcomes.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Full Stack Software Engineer (React/Vue/Django)',
			company: 'Ez Bridge',
			companyLink: 'ezbridge.io',
			location: 'USA | Remote',
			duration: 'June 2021 - Aug 2022',
			tasks: [
				`Implemented <strong>Refresh Token Rotation based Authentication</strong> for enhanced API security in Django Rest Framework, demonstrating commitment to data confidentiality and reducing the risk of data breaches.`,
				`Integrated APIs from Google, Facebook, and Instagram into the platform to enhance influencer <strong>Profile Ranking Algorithms</strong>, thereby providing brands with <strong>Advanced Analytics</strong> on influencer reach and engagement.`,
				`Designed reusable UI components in Vue.js with the <strong>Decorator Pattern</strong>, improving code maintainability and development efficiency across multiple projects.`,
				`Enhanced the application by implementing robust Database-based, Text-based, and Request <strong>Logging</strong> mechanisms to mitigate developmental errors and streamline production debugging processes.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Fellow Game Developer',
			company: 'Mindstorm Studios',
			companyLink: 'mindstormstudios.com',
			location: 'Pakistan | Hybrid',
			duration: 'July 2021 - Sep 2021',
			tasks: [
				`Innovated game mechanics with a dynamic power-up system, introducing 5 distinct abilities like <strong>Speed Boosts</strong>, and <strong>Shields</strong>, elevating gameplay depth and engagement.`,
				`Implemented comprehensive solutions for <strong>20</strong> environmental challenges and rectified <strong>10</strong> UI bugs, refining user interaction and level design in the runner game.`,
				`Enhanced the game's mechanics by refining running, jumping, and animation systems, resulting in a seamless gaming experience and heightened player satisfaction.`
			]
		}
	],

	projects: [
		{
			id: uuidv4(),
			name: `<a href="https://github.com/Abdul-Mueed-Shahbaz/Auth-Microservice">Authentication Microservice</a>`,
			desc: `Implemented <strong>Refresh Token Rotation Authentication System</strong> with <strong>Hacker Detection</strong> for improved security and lower risk of token leakage using <strong>Django Rest Framework, MySQL, and Django Simple JWT.</strong> Facilitated <strong>Coupled Authentication</strong> with other applications, enabling secure integration by
			utilizing redirect URIs and URL parameters.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/Abdul-Mueed-Shahbaz/Secure_Channels-Hub">Authenticated Websockets Server</a>`,
			desc: `Developed a robust <strong>real-time communication system</strong> using <strong>Django Channels</strong> and <strong>Vue.js</strong>. Features include secure <strong>JWT authentication</strong>, <strong>RESTful user authentication APIs</strong>, <strong>WebSocket integration</strong>, proactive <strong>heartbeat functionality</strong>, and <strong>Redis</strong> for caching and session management.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/Abdul-Mueed-Shahbaz/GlowBeyond">GlowBeyond</a>`,
			desc: `Developed a <strong>robust</strong> e-commerce platform, <strong>GlowBeyond</strong>, with <strong>Vue.js</strong> frontend and <strong>Django Rest Framework</strong> backend, integrating with <strong>auth-application</strong> for <strong>secure login</strong> and <strong>JWT token authentication</strong>. Features include showcasing <strong>latest products</strong>, categorization, detailed product pages with <strong>add-to-cart functionality</strong>, <strong>cart management</strong>, and <strong>notifications</strong>.`
		}
	],
	accomplishments: [
		`Mastered React intricacies with <a href="https://coursera.org/share/96a67932b7b57cd7131287028cb5aae1">Meta-React Advanced</a> certification.`,
		`Acquired foundational knowledge of React with <a href="https://www.coursera.org/account/accomplishments/verify/FJ2S3UCQ65RN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Meta-React Basics</a> certification.`,
		`Demonstrated Python proficiency through <a href="https://www.credly.com/badges/99e03eb7-cbb0-4b83-bad8-25d880517b10?source=linked_in_profile">MTA: Introduction to Programming Using Python</a> certification, leveraging diverse resources.`,
		`Established a notable presence on <a href="https://github.com/Abdul-Mueed-Shahbaz">GitHub</a> with diverse JavaScript technology contributions, collectively amassing over <strong>94</strong> stars for my projects.`
	]
};

export default userData;
