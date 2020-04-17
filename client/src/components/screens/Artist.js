import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import RemoveArtist from "../buttons/RemoveArtist";
import DisplayCard from "../cards/DisplayCard";

import { GET_ARTIST } from "../../queries/index";

const Artist = ({ match }) => {
  const id = match.params.id;

  const { loading, error, data } = useQuery(GET_ARTIST, {
    variables: { id },
  });

  const fullName = (artist) => `${artist.firstName} ${artist.lastName}`;

  return (
    <>
      {data && (
        <DisplayCard>
          <>
            <ListItem>
              <ListItemText primary={fullName(data.artist)} />
              <Button
                variant="contained"
                style={{
                  margin: "5px",
                }}
              >
                Edit
              </Button>
              <RemoveArtist
                id={data.artist.id}
                firstName={data.artist.firstName}
                lastName={data.artist.lastName}
              />
            </ListItem>
            <CardActions>
              <Link to={`/`}>
                <Button color="primary" size="small" variant="outlined">
                  Go back to Home
                </Button>
              </Link>
            </CardActions>
          </>
        </DisplayCard>
      )}
    </>
  );
};

export default Artist;
