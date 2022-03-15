import React from 'react';

const Button = (props) => {
    const { text, store, img } = props;
    return (
        <button type="button" className="btn  btn-lg text-right">
            <span className="icon">
                {img}
            </span>
            <p className="pt-2  ">
                {text}
                <br />
                <span className="font-weight-bold">
                    {store}
                </span>
            </p>
        </button>
    )
};

export default Button;