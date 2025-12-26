import React from 'react'
import Card from './components/Card'
import './index.css'
import User from './components/user'

const App = () => {
  const jobListings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg",
    companyName: "Meta",
    datePosted: "10 days ago",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "2 months ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  }
];




console.log(jobListings)

  return (
    <div className="parent">
    {jobListings.map(function(elem,idx){
      return <div key={idx}>
        <Card company={elem.companyName} datePosted={elem.datePosted}
      time={elem.tag1} level={elem.tag2} pay={elem.pay}
      loc={elem.location} logo={elem.brandLogo}/>
      </div>
    })}
      </div>
      )
}

export default App
