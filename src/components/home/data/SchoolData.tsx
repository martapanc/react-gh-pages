import cofc from "../../../assets/images/schools/cofc.webp";
import peri from "../../../assets/images/schools/peri.webp";
import unibz from "../../../assets/images/schools/unibz.webp";
import uom from "../../../assets/images/schools/uom.webp";
import uk from "../../../assets/images/flags/uk.svg";
import ita from "../../../assets/images/flags/it.svg";
import usa from "../../../assets/images/flags/us.svg";
import deu from "../../../assets/images/flags/de.svg";

export const WorkData = {
    uom: {
        icon: uom,
        title: "University of Manchester",
        url: "https://www.cs.manchester.ac.uk/",
        subtitle: "MSc in Advanced Computer Science",
        flag: uk,
        grade: "Distinction",
        begin: "2017",
        end: "2018",
        items: [
            "Specialised in Software Engineering: programming, Agile and TDD, design patterns and components",
            "Elective courses in Data Engineering and IT Governance",
            "MSc dissertation project on building automated assessment tools for programming exercises",
        ],
    },
    unibz: {
        icon: unibz,
        title: "Free University of Bolzano",
        url: "https://www.unibz.it/en/faculties/computer-science/",
        subtitle: "BSc in Computer Science",
        flag: ita,
        grade: "106 / 110",
        begin: "2014",
        end: "2017",
        items: [
            "The only Italian university that offers a BSc in Computer Science taught in English",
            "Trilingual teaching ( ![smallflag](" +
                uk +
                ") ![smallflag](" +
                deu +
                ") ![smallflag](" +
                ita +
                ") ) " +
                "with an international curriculum",
            "Among the ten world's best small universities (Times Higher Education 2017)",
        ],
    },
    cofc: {
        icon: cofc,
        title: "College of Charleston",
        url: "http://compsci.cofc.edu/",
        subtitle: "Exchange Semester",
        flag: usa,
        grade: "GPA 4.0",
        begin: "2015",
        end: "2016",
        items: [
            "Funded by the UniBZ \"Erasmus+/Overseas\" scholarship for international studies",
            "Main courses: Software Engineering, Networks, Statistical Methods, Discrete Maths and Calculus",
            "Principal Oboe of the College orchestra",
        ],
    },
    peri: {
        icon: peri,
        title: "\"A. Peri\" Music School",
        url: "https://peri-merulo.it/",
        subtitle: "Diploma in Oboe",
        flag: ita,
        grade: "",
        begin: "2003",
        end: "2015",
        items: [
            "Masterclass with Luca Vignali, oboist at Rome Opera House",
            "Several local events, with the school’s orchestra or chamber groups",
            "Performances in Rome, Milan and other cities as part of the System of Italian Youth Orchestras",
        ],
    },
};

export default WorkData;
