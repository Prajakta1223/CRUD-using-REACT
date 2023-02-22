import React, { useState } from "react";

import "./style.css";
import { Form, FormGroup, Input, Button ,Table } from "reactstrap";
const AddUser = () => {

const[inputarr,setinputarr]=useState([]);
const[inputdata,setInputdata]=useState({
    username:"",  
    email:"",
    mobileno:"",
    select_status:"",
    select_user:""

})
const[index,setindex]=useState();

const[isUpdate,setisUpdate]=useState(false);

let {username,email,mobileno,select_status,select_user}=inputdata;


 const changeHandler=(e)=>
 {
    setInputdata({
        ...inputdata,
        [e.target.name]:e.target.value
    })  
 }  
 
 //let {username,email,mobileno,select_status,select_user}=inputdata;
 const btnHandler=()=>
 {
    //console.log("heelloo..");
    setinputarr([
        ...inputarr,{username,email,mobileno,select_status,select_user}])
        console.log(inputarr);
        console.log(inputdata);
        setInputdata({username:"",
        email:"",
        mobileno:"",
        select_status:"",
        select_user:""
    })
 }
// edit the user
 const EditHandler=(ind)=>{
  //console.log("edithandler");
  alert('Are you want to Update these record...!');
  let{username,email,mobileno,select_status,select_user}=inputarr[ind];
  setInputdata({username,email,mobileno,select_status,select_user});
  setisUpdate(true);
  setindex(ind);
 }
  //update the user
  const newUpdateUser=()=>
  {
    let total=[...inputarr];
    total.splice(index,1,{username,email,mobileno,select_status,select_user})
    setinputarr(total);
    //setisUpdate(false);
  }

  //for delete the user
 const deleteHandler=(ind)=>
 {
    // console.log('delete btn..');
    alert("Are you want to these record");
    let total=[...inputarr];
    total.splice(ind,1)
    setinputarr(total);
 }
  return (
      <Form className="form">
                <div className="centre"> 
                <FormGroup>

                    <Input type="text" placeholder="UserName" value={inputdata.username} name="username" onChange={changeHandler}></Input>
                    </FormGroup> 
                   <FormGroup> <Input type="text" placeholder="Email" name="email" value={inputdata.email} onChange={changeHandler} ></Input></FormGroup> {' '}
                   <FormGroup> <Input type="text" placeholder="Mobile Number" name="mobileno" value={inputdata.mobileno} onChange={changeHandler} ></Input></FormGroup> 
                   <FormGroup> <Input type="select" name="select_status" value={inputdata.select_status} onChange={changeHandler} >
                        <option>Status</option>
                        <option>Active</option>
                        <option>InActive</option>
                    </Input></FormGroup>
                    </div>

                   
                    <FormGroup> <Input type="select" name="select_user" value={inputdata.select_user} onChange={changeHandler} >
                        <option>Usertype</option>
                        <option>Admin</option>
                        <option>Staff</option>
                    </Input></FormGroup>
                    
                    <Button  onClick={!isUpdate?btnHandler:newUpdateUser} className="btn">{!isUpdate ? 'Add User':'Update User'}</Button>
                    <div style={{ borderTop: "1px solid black ", marginLeft: '20px', marginRight: '20px' ,marginTop: '20px'}}></div>
                    <Table  class="table table-striped">
                    <thead>
                    <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>MobileNo</th>
                    <th>Status</th>
                    <th>Usertype</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                       <tbody>
                       {/* <td>1</td>
                       <td>Mark</td>
                       <td>mark@gmail.com</td>
                       <td>9087678951</td>
                       <td>Active</td>
                       <td>Staff</td>
                       <td><button>Edit</button> | <button>Delete</button></td> */}
                       {
                        
                        inputarr.map(
                            (info,ind)=>{
                                
                                return(
                                      <tr key={ind}>
                                        <td>{ind+1}</td>
                                        <td>{info.username}</td>
                                        <td>{info.email}</td>
                                        <td>{info.mobileno}</td>
                                         <td>{info.select_status}</td>
                                         <td>{info.select_user}</td>
                                         <td><button type="button" onClick={()=>EditHandler(ind)}class="btn btn-success">Edit</button> | < button type="button" class="btn btn-danger" onClick={()=>deleteHandler(ind)}>Delete</button></td>
                                       </tr> 
                                )
                            }
                        )
                       }
                    
         </tbody>
      </Table>

            </Form> 
          

  );
};

export default AddUser;
