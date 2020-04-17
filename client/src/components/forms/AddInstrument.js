import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";

import { ADD_INSTRUMENT, GET_INSTRUMENTS } from "../../queries/index";

const AddInstrument = () => {
  const [id] = useState(uuidv4());
  const [Year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  // const [addArtist] = useMutation(ADD_INSTRUMENT, {
  //   update(cache, { data: { addartist } }) {
  //     const { artists } = cache.readQuery({ query: GET_INSTRUMENTS });
  //     cache.writeQuery({
  //       query: GET_INSTRUMENTS,
  //       data: { artists: artists.concat([addArtist]) },
  //     });
  //   },
  // });

  return (
    <form
      onSubmit={(e) => {
        // console.log("About to add Artist");
        // e.preventDefault();
        // console.log("Prevented default");
        // addArtist({
        //   variables: {
        //     id,
        //     firstName,
        //     lastName,
        //   },
        //   optimisticResponse: {
        //     __typename: "Mutation",
        //     addArtist: {
        //       __typename: "Artist",
        //       id,
        //       firstName,
        //       lastName,
        //     },
        //   },
        //   update: (proxy, { data: { addArtist } }) => {
        //     const data = proxy.readQuery({ query: GET_INSTRUMENTS });
        //     proxy.writeQuery({
        //       query: GET_INSTRUMENTS,
        //       data: {
        //         ...data,
        //         artists: [...data.artists, addArtist],
        //       },
        //     });
        //   },
        // });
        // console.log("Operation complete");
      }}
    >
      <TextField
        label="Year"
        placeholder="i.e. 2020"
        margin="normal"
        onChange={(e) => setYear(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ margin: "10px" }}
      />
      <TextField
        label="Brand"
        placeholder="i.e. Gibson"
        margin="normal"
        onChange={(e) => setBrand(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ margin: "10px" }}
      />
      <TextField
        label="Type"
        placeholder="i.e. Bass Guitar"
        margin="normal"
        onChange={(e) => setType(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ margin: "10px" }}
      />
      <TextField
        label="Price"
        placeholder="i.e. 1000"
        margin="normal"
        onChange={(e) => setPrice(e.target.value)}
        variant="outlined"
        fullWidth
        type="number"
        style={{ margin: "10px" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", alignItems: "center", marginLeft: "10px" }}
      >
        Add Instrument
      </Button>
    </form>
  );
};

export default AddInstrument;
