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
function App() {
  const [Data, setData] = React.useState(null);
  const [showLoading, setShowLoading] = React.useState(false);
  
  const getData = async () =>{
    setShowLoading(true)
    try {
      const response= await axios.get('http://localhost:8080/api/getData');
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

  }, [Data])

  
  return (
    <allContexts.Provider value={{Data,  showLoading, setShowLoading}} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/news" element={<News />} ></Route>
        <Route path="/publication" element={<Publication />} ></Route>
        <Route path="/research" element={<Research />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/news/:id" element={<NewsArticle />} /> 
        <Route path="/admin-login" element={<AdminLogin />} /> 
      </Routes>
    </BrowserRouter>
    </allContexts.Provider>
  );
}

export default App;
