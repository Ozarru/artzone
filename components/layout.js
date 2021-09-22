import React, { useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  Switch,
  Badge,
  Button,
} from "@material-ui/core";
import Image from "next/image";
import { Store } from "../utils/store";
import useStyles from "../utils/styles";
import Cookies from "js-cookie";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const theme = createTheme({
    Typography: {
      h1: {
        fontSize: "2rem",
        fontWeight: 400,
        marging: "1rem 0",
      },
      h2: {
        fontSize: "1.2rem",
        fontWeight: 400,
        marging: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        // main: "#27348B",
        main: "#ff2323",
        // main: "#f0c000",
      },
    },
  });
  const classes = useStyles();
  const darkModeToggle = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("dakMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - 9art Zone` : "9art Zone"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* NavBar in this case we are using an AppBar */}
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>9art-Zone</Typography>
              </Link>
              {/* <Image src="logo.png" alt="9art Zone"></Image> */}
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Link>
              </NextLink>
              {userInfo ? (
                <Button className={classes.navbarButton}>
                  {userInfo.name}
                </Button>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>Login</Link>
                </NextLink>
              )}

              {/* Dark mode toggle */}
              <Switch checked={darkMode} onClick={darkModeToggle}></Switch>
            </div>
          </Toolbar>
        </AppBar>

        {/* Main body of the web app */}
        <Container className={classes.main}>{children}</Container>

        {/* Footer of the web app */}
        <footer className={classes.footer}>
          <Typography> All rights reserved. 9art-Zone</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
