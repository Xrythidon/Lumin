import React, { useState } from "react";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
    const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
      e.preventDefault()
      if(keyword.trim()){
        router.push(`/?keyword=${keyword}`)
      } else {
          router.push("/")
      }

  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
          Search
      </Button>
    </Form>
  );
};

export default SearchBox;
