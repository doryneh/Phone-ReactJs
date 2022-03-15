import React from "react";
import two from '../images/icons/2.png';
import three from '../images/icons/3.png';
import four from '../images/icons/4.png';
import mob3 from '../images/mobile-1.png';
import OptionMedia from "./OptionMedia/Media";
const Option = () => {
    return (
        <div>
            <section className="option" id="option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 order-lg-5 col-md-7 order-md-5 ">
                            <div className="options">
                                <OptionMedia
                                    img={two}
                                    title=" يمكنك اختيار اكثر من نوع من القائمة"
                               />
                                   <OptionMedia
                                    img={three}
                                    title="يصبك هدية مع اول طلب عبر التطبيق"
                               />
                                   <OptionMedia
                                    img={two}
                                    title="  يمكنك اختيار افضل الأطباق لأفضل الطهاة"
                               />
                           
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-1 col-md-5 order-md-1">
                            <div className="images">
                                <img src={mob3} alt="phone image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Option;