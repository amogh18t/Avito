import React from 'react'
import Header from '../component/Header'
import Filter from '../component/Filter'
import Card from '../component/Card'
import Filternow from '../component/Filternow'
const Frontend=()=>{
    const API = {
        data: [
            {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            },
            {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            }, {
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            },
            {
                name: 'Quickbooks’',
                budget_name: 'Software subscription',
                owner_id: 2,
                spent: {
                    value: 50,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 250,
                    currency: "SGD"
                },
                card_type: "subscription",
                limit: 10,
                status: 'active'
            },
        ]
    }
    return(
        <div>
            <Header />
            <Filter />
            <Filternow />
            {/* <div className="mainbody">
                {
                    Object.entries(API).map((value) => {
                        return (
                            Object.entries(value[1]).map((val) => {
                                return (
                                    <Card data={val[1]} />
                                )
                            })
                        )
                    })
                }
            </div> */}
            {/* <Card data={{
                name: 'Mixmax',
                budget_name: 'Software subscription',
                owner_id: 1,
                spent: {
                    value: 100,
                    currency: "SGD"
                },
                available_to_spend: {
                    value: 1000,
                    currency: "SGD"
                },
                card_type: "burner",
                expiry: "9 feb",
                limit: 100,
                status: 'active'
            }} /> */}
        </div>
    )
}

export default Frontend;