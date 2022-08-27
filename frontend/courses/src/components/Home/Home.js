import React, { useEffect } from "react";
import { Button, Container } from 'reactstrap';
import './Home.css';

const Home=()=>{
    useEffect(()=>{
        document.title="Home"
    },[]);
    return(
        <div>
            
                <h1 id="name">Food Mania</h1>
                <p>
                    Welcome to Food Mania, all in one Restaurant Management System.
                </p>
                <p>
                <div>HOME: This page provides with the introduction for the Restaurant.</div>
                <div>ADD ITEMS: This page provides the interface for taking orders in precise manner with the information of item name, price and quantity.</div>
                <div>ADDED DISHES: This page provides the access with all the items which are added along with individual price calculation.</div>
                </p>
                <p>
                    Thank You.
                </p>
                {/* <Container>
                    <Button color="primary">Start Using</Button>

                </Container> */}
            

        </div>
    );
}

export default Home;