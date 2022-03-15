import React from "react";
import Card from "./Card/Card"

const Faq = () => {
    return (
        <div>
            <section className="faq" id="faq">
                <div className="overlay">
                    <div className="container">
                        <div className="title text-center">
                            <h3>
                                الأسئلة الأكثر شيوعاً
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div id="accordion1">
                                    <Card
                                        href="#collapseOne"
                                        dataParent="#accordion1"
                                        dataToggle="collapse"
                                        collapse="collapse show"
                                        aria="true"
                                        id="collapseOne"
                                        question="هل التطبيق متاح بأكثر من نظام؟"
                                        answer="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."
                                    />
                                    <Card
                                        href="#collapseTwo"
                                        dataParent="#accordion1"
                                        dataToggle="collapse"
                                        collapse="collapse"
                                        id="collapseTwo"
                                        aria="false"
                                        question=" هل التطبيق مجاني بالكامل؟"
                                        answer="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."
                                    />
                                    <Card
                                        href="#collapseThree"
                                        dataParent="#accordion1"
                                        dataToggle="collapse"
                                        collapse="collapse"
                                        id="collapseThree"
                                        aria="false"
                                        question="ما نوع المطاعم المتاحة على التطبيق؟"
                                        answer="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."
                                    />
                                </div>
                            </div>
                            <div className="col-md">
                                <div id="accordion2">
                                <Card
                                        href="#collapseFour"
                                        dataParent="#accordion2"
                                        dataToggle="collapse"
                                        collapse="collapse show"
                                        id="collapseFour"
                                        aria="true"
                                        question=" هل التطبيق متاح بأكثر من نظام؟"
                                        answer="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."
                                    />
                                    <Card
                                        href="#collapseFive"
                                        dataParent="#accordion2"
                                        dataToggle="collapse"
                                        collapse="collapse"
                                        id="collapseFive"
                                        aria="false"
                                        question="هل التطبيق مجاني بالكامل؟"
                                        answer="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."
                                    />
                                     <Card
                                        href="#collapseSix"
                                        dataParent="#accordion2"
                                        dataToggle="collapse"
                                        collapse="collapse"
                                        id="collapseSix"
                                        aria="false"
                                        question=" ما نوع المطاعم المتاحة على التطبيق؟"
                                        answer="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Faq;
