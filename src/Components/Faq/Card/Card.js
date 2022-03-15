import React from "react";


const Card = (props) => {
    const { href, dataParent, dataToggle, collapse, id, question, answer,aria } = props;
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5>
                        <a href={href} data-parent={dataParent} data-toggle={dataToggle} aria-expanded={aria}>
                            {question}
                            <i className="fa fa-angle-down">

                            </i>
                        </a>
                    </h5>
                </div>
                <div className={collapse} id={id} data-parent={dataParent}>
                    <div className="card-block">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Card;