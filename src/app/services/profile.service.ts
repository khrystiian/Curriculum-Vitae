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
    };
  }
}
