import React from "react";
import { Form, Input } from "reactstrap";

const SearchMovie = (props) => {
  const [getMovie, setGetMovie] = React.useState("");

  function handleChange(e) {
    setGetMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (getMovie === "") {
      alert("Movie cannot be empty");
    } else {
      props.GetMovies(getMovie);
      setGetMovie("");
      e.target.reset()
    }
  }

  return (
    <div>
      <Form style={{width: "1800px", justifyContent: "space-evenly"}} inline onSubmit={handleSubmit}>
        <Input
          name="getMovie"
          onChange={handleChange}
          placeholder="Search your movies..."
          onSubmit={handleSubmit}
          style={{height: "30px"}}
        />
      </Form>
    </div>
  );
};

export default SearchMovie;