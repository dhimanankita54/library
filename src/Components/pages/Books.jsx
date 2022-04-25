import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div``;
 /* add required style here
`; */

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    fetch("http://localhost:8080/books")
    .then((res) => res.json())
    .then((d) => {
      console.log(d)
      setData(d)
    })
    // make a GET request to http://localhost:8080/books to get all the books data
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}

          {data.map((e) => (
            <div key={e.id}>
              <BookCard id={e.id} thumbnailUrl={e.thumbnailUrl} title={e.title} isbn={e.isbn}/>
            </div>
          ))}
      </Grid>
    </>
  );
};
export default Books;
