import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import CoinsTable from "./components/CoinsTable";
import { TOTAL_COINS } from "./helpers/Coins";

function App() {
    const [assets, setAssets] = useState(TOTAL_COINS);
    const [filteredAssets, setFilteredAssets] = useState(TOTAL_COINS);

    const onCoinSearch = (val) => {
        console.log(val);
        if (val !== "") {
            const result = assets.filter((asset) =>
                asset.name.toLowerCase().includes(val.text.toLowerCase())
            );
            setFilteredAssets(result);
        } else {
            setFilteredAssets(assets);
        }
    };

    return (
        <div>
            <AppBar searchText={onCoinSearch} />
            <div className="py-4"></div>
            <div className="container">
                <div className="card">
                    <CoinsTable assets={filteredAssets} />
                </div>
            </div>
        </div>
    );
}

export default App;
