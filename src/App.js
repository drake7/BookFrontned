import {Routes,Route  } from 'react-router-dom';
import './App.css';
import axios from "axios";

import BookList from './BookList';
import CreateBook from './CreateBook';
import React, { useState, useEffect } from "react";

function App() {

const [bookList, setBookList] = useState([]);
const [counter, setCounter] = useState(0);


useEffect(() => {
  axios.get("https://booklist-ak38.onrender.com/").then((res) => {
     setBookList(res.data)
  });
 
});

useEffect(() => {
  setCounter(bookList.length);
}, [bookList]);

const handleDelete = (id) => {
  axios.delete(`https://booklist-ak38.onrender.com/${id}`)
    .then(response => {
      console.log("deleted property from DB:",response.data);
      // Remove the deleted book from the bookList state
      const updatedList = bookList.filter(book => book._id !== id);
      setBookList(updatedList);
      setCounter(counter - 1);
    })
    .catch(error => {
      console.error(error);
    });
};
  return (
    <div className="App">
      
      <div className="">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
        <h1>{counter}</h1>
      </div>
      
      <div class="">
        <a class="btn btn-info float-right" href="/create-book"
          >+ Add New Book</a><br /><br />
        <hr />
        </div>
      
      <div class="d-flex flex-row">
      <Routes>
      <Route path="/" element={
          bookList.map(book => <BookList id={book._id} title={book.title} author={book.author} description={book.description} handleDelete={handleDelete} setCounter={setCounter}
            counter={counter}/>)
        } /> 
      
        <Route path="/create-book" element={<CreateBook></CreateBook>}></Route>
      </Routes></div>
    </div>
  );
}

export default App;
