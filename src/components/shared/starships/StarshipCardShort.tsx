import { CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../../../utils/cardStyles";
import { replaceURL } from "../../../utils/helperFunctions";
import { StarshipProp } from "../../../utils/Interfaces";
import ShortCard from "../cards/ShortCard";

const StarshipCardShort = ({ data }: { data: StarshipProp }) => {
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

export default StarshipCardShort;
