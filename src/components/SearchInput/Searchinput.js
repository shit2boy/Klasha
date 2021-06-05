import React from "react";
import styles from "./search.module.css";

const Searchinput = () => {
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBox}
          type="search"
          name="search"
          placeholder="Search something..."
        />
        <img
          className={styles.searchIcon}
          src="./klashaAssets/Search.svg"
          width="20px"
          alt="search icon"
        />
      </div>
    </>
  );
};

export default Searchinput;
