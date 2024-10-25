import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Abdul Mueed Shahbaz',
		phoneNumber: '+923234942960',
		// location: 'Berlin, Germany',
		website: 'abdulmueed.dev',
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
			skill: ['Java', 'Python', 'JavaScript']
		},
		{
			id: uuidv4(),
			name: 'Technologies',
			skill: [
				'Spring Boot',
				'Spring Security',
				'Hibernate',
				'Apache Ignite',
				'Microservices',
				'Kafka',
				'PostgreSQL',
				'MySQL',
				'JUnit',
				'Keycloak',
				'Maven',
				'Docker',
				'Git',
				'Vue.js',
				'React.js',
				'Django'
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
			designation: 'Senior Software Engineer',
			company: 'Redmath',
			companyLink: 'redmath.com',
			location: 'Lahore, Pakistan | On-Site',
			duration: 'Aug 2022 - Present',
			tasks: [
				`Led the development of backend services using <strong>Java</strong> and <strong>Spring Boot</strong>, creating reusable, scalable microservices that enhanced system reliability and optimized resource usage.`,
				`Implemented design patterns and best practices to develop robust, reusable Java-based APIs, streamlining data processing and reducing response times by 30%.`,
				`Architected and managed RESTful APIs using Spring Boot, integrating with databases and external services to provide seamless end-user experiences.`,
				`Collaborated with cross-functional teams to define requirements and refine project deliverables, ensuring alignment with business objectives and technical feasibility.`,
				`Utilized Docker to containerize and orchestrate Java services, supporting scalable deployment and enhancing application stability.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer',
			company: 'Ez Bridge',
			companyLink: 'ezbridge.io',
			location: 'San Jose, USA | Remote',
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
			location: 'Lahore, Pakistan | Hybrid',
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
			name: `<a href="https://github.com/abdul-mueed-shz/ServiceSphere">ServiceSphere - E-Commerce Application</a>`,
			desc: `Developed a comprehensive e-commerce platform using <strong>Spring Boot</strong> and a <strong>microservices architecture</strong>. Features include <strong>Eureka</strong> for service discovery, <strong>Config Server</strong> for externalized configuration, and <strong>Spring Cloud Gateway</strong> for API routing. Integrated <strong>Keycloak</strong> for secure authentication, and utilized <strong>Docker</strong> to manage Kafka, Zookeeper, and Postgres services.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdul-mueed-shz/Enrollix">Enrollix - Student Management System</a>`,
			desc: `Built <strong>Enrollix</strong>, a robust student management system leveraging <strong>Spring Boot</strong> and <strong>Apache Ignite</strong> for scalable data handling. The platform supports <strong>student registration</strong>, <strong>course registration</strong>, and <strong>course assignments</strong>, ensuring secure and efficient management through modular APIs.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdul-mueed-shz/spring-blog">AuthoBlogs - Authenticated Blogs Application</a>`,
			desc: `Developed <strong>AuthoBlogs</strong>, a secure blog management system using <strong>Spring Boot</strong>, <strong>Spring Security</strong>, and <strong>MySQL</strong>. The platform features robust <strong>user authentication</strong>, <strong>CRUD operations</strong>, and ensures secure data management through strict access control policies.`
		}
	],

	accomplishments: [
		`Demonstrated Java proficiency through <a href="https://www.coursera.org/account/accomplishments/verify/FX2DYFPCRJPS">Introduction to Java</a> certification, showcasing foundational skills and a commitment to Java development.`,
		`Mastered React intricacies with <a href="https://coursera.org/share/96a67932b7b57cd7131287028cb5aae1">Meta-React Advanced</a> certification.`,
		`Acquired foundational knowledge of React with <a href="https://www.coursera.org/account/accomplishments/verify/FJ2S3UCQ65RN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Meta-React Basics</a> certification.`,
		`Established a notable presence on <a href="https://github.com/Abdul-Mueed-Shahbaz">GitHub</a> with diverse JavaScript technology contributions, collectively amassing over <strong>94</strong> stars for my projects.`
	]
};

export default userData;
