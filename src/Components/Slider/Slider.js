import React from "react";
import mobile1 from '../images/slider/mobile1.png';
import mobile2 from '../images/slider/mobile2.png';


const Slider = () => {
    return(
        <div>
       <section className="slider" id="slider">
                <div className="container">
                    <div className="title text-center">
                        <h3>
                            شاهد التطبيق بالتفصيل
                        </h3>
                    </div>
                    <div id="carousel" className="carousel slide" data-ride="carousel" >
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1" ></li>


                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={mobile1} alt="1st slide" className="d-block img-fluid" />
                            </div>
                            <div className="carousel-item">
                                <img src={mobile2} alt="2nd slide" className="d-block img-fluid" />

                            </div>

                        </div>
                        <a href="#carousel" role="button" data-slide="prev" className="carousel-control-prev">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                        <a href="#carousel" role="button" data-slide="next" className="carousel-control-next">
                            <i className="fas fa-chevron-left"></i>
                        </a>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slider;