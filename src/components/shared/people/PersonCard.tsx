import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../utils/cardStyles";
import { PeopleProp } from "../../../utils/Interfaces";
import { returnAccordion } from "../films/FilmCard";

const PersonCard = ({ data }: { data: PeopleProp }) => {
  return data.url.includes("people") ? (
    <Card>
      <CardContent>
        <Typography sx={styles.secondary} gutterBottom className="contrasted">
          Type: People
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={styles.mainText}
          className="contrasted"
        >
          {data?.name?.toUpperCase()}
        </Typography>
        <Typography sx={styles.secondary} gutterBottom className="contrasted">
          Born: {data.birth_year}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Eye Color: {data.eye_color}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Hair Color: {data.hair_color}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Mass: {data.mass}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Skin Color: {data.skin_color}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Gender: {data.gender}
        </Typography>
        {returnAccordion("Films", data.films)}
        {returnAccordion("Species", data.species)}
        {returnAccordion("Vehicles", data.vehicles)}
        {returnAccordion("Starships", data.starships)}
      </CardContent>
    </Card>
  ) : null;
};

export default PersonCard;
