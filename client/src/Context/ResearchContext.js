import React, {createContext, useState, useContext, useEffect} from 'react'
import axiosInstance from '../axios/axiosInstance';

const ResearchContext = createContext({})


export const useResearchContext = () => {
  return useContext(ResearchContext);
}

export const ResearchProvider = ({ children }) => {
    const [researchData, setResearchData] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
  console.log(showLoading)

    const getResearchData=async()=>{
        setShowLoading(true)
        try {
          const response= await axiosInstance.get(`${process.env.REACT_APP_API_BASE_URL}/api/getResearchData`);
          setResearchData(response.data)
          setShowLoading(false)
        } catch (error) {
          console.log(error)
        }
        finally {
            setShowLoading(false);
          }
      }
    
    
      useEffect(()=>{
        if(!researchData){
          getResearchData();
        }
      },[])

    return (
        <ResearchContext.Provider value={{ researchData, setResearchData }}>
            {children}
        </ResearchContext.Provider>
    );
};