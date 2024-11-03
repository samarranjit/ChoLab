import axios from 'axios'
import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Footer from '../Home/Footer';
import Loader from '../../components/Loader';
function NewsArticle() {
    const {id}=useParams();
    const [article, setArticle] = React.useState({})
    useEffect( () => {
        const fetchArticle = async()=>{

            try {
                // setShowLoading(true)
                const response = await axios.get(`http://localhost:8080/api/getNewsArticle/${id}`)
                // setShowLoading(false)
                setArticle(response.data.article)
            } catch (error) {
                
            }
        }
        fetchArticle();
    }, [id] )

  return (
      <>
      <Navbar />
    {
        !article ? <Loader/>:
    <div className="w-[80%] m-auto h-screen ">
        <div className='text-center text-2xl my-5 '><section className='border-b-[2px] border-tertiary inline p-3'>    
            {article?.heading}
            </section>
        </div>
        <div className="main-img flex justify-center m-auto">
            <img src={article.mainImage} className='w-[500px] p-5' alt="" />
        </div>
        <div className="body p-5">
        {article?.body?.map(item=> <p>{item}</p>)}
        </div>
    </div>
    }
    <Footer />
    </>
  )
}

export default NewsArticle