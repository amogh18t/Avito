import React, { useEffect, useState } from 'react'
import burner from '../images/burner.png'
import subscription from '../images/subscription.png'
const Card = (props) => {
    console.log(props.data)
    const data = props?.data;
    const [image, setImage] = useState();
    const [balance, setBalance] = useState()
    useEffect(() => {
        if (data.card_type === 'burner') {
            setImage(burner);
        }
        else {
            setImage(subscription)
        }
        let value = data.limit;
        value = (value / (value + data.spent.value))
        setBalance(value * 100);
        console.log(value)

    }, [])
    return (
        <div className="card">
            <div className="card-heading">
                <div className="card-name">
                    <h1>{data.name.length > 7 ? data.name.slice(0, 7) + '...' : data.name}</h1>
                    <div className="card-desc">
                        <div>
                            <p>{data.budget_name.length > 17 ? data.budget_name.slice(0, 17) + '...' : data.budget_name}</p>
                        </div>
                        <div>
                            <p className="seperate"></p>
                        </div>
                        <div>
                            <p>Budget</p>
                        </div>
                    </div>
                </div>
                <div className="card-img">
                    <img src={image} />
                </div>
            </div>
            <div className="card-budget">
                <div className="sec">
                    <p id="cost1">Amount</p>
                    <p>{data.available_to_spend.value} {data.available_to_spend.currency}</p>
                </div>
                <div className="sec">
                    <p id="cost1">Frequency</p>
                    <p>Monthly</p>
                </div>
                <div className="sec">
                    <p id="cost1">Expiry</p>
                    <p>{data.expiry}</p>
                </div>
            </div>
            <div className="ratio">
                <div className="line">
                    <span id="one" style={{ width: `${balance}%` }}></span>
                    <span id="two" style={{ width: `${100 - balance}%` }}></span>
                </div>
            </div>
            <div>
                <div>
                    <div className="balance">
                        <p className="list" style={{ backgroundColor: "green" }}></p>
                        <p style={{ color: "grey", width: "60px", textAlign: 'left' }}>Spent</p>
                        <div id="curr">
                            <p>{data.spent.value} {data.spent.currency}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="balance">
                        <p className="list" style={{ backgroundColor: "red" }}></p>
                        <p style={{ color: "grey", width: "60px", textAlign: 'left' }}>Balance</p>
                        <div id="curr">
                            <p >{data.limit}  {data.spent.currency}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;