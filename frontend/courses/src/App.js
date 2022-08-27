import React from "react";
//import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from "reactstrap";
import {toast, ToastContainer} from "react-toastify";
import Home from "./components/Home/Home";
//import Course from "./components/Course";
import AddCourse from "./components/Addcourse/AddCourse";
import Allcourses from "./components/Allcourse/Allcourses";
import Header from "./components/Header/Header";
import Menus from "./components/Menu/Menus";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Bill from "./components/Bill/Bill";
import { useState } from "react";



function App() {

  const [user,setLoginUser] = useState({})
  
  return(
   

      <div>
       
        
        <Router>
        <ToastContainer/> 
        <Container>
          <Header/>
          <Row>
            
            <Col md={12}>
            <Switch>
            {/* <Col md={4}>
              <Menus setLoginUser={setLoginUser}/>
            </Col> */}
                 <Route exact path='/'>
                  {
                    user && user._id? [<Menus/>,<Home setLoginUser={setLoginUser}/>] : 
                    <Login setLoginUser={setLoginUser}/>
                  }
                 </Route>
                 
                 <Route exact path="/add-item" >
                 {
                    user && user._id? [<Menus/>,<AddCourse setLoginUser={setLoginUser}/>] : 
                    <Login setLoginUser={setLoginUser}/>
                  }
                 </Route>
                 
                 <Route exact path="/all-items">
                 {
                    user && user._id? [<Menus/>,<Allcourses setLoginUser={setLoginUser}/>] : 
                    <Login setLoginUser={setLoginUser}/>
                  }
                 </Route>
                 {/* <Route exact path="/all-items">
                 {
                    user && user._id? [<Menus/>,<Bill setLoginUser={setLoginUser}/>] : 
                    <Login setLoginUser={setLoginUser}/>
                  }
                 </Route> */}
                 <Route exact path="/login">
                    <Login setLoginUser={setLoginUser}/>
                 </Route>
                 <Route exact path="/register"> <Register /></Route>
            </Switch>
            
            

              {/* <Home/> */}
            </Col>
          </Row>
        </Container>
        </Router>
        
      </div>
  );
}

export default App;
