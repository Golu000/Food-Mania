import { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input,Col,Row } from "reactstrap";
import axios from "axios";
import './AddCourse.css';

import base_url from "../../Api/Bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Dishes "
    },[]);

    const [course,setCourse]=useState({});

    //form handler form
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        console.log(data);
        axios.post(`${base_url}/dishes`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("item added successfully")
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("error! something went wrong");
            }
        )
    }

    return(
        <Row>
        <Col>
        <Fragment>
            <h1  className="text-center" id="adding">Add the details of Item</h1>
            <Form onSubmit={handleForm}>
                
                <FormGroup>
                    <label for="title">Name of Item</label>
                    <Input type="text" placeholder="Enter here" id="title" onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}/>
                    
                </FormGroup>
                <FormGroup>
                    <label for="price">Price</label>
                    <Input type="number" placeholder="Enter here" id="price" onChange={(e)=>{
                        setCourse({...course,price:e.target.value});
                    }}/>
                    
                </FormGroup>

                <FormGroup>
                    <label for="quantity">Quantity</label>
                    <Input type="number" placeholder="Enter here" id="quantity" onChange={(e)=>{
                        setCourse({...course,quantity:e.target.value});
                    }}/>
                    
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit"color="success">Add Item</Button>
                    <Button type="reset" color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
        </Col>
        <Col>
            <h3 id="starter">STARTERS</h3>
                <div>Spring Rolls  <span id="Spring">Rs.80/-</span></div>
                <div>French Onion Soup <span id="French"> Rs.70/- </span></div>
                <div>Tomato Bruschetta <span id="Tomato"> Rs.70/-</span></div>
                <div>Chicken Kebab<span id="Kebab">  Rs.150/-</span></div>
                <div>Caesar Salad <span id="Caesar">Rs.50/-</span></div>
                <br></br>
             <h3 id="starter">SIDE DISHES</h3>
                <div>Mixed Green Salad &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs.60/-</div>
                <div>Garden Vegetables &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs.90/-</div>
                <div>Fench Fries &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.100/-</div>
                <div>Peri Peri Pasta &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.120/-</div>
                <div>Garlic Bread &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.65/-</div>
        </Col>
        <Col>
            <h3 id="starter">MAIN COURSE</h3>
                <div>Grilled Salmon with Dill Sauce&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Rs.380/-</div>
                <div>Roast Chicken with Vegetables&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Rs.350/-</div>
                <div>Chicken and Mushroom Pie &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs.350/-</div>
                <div>Marrakesh Vegetarian Curry&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Rs.320/-</div>
                <div>Eggplant Lasagne &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs.300/-</div>
                <br></br>
                
            <h3 id="starter">DESSERT</h3>
                <div>Apple Pie with cream &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.120/-</div>
                <div>Lemon Meringue Pie&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs.120/-</div>
                <div>Vanilla Ice Cream &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.100/-</div>
                <div>Crepe Suzette &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.120/-</div>
                <div>Fruit Salad&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs.100/-</div>
        </Col>
        </Row>
        
    );
}

export default AddCourse;
