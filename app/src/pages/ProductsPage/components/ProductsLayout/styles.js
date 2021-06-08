import img from "../../../../static/images/3.jpg";

const styles = (theme) => ({
  wrapper: {
    backgroundImage: `url(${img})`,
    height: "420vh",
  },
  cardWrapper: {
    paddingTop: 110,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  cardMenu: {
    display: "inline",
    padding: 10,
  },
});

export default styles;
