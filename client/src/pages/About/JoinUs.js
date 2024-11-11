import React from 'react';
import axiosInstance from '../../axios/axiosInstance';

function JoinUs() {
    const [info, setInfo] = React.useState({
        fName: "",
        lName: "",
        email: "",
        // contact: "",
        linkedin: "",
        message: "",
        expertise: ""
    });
    const [success, setSuccess] = React.useState(false);
    const [resume, setResume] = React.useState(null)
    const [fail, setFail] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    const handleInputChange = (e) => {
        
        e.preventDefault();
        const { name, value } = e.target;

        if(name==="resume"){
            setResume(e.target.files[0])
        }
        else{

            setInfo((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resume', resume);  
        try {
            const res = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/resume/send`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                console.log(res.data)
                const resumeUrl = res.data.data.secure_url;  // Get the Cloudinary URL of the uploaded resume

                // Step 2: Send the form data including the resume URL to the backend
                const response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/joinRequest/newJoinRequest`, {
                    ...info,
                    resumeUrl  // Include the resume URL in the form data
                });

                if (response.data.success) {
                    setMessage(response.data.message);
                    setSuccess(true);
                    setFail(false);
                    resetForm();
                } else {
                    setSuccess(false);
                    setFail(true);
                    setMessage("Data not inserted due to some error");
                    resetForm();
                }
            }
        } catch (error) {
            setSuccess(false);
            setFail(true);
            setMessage("Data not inserted due to some error");
        }
    };
    const resetForm= ()=>{
        setInfo({
            fName: "",
            lName: "",
            email: "",
            // contact: "",
            linkedin: "",
            message: "",
            expertise: ""
        })
        setResume(null)
    }

    return (
        <div className="p-8 sm:p-6 sm:pb-[10rem] mb-10">
            <h2 className="text-tertiary text-2xl sm:text-xl md:text-3xl text-left">Join our Team :</h2>
            <h2 className="text-center text-3xl sm:text-xl my-5">Are you interested in what we do?</h2>
            <h2 className="text-center text-2xl sm:text-sm md:text-xl font-semibold p-3 sm:p-4 md:p-5">Join Us to leave an impact</h2>

            <div className="form">
                <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto mt-4 sm:mt-6 md:mt-10">
                    <div className={`h-8 text-center ${success && "bg-[#c2f97e]"} ${fail && "bg-[#ea9c43]"} flex justify-center items-center`}>
                        {(success || fail) && message}
                    </div>
                    <h2 className="text-center font-semibold text-2xl sm:text-sm md:text-xl p-2 sm:p-3 md:p-5">Fill out the form below, and we’ll be in touch!</h2>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-primary mb-3 sm:mb-4">Join Our Team</h2>

                    <form className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="fName"
                                value={info.fName}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lName"
                                value={info.lName}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={info.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>
                        {/* <div>
                            <label className="block text-sm font-semibold text-gray-700">Contact Number</label>
                            <input
                                type="tel"
                                name="contact"
                                value={info.contact}
                                placeholder="Phone Number"
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div> */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">LinkedIn Profile</label>
                            <input
                                type="url"
                                name="linkedin"
                                value={info.linkedin}
                                placeholder="LinkedIn Profile URL"
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Message</label>
                            <textarea
                                placeholder="Tell us about yourself"
                                name="message"
                                value={info.message}
                                onChange={handleInputChange}
                                rows="6"
                                className="w-full p-2 border rounded-lg"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Skills and Expertise</label>
                            <input
                                type="text"
                                value={info.expertise}
                                placeholder="e.g., React, Data Analysis"
                                name="expertise"
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Upload Resume</label>
                            <input
                                type="file"
                                placeholder=""
                                onChange={handleInputChange}
                                name="resume"
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                onClick={handleSubmit}
                                className="w-full p-3 bg-primary text-secondary border border-secondary rounded-lg hover:bg-secondary hover:text-primary transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default JoinUs;
