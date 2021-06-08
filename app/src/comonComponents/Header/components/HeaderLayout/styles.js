const styles = (theme) => ({
  wrapper: {
    height: "0vh",
  },
  button: {
    color: "#212121",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
  },
  user: {
    fontSize: 22,
  },

  form: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "2%",

    "& > *": {
      margin: theme.spacing(2),
      textDecoration: "none",
      color: "#fdd835",
      fontFamily: "Comic Sans MS, Comic Sans, cursive",
    },
  },
  cart: {
    display: "flex",
    justifyContent: "flex-end",
    width: "57%",
    "& > *": {
      color: "#b2dfdb",
    },
  },
});
export default styles;
