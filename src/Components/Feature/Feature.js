import React from "react";
import mob2 from '../images/mobile-2.png';
import Media from "./Media/Media";
import Media2 from "./Media/Media2";

const Feature = () => {
    return (
        <div>
            <section className="feature " id="feature">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md  text-left">
                            <div className="features" id="features1">
                                <Media
                                    Title="الميزة الأولى"
                                    icon="fa fa-tree fa-2x align-self-start mx-auto"
                                />
                                <Media
                                    Title="الميزة الثانية"
                                    icon="fa fa-heart fa-2x mx-auto"
                                />
                                <Media
                                    Title="الميزة الثالثة"
                                    icon="fa fa-gavel fa-2x mx-auto"
                                />
                            </div>
                        </div>
                        <div className="col-md order-md-4 text-right">
                            <div className="features">
                                <Media2
                                Title=" الميزة الرابعة"
                                icon="fa fa-leaf fa-2x  mx-auto"
                              />
                              <Media2
                                Title=" الميزة الخامسة"
                                icon="fa fa-fire fa-2x mx-auto"
                              />
                              <Media2
                                Title=" الميزة السادسة"
                                icon="fa fa-paint-brush fa-2x mx-auto"
                              />
                            </div>
                        </div>
                        <div className="col-md order-md-1 text-center">
                            <div className="mobile-img">
                                <img src={mob2} alt="mobile-app" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Feature; 