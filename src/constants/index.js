const navLinks = [
  {
    name: "Home",
    link: "/",
    subLinks: [
      { name: "Hero", link: "/#hero" },
      { name: "Gallery", link: "/#gallery" },
      { name: "News", link: "/#news" },
    ],
  },
  {
    name: "About",
    link: "/about",
    subLinks: [
      { name: "Team", link: "/about#team" },
      { name: "Mission", link: "/about#mission" },
      { name: "History", link: "/about#history" },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact",
    subLinks: [
      { name: "Location", link: "/contact#location" },
      { name: "Form", link: "/contact#form" },
    ],
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  {
    label: "Years of Excellence",
    value: 6,
    suffix: "+",
  },
  {
    label: "Events & Workshops",
    value: 20,
    suffix: "+",
  },
  {
    label: "Dedicated Volunteers",
    value: 50,
    suffix: "+",
  },
  {
    label: "Collaborations & MoUs",
    value: 10,
    suffix: "+",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/intel-logo.png",
  },
  {
    imgPath: "/images/logos/samsung-logo.png",
  },
  {
    imgPath: "/images/logos/apple-logo.png",
  },
  {
    imgPath: "/images/logos/microsoft-logo.png",
  },
  {
    imgPath: "/images/logos/IBM-logo.png",
  },
  {
    imgPath: "/images/logos/quantinuum-logo.png",
  },
  {
    imgPath: "/images/logos/alibaba-logo.png",
  },
  {
    imgPath: "/images/logos/qualcomm-logo.png",
  },
  {
    imgPath: "/images/logos/Nvidia-logo.png",
  },
];

const abilities = [
  {
    
    imgPath: "/images/time.png",
    title: "Fostering Innovation",
    desc: "Encouraging creative solutions through hands-on technical workshops, hackathons, and real-world projects.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Strong Community",
    desc: "Building a network of passionate students, researchers, and professionals committed to learning and collaboration.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Leadership Development",
    desc: "Empowering members with opportunities to lead, organize events, and grow as future industry leaders.",
  },
];



const expCards = [
  {
    title: "Tech Talk Series 2024",
    date: "February - April 2024",
    logoPath: "/images/tech-logo.png",
    review:
      "An interactive session series where industry experts shared insights on AI, Robotics, and IoT. Great participation and feedback from students.",
    responsibilities: [
      "Organized 5+ sessions featuring speakers from Google, IEEE, and local startups.",
      "Engaged 400+ attendees across all sessions.",
      "Collaborated with marketing and event teams for outreach and logistics.",
    ],
  },
  {
    title: "Annual IEEE Mega Event",
    date: "October 2023",
    logoPath: "/images/event-logo.png",
    review:
      "Our flagship event of the year, combining coding competitions, design contests, and speaker sessions. A true celebration of tech and innovation!",
    responsibilities: [
      "Managed logistics for 700+ participants from 10+ universities.",
      "Coordinated with sponsors, volunteers, and speakers.",
      "Introduced interactive workshops and IEEE membership drives.",
    ],
  },
  {
    title: "Robotics Bootcamp",
    date: "July 2023",
    logoPath: "/images/robo-logo2.png",
    review:
      "A week-long training program on robotics fundamentals, Arduino, and hands-on bot development. Boosted interest in RAS society.",
    responsibilities: [
      "Led by IEEE RAS in collaboration with the Department of CS.",
      "Provided hands-on learning kits to 50+ participants.",
      "Conducted final bot challenge and rewarded top 3 performers.",
    ],
  },
];


const testimonials = [
  {
    name: "Hassan Raza",
    mentions: "@hassan_ieee",
    review:
      "Being part of IEEE RAS has been a game-changer. The workshops and coding competitions truly elevated my technical skills and boosted my confidence in robotics and automation.",
    imgPath: "/images/members/member1.png",
  },
  {
    name: "Ayesha Noor",
    mentions: "@ayesha_noor",
    review:
      "The society creates an amazing learning environment. From hands-on project work to leadership opportunities, IEEE RAS helped me grow personally and professionally.",
    imgPath: "/images/members/member2.png",
  },
  {
    name: "Usman Khalid",
    mentions: "@usmank_ieee",
    review:
      "Volunteering in IEEE RAS gave me the exposure I was looking for. Organizing technical events and leading workshops taught me more than any classroom could.",
    imgPath: "/images/members/member3.png",
  },
  {
    name: "Zainab Ahmed",
    mentions: "@zainab.ahmed",
    review:
      "IEEE RAS connects passionate students with industry professionals through seminars and guest talks. These sessions are inspiring and opened up new perspectives for me.",
    imgPath: "/images/members/member4.png",
  },
  {
    name: "Talha Tariq",
    mentions: "@talhatariq",
    review:
      "IEEE RAS society provided me with real-world teamwork experience. Working on inter-university competitions helped sharpen my problem-solving skills under pressure.",
    imgPath: "/images/members/member5.png",
  },
  {
    name: "Fatima Sheikh",
    mentions: "@fatima_sheikh",
    review:
      "Joining IEEE RAS was one of the best decisions in my university life. It helped me network, build skills, and explore new technologies in AI and robotics.",
    imgPath: "/images/members/member6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const eventImages = {
  event1: "/images/Image1.JPG",
  event2: "/images/DSC_0058.JPG",
  event3: "/images/IMG_9732.jpg",
};


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  navLinks,
  eventImages,
};
