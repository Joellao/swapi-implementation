import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@mui/material";
import styles from "../../../utils/cardStyles";
import { FilmProp } from "../../../utils/Interfaces";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const returnAccordion = (title: string, data: string[]) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {data.map((value: string, index: number) => {
        const url = value.replace("https://swapi.dev/api/", "/resources/");
        return (
          <Typography key={index}>
            <Link href={url}>{url}</Link>
          </Typography>
        );
      })}
    </AccordionDetails>
  </Accordion>
);

const FilmCard = ({ data }: { data: FilmProp }) => {
  return data.url.includes("films") ? (
    <Card>
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
          Producer: {data.producer}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Opening Crawl: {data.opening_crawl}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Episode Number: {data.episode_id}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Release Date: {data.release_date}
        </Typography>
        {returnAccordion("Characters", data.characters)}
        {returnAccordion("Planets", data.planets)}
        {returnAccordion("Starships", data.starships)}
        {returnAccordion("Vehicles", data.vehicles)}
        {returnAccordion("Species", data.species)}
      </CardContent>
    </Card>
  ) : (
    <></>
  );
};

export default FilmCard;
