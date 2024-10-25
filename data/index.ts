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
			location: 'Lahore, Pakistan',
			duration: 'Aug 2022 - Present',
			tasks: [
				`Designed and developed headless reusable components in <strong>Vue JS</strong> and <strong>React JS</strong>, enhancing code maintainability and flexibility through the implementation of <strong>Design patterns</strong>.`,
				`Elevated code quality and maintainability by refactoring component code, utilizing composables, custom hooks, and directives.`,
				`Handled microservice architecture in <strong>Spring Boot</strong> and <strong>Java</strong>, ensuring robustness and scalability of backend services.`,
				`Collaborated with cross-functional teams, translating stakeholder requirements into actionable development plans for successful project outcomes.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Full Stack Software Engineer (Vue/Django)',
			company: 'Ez Bridge',
			companyLink: 'ezbridge.io',
			location: 'USA | Remote',
			duration: 'June 2021 - Aug 2022',
			tasks: [
				`Implemented <strong>Refresh Token Rotation based Authentication</strong> for enhanced API security in <strong>Django Rest Framework</strong>, demonstrating commitment to data confidentiality and reducing the risk of data breaches.`,
				`Integrated APIs from Google, Facebook, and Instagram into the platform to enhance influencer <strong>Profile Ranking Algorithms</strong>, providing brands with <strong>Advanced Analytics</strong> on influencer reach and engagement.`,
				`Designed reusable UI components in <strong>Vue.js</strong> with the <strong>Decorator Pattern</strong>, improving code maintainability and development efficiency across multiple projects.`,
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
				`Innovated game mechanics with a dynamic power-up system, introducing 5 distinct abilities like <strong>Speed Boosts</strong> and <strong>Shields</strong>, elevating gameplay depth and engagement.`,
				`Implemented comprehensive solutions for <strong>20</strong> environmental challenges and rectified <strong>10</strong> UI bugs, refining user interaction and level design in the runner game.`,
				`Enhanced the game's mechanics by refining running, jumping, and animation systems, resulting in a seamless gaming experience and heightened player satisfaction.`
			]
		}
	],

	projects: [
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdul-mueed-shz/SecureFlex">SecureFlex</a>`,
			desc: `Implemented <strong>Refresh Token Rotation Authentication System</strong> with <strong>Hacker Detection</strong> for enhanced security and reduced risk of token leakage. Built using <strong>Django Rest Framework</strong>, <strong>MySQL</strong>, and <strong>Django Simple JWT</strong>. Enabled secure integration with other applications through <strong>Coupled Authentication</strong>, utilizing redirect URIs and URL parameters.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdul-mueed-shz/AuthoBlogs">AuthoBlogs</a>`,
			desc: `Leveraged <strong>Spring Boot</strong>, <strong>Spring Security</strong>, and <strong>MySQL</strong> for secure blog management. Features include <strong>user authentication</strong>, <strong>CRUD operations</strong>, and security-driven architecture with <strong>Spring Security</strong>. This solution ensures a seamless and secure blogging experience.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/Abdul-Mueed-Shahbaz/GlowBeyond">GlowBeyond</a>`,
			desc: `Developed a robust e-commerce platform, <strong>GlowBeyond</strong>, using a <strong>Vue.js</strong> frontend and <strong>Django Rest Framework</strong> backend. Integrated with an <strong>auth-application</strong> for secure login and <strong>JWT token authentication</strong>. Key features include product showcasing, categorization, detailed product pages with <strong>add-to-cart functionality</strong>, cart management, and notifications.`
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
