
import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import { render } from 'react-dom';
// import About from './components/about';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './components/about';
import React, { useState } from 'react';
import Alert from './components/alert';



function App() {
  const [mode, setMode] = useState("light"); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type )=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  
  }


  const toggleMode = ()=>{
    if(mode ==="light"){
      setMode ("dark");
      document.body.style.backgroundColor ="#2F4F4F"
      document.body.style.color ="white"
      showAlert("Dark Mode is enabled !","info");
      // for chanding the title on each page or button. 
      document.title="Yadgar-Tex Dark Mode";
      //for running something on interval like adds we can do as follow: 
     
      setInterval(() => {
        document.title="Install Yadgar-Text"
      }, 1000);
     
      
    }
 
    else{
      setMode("light");
      document.body.style.backgroundColor ="white"
      document.body.style.color ="black"
      showAlert("Light Mode is enabled !","info");
      document.title="Yadgar-Tex Light Mode";
     
    }
   
  }



return (
   <>
     <BrowserRouter>
     <Navbar title ="Yadgar-App" about="About Us " crud="Crud Operations" mode={mode}toggleMode={toggleMode}/>
      <Alert alert={alert}/>

    <Routes>
      <Route path="/" element={<TextForm mode={mode} heading = "Enter your text here"showAlert={showAlert} />} />
      <Route path="/About" element={<About/>} />
    



    </Routes>
    
    </BrowserRouter>

   </>
  );
}

export default App;
