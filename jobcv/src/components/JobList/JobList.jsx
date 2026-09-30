import JobCard from '../JobCard/JobCard'
import './JobList.css'
function JobList({ jobs=[], onJobClick }) {

    console.log('JOB LIST:', jobs)

    if (!Array.isArray(jobs)) {
        return null
    }

    return (
        <div className="job-list">
            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    job={job}
                    onClick={() => onJobClick?.(job)}
                />
            ))}
        </div>
    )
}

export default JobList