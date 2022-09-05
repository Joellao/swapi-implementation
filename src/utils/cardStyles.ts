const styles = {
  card: {
    "&:hover": {
      color: "black",
      backgroundColor: "#FFE02E",
      "& .contrasted": {
        color: "#152026",
      },
    },
    minWidth: 275,
    cursor: "pointer",
  },
  secondary: {
    color: "#90caf9",
  },
  mainText: {
    color: "#F23041",
    marginBottom: 1,
  },
  details: {
    color: "#FFF",
    marginBottom: 2,
  },
  parentFlexRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default styles;
