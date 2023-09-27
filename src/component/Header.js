import React from 'react'
import { Link } from 'react-router-dom';


const Header=()=>{
    return (
        <div>
            <div className="header">  
                <ul className="header-link">
                    <Link to={"#yours"}>
                        <button>
                            <li id="yours">Your</li>
                        </button>
                    </Link>
                    <Link to={"#all"}>
                        <button>
                            <li id="all">All</li>
                        </button>
                    </Link>
                    <Link to={"#blocked"}>
                        <button>
                            <li id="blocked">Blocked</li>
                        </button>
                    </Link>    
                </ul>
            </div>
        </div>
    )
}

export default Header;