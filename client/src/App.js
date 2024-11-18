import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import axios from "axios";
import { allContexts} from "./Context/AllContexts";
import News from "./pages/News";
import Publication from "./pages/Publication.js";
import Admin from "./pages/Admin/index.js";
import NewsArticle from "./pages/News/NewsArticle.js";
import AdminLogin from "./pages/Admin/AdminLogin.js";
import Research from "./pages/Research/index.js";
import NewJoinRequests from "./pages/Admin/AdminNewJoinRequests/NewJoinRequests.js";
import JoinReqPage from "./pages/Admin/AdminNewJoinRequests/JoinReqPage.js";
import ProtectedRoutes from "./axios/protectedRoutes.js";
import { AuthProvider } from "./Context/AuthContext.js";
import Opportunities from "./pages/Opportunities/index.js";
import ResearchInfoPage from "./pages/Research/ResearchInfoPage.js";
import Mentorship from "./pages/Mentorship"
function App() {
  const [Data, setData] = React.useState(null);
  const [showLoading, setShowLoading] = React.useState(false);
  const apiURL = process.env.REACT_APP_API_BASE_URL

  const getData = async () =>{
    setShowLoading(true)
    try {
      const response= await axios.get(`${apiURL}/api/getData`);
      setData(response.data)
      setShowLoading(false)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if(!Data){
      getData();
    }

  })

  
  return (
    <allContexts.Provider value={{Data, setData, showLoading, setShowLoading}} >
    <AuthProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/news" element={<News />} ></Route>
        <Route path="/publication" element={<Publication />} ></Route>
        <Route path="/research" element={<Research />} ></Route>
        <Route path="/opportunities" element={<Opportunities />} ></Route>
        <Route path="/admin" element={<ProtectedRoutes><Admin /></ProtectedRoutes>} ></Route>
        <Route path="/news/:id" element={<NewsArticle />} /> 
        <Route path="/admin-login" element={<AdminLogin />} /> 
        <Route path="/admin-newMemberRequests" element={<NewJoinRequests />} /> 
        <Route path="/admin-newMemberRequests/:id" element={<JoinReqPage />} /> 
        <Route path="/admin-newMemberRequests/:id" element={<JoinReqPage />} /> 
        <Route path="/ourResearch/:id" element={<ResearchInfoPage />} /> 
        <Route path="/mentorship" element={<Mentorship />} /> 

      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </allContexts.Provider>
  );
}

export default App;
