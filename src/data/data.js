export const about = {
    name: "Vasudev Agrawal",
    role: "B.Tech(AI&ML)",
    about: "Computer Science (AI & ML) graduate and aspiring Software Developer with hands-on experience designing REST APIs and full-stack applications using Python, FastAPI, Flask, and AWS. Strong foundation in Object-Oriented Design, SOLID principles, Data Structures, and clean, iterative coding practices. A collaborative team player who enjoys pairing, code reviews, and tackling ambiguous problems from multiple angles to deliver meaningful solutions.",
    email: "Mailvasudevagrawal@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Minimal, clean Next.js portfolio template for developers seeking a simple, professional online presence without extra complexity.",
    keywords: "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

export const skills = [
    { name: "Html", alt: "html logo", icon: "/html.svg" },
    { name: "Css", alt: "css logo", icon: "/css.svg" },
    { name: "Js", alt: "js logo", icon: "/js.svg" },
    { name: "Python", alt: "Python logo", icon: "/python.svg" },
    { name: "React Js", alt: "react logo", icon: "/react.svg" },
    { name: "Next Js", alt: "nextjs logo", icon: "/nextjs.svg" },
    { name: "java", alt: "java logo", icon: "/java.svg" },
];

export const socials = {
    github: "https://github.com/VasudevAgrawal",
    twitter: "",
    instagram: "https://www.instagram.com/_.iam.vasuuu?igsh=MTM3aW03a3BsemhnaA==",
    facebook: "https://www.instagram.com/_.iam.vasuuu?igsh=MTM3aW03a3BsemhnaA==",
};

export const projects = {
    pinProjects: [
        {
            title: "Fashion Recommendation System",
            description:
                " Developed an image-based clothing recommender using pre-trained ResNet50 for feature extraction and Nearest Neighbors algorithm for matching visually similar fashion items Implemented both collaborative and content-based filtering techniques to enhance recommendation accuracy Built an interactive web interface using Streamlit for intuitive user experience and result visualization ",
            tags: ["Python","Deep Learning","Streamlit"],
            link: "https://github.com/VasudevAgrawal/Content-Based-Image-Retrieval",
        },
        {
            title: "Interview Assessment Platform",
            description:
                "Interview Assessment Platform is a backend application built with FastAPI that streamlines the technical hiring process by managing coding assessments, candidate submissions, and interviewer feedback. The platform features secure authentication, RESTful APIs, and a modular architecture based on Object-Oriented Design principles for scalability and maintainability.",
            tags: ["FastAPI","RESTful API", "OOPS"],
            link: "https://github.com/VasudevAgrawal/interview-assessment-platform",
        },
        {
            title: " Machine Learning Pipeline for Spam Email Detection Machine Learning Pipeline for Spam Email Detection",
            description:
                "Built an ML-based spam classifier using NLP techniques (tokenization, stopword removal, TF-IDF) and compared Logistic Regression, Naive Bayes, Decision Tree, and Random Forest models, with a Streamlit interface for real-time predictions.",
            tags: ["Python", "Streamlit"],
            link: "",
        },
        {
            title: " Code Review & Collaboration Platform",
            description:
                "Built a platform for code reviews, issue tracking, and team discussions using FastAPI and RESTful APIs, with authentication and role-based access control for secure, maintainable backend services.",
            tags: ["Python", "FastAPI","RESTful APIs."],
            link: "https://github.com/VasudevAgrawal/code-review-collaboration-platform",
        },
    ],
    otherProjects: [
        {
            title: "Scalable Web Application Deployment on AWS",
            description:
                "Deployed a scalable web application on AWS using multiple EC2 instances and Elastic Load Balancer for traffic distribution and high availability. ",
            tags: ["AWS EC2", "Elastic Load Balancer", "Docker", "CI/CD", "Linux "],
            link: "",
        },
    ],
};

export const experience = [
    {
        title: "Software Developer Intern at Technotribes",
        description:
            "Completed multiple projects using AI/ML with strong problem-solving and implementation skills.Demonstrated solid technical abilities and high-quality documentation throughout all tasks.Shown commendable dedication, consistency, and responsibility in every assigned role.Contributed effectively as a valuable member of the team.Wishing continued success in all future endeavours.Worked on building and maintaining responsive web applications using React.js and Next.js, improving UI performance and user experience.",
        date: "03/03/2025",
    },
];

export const blogs = [
    {
        title: "How I Built My First End-to-End Machine Learning Project",
        date: "30/11/2025",
        link: "https://medium.com/@agrawalvasudev1000/how-i-built-my-first-end-to-end-machine-learning-project-d9a9e869904b",
    },
    {
        title: "How REST APIs Work: A Beginner’s Guide",
        date: "16/06/2026",
        link: "https://medium.com/@agrawalvasudev1000/how-rest-apis-work-a-beginners-guide-f2a89c62be5f",
    },
    {
        title: "Why Every Developer Should Learn Git and GitHub",
        date: "17/06/2026",
        link: "https://medium.com/@agrawalvasudev1000/why-every-developer-should-learn-git-and-github-404e5776e4fc",
    },
];
