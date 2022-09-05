import { CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../../../utils/cardStyles";
import { replaceURL } from "../../../utils/helperFunctions";
import { FilmProp } from "../../../utils/Interfaces";
import ShortCard from "../cards/ShortCard";

const truncate = (str: string) => <>{str?.substring(0, 50)}&hellip;</>;

const FilmCardShort = ({ data }: { data: FilmProp }) => {
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
          Type: Film
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={styles.mainText}
          className="contrasted"
        >
          {data?.title?.toUpperCase()}
        </Typography>
        <Typography sx={styles.secondary} gutterBottom className="contrasted">
          Director: {data.director}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Producer: {data.producer} <br />
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Opening Crawl:{truncate(data.opening_crawl)}
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

export default FilmCardShort;
