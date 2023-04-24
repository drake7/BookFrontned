import {Routes,Route  } from 'react-router-dom';
import './App.css';
import axios from "axios";

import BookList from './BookList';
import CreateBook from './CreateBook';
import React, { useState, useEffect } from "react";

function App() {

const [bookList, setBookList] = useState([]);

useEffect(() => {
  axios.get("https://booklist-ak38.onrender.com/").then((res) => {
    setBookList(res.data);
  });
}, []);

  return (
    <div className="App">
      
      <div className="">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
      </div>
      
      <div class="">
        <a class="btn btn-info float-right" href="/create-book"
          >+ Add New Book</a><br /><br />
        <hr />
        </div>
      
      <div class="d-flex flex-row">
      <Routes>
      <Route path="/" element={
          bookList.map(book => <BookList key={book.id} title={book.title} author={book.author} description={book.description} />)
        } /> 
      
        <Route path="/create-book" element={<CreateBook></CreateBook>}></Route>
      </Routes></div>
    </div>
  );
}

export default App;
