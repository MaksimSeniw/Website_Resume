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
    { title: "Resume", src: "https://shorturl.at/lnGO5" },
    { title: "Github", src: "https://github.com/MaksimSeniw" },
    { title: "LinkedIn", src: "https://www.linkedin.com/in/maks-seniw" },
    { title: "Repo for This Page", src: "https://shorturl.at/adEUY" },
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
      topics: ["TypeScript", "JavaScript" , "C++", "Python", "HTML", "CSS"]
    },
    {
      category: "Relevant Classes Taken",
      topics: [
        "CSCI 1300",
        "CSCI 2270",
        "CSCI 3308 (Fall '23)",
        "CSCI 2824 (Fall '23)",
      ]
    },
    {
      category: "Misc.",
      topics: [
        "Familiar with using GH's Repo System and Branch Management for Working in Teams or on Personal Projects",
        "Familiar with C++'s Various Data Structures and their Respective Pros/Cons",
        "Conversational in Spanish",
        "Basic Proficency in Russian",
      ]
    },
  ],
  projects: [
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
