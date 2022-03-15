import React from 'react';


const Twits = (props) => {
    const { twit } = props;
    return (
        <div>
            <li>
                <div className="twit"> <i className="fab fa-twitter" ></i></div>
                {twit}
            </li>
        </div>
    )
};

export default Twits;