import React, { useState } from "react";

import Container from "@material-ui/core/Container";

import AddArtist from "../forms/AddArtist";
import AddInstrument from "../forms/AddInstrument";
import Artist from "../listItems/Artist";
import Title from "../layout/Title";

import "../../App.css";

const Home = () => {
  const [artists, setArtists] = useState([]);
  return (
    <div>
      <Container className="App">
        <Title />
        <AddArtist />
        <AddInstrument artists={artists} />
        <Artist setArtists={setArtists} />
      </Container>
    </div>
  );
};

export default Home;
