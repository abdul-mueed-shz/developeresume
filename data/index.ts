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
				`Led the development of backend services using <strong>Java</strong> and <strong>Spring Boot</strong>, creating reusable, scalable microservices and integrating <strong>Kafka</strong> queues for asynchronous communication between microservices, handling tasks such as notifications, data synchronization, and processing API requests across different services.`,
				`Implemented design patterns and best practices to build robust, reusable Java-based APIs, streamlining data processing and reducing response times by <strong>30%</strong>.`,
				`Architected and managed RESTful APIs with Spring Boot, integrating databases, Kafka, and external services for seamless user experiences and reliable data flow across the microservice architecture.`,
				`Collaborated with cross-functional teams to define requirements and refine project deliverables, ensuring alignment with business objectives and technical feasibility.`,
				`Utilized Docker to containerize and orchestrate Java services, supporting scalable deployment and improving application stability.`
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
				`Implemented <strong>Refresh Token Rotation Authentication</strong> in Django Rest Framework, improving API security and reducing data breach risks.`,
				`Integrated APIs from Google, Facebook, and Instagram to enhance influencer <strong>Profile Ranking Algorithms</strong> and provide <strong>Advanced Analytics</strong>.`,
				`Developed reusable Vue.js UI components using the <strong>Decorator Pattern</strong>, improving maintainability across projects.`,
				`Enhanced the platform with Database, Text, and Request <strong>Logging</strong> mechanisms, streamlining debugging and error mitigation.`
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
				`Developed a dynamic power-up system with abilities like <strong>Speed Boosts</strong> and <strong>Shields</strong>, enhancing gameplay depth.`,
				`Resolved <strong>20</strong> environmental challenges and fixed <strong>10</strong> UI bugs, improving user interaction and level design.`,
				`Refined running, jumping, and animation mechanics for a smoother gaming experience.`
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
		`Mastered React intricacies and fundamentals through the <a href="https://coursera.org/share/96a67932b7b57cd7131287028cb5aae1">Meta-React Advanced</a> and <a href="https://www.coursera.org/account/accomplishments/verify/FJ2S3UCQ65RN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Meta-React Basics</a> certifications.`,
		`Established a notable presence on <a href="https://github.com/Abdul-Mueed-Shahbaz">GitHub</a> with diverse JavaScript technology contributions, collectively amassing over <strong>94</strong> stars for my projects.`
	]
};

export default userData;
