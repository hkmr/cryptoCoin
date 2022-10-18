import React from "react";
import SearchForm from "./SearchForm";
import styles from "../styles/home.module.css";

export default function AppBar(props) {
    const searchFormHandler = (val) => {
        props.searchText(val);
    };

    return (
        <nav className="navbar is-fixed-top is-link" role="navigation">
            <div className="navbar-brand">
                <h2 className={`navbar-item ${styles.logo}`}>CryptoCoin</h2>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <SearchForm onSearch={searchFormHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
