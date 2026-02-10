import { useState, useEffect } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const JobBoard = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const { data } = await API.get("/jobs");
            setJobs(data);
        } catch (error) {
            console.error("Failed to fetch jobs", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="text-center py-10">Loading jobs...</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-[var(--color-primary-darkblue)]">Latest Job Openings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div key={job._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-[var(--color-primary-red)]">{job.title}</h2>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">{job.company?.name}</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                                <span className="bg-gray-100 px-2 py-1 rounded">📍 {job.location}</span>
                                <span className="bg-gray-100 px-2 py-1 rounded">💼 {job.type}</span>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                        </div>
                        <Link to={`/jobs/${job._id}`} className="block">
                            <Button variant="secondary" className="w-full">
                                View Details
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
            {jobs.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                    No active job openings at the moment.
                </div>
            )}
        </div>
    );
};

export default JobBoard;
