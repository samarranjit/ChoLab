import React, { useContext, useState, useEffect } from 'react'
import { allContexts } from '../../Context/AllContexts';
import Loader from '../../components/Loader';
import axios from 'axios';

function AdminIntro() {
    const { Data, showLoading , setShowLoading} = useContext(allContexts);
    const [slogan, setSlogan] = useState('');
    const [research, setResearch] = useState({
      research_oneLine:"",
      research_Desc : ""
    })
    const [publications , setPublications] = useState({
      publications_oneLine: "",
      publications_desc : ""
    })

    useEffect(() => {
        if (Data) {
          setSlogan(Data?.intro.slogan);
          setResearch({
            research_oneLine : Data?.intro.research_oneLine,
            research_Desc : Data?.intro.research_Desc
          })
          setPublications({
            publications_oneLine : Data?.intro.publication_oneLine,
            publications_desc : Data?.intro.publication_desc
          })
        }
      }, [Data]);

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      if(name === "slogan"){

        setSlogan(e.target.value);
      }else if(name === "research_oneLine" || name === "research_Desc"){
        setResearch(prev=>({
          ...prev,
          [name]: value
        }))
      }
      else if(name=== "publications_oneLine" || name === "publications_desc"){
        setPublications(prev=>({
          ...prev,
          [name] : value
        })
        
        )
      }


      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            setShowLoading(true);
            const response = await axios.post(`/api/update-intro`, {
                _id: Data.intro._id,
                slogan:slogan,
                research_oneLine : research.research_oneLine,
                research_Desc: research.research_Desc,
                publication_oneLine: publications.publications_oneLine,
                publication_desc : publications.publications_desc
            });
            setShowLoading(false);
            if (response.data.success) {
              // Update state with the response data after a successful post request
              console.log(response.data)
                 console.log(response.data.success)
              setResearch({
                  research_oneLine: response.data.data.research_oneLine,
                  research_Desc: response.data.data.research_Desc,
                });
              setPublications({
                publications_oneLine : response.data.data.publication_oneLine,
                publications_desc : response.data.data.publication_desc
              })
              setSlogan(response.data.data.slogan);
          }
            
        } catch (error) {
            
        }
      }
    return (
        <>
        {
            showLoading?<Loader/>:
            <>
            <form className='flex flex-col px-10 '>
                <label htmlFor="slogan" className='my-5 '>Edit the Slogan: </label>
                <input type="text" name='slogan' placeholder='Intro' value={slogan} onChange={handleInputChange} className=' w-[75%] focus:border-none border-none p-2 my-2 bg-gray-100 h-10' />

                <h2 className='mt-9'>Research Section  :</h2>
                <label htmlFor="slogan" className='mt-5 '>Edit Research One Line Title:</label>
                <input type="text" name='research_oneLine' placeholder='Research Title' value={research.research_oneLine} onChange={handleInputChange} className=' w-[75%] focus:border-none border-none p-2 my-2 bg-gray-100 h-10' />

                <label htmlFor="slogan" className='mt-5 '>Edit Research Description:</label>
                <textarea rows={10} type="text" name='research_Desc' placeholder='Research Description' value={research.research_Desc} onChange={handleInputChange} className=' w-[75%] focus:border-none border-none p-2 my-2 bg-gray-100' />

                <h2 className='mt-9'>Publication Section  :</h2>
                <label htmlFor="slogan" className='mt-5 '>Edit Publication One Line Title:</label>
                <input type="text" name='publications_oneLine' placeholder='Publication Title' value={publications.publications_oneLine} onChange={handleInputChange} className=' w-[75%] focus:border-none border-none p-2 my-2 bg-gray-100 h-10' />

                <label htmlFor="slogan" className='mt-5 '>Edit Publication Description:</label>
                <textarea rows={10} type="text" name='publications_desc' placeholder='Publication Description' value={publications.publications_desc} onChange={handleInputChange} className=' w-[75%] focus:border-none border-none p-2 my-2 bg-gray-100' />


                <button className='my-5 bg-secondary p-1 rounded-[10px] hover:bg-primary  hover:border-secondary hover:border-[2px] hover:border-b-[4px] hover:text-secondary text-primary mx-auto w-[25%] transition duration-200' onClick={handleSubmit}>Submit</button>
            </form>
            
             </>
        }
        </>
    )
}

export default AdminIntro