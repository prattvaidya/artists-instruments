import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_INSTRUMENTS } from "../../queries/index";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DisplayCard from "../cards/DisplayCard";
// import RemoveInstrument from "../buttons/RemoveInstrument";

const Instrument = ({ artistId }) => {
  const { loading, error, data } = useQuery(GET_INSTRUMENTS, {
    variables: { artistId },
  });

  const instrumentName = (instrument) =>
    `${instrument.year} ${instrument.brand} ${instrument.type}`;

  return (
    <div>
      {data &&
        data.instruments.map((instrument) => (
          <DisplayCard>
            <>
              <ListItem>
                <ListItemText
                  primary={instrumentName(instrument)}
                  secondary={`$${instrument.price}`}
                />
                <Button
                  variant="contained"
                  style={{
                    margin: "5px",
                  }}
                >
                  Edit
                </Button>
                {/* <RemoveInstrument id={instrument.id} /> */}
              </ListItem>
            </>
          </DisplayCard>
        ))}
    </div>
  );
};

export default Instrument;
