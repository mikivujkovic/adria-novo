import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import logo from "./adria-logo-1.png";
import loginIcon from "./LogIn.png";
import { makeStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link, useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-cib/instagram";
import facebookIcon from "@iconify/icons-cib/facebook";
import twitterIcon from "@iconify/icons-cib/twitter";
import youtubeIcon from "@iconify/icons-cib/youtube";
import loginOutlined from "@iconify/icons-ant-design/login-outlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginBottom: "20px",
    width: "100vw",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    minHeight: 100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    marginTop: "20px",
    backgroundColor: "#fff",
  },
  top: {
    display: "flex",
    flex: 1,
    width: "100vw",
    height: "30px",
    backgroundColor: "#00adee",
    color: "#fff",
    fontSize: "large",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5 20",
    alignSelf: "flex-start",
    marginTop: "-20px",
    marginBottom: "20px",
  },
  social: {
    display: "flex",
    color: "#fff",
    paddingRight: "50px",
  },
  socialItem: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10",
    padding: "10px",
  },
  date: {
    color: "#fff",
    paddingLeft: "50px",
  },
  upperHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    paddingRight: "20px",
    marginBottom: "20px",
  },
  lowerHeader: {
    display: "flex",
    flex: 1,
    width: "100vw",
    backgroundColor: "#00adee",
    fontSize: "large",
    justifyContent: "center",
    padding: "5 20",
    margin: "20 0 0 0",
  },
  logo: {
    flexGrow: 1,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    fontSize: "large",
    marginLeft: "50",
  },
  headerButton: {
    marginLeft: "30px",
    marginRight: "30px",
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1.2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    color: "#fff",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function HeaderDesk(props) {
  const classes = useStyles();
  const barHeight = 120;
  const logoHeight = 30;

  const [searchValue, setSearchValue] = useState("");

  let history = useHistory();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.target.value);
      setSearchValue("");
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div className={classes.root}>
          <AppBar position="static" elevation={0} color="secondary">
            <Toolbar
              disableGutters={true}
              className={classes.toolbar}
              disableGutters={true}
            >
              <div className={classes.top}>
                <div className={classes.date}>
                  {new Date().toLocaleDateString()}
                </div>
                <div className={classes.social}>
                  <a
                    href="https://www.facebook.com/jovan.radulovic.3304"
                    className={classes.socialItem}
                  >
                    <Icon icon={facebookIcon} />
                  </a>
                  <a
                    href="https://www.instagram.com/_radulovic_jovan/"
                    className={classes.socialItem}
                  >
                    <Icon icon={instagramIcon} />
                  </a>
                  <a
                    href="https://www.instagram.com/_radulovic_jovan/"
                    className={classes.socialItem}
                  >
                    <Icon icon={twitterIcon} />
                  </a>
                  <a
                    href="https://www.instagram.com/_radulovic_jovan/"
                    className={classes.socialItem}
                  >
                    <Icon icon={youtubeIcon} />
                  </a>
                  <a
                    href="https://www.instagram.com/_radulovic_jovan/"
                    className={classes.socialItem}
                  >
                    <Icon icon={loginOutlined} />
                  </a>
                </div>
              </div>
              <div className={classes.upperHeader}>
                <div className={classes.logo}>
                  <Link to="/">
                    <img src={logo} alt="logo" style={{ height: barHeight }} />
                  </Link>
                </div>
              </div>
              <div className={classes.lowerHeader}>
                <Button
                  color="primary"
                  size="large"
                  className={classes.headerButton}
                >
                  <Link to="/category/25" className={classes.link}>
                    Info
                  </Link>
                </Button>
                <Button
                  color="primary"
                  size="large"
                  className={classes.headerButton}
                >
                  <Link to="/category/26" className={classes.link}>
                    Politika
                  </Link>
                </Button>
                <Button
                  color="primary"
                  size="large"
                  className={classes.headerButton}
                >
                  <Link to="/category/5" className={classes.link}>
                    Kultura
                  </Link>
                </Button>
                <Button
                  color="primary"
                  size="large"
                  className={classes.headerButton}
                >
                  <Link to="/category/27" className={classes.link}>
                    Tehno
                  </Link>
                </Button>
                <Button
                  color="primary"
                  size="large"
                  className={classes.headerButton}
                >
                  <Link to="/category/7" className={classes.link}>
                    Sport
                  </Link>
                </Button>
                <Button
                  color="primary"
                  size="large"
                  className={classes.headerButton}
                >
                  <Link to="/category/28" className={classes.link}>
                    Magazin
                  </Link>
                </Button>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Pretraga…"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                    onKeyPress={handleSearch}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
