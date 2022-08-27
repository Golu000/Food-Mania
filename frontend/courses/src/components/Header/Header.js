import React from "react";
import { Card, CardBody } from "reactstrap";
import './Header.css';

function Header({name,title}){
    return(
        <div>
            <Card color="success">
                <CardBody>
                <h1 className="text-center my-3">FOOD MANIA</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;