import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { v4 as uuidv4 } from "uuid";

import { ADD_INSTRUMENT, GET_INSTRUMENTS } from "../../queries/index";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddInstrument = ({ artists }) => {
  const [id] = useState(uuidv4());
  const [Year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  console.log("Artists", artists);
  const [artist, setArtist] = useState(1);

  const classes = useStyles();

  // const [addArtist] = useMutation(ADD_INSTRUMENT, {
  //   update(cache, { data: { addartist } }) {
  //     const { artists } = cache.readQuery({ query: GET_INSTRUMENTS });
  //     cache.writeQuery({
  //       query: GET_INSTRUMENTS,
  //       data: { artists: artists.concat([addArtist]) },
  //     });
  //   },
  // });

  const fullName = (artist) => `${artist.firstName} ${artist.lastName}`;

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
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Artist</InputLabel>
        <Select
          labelId="artist-select-outlined-label"
          id="artist-select-outlined"
          value={artist}
          // onChange={handleChange}
          label="Artist"
        >
          {artists.map((artist) => (
            <MenuItem value={artist.id} key={artist.id}>
              {fullName(artist)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
