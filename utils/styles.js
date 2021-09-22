import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    // backgroundColor: "#203040",
    // color: "white",
    // backgroundColor: "#27348B",
    backgroundColor: "#070720",
    // backgroundColor: "#040410",
    color: "white",
    "& a": {
      color: "white",
      marginLeft: 10,
    },
  },

  brand: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: "80vh",
  },

  section: {
    marginTop: 20,
    marginBottom: 20,
  },

  footer: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
});

export default useStyles;
