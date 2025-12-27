const jobs = [
  {
    id: "1",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India",
    aboutCompany:
"Google is a global technology company focused on building products and platforms that organize information and make it universally accessible and useful. It is known for innovation in search, cloud computing, AI, and consumer technology."

  },
  {
    id: "2",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Hyderabad, India",
    aboutCompany:
"Apple designs and builds consumer electronics, software, and services with a strong focus on innovation, design, and user experience. The company is known for products like iPhone, Mac, and its tightly integrated ecosystem."

  },
  {
    id: "3",
    brandLogo:"data:image/png;base64,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",
    companyName: "Meta",
    datePosted: "10 days ago",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Remote, India",
    aboutCompany:
"Meta builds technologies that help people connect and share, including social platforms and immersive experiences. The company focuses on social media, virtual reality, and the future of digital communication."

  },
  {
    id: "4",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Chennai, India",
    aboutCompany:
"Amazon is a global leader in e-commerce, cloud computing, and digital services. It focuses on customer-centric innovation, scalable systems, and technologies that power online retail and cloud infrastructure."

  },
  {
    id: "5",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Mumbai, India",
    aboutCompany:
"Netflix is a leading streaming entertainment service offering movies, TV shows, and original content worldwide. The company is driven by data, creativity, and a strong culture of ownership and innovation."

  },
  {
    id: "6",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India",
    aboutCompany:
"Microsoft develops software, services, and platforms that empower individuals and organizations. Its products span cloud computing, operating systems, productivity tools, and enterprise solutions."

  },
  {
    id: "7",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "2 months ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Pune, India",
    aboutCompany:
"Tesla designs and manufactures electric vehicles and clean energy solutions. The company focuses on sustainability, automation, and advancing the transition to renewable energy."

  },
  {
    id: "8",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Bangalore, India",
    aboutCompany:
"NVIDIA is a technology company specializing in graphics processing units and AI computing. Its products power gaming, data centers, artificial intelligence, and high-performance computing."


  }
];

export default jobs;
