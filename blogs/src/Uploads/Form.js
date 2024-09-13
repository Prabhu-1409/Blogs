import React, { useState } from "react";

function Form() {
    const[image,setimage] = useState([])
    // const handlesubmit = (e)=>{
    //     e.preventDefault()
    //     const f = new FormData()
    //     f.append('file',image)
    //     const file = new FileReader()
    //     // const str = image.readAsDataURL(file)
    //     console.log([...f.entries()])
    // }
  return (
    <div>
    <form>
        <input type="file" name="file" onChange={(e)=>setimage(e.target.files[0])}></input>
        <button>Submit</button>
    </form>
    </div>
  );
}

export default Form;
