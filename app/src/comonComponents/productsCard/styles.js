import img from "../../static/images/3.jpg";

const styles = () => ({
  root: {
    maxWidth: "100%",
    display: "inline-block",
    backgroundImage: `url(${img})`,
    opacity: "0.85",
    borderRadius: 10,
  },
  button: {
    display: "inline-block",
  },

  price: {
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    color: "#e65100",
    fontSize: 20,
    paddingLeft: 55,
    paddingBottom: 20,
  },
});
export default styles;
