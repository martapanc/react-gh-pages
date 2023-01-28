import bookinggo from "../../../assets/images/work/booking.webp";
import ict from "../../../assets/images/work/ict.webp";
import unibz from "../../../assets/images/work/unibz.webp";
import bjss from "../../../assets/images/work/bjss.webp";
import resourcify from "../../../assets/images/work/resourcify.jpeg";

export const WorkData = {
    resourcify: {
        title: "Resourcify ~ Hamburg (remote)",
        subtitle: "Full-Stack Engineer",
        begin: "2022",
        end: "present",
        items: [
            "Europe's #1 platform for intelligent and sustainable waste and recyclables management",
            "Started as part of the Recycler API / Platform Core team",
            "Development of the new accounting platform for the internal use of the company and its clients",
            "Most of the work involves Spring Boot and Angular with TypeScript"
        ],
        icon: resourcify,
    },
    bjss: {
        title: "BJSS Ltd. ~ Manchester (remote)",
        subtitle: "Software Engineer",
        begin: "2020",
        end: "2022",
        items: [
            "Technology consultancy company",
            "All the work is project-based, providing opportunities to work with various clients and programming languages " +
            "and stacks – mainly PHP, Java, JavaScript, Angular and Vue, Docker, Jenkins and Azure",
            "Main developer responsible for implementing an updated Cookie & Privacy policy on a client's EU-based websites",
            "Support engineer/tester for the Platform team to create a containerised version of the client's web-app"
        ],
        icon: bjss,
    },
    bookinggo: {
        title: "Booking.com Transport Unit ~ Manchester",
        subtitle: "Graduate Software Engineer",
        begin: "2018",
        end: "2020",
        items: [
            "Team rotation every six months: payment page, premium insurance and supplier integrations",
            "Main technologies used: Java, JavaScript, React, PHP, MySQL, Docker",
            "Everyday development follows the Agile principles, in particular the Kanban approach, " +
            "including activities like pair programming and testing, code reviews, daily stand-ups an retros",
            "Involved in interviewing students who applied for the Booking.com grad scheme",
        ],
        icon: bookinggo,
    },
    unibz: {
        title: "UniBZ – Faculty of Computer Science",
        subtitle: "Research Assistant",
        begin: "2017",
        end: "2018",
        items: [
            "Academic research about contracts and policies of cloud services, following the changes introduced " +
            "by the new European law on data protection (GDPR). The article, published on IEEE Cloud Computing, was " +
            "written in collaboration with law and computer science professors from the Free University of Bolzano and " +
            "University of Insubria.",
        ],
        icon: unibz,
    },
    ictgroup: {
        title: "ICT Group ~ Reggio Emilia",
        subtitle: "Intern Software Developer",
        begin: "2016",
        end: "2017",
        items: [
            "Summer internship followed by a 5-month remote collaboration contract",
            "Development of a HRMS, a customisable web portal for the request and management of the employees' holidays.",
            "Main technologies: HTML, CSS, JavaScript, AngularJS, JQuery, Node, Java, MongoDB, Wildfly",
        ],
        icon: ict,
    },
};

export default WorkData;
