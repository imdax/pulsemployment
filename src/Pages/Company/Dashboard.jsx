import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

const Dashboard = () => {
    const { user, logout, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({});
    const [showJobForm, setShowJobForm] = useState(false);
    const [newJob, setNewJob] = useState({
        title: "",
        description: "",
        city: "",
        country: "",
        salary: "",
        type: "Full-time",
        category: "",
        experience: "No Experience",
    });

    useEffect(() => {
        if (!loading && !user) navigate("/company/login");
        if (user) {
            setProfileData(user);
            fetchJobs();
        }
    }, [user, loading, navigate]);

    const fetchJobs = async () => {
        try {
            const { data } = await API.get("/company/jobs");
            setJobs(data.data || []);
        } catch (error) {
            console.error("Failed to fetch jobs", error);
            setJobs([]);
        }
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            await API.put("/company/update-profile", profileData);
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to update profile", error);
        }
    };

    const handleDeleteJob = async (id) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            try {
                await API.delete(`/jobs/${id}`);
                setJobs(jobs.filter((job) => job._id !== id));
            } catch (error) {
                console.error("Failed to delete job", error);
            }
        }
    };

    const handleToggleStatus = async (id) => {
        try {
            await API.patch(`/jobs/${id}/status`);
            fetchJobs();
        } catch (error) {
            console.error("Failed to toggle status", error);
        }
    }

    const handlePostJob = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                title: newJob.title,
                description: newJob.description,
                location: {
                    city: newJob.city,
                    country: newJob.country
                },
                salary: {
                    min: 0,
                    max: parseFloat(newJob.salary) || 0,
                    currency: "AUD"
                },
                jobType: newJob.type,
                category: newJob.category,
                experience: newJob.experience,
                skills: [],
                visaSponsorship: false
            };

            await API.post("/jobs", payload);
            setShowJobForm(false);
            setNewJob({
                title: "", description: "", city: "", country: "", salary: "",
                type: "Full-time", category: "", experience: "No Experience"
            });
            fetchJobs();
        } catch (error) {
            console.error("Failed to post job", error);
            alert(error.response?.data?.message || "Failed to post job");
        }
    }

    if (loading) return <div>Loading...</div>;

    // ... (previous code)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-[var(--color-primary-darkblue)]">Company Dashboard</h1>
                <Button onClick={logout} variant="primary" className="!bg-red-500 hover:!bg-red-600">
                    Logout
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-[var(--color-primary-darkblue)]">Company Profile</h2>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            {isEditing ? "Cancel" : "Edit"}
                        </button>
                    </div>
                    {isEditing ? (
                        <form onSubmit={handleProfileUpdate} className="space-y-4">
                            <input
                                type="text"
                                value={profileData.companyName || ''}
                                onChange={(e) => setProfileData({ ...profileData, companyName: e.target.value })}
                                className="w-full border p-2 rounded focus:ring-[var(--color-primary-red)] focus:outline-none"
                                placeholder="Company Name"
                            />
                            <textarea
                                value={profileData.description || ''}
                                onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
                                className="w-full border p-2 rounded focus:ring-[var(--color-primary-red)] focus:outline-none"
                                placeholder="Description"
                            />
                            <input
                                type="text"
                                value={profileData.website || ''}
                                onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                                className="w-full border p-2 rounded focus:ring-[var(--color-primary-red)] focus:outline-none"
                                placeholder="Website"
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    value={profileData.location?.country || ''}
                                    onChange={(e) => setProfileData({
                                        ...profileData,
                                        location: { ...profileData.location, country: e.target.value }
                                    })}
                                    className="w-full border p-2 rounded focus:ring-[var(--color-primary-red)] focus:outline-none"
                                    placeholder="Country"
                                />
                                <input
                                    type="text"
                                    value={profileData.location?.city || ''}
                                    onChange={(e) => setProfileData({
                                        ...profileData,
                                        location: { ...profileData.location, city: e.target.value }
                                    })}
                                    className="w-full border p-2 rounded focus:ring-[var(--color-primary-red)] focus:outline-none"
                                    placeholder="City"
                                />
                            </div>
                            <Button type="submit" variant="primary">
                                Save
                            </Button>
                        </form>
                    ) : (
                        <div className="space-y-2">
                            <p><strong>Name:</strong> {user?.companyName}</p>
                            <p><strong>Email:</strong> {user?.email}</p>
                            <p><strong>Description:</strong> {user?.description || 'No description provided'}</p>
                            <p><strong>Website:</strong> {user?.website ? <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.website}</a> : 'N/A'}</p>
                            <p><strong>Location:</strong> {user?.location?.city}, {user?.location?.country}</p>
                        </div>
                    )}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-[var(--color-primary-darkblue)]">Your Jobs</h2>
                        <Button onClick={() => setShowJobForm(!showJobForm)} variant="secondary" size="small">
                            {showJobForm ? "Cancel" : "Post New Job"}
                        </Button>
                    </div>

                    {showJobForm && (
                        <form onSubmit={handlePostJob} className="mb-6 p-4 border rounded bg-gray-50 space-y-4">
                            <input type="text" placeholder="Job Title" required className="w-full p-2 border rounded" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />

                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="City" required className="w-full p-2 border rounded" value={newJob.city} onChange={(e) => setNewJob({ ...newJob, city: e.target.value })} />
                                <input type="text" placeholder="Country" required className="w-full p-2 border rounded" value={newJob.country} onChange={(e) => setNewJob({ ...newJob, country: e.target.value })} />
                            </div>

                            <input type="text" placeholder="Category (e.g., IT, Healthcare)" required className="w-full p-2 border rounded" value={newJob.category} onChange={(e) => setNewJob({ ...newJob, category: e.target.value })} />

                            <div className="grid grid-cols-2 gap-4">
                                <select className="w-full p-2 border rounded" value={newJob.type} onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Casual">Casual</option>
                                    <option value="Temporary">Temporary</option>
                                    <option value="Internship">Internship</option>
                                </select>
                                <select className="w-full p-2 border rounded" value={newJob.experience} onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}>
                                    <option value="No Experience">No Experience</option>
                                    <option value="1-3 Years">1-3 Years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                    <option value="5+ Years">5+ Years</option>
                                    <option value="Executive">Executive</option>
                                </select>
                            </div>

                            <input type="number" placeholder="Salary (Max)" className="w-full p-2 border rounded" value={newJob.salary} onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })} />

                            <textarea placeholder="Description" required className="w-full p-2 border rounded h-24" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} />

                            <Button type="submit" variant="primary" className="w-full">Submit Job</Button>
                        </form>
                    )}

                    {jobs.length === 0 ? (
                        <p>No jobs posted yet.</p>
                    ) : (
                        <ul className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                            {jobs.map((job) => (
                                <li key={job._id} className="border p-4 rounded bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h3 className="font-bold text-lg">{job.title}</h3>
                                        <p className="text-sm text-gray-600">{job.location?.city}, {job.location?.country} - {job.jobType || job.type}</p>
                                        <span className={`text-xs px-2 py-1 rounded inline-block mt-1 ${job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
                                            {job.status}
                                        </span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleToggleStatus(job._id)} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                            {job.status === 'active' ? 'Pause' : 'Activate'}
                                        </button>
                                        <button onClick={() => handleDeleteJob(job._id)} className="text-sm text-red-600 hover:text-red-800 font-medium">
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
