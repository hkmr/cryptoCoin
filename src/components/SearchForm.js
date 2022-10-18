import React, { useState } from "react";

export default function SearchForm(props) {
    const onSearchChange = (event) => {
        const data = {
            text: event.target.value,
        };
        props.onSearch(data);
    };

    const onFormSubmit = (e) => e.preventDefault();

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    className="input is-small"
                    onChange={onSearchChange}
                    placeholder="Search Coin"
                />
            </form>
        </div>
    );
}
