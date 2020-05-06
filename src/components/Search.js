import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import PostCardJovo from "./PostCardJovo";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import searchIcon from "@iconify/icons-bytesize/search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: "10px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    flexGrow: 1,
  },
  pagination: {
    diplay: "flex",
    alignItems: "center",
    justifyItems: "center",
    alignSelf: "center",
  },
  cont: {
    alignSelf: "center",
    minWidth: "300px",
  },
  searchInput: {
    fontSize: "24px",
    marginBottom: "30px",
    border: "1px solid #00adee",
    borderRdius: "20px",
    width: "70%",
    height: "50px",
    backgroundColor: "white",
    color: "black",
    paddingLeft: "20px",
    backgroundImage: searchIcon,
    backgroundPosition: "10px 10px",
    backgroundRepeat: "no-repeat",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  },
  content: {
    diplay: "flex",
    alignItems: "center",
    justifyItems: "center",
    alignSelf: "center",
    margin: "0 auto",
    maxWidth: "min(1200px, 90%)",
  },
}));

function Search(props) {
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [term, setTerm] = useState(props.match.params.term);
  const [inputValue, setInputValue] = useState(props.match.params.term);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://biohackers.me/wp-json/wp/v2/posts?search=${term}&per_page=10&page=${page}`
      );
      setData(result.data);
      setTotal(result.headers["x-wp-total"]);
      setPages(result.headers["x-wp-totalpages"]);
      setTerm(props.match.params.term);
      setInputValue(props.match.params.term);
      window.scrollTo(0, 0, { behaviour: "smooth" });
    };

    fetchData();
  }, [page, term, props.match.params.term]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.target.value);
      setTerm(inputValue);
      history.push(`/search/${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.searchContainer}>
          <h1>Pretraga</h1>
          <input
            type="text"
            placeholder="search..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyPress={handleSearch}
            className={classes.searchInput}
          ></input>
        </div>
        <Grid container justify="center" spacing={5}>
          {data.map((post) => (
            <Grid
              item
              key={post.id}
              xs={12}
              sm={6}
              lg={4}
              align="center"
              justify="center"
              className={classes.cont}
            >
              <PostCardJovo post={post} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Pagination
          count={pages.toString()}
          color="secondary"
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
