import React from 'react'

const Filternow = (props) => {
    console.log(props);
    return (
        <div className={"filterbox" + props.type}>
            <div className="filter-header">
                <p>Filter</p>
            </div>
            <div className="typebox">
                <div>
                    <div>
                        Type
                    </div>
                    <div className="select">
                        <input type="checkbox" />
                        <label>Subscription</label>
                        <input type="checkbox" />
                        <label>Burner</label>
                    </div>
                </div>
            </div>
            <div className="card-holder">
                <select id="dropdown">
                    <option id="opt">Select cardholder</option>
                </select>
            </div>
            <div className="buttons">
                <button id="accept">Apply</button>
                <button id="decline">Clear</button>
            </div>
        </div>
    )
}

export default Filternow;