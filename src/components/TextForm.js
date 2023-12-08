import React,{useState} from 'react'
import "./TextForm.css"
import Alert from './alert';


export const TextForm = (props) => {
    const [btnText, setBtnText]=useState("Enable Light Mode");

  
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to Upper Case !","success");

    }
    const handleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to lower Case !","success");
    }



    //clear text
    const handleClear =()=>{
        let newText = "";
        setText(newText);
        props.showAlert("text cleared !","success");
    }

    //Remove extra spaces
    const handleExtraSpaces =() =>{
        let newText = text.split (/[ ] + /);
        setText (newText.join(" "))
    }


    // copy text 
     const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard !","info");
    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText ]= useState("");

   
return (
    <>
        <div className="container" style={{color:props.mode === "dark" ? "white" : "black"}}>
            <h1 > {props.heading}</h1>
        
            <div className="form-floating mb-3" >
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
            style={{height: "250px", 
            backgroundColor: props.mode === "dark" ? "lightBlue" : "white",
            color:props.mode === "dark" ? "darkblue" : "black"}} ></textarea>
            </div>
            <button className="btn btn-primary m-1 " onClick = {handleUpClick}>Convert to UPERCASE</button>
            <button className="btn btn-primary  m-1" onClick = {handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-danger  m-1" onClick = {handleClear}>Clear Text</button>
            {/* <button className="btn btn-danger  m-2" onClick = {toggleBtn}>{btnText}</button> */}
            <button className="btn btn-success m-1" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-success  m-1" onClick = {handleExtraSpaces}>Remove extra Space</button>
     
            
        </div>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length-1} word and {text.length}  characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>

            <h2>Preview</h2>
            <hr style={{border:" solid indigo 2px"}}></hr>
            <div className="container" style={{
            backgroundColor: props.mode === "dark" ? "transparent" : "white",
            color:props.mode === "dark" ? "white" : "black", fontSize:"18px", fontStyle:"italic"}}>
                {text.length > 0 ? text : "Enter something above to preview here...!"}
            </div>
        </div>
    </>
  )
}
