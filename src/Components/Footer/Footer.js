import React from "react";
import SocialLink from "./Social/SocialLink";
import Twits from "./Social/Twits";

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="footer">
                        <div className="row">
                            <div className="col-md">
                                <div className="widget">
                                    <div className="title">
                                        <h4>
                                            عن التطبيق
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <p>
                                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
                                        </p>
                                        <ul className="social-links list-inline">
                                           <SocialLink
                                           icon="fab fa-facebook-f"
                                           />
                                          <SocialLink
                                           icon="fab fa-linkedin-in"
                                           />
                                            <SocialLink
                                           icon="fab fa-instagram"
                                           />
                                            <SocialLink
                                           icon="fab fa-twitter"
                                           />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="widget">
                                    <div className="title">
                                        <h4>
                                            آخر التعديلات
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <ul className="twittes list-unstyled">
                                            <Twits
                                            twit="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ"
                                            />
                                            <Twits
                                            twit="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ"
                                            />
                                            <Twits
                                            twit="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ"
                                            />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="widget">
                                    <div className="title">
                                        <h4>
                                            القائمة البريدية
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <form id="emailForm" action="#" method="post" name="myForm">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="البريد الألكتروني" required name="email" />
                                                <button className="btn Form-Submit" type="submit" name="submit" value="Submit">
                                                    أضفني للقائمة البريدية
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright text-center">
                        <p>
                            جميع الحقوق محفوظة
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
};


export default Footer;