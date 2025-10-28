# NextJS Portfolio Template

A minimal, clean portfolio template built with Next.js. Perfect for developers who want a simple yet professional online presence without the complexity.

## Features
- 🚀 Fast and lightweight
- 📱 Fully responsive
- 🔍 SEO friendly
- 🌙 Dark/Light mode
- 🎨 Clean, minimal design
- ⚡ Easy to customize
- 🚦 Next.js App Router ready
- 📊 Analytics-ready (add via `layout.js`)

## Tech Stack

- Next.js 15
- Tailwind CSS
- JavaScript
- DaisyUI

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSachinbhujel%2FNextJS-Portfolio-Template)

## Customization

Edit `src/data/data.js` to add your information:

```
export const about = {
  name: "Vasudev Agrawal",
  role: "Final year B.Tech ",
  about: "Final Year B.Tech AIML student with hands-on experience in machine learning projects and Python development.Demonstrated skills in deep learning, recommendation systems, and web development, with practical application through internship and hackathon participation. Eager to apply technical knowledge to innovative AI solutions.",
  email: "mailvasudevagrawal@gmail.com"
};

export const seo = {
    title: "Fashion Recommendation System",
    description: "Developed an image-based clothing recommender using pre-trained ResNet50 for feature extraction and Nearest Neighbors algorithm for matching visually similar fashion items.Implemented both collaborative and content-based filtering techniques to enhance recommendation accuracy.Built an interactive web interface using Streamlit for intuitive user experience and result visualization.",
    keywords: "Python, Deep Learning, Streamlit are used in this project",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

export const skills = [
  { name: "Html", icon: "/html.svg" },
  { name: "React", icon: "/react.svg" }
];

export const socials = {
  github: "https://github.com/VasudevAgrawal",
  Linkdin: "https://www.linkedin.com/in/vasudev-agrawal-0a427b240/"
};

export const projects = {
  pinProjects: [
    {
      title: "Project Name",
      description: "Brief description of your project",
      tags: ["React", "CSS", "JavaScript"],
      link: "https://your-project.com"
    }
  ],
  otherProjects: [
    {
      title: "Project Name",
      description: "Brief description of your project",
      tags: ["React", "CSS", "JavaScript"],
      link: "https://your-project.com"
    }
  ]
}

export const experience = [
    {
        title: "Your Title",
        description: "Your Descriptions",
        date: "Date",
    }
];

export const blogs = [
    {
        title: "Your Blog Title",
        date: "Date",
        link: "#",
    }
];
```
