function Footer(){
    return(
        <div>
            <div className="bg_color_green_3 py-16 z-10">
                <div className="md:container mx-auto px-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <div className="grid grid-cols-3">
                                <div>
                                    <img src="img/Frame-2.png"></img>
                                </div>
                                <div>
                                    <h3 className="text_color_cream_1 text-2xl font-semibold mt-2 mb-9">
                                        Company
                                    </h3>
                                    <a className="text_color_cream_2 text-lg mb-3 block" href="#">
                                        About Us
                                    </a>
                                    <a className="text_color_cream_2 text-lg mb-3 block" href="#">
                                        Our Service
                                    </a>
                                    <a className="text_color_cream_2 text-lg mb-3 block" href="#">
                                        Article
                                    </a>
                                </div>
                                <div>
                                    <h3 className="text_color_cream_1 text-2xl font-semibold mt-2 mb-9">
                                        Get in Touch
                                    </h3>
                                    <a className="text_color_cream_2 text-lg mb-3 block" href="#">
                                        FAQ
                                    </a>
                                    <a className="text_color_cream_2 text-lg mb-3 block" href="#">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="grid grid-cols-3">
                                <div>
                                    <h3 className="text_color_cream_1 text-2xl font-semibold mt-2 mb-9">
                                        Connect With Us
                                    </h3>
                                    <a className="text_color_cream_2 text-lg mb-3 mr-5 inline-block" href="#">
                                        <img src="img/Icon-Instagram-2.png"></img>
                                    </a>
                                    <a className="text_color_cream_2 text-lg mb-3 inline-block" href="#">
                                        <img src="img/Vector-3.png " className="-mt-8"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text_color_cream_1 text-lg text-center mt-12">
                        All Right Reserved 2021©  PT. Sosial Berkat Kreatif Indonesia
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;