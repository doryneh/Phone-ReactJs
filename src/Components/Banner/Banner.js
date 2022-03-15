import React from "react";
import one from '../images/icons/1.png';
import play from '../images/icons/play.png';
import mob1 from '../images/mobile-1.png';
import Button from "./Button/Button";
const Banner = () => {
    return (
        <div>
            <section className="banner" id="banner">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-lg-2 col-md-7 order-md-2">
                                <div className="app-icon  ">
                                    <img src={one} alt="app-icon" />
                                </div>
                                <div className="banner-text">
                                    <h1 >
                                        مطعمك متاح أي وقت  طعام صحي وطازج دائما
                                    </h1>
                                    <p>
                                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
                                    </p>
                                    <Button
                                    text="حمّل التطبيق"
                                    store="متجر جوجل"
                                    img={<img src={play}/>}
                                    />
                                    <Button
                                    text="حمّل التطبيق"
                                    store="متجر آبل"
                                    img={ <i className="fab fa-apple"></i>}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 order-lg-1 col-md-5 order-md-1 ">
                                <div className="images  ">
                                    <img src={mob1} alt="app-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Banner;