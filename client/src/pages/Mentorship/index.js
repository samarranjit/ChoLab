import React from 'react'
import Navbar from '../../components/Navbar'
import Heading from './Heading'
import CoreValues from './CoreValues'
import Footer from '../Home/Footer'
import CurrentCourses from './CurrentCourses'
import { Helmet } from 'react-helmet-async'


const courses = [
  {
    name: "ENGR 3380: Fluid Mechanics",
    description: "This course introduces the principles of fluid mechanics with applications in civil engineering. Topics include fluid properties, hydrostatics, fluid dynamics, pipe flow, open channel flow, and hydraulic systems. Students will develop a strong foundation in analyzing and solving problems related to fluid behavior in natural and engineered systems. The field of fluid mechanics is broad and has numerous science and engineering applications.",
    url: `${process.env.PUBLIC_URL}/Files/CoursesSyllabus/ENGR3380.pdf`,
    syllabus: "https://cholab.science/Files/CoursesSyllabus/ENGR3380.pdf"
  },
  {
    name: "CE 4371: Hydrology",
    description: "This course delves into the fundamental principles of hydrology, focusing on the movement, distribution, and management of water across natural and built environments. Key topics include precipitation, evapotranspiration, soil infiltration, groundwater flow, surface runoff, and hydrologic modeling, with an emphasis on state-of-the-art remote sensing techniques. Students will develop practical skills in water system analysis, conceptual modeling using HEC-HMS, and applying hydrologic concepts to tackle real-world challenges in water resources management and environmental sustainability.",
    url: `${process.env.PUBLIC_URL}/Files/CoursesSyllabus/CE4371.pdf`,
    syllabus: "https://cholab.science/Files/CoursesSyllabus/CE4371.pdf"
  },
  {
    name: "CE 7372: Water, Climate, and Disasters",
    description: "This course is designed for MS and PhD level, introducing the interactions between water and climate systems and their relationship with occurrences, magnitude, and frequencies of natural disasters with a focus on climate impacts on hydrology, water resources, and extreme events (e.g., floods, drought, heat waves, landslides, and wildfires). This course covers disaster risk management and adaptation strategies for a sustainable and resilient natural environment and human society against weather and climate extreme disasters.",
    url: ``,
    syllabus: null // No syllabus link provided
  }
];

const index = () => {

  const coursesJsonLd = JSON.stringify(
    courses.map(course => ({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.name,
      "description": course.description,
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Texas State University",
        "sameAs": "https://www.txst.edu/"
      },
      "url": course.url,
      ...(course.syllabus && {
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "InPerson",
          "url": course.syllabus
        }
      })
    }))
  );
  return (

    <div className="">
      <Helmet>
        <title>Mentorship | The Cho Lab</title>
        <meta
          name="description"
          content="Explore courses taught by Dr. Cho at Texas State University: Fluid Mechanics, Hydrology, and Water, Climate, and Disasters. Explore course details and syllabi."
        />
        <meta
          name="keywords"
          content="research courses, Cho Lab, Texas State University, San Marcos, graduate assistantship, undergraduate internship, postdoctoral fellowship, hydrology, climate science, water sustainability, environmental research, engineering, courses, study, syllabus, fluid mechanics, hydrology, water climate disasters"
        />

        <link rel="canonical" href="https://cholab.science/mentorship" />
        <meta property="og:title" content="Mentorship | The Cho Lab" />
        <meta property="og:description" content="Explore courses taught by Dr. Cho at Texas State University: Fluid Mechanics, Hydrology, and Water, Climate, and Disasters. Explore course details and syllabi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cholab.science/mentorship" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mentorship | The Cho Lab at Texas State" />
        <meta name="twitter:description" content="Explore courses taught by Dr. Cho at Texas State University: Fluid Mechanics, Hydrology, and Water, Climate, and Disasters. Explore course details and syllabi." />
        {/* JSON-LD for all courses */}
        <script type="application/ld+json">{coursesJsonLd}</script>
      </Helmet>

      <Navbar />
      <div className="bg-secondary h-full w-full bg-opacity-[0.05]">

        <Heading />
        <CoreValues />
        <CurrentCourses />

        <Footer />


      </div>
    </div>
  )
}

export default index
