import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ARTISTS } from "../../queries";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import RemoveArtist from "../buttons/RemoveArtist";
import DisplayCard from "../cards/DisplayCard";
import Instrument from "./Instrument";

const useStyles = makeStyles({
  label: {
    textDecoration: "none",
  },
});

const Artist = () => {
  const { loading, error, data } = useQuery(GET_ARTISTS);
  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);
  const classes = useStyles();

  const fullName = (artist) => `${artist.firstName} ${artist.lastName}`;

  return (
    <>
      {data &&
        data.artists.map((artist) => (
          <DisplayCard key={artist.id}>
            <Fragment>
              <ListItem>
                <ListItemText primary={fullName(artist)} />
                <Button
                  variant="contained"
                  style={{
                    margin: "5px",
                  }}
                >
                  Edit
                </Button>
                <RemoveArtist
                  id={artist.id}
                  firstName={artist.firstName}
                  lastName={artist.lastName}
                />
              </ListItem>
              <CardActions>
                <Link to={`/artist/${artist.id}`}>
                  <Button color="primary" size="small" variant="outlined">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Fragment>
            <Instrument artistId={artist.id} />
          </DisplayCard>
        ))}
    </>
  );
};

export default Artist;
