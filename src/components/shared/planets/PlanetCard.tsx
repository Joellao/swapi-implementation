import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../utils/cardStyles";
import { PlanetProp } from "../../../utils/Interfaces";
import { returnAccordion } from "../films/FilmCard";

const PlanetCard = ({ data }: { data: PlanetProp }) => {
  return data.url.includes("planets") ? (
    <Card>
      <CardContent>
        <Typography sx={styles.secondary} gutterBottom className="contrasted">
          Type: Planet
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
          Gravity: {data.gravity}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Diameter: {data.diameter}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Climate: {data.climate}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Rotation Period: {data.rotation_period}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Orbital Period: {data.orbital_period}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Terrain: {data.terrain}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Surface Water: {data.surface_water}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Population: {data.population}
        </Typography>
        {returnAccordion("Residents", data.residents)}
        {returnAccordion("Films", data.films)}
      </CardContent>
    </Card>
  ) : null;
};

export default PlanetCard;
