import React from "react";
import "./styles.css";

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const BookList = (props) => {
  return (
    <div className=" d-flex flex-row">
      <div className="" style={{margin : "20px"}}>
        <div className="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="250"
          />
          <div className="desc" >
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
       
            <p>{props.description}</p>
          </div>
          <button class="btn btn-danger">X</button>
        
        </div>
      </div>
    </div>
  );
};

export default BookList;
