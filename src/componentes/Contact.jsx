import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css"
import axios, { Axios } from 'axios';
import { useState } from 'react';
import swal from "sweetalert";
function Contact() {


    
   
    
  


  //funcion succes con alert

  function successButton(){

    swal("THANK YOU!", "Your message was sent successfully", "success")
    document.getElementById("form-reset").reset();
  }

    const[state,setState]=useState({
        name:"",
        phone:"",
        mail:"",
        service:"",
        payment:"",
        web:""
    })
    function nameHandler(e){
        setState({...state,name:e.target.value})
    }
    function phoneHandler(e){
        setState({...state,phone:e.target.value})
    }
    function mailHandler(e){
        setState({...state,mail:e.target.value})
    }
    function serviceHandler(e){
        setState({...state,service:e.target.value})
    }
    function paymentHandler(e){
        setState({...state,payment:e.target.value})
    }
    function webHandler(e){
        setState({...state,web:e.target.value})
    }




    async function sendHandler(e){
        e.preventDefault()
        if (state.name.length>1) {
          if(state.mail.length>1){
            if(state.phone.length>1){
              if(state.service.length>1){
                if(state.payment.length>=1){
                  
                  try{successButton()
                    setState({
                      name:"",
                      phone:"",
                      mail:"",
                      service:"",
                      payment:"",
                      web:""
                  })
                  await axios.post("https://kineticc.herokuapp.com/enviar",state)
                      
                       }
                      catch(error){}
                    }
                else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
              }
              else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
            }
            else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
        }
        else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
        }
        else{
            swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")
          //try{console.log("enviando informacion...")
          //await axios.post("https://whispering-depths-85783.herokuapp.com/enviar",{name,company,mail,number,message}) }
           //catch(error){}
        //}
        }
        
        
        
    }

  return (
    <Form onSubmit={sendHandler} id="form-reset">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Write your name" onChange={nameHandler} value={state.name}/>
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter your number" onChange={phoneHandler} value={state.phone}/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={mailHandler} value={state.mail}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.<br />
        </Form.Text>
        <Form.Label>Service</Form.Label>
        <Form.Select aria-label="Default select example" onChange={serviceHandler} value={state.service}>
      <option>Open this select menu</option>
      <option value="branding">Branding</option>
      <option value="marketing">Marketing</option>
      <option value="web">Web</option>
    </Form.Select>
    <Form.Label>Quote</Form.Label>
    <Form.Select aria-label="Default select example" onChange={paymentHandler} value={state.payment}>
      <option>Open this select menu</option>
      <option value="valor1">valor1</option>
      <option value="valor2">valor2</option>
      <option value="valor3">valor3</option>
    </Form.Select>
    <Form.Label>website (optional)</Form.Label>
        <Form.Control type="text" placeholder="Write a web as a reference" onChange={webHandler} />
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;