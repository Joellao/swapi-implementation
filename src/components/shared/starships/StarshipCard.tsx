import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../utils/cardStyles";
import { StarshipProp } from "../../../utils/Interfaces";
import { returnAccordion } from "../films/FilmCard";

const StarshipCard = ({ data }: { data: StarshipProp }) => {
  return data.url.includes("starships") ? (
    <Card>
      <CardContent>
        <Typography sx={styles.secondary} gutterBottom className="contrasted">
          Type: Starship
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
          Model: {data.model}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Cargo capacity: {data.cargo_capacity}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Manufacturer: {data.manufacturer}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Cost in credits: {data.cost_in_credits}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Length: {data.length}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Max Atmosphering Speed: {data.max_atmosphering_speed}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Crew: {data.crew}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Passengers: {data.passengers}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Consumables: {data.consumables}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Hyperdrive rating: {data.hyperdrive_rating}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          MGLT: {data.MGLT}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Starship Class: {data.starship_class}
        </Typography>
        {returnAccordion("Pilots", data.pilots)}
        {returnAccordion("Films", data.films)}
      </CardContent>
    </Card>
  ) : null;
};

export default StarshipCard;
