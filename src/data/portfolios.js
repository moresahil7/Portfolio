import port1 from '../img/portImages/port1.jpg';
import port2 from '../img/portImages/port2.jpg';
import port3 from '../img/portImages/port3.jpg';
import port4 from '../img/portImages/port4.jpg';
import port5 from '../img/portImages/port5.jpeg';
import port6 from '../img/portImages/port6.jpeg';
import port7 from '../img/portImages/port7.jpg';

const portfolios = [
    {
        id: 1,
        category: 'MERN Stack',
        link: 'https://github.com/moresahil7/MERN-Stack-Ecommerce',
        image: port1,
        title: 'E-Commerce in MERN ',
        description: 'Designed and Developed an Ecommerce Site which accepts order and added payment gateway in it'
    },
    {
        id: 2,
        category: 'Django',
        link: '',
        image: port2,
        title: 'Customer Management System For ISP',
        description: 'Designed and developed django based Customer management System for Internet Service Providers'
        
    },
    {
        id: 3,
        category: 'React Js',
        link: 'https://react-weather-app-moresahil7.netlify.app/',
        image: port3,
        title: 'React Based Weather App',
        description: 'Developed weather app in React Js using weather API which tells temperature, humidity,pressure, sunset-sunrise time'
    },
    {
        id: 4,
        category: 'Django',
        link: 'https://github.com/moresahil7/Text_Analyzer-using-Django-framework',
        image: port4,
        title: 'Django based Text-Analyzer',
        description:'Created a text analyzer which capitalizes text,removes punctuations, extra spaces'

    },
    {
        id: 5,
        category: 'React Js',
        link: 'https://react-todoapp-moresahil7.netlify.app/',
        image: port5,
        title: 'ToDo App in React Js',
        description: 'Made a ToDo-list Web-app in React js. User can add his/her ToDo items and delete them once completed'
        
    },
    {
        id: 6,
        category: 'React Js',
        link: 'https://reactcalculator-moresahil7.netlify.app/',
        image: port6,
        title: 'Calculator',
        description: 'Built Fully Functional Calculator using ReactJs'
        
    },
    {
        id: 7,
        category: 'React Js/Redux/Firebase',
        link: 'https://slack-clone-b0fa1.web.app/',
        image: port7,
        title: 'Team_Chat',
        description: 'Build a Messaging application /Lite version of Slack😉 to communicate with the team members during their project work.'
        
    },
]

export default portfolios;