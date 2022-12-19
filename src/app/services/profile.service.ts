import { Injectable } from "@angular/core";

@Injectable()
export class ProfileService {
  getProfile() {
    return {
      userName: "Ciobanu Andrei",
      title: "Full-stack software developer",
      phone: "+45 9226 1608",
      email: "a.ciobanu@gmail.com",
      address: "Copenhagen, Denmark",
      intro: [
        "I focus on solving problems over implementing features!",
        "I am a designer using code as my primary tool. I build software, using the technologies that enable me to do so most efficiently. I always think about the big picture before I start coding - it is not enough to be precise, accuracy is needed too in order to build the right solution.",
        "I focus on delivering great software that not only works well for the users, but ties in well with the overall business goals. I prefer to work closely with users to understand the challenges they face and come up with the best solutions in collaboration with them.",
      ],
      linkedIn: "https://www.linkedin.com/in/a-ciobanu/",
      positions: [
        {
          title: "Full-stack software developer - Front-end - Back-end",
          company: "Perfion A/S",
          companyWebsite: "https://www.perfion.com/",
          period: "September 2019 - Present",
          description: [
            "Full stack software developer working with a large spectrum of tasks from altering MSSQL database to business logic, Web API, to fron-end logic and CSS styling design.",
          ],
          links: [],
        },
        {
          title: "Software developer",
          company: "Treat Systems A/S",
          companyWebsite: "https://www.treatsystems.com/",
          period: "Jan 2019 - Mar 2019",
          description: [
            "Implement from the scratch a comprehensive software solution for antimicrobial stewardship.",
            "During my time at Treat Systems, I worked with antimicrobial stewardship data collection and manipulation within an environment where requirements precision and error toleration were extremely strict.",
          ],
          links: [],
        },
        {
          title: "Software developer",
          company: "2operate A/S",
          companyWebsite: "https://www.2operate.com/",
          period: "Mar 2018 - Dec 2018",
          description: [
            "I was involved in two main projects:",
            "Network Operation Center Email Collector (NOC): An application to collect mobile operator’s data, store and display it in responsive graphs, to detect data anomalies or misbehavior.",
            "Manual and Automated Testing Strategy:  A full documented test strategy for the application above (NOC), and the company main product OSS suite 2solve, which included unit tests, integration tests and automated GUI tests.",
          ],
          links: [],
        },

        {
          title: "Software developer",
          company: "Betfray A/S",
          period: "Aug 2017 - Oct 2017",
          description: [
            "At Betfray I worked on a social-betting platform for casual and dedicated bettors for implementing social and betting features.",
          ],
          links: [],
        },
      ],
      skills: [
        {
          name: "UX",
          rating: 100,
        },
        {
          name: "Problem solving",
          rating: 100,
        },
        {
          name: "Usability",
          rating: 96,
        },
        {
          name: "Web development",
          rating: 89,
        },
        {
          name: "Interaction design",
          rating: 82,
        },
        {
          name: "Graphic design",
          rating: 70,
        },
        {
          name: "Performance",
          rating: 68,
        },
        {
          name: "Responsive",
          rating: 94,
        },
        {
          name: "Data visualisation",
          rating: 94,
        },
        {
          name: "Strategy",
          rating: 94,
        },
      ],
      tools: [
        {
          name: "React",
          rating: 93,
        },
        {
          name: "Next.js",
          rating: 93,
        },
        {
          name: "Angular",
          rating: 93,
        },
        {
          name: "JavaScript",
          rating: 92,
        },
        {
          name: "TypeScript",
          rating: 81,
        },
        {
          name: "Git",
          rating: 72,
        },
      ],
      zones: [
        {
          startName: "Website",
          endName: "App (SAAS)",
          start: 58,
          end: 0,
          description:
            "Through most of my career I have built web-software rather than websites.",
        },
        {
          startName: "(UX) Designer",
          endName: "Developer",
          start: 8,
          end: 18,
          description:
            "Designing functionality and interaction, then implementing.",
        },
        {
          startName: "Detail",
          endName: "Big picture, strategy",
          start: 42,
          end: 0,
          description:
            "I tend to be more concerned with what I am building than how.",
        },
      ],
      languages: [
        {
          name: "Danish",
          rating: 100,
        },
        {
          name: "English",
          rating: 94,
        },
        {
          name: "German",
          rating: 54,
        },
      ],
      activities: [
        "Play with my kids",
        "Archery",
        "Bicycling",
        "Woodworking",
        "Learning",
      ],
    };
  }
}
