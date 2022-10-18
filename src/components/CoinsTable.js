import React from "react";

export default function CoinsTable(props) {
    return (
        <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>supply</th>
                </tr>
            </thead>
            <tbody>
                {props.assets.map((data) => (
                    <tr key={data["id"]}>
                        <td>{data["rank"]}</td>
                        <td>
                            <a href={data["explorer"]} target="_blank">
                                {data["name"]}
                            </a>
                        </td>
                        <td>
                            $ {Number(data["priceUsd"]).toLocaleString("en-US")}
                        </td>
                        <td>
                            $
                            {Number(data["marketCapUsd"]).toLocaleString(
                                "en-US"
                            )}
                        </td>
                        <td>{Number(data["supply"]).toFixed(4)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
