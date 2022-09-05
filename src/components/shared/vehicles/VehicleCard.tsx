import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../utils/cardStyles";
import { VehicleProp } from "../../../utils/Interfaces";
import { returnAccordion } from "../films/FilmCard";

const VehicleCard = ({ data }: { data: VehicleProp }) => {
  return data.url.includes("vehicle") ? (
    <Card>
      <CardContent>
        <Typography sx={styles.secondary} gutterBottom className="contrasted">
          Type: Vehicle
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
          Cost: {data.cost_in_credits}
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
          Length: {data.length}
        </Typography>
        <Typography
          sx={styles.details}
          className="contrasted"
          variant="body2"
          color={"#FFE02E"}
        >
          Max Atmosphering speed: {data.max_atmosphering_speed}
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
          Cargo Capacity: {data.cargo_capacity}
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
          Vehicle class: {data.vehicle_class}
        </Typography>
        {returnAccordion("Pilots", data.pilots)}
        {returnAccordion("Films", data.films)}
      </CardContent>
    </Card>
  ) : null;
};

export default VehicleCard;
