import React from "react";


const Media = (props) => {

    const {Title,icon} = props;
    return (
        <div className="media">              
        <div className="media-body ">
            <h5 className="mt-0">
                {Title}
            </h5>
            <p className="mb-2">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
            </p>
        </div>
        <div className="ic">
            <i className={icon}></i>
        </div>
    </div>
    )
};

export default Media;