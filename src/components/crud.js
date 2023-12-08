import React,{useState} from 'react'

const Crud = (props) => {
    const [name, setName]=useState ("name");
    const [fatherName, setFatherName]=useState ("fatherName");

    const [text, setText]= useState ("name","fatherName");
    
    const changeHandler=(event)=>{
        setText(event.target.value);

    }

  
  return (
    <>
    
    <div className="container">
    <h3 className="my-2"> {props.crud}</h3>
        <div className="form" type="submit">
            <div>
                <label className="name">Name</label>
                <input type="text" className="form-control" onChange={changeHandler}/>
            </div>
            <div>
                <label className="name">Father Name</label>
                <input type="text" className="form-control" onChange={changeHandler}/>
            </div>
            <div>
                <button className="btn btn-primary my-2" type='submit'>Submit</button>

            </div>
        </div>
    </div>
    <div className="container my-3">

        <table className="table table-success">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Father Name</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{text}</td>
                    <td>{text}</td>
                </tr>
            </tbody>
        </table>
    </div>
   

    </>
  )
}

export default Crud