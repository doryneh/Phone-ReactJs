import React from 'react';


const SocialLink = (props) => {
    const {icon} = props;
    return (
        
            <li className="list-inline-item">
                <a href="#">
                    <i className={icon}></i>
                </a>
            </li>
        
    )
};

export default SocialLink;