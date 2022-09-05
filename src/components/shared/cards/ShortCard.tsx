import { Card } from "@mui/material";
import styles from "../../../utils/cardStyles";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
}
const ShortCard = ({ children, onClick }: Props) => {
  return (
    <Card sx={styles.card} onClick={onClick}>
      {children}
    </Card>
  );
};

export default ShortCard;
