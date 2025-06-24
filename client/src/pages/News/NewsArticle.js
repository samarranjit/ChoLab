import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Footer from '../Home/Footer';
import Loader from '../../components/Loader';
import { Helmet } from 'react-helmet-async';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';



function NewsArticle() {

    const { id } = useParams();
    const [article, setArticle] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(true)


    //react photo gallery
    const [currentImage, setCurrentImage] = React.useState(0);
    const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/getNewsArticle/${id}`)
                setArticle(response.data.article)
            } catch (error) {
                console.error('Error fetching article:', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchArticle();


    }, [id])

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <Loader />
                </div>
                <Footer />
            </>
        )
    }

    const photos = article?.otherImage?.map((img, index) => ({
        src: img,
        width: 4,
        height: 3,
        title: article.heading || `Image ${index + 1}`
    })) ||


        console.log('article', article)
    return (
        <>

            <Helmet>
                <title>{article?.heading || 'Loading...'} | Cho Lab News</title>
                <meta name="description" content={article?.body?.[0]?.slice(0, 150) + '...'} />
                <link rel="canonical" href={`https://cholab.science/news/${id}`} />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={article.heading} />
                <meta property="og:description" content={article?.body?.[0]?.slice(0, 150) + '...'} />
                <meta property="og:image" content={article.mainImage} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://cholab.science/news/${id}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article?.heading} />
                <meta name="twitter:description" content={article?.body?.[0]?.slice(0, 150) + '...'} />
                <meta name="twitter:image" content={article.mainImage} />


                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": "${article?.heading}",
                        "image": "${article?.mainImage}",
                        "url": "https://cholab.science/news/${id}",
                        "datePublished": "${article?.date}",
                        "author": {
                            "@type": "Person",
                            "name": "Eunsang Cho"
                        },
                        "description": "${article?.body?.[0]?.slice(0, 150)}"
                    `}
                </script>
            </Helmet>
            <Navbar />



            <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-8 md:pt-10">

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-12">
                    {/* Article Header */}
                    <header className="text-center mb-8 sm:mb-12 lg:mb-16 md:mt-5">
                        <h1 className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-6xl font-light text-secondary leading-tight mb-4 px-2">
                            {article?.heading}
                        </h1>
                        <div className="w-12 sm:w-16 lg:w-20 h-0.5 bg-tertiary mx-auto"></div>
                    </header>

                    {/* Article Content */}
                    <article className="space-y-8 sm:space-y-10 lg:space-y-12">
                        {/* Featured Image */}
                        {article.mainImage && (
                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
                                <img
                                    src={article.mainImage}
                                    alt={article.heading}
                                    className="w-full h-48 sm:h-64 md:h-80 lg:h-full     xl:h-[28rem] object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>
                        )}

                        {/* Article Body */}
                        <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl prose-gray max-w-none">
                            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                                <p>
                                    Date:   {article?.date ? new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown'}
                                </p>
                                {article?.body?.map((paragraph, index) => (
                                    <div className={`prose dark:prose-invert max-w-4xl mx-auto text-gray-700 leading-relaxed font-light tracking-wide text-base sm:text-lg lg:text-xl `}>
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            rehypePlugins={[rehypeHighlight]}
                                            components={{
                                                img: ({ node, ...props }) => (
                                                    <img {...props} alt={`${article?.heading}img_${index}`} className="block mx-auto w-[75%] my-4 rounded-md shadow-md" />
                                                )
                                            }}
                                        >
                                            {paragraph}
                                        </ReactMarkdown>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </article>



                    {/* Other Images Section */}
                    {
                        article?.otherImage && article.otherImage.length > 0 && (
                            <div className='mt-10 sm:mt-12 lg:mt-16'>
                                <div className='text-center'>
                                    <h2 className='text-2xl font-semibold mb-4 py-2 inline-block border-b-2 border-b-tertiary'>Other Images:</h2>
                                </div>
                                <Gallery photos={photos} onClick={openLightbox} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox} closeOnEsc={true} closeOnClick={true}>
                                            <div className="flex items-center justify-center w-full h-full mx-auto">
                                                <Carousel
                                                    currentIndex={currentImage}
                                                    views={photos.map(x => ({
                                                        ...x,
                                                        srcset: x.srcSet,
                                                        caption: x.title || ""
                                                    }))}
                                                />
                                            </div>
                                        </Modal>
                                    ) : null}
                                </ModalGateway>
                            </div>




                        )
                    }

                    {/* Decorative Element */}
                    <div className="mt-12 sm:mt-14 lg:mt-16 text-center">
                        <div className="inline-flex items-center space-x-1.5 sm:space-x-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NewsArticle