import img from "../../../../static/images/picatchy.png";

const styles = (theme) => ({
  wrapper: {
    backgroundImage: `url(${img})`,
    background: "no-Repeat",
    height: "100vh",
  },
  header: {
    paddingTop: "12%",
    paddingLeft: "2%",
    color: "#fdd835",
    fontFamily: "Comic Sans MS, Comic Sans, cursive",
    fontSize: 60,
  },
});
export default styles;
