import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../utils/cardStyles";
import { SpeciesProp } from "../../../utils/Interfaces";
import { returnAccordion } from "../films/FilmCard";

const SpecieCard = ({ data }: { data: SpeciesProp }) => {
  return data.url.includes("species") ? (
    <Card>
      <CardContent>
        <Typography sx={styles.secondary} gutterBottom className="contrasted">
          Type: Species
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
          Classification: {data.classification}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Language: {data.language}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Skin Colors: {data.skin_colors}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Designation: {data.designation}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Average Height: {data.average_height}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Hair Colors: {data.hair_colors}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Eye Colors: {data.eye_colors}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Average Lifespan: {data.average_lifespan}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Homeworld: {data.homeworld}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Language: {data.homeworld}
        </Typography>
        {returnAccordion("People", data.people)}
        {returnAccordion("Films", data.films)}
      </CardContent>
    </Card>
  ) : null;
};

export default SpecieCard;
