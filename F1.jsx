import { useState } from "react";
function Form1(){
    const[formdata,setformdata]=useState({});
    function handlechange(e){
        const{name,value}=e.target
        setformdata({...formdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        alert(`form submitted!
        name: ${formdata.un}
        email: ${formdata.eid}`)
    }
    return(
        <>
            <form onSubmit={handlesubmit} action="">
                <label htmlFor="">username:</label>
                <input type="text" name="un" id="" onChange={handlechange}/>
                <label htmlFor="">email :</label>
                <input type="email" name="eid" id="" onChange={handlechange}/>
                <label htmlFor="">password:</label>
                <input type="password" name="pass" id="" onChange={handlechange}/>
                <label htmlFor="">confirm password:</label>
                <input type="password" name="cpass" id="" onChange={handlechange}/>
                <label htmlFor="">msg</label>
                <textarea name="msg"onChange={handlechange} value="a"></textarea>
                <label htmlFor="" >gender</label>
                <input type="radio" name="gender" value="male" onChange={handlechange} id="" />male
                <input type="radio" name="gender" value="female" onChange={handlechange} id="" />female
                <select name="city" onChange={handlechange} id="">
                    <option value="ahmedabad">ahmedabad</option>
                    <option value="rajkot">rajkot</option>
                </select>
                <input type="submit" onSubmit={handlesubmit} />
            </form>
        </>
    )
}
export default Form1