import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import job from "../data/jobs";
import "../index.css";

const Card = ({ job }) => {
  return (
    <div className="job-card">
      {/* top */}
      <div className="card-top">
        <img src={job.brandLogo} alt={job.companyName} />
        <button className="save-btn">
          Save <Download size={12} />
        </button>
      </div>

      {/* company */}
      <p className="company">
        {job.companyName}
        <span>{job.datePosted}</span>
      </p>

      {/* role */}
      <h3 className="role">Senior UI/UX Designer</h3>

      {/* tags */}
      <div className="tags">
        <span>{job.tag1}</span>
        <span>{job.tag2}</span>
      </div>

      {/* bottom */}
      <div className="card-bottom">
        <div>
          <h4>{job.pay}</h4>
          <p>{job.location}</p>
        </div>

        <Link to={`/apply/${job.id}`}>
          <button className="apply-btn">Apply now</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
