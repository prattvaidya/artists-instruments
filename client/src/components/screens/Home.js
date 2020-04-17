import React from "react";

import Container from "@material-ui/core/Container";

import AddArtist from "../forms/AddArtist";
import AddInstrument from "../forms/AddInstrument";
import Artist from "../listItems/Artist";
import Title from "../layout/Title";

import "../../App.css";

const Home = () => {
  return (
    <div>
      <Container className="App">
        <Title />
        <AddArtist />
        <AddInstrument />
        <Artist />
      </Container>
    </div>
  );
};

export default Home;
