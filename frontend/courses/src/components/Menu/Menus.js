import React from "react";
import { ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import './Menus.css';

const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action"  to="/" action id="home">HOME</Link>
            <Link className="list-group-item list-group-item-action"  to="/add-item" action id="add">ADD ITEM</Link>
            <Link className="list-group-item list-group-item-action"  to="/all-items" action id="dishes">ADDED DISHES</Link>
            {/* <Link className="list-group-item list-group-item-action"  to="/total-bill" action>Bill Generation</Link> */}
            {/* <ListGroupItem tag="a" hrf="/about" action>About</ListGroupItem>
            <ListGroupItem tag="a" hrf="Contacty" action>Contact</ListGroupItem> */}
        </ListGroup>
    );
}

export default Menus;