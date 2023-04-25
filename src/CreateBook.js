import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import "./styles.css";


const CreateBook = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
  });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://booklist-ak38.onrender.com/", formData,{
        headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
               }
              
    });
    console.log({res})
    navigate('/')
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a className="btn btn-info float-left" href="/">
              Show Book List
            </a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  spellCheck={false}
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="author"
                  name="author"
                  className="form-control"
                  value={formData.author}
                  onChange={handleChange}
                  spellCheck={false}
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                  spellCheck={false}
                  data-ms-editor="true"
                />
              </div>
              <input type="submit"  className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
