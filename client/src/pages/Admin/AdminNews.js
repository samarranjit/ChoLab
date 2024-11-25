import React, { useContext } from 'react';
import { allContexts } from '../../Context/AllContexts';
import axiosInstance from '../../axios/axiosInstance';

function AdminNews() {
    const { Data, setShowLoading } = useContext(allContexts);
    const [editingNewsId, setEditingNewsId] = React.useState(null);
    const [addNewsBtn, setAddNewsBtn] = React.useState(false);
    const [paragraphs, setParagraphs] = React.useState([""]);
    const [extraPhotos, setExtraPhotos] = React.useState([""]);
    const [news, setNews] = React.useState({
        heading: "",
        body: [""],
        mainImage: "",
        otherImage: [""],
        date: ""
    });

    const handleUnhide = () => {
        setAddNewsBtn(!addNewsBtn);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        if (name.startsWith("body-")) {
            const updatedParagraphs = [...paragraphs];
            updatedParagraphs[index] = value;
            setParagraphs(updatedParagraphs);
            setNews(prev => ({ ...prev, body: updatedParagraphs }));
        } else if (name.startsWith("otherImg-")) {
            const updatedPhotos = [...extraPhotos];
            updatedPhotos[index] = value;
            setExtraPhotos(updatedPhotos);
            setNews(prev => ({ ...prev, otherImage: updatedPhotos }));
        } else {
            setNews(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleEdit = (item) => {
        setAddNewsBtn(true);
        setEditingNewsId(item._id);

        setNews({
            heading: item.heading,
            body: item.body,
            mainImage: item.mainImage,
            otherImage: item.otherImage,
            date: item.date
        });

        setParagraphs(item.body);
        setExtraPhotos(item.otherImage || [""]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(news)
        setShowLoading(true);
        try {
            const response = editingNewsId ? await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/news/editNews/${editingNewsId}`, news)
                                            : await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/news/addNews`, news);

            setShowLoading(false);
            if (response.data.success) {
                alert(response.data.message);
                resetForm();
            }
        } catch (error) {
            console.error("Error:", error);
            setShowLoading(false);
        }
    };

    const handleAddParagraph = (e) => {
        e.preventDefault();
        setParagraphs([...paragraphs, ""]);
    };

    const handleAddPhoto = (e) => {
        e.preventDefault();
        setExtraPhotos([...extraPhotos, ""]);
    };

    const handleDelete = async (newsId) => {
        try {
            setShowLoading(true);
            const response = await axiosInstance.delete(`${process.env.REACT_APP_API_BASE_URL}/api/news/delNews/${newsId}`);
            setShowLoading(false);
            if (response.data.success) {
                alert(response.data.message);
                console.log(newsId, "Deleted");
                // Optionally: refresh data
            }
        } catch (error) {
            console.error("Error:", error);
            setShowLoading(false);
        }
    };

    const resetForm = () => {
        setNews({
            heading: "",
            body: [""],
            mainImage: "",
            otherImage: [""],
            date: "10/27/2024"
        });
        setParagraphs([""]);
        setExtraPhotos([""]);
        setEditingNewsId(null);
        setAddNewsBtn(false);
    };

    return (
        <>
            <div className="addMemberBtn w-full flex justify-center items-center align-middle">
                <button
                    className="w-[15%] rounded-[15px] mx-auto align-middle bg-secondary border-[2px] p-2 text-primary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200"
                    onClick={handleUnhide}
                >
                    {addNewsBtn ? "Hide" : "Add a new news"}
                </button>
            </div>

            {addNewsBtn && (
                <div className="newMemberAdd flex justify-center items-center bg-secondary my-5 w-full p-5 text-primary">
                    <form className="flex flex-col py-5 mx-auto justify-center items-center w-full gap-2">
                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="heading" className="p-1 text-left">Heading:</label>
                            <input
                                type="text"
                                name="heading"
                                value={news.heading}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />

                            <label htmlFor="mainImage" className="p-1">Main Photo:</label>
                            <input
                                type="file"
                                name="mainImage"
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="body" className="p-1">Body:</label>
                            {paragraphs.map((paragraph, index) => (
                                <textarea
                                    key={index}
                                    rows={5}
                                    name={`body-${index}`}
                                    className="text-secondary border-[2px] border-secondary m-1 p-1"
                                    value={paragraph}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            ))}
                            <button className="p-2" onClick={handleAddParagraph}>Add Paragraph +</button>
                        </div>

                        <div className="w-[40%]">
                            <label htmlFor="date" className="p-1">Date:</label>
                            <input
                                type="date"
                                name="date"
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 w-[30%] p-1"
                                value={news.date}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-[40%] flex flex-col">
                            <label htmlFor="Position" className="p-1">Other Photo Link: (Optional)</label>
                            {extraPhotos.map((photo, index) => (
                                <input
                                    key={index}
                                    type="file"
                                    name={`otherImg-${index}`}
                                    className="bg-primary border-[2px] text-secondary border-secondary m-1 p-1"
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            ))}
                            <button className="p-2" onClick={handleAddPhoto}>Add Photo +</button>
                        </div>

                        <button
                            className="my-5 bg-tertiary p-3 rounded-[10px] hover:bg-primary hover:border-tertiary hover:border-[2px] hover:border-b-[4px] hover:text-tertiary text-primary mx-auto w-[20%] transition duration-200"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}

            {Data && Data.news && Data.news.map(item => (
                <div key={item._id} className="flex border-[1px] border-gray-150 my-5 p-5 hover:translate-y-[-4px] hover:shadow-xl">
                    <div className="font-semibold w-[70%] flex justify-center items-center text-left">{item.heading} ({item.date})</div>
                    <div className="btn w-[30%] flex items-end justify-around text-center my-5">
                        <button
                            onClick={() => handleEdit(item)}
                            className="text-center bg-secondary w-[25%] rounded-[10px] text-primary border-[2px] hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(item._id)}
                            className="text-center bg-tertiary w-[25%] rounded-[10px] text-primary border-[2px] hover:bg-primary hover:text-tertiary border-b-[5px] border-tertiary duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AdminNews;
