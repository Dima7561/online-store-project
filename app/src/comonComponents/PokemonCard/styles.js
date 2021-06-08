import img from "../../static/images/2.jpg";

const styles = (theme) => ({
  wrapper: {
    backgroundImage: `url(${img})`,
    height: "150vh",
    marginTop: -100,
  },
  media: {
    color: "#000000",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
  },
  root: {
    paddingTop: 90,
    paddingLeft: 20,
    maxWidth: 500,
    borderRadius: 20,
    backgroundImage: `url(${img})`,
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    color: "#ef6c00",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    height: "100%",
    width: "100%",
  },
  price: {
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    color: "#e65100",
    fontSize: 25,
  },
  icon: {
    paddingRight: 180,
    paddingTop: 20,
    color: "#e65100",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 40,
  },
  back: {
    marginLeft: "9%",
  },

  Stats_1: {
    display: "inline-block",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 15,
    padding: 20,
    background: "#1976d2",
    borderRadius: "50%",
  },
  Stats_2: {
    display: "inline-block",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 15,
    padding: 20,
    background: "#1de9b6",
    borderRadius: "50%",
  },
  Stats_3: {
    display: "inline-block",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 15,
    padding: 20,
    background: "#ff6d00",
    borderRadius: "50%",
  },
  Stats_4: {
    display: "inline-block",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 15,
    padding: 20,
    background: "#6a1b9a",
    borderRadius: "50%",
  },
  Stats_5: {
    display: "inline-block",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 15,
    padding: 20,
    background: "#ffcdd2",
    borderRadius: "50%",
  },
  Stats_6: {
    display: "inline-block",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 15,
    padding: 20,
    background: "#26c6da",
    borderRadius: "50%",
  },
});
export default styles;
