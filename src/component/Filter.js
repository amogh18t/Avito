import React, { useState } from 'react'
import Filternow from './Filternow';
const Filter = () => {
    const [menu, setMenu] = useState("hidden");
    const change = () => {
        if (menu === "visible") {
            setMenu("hidden");
        }
        else {
            setMenu("visible");
        }
    }
    console.log(menu);
    return (
        <div className={"filter"}>
            <Filternow type={menu} />

            <div className="Logo">
                <p></p>
                <span></span>
            </div>
            <div className="filter-button">
                <button className="filter-button-desing" onClick={change}>
                    <div className="filter-logo">
                        <span id="one"></span>
                        <span id="two"></span>
                        <span id="three"></span>
                    </div>
                    <div>
                        <p>Filter</p>
                    </div>
                </button>
            </div>
        </div>
    )
}
export default Filter;