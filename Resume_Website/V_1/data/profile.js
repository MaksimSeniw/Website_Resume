const profileData = {
  title: "Resume",
  name: "Maksim Seniw",
  sub_title: "CU Boulder Computer Science Major",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `TBD`,
    contact: {
      email: "mase5436@colorado.edu",
      phone: "(720)-209-4037",
      address: "10621 Baneberry St., CO, USA"
    }
  },
  links: [
    { title: "Github", src: "https://tinyurl.com/asvsfrrf" },
    { title: "LinkedIn", src: "https://tinyurl.com/32udswtx" },
    { title: "Repo for This Page", src: "https://tinyurl.com/2v8uderj" },
    { title: "Resume", src: "https://tinyurl.com/575u3dj4" },
  ],
  education: [
    {
      alma: "<strong>University of Colorado Boulder</strong>",
      duration: "2022 - Present",
      std: `<strong>Major</strong>: Computer Science & Engineering`,
      minor: "<strong>Minor</strong>: Business",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      topics: ["TypeScript", "JavaScript" , "C++", "Python", "HTML", "CSS", "LaTex", "Scala", "EJS", "SQL", "Node.js", "Yaml"]
    },
    {
      category: "Relevant Classes Taken",
      topics: [
        "CSCI 1300",
        "CSCI 2270",
        "CSCI 3308",
        "CSCI 2824",
      ]
    },
    {
      category: "Misc.",
      topics: [
        "Familiar with using GH's Repo System and Branch Management for Working in Teams or on Personal Projects",
        "Familar with Docker and its Containerization Structure and Use",
        "Familiar with Git and its Massive Use to Organizations and Teams ",
        "Familiar with C++'s Various Data Structures and their Respective Pros/Cons",
        "Conversational in Spanish",
        "Basic Proficency in Russian",
      ]
    },
  ],
  projects: [
    {
      title: "Hat Hub",
      duration: "2023",
      link: "https://github.com/MaksimSeniw/HatHub",
      desc: `HatHub is a website immitating e-commerce with the sale of various hats. When the user 
      loads up the website they will be prompted to login or register. If they are a new user
      they will register; the data from that registration will be stored within the SQL database so the user
      can login and have their profile created. Further, the user can add hats to their shopping cart and place an order.
      They will then get an email confirmation sent to the email they registered with. Stylization was done with CSS.`
    },
    {
      title: "Resume Website",
      duration: "2023",
      link: "https://github.com/MaksimSeniw/Website_Resume",
      desc: `A personal website that I created to help inform others about
      my skills and qualifications. Created using CSS, JS, and EJS.`
    },
    {
      title: "Hydration Tracker",
      duration: "2023",
      link: "https://github.com/MaksimSeniw/Hydration_Tracker.git",
      desc: `A python program that would send out an automated 
      email to the intended recipient asking how much water 
      they had drank at the current point in the day. Then, 
      once the user responds to the email, the program would 
      send an email back telling the user how much more water 
      they should drink to reach their hydration goal. 
      Recipient, hydration goal, and how often the email was 
      sent out are fully customizable`
    },
  ],
  experiences: [
    {
      organization: "Take MAR",
      title: `Intern`,
      date: "January 2024 - Present",
      details: [
        `Assisted the orginization with a variety of items. Including various front end webpages, relevant to 
        the organization, being created;
        along with the creation and organisation of fundraising events.`
      ]
    },
    {
      organization: "Buffalo Wild Wings",
      title: `Host and Server`,
      date: "Spring 2022 - Fall 2022",
      details: [
        `Serving as a Server gave me an opportunity to better 
        appreciate and understand how to connect with and sell 
        to customers.`
      ]
    },
    {
      organization: "BEST Robotics",
      title: `Coding Team Lead`,
      date: "Fall 2021",
      details: [
        `Assisted the coding team in STEM BEST Robotics 
        through writing segments of our robot's code, in 
        Python, that would help it navigate various obstacles 
        set throughout the competition course.`
      ]
    },
    {
      organization: "BEST Robotics",
      title: `Presentation and Marketing Lead`,
      date: "Fall 2021",
      details: [
        `Lead the presentation team of STEM BEST Robotics; a 
        team that would be awarded #1 at the state competition 
        level and go on to compete at the national level.`
      ]
    },
  ],
  certifications: [
    {
      desc: `<strong>President Horace M. Hale Award</strong> by CU Boulder</strong>.`,
      date: "Fall 2022"
    },
    {
      desc: `<strong>University of Colorado Boulder Esteemed Scholar </strong> by CU Boulder</strong>.`,
      date: "Fall 2022"
    },
    {
      desc: `<strong>CAD SOLIDWORKS Certification</strong> by STEM School Highlands Ranch</strong>.`,
      date: "Fall 2019"
    },
  ],  
};
