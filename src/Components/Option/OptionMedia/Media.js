import React from "react";

const OptionMedia = (props) => {
    const { img, title} = props;
    return (
        <div>
            <div className="media">
                <div className="suwar"> <img src={img} alt="generic placeholder image" className="ml-3" /></div>
                <div className="media-body">
                    <h5 className="mt-0">
                        {title}
                    </h5>
                    <p className="mb-2">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ                    </p>
                </div>
            </div>
        </div>
    )
};

export default OptionMedia;
