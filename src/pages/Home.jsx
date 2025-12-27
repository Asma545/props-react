import jobs from "../data/jobs";
import Card from "../components/card";

const Home = () => {
  return (
    <>
      <h1 className="page-title">Available Jobs</h1>

      <div className="parent">
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Home;
