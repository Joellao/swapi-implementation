import { CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../../../utils/cardStyles";
import { replaceURL } from "../../../utils/helperFunctions";
import { PlanetProp } from "../../../utils/Interfaces";
import ShortCard from "../cards/ShortCard";

const PlanetCardShort = ({ data }: { data: PlanetProp }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (data.url != null) {
      navigate(replaceURL(data.url), { state: data });
    }
  };
  return (
    <ShortCard onClick={handleClick}>
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
      </CardContent>
      <CardActions sx={styles.parentFlexRight}>
        <Button onClick={handleClick} size="small">
          <Typography sx={styles.secondary} className="contrasted">
            Learn More
          </Typography>
        </Button>
      </CardActions>
    </ShortCard>
  );
};

export default PlanetCardShort;
