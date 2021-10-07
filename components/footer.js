import Link from 'next/link'

function Footer(){
    return(
        <div>
            <div className="bg_color_green_5 pt-11 pb-9 md:py-16 md:z-10">
                <div className="px-7 md:container md:mx-auto md:px-0">
                    <div className="md:grid md:grid-cols-10">
                        <div className="md:col-span-7">
                            <div className="grid md:grid-cols-4 grid-cols-4">
                                <div className="md:col-span-1 col-span-4">
                                    <img src="img/Frame-2.png" className="w-20 mb-7 md:w-3/4"></img>
                                </div>
                                <div className="md:col-span-1 col-span-2 pl-8 md:pl-0">
                                    <h3 className="text_color_cream_1 text-xs mb-4 md:text-2xl font-semibold md:mt-2 md:mb-9">
                                        Company
                                    </h3>
                                    <Link href="/about-us">
                                        <a className="text_color_cream_2 text-xs mb-4 md:text-lg md:mb-3 block" href="#">
                                            About Us
                                        </a>
                                    </Link>
                                    <a className="text_color_cream_2 text-xs mb-4 md:text-lg md:mb-3 block" href="#">
                                        Our Service
                                    </a>
                                    <a className="text_color_cream_2 text-xs mb-4 md:text-lg md:mb-3 block" href="#">
                                        Article
                                    </a>
                                </div>
                                <div className="md:col-span-1 col-span-2">
                                    <h3 className="text_color_cream_1 text-xs mb-4 md:text-2xl font-semibold md:mt-2 md:mb-9">
                                        Get in Touch
                                    </h3>
                                    <Link href="/faqs-page">
                                        <a className="text_color_cream_2 text-xs mb-4 md:text-lg md:mb-3 block" href="#">
                                            FAQ
                                        </a>
                                    </Link>
                                    <Link href="/contact-us">
                                        <a className="text_color_cream_2 text-xs mb-4 md:text-lg md:mb-3 block" href="#">
                                            Contact Us
                                        </a>
                                    </Link>
                                </div>
                                <div className="md:col-span-1 col-span-2 pl-8 md:pl-0">
                                    <h3 className="text_color_cream_1 text-xs mt-7 mb-4 md:text-2xl font-semibold md:mt-2 md:mb-9">
                                        Connect With Us
                                    </h3>
                                    <a className="text_color_cream_2 text-xs mb-4 md:text-lg md:mb-3 mr-5 inline-block" href="#">
                                        <img src="img/Icon-Instagram-2.png"></img>
                                    </a>
                                    <a className="text_color_cream_2 text-xs mb-4 md:text-lg md:mb-3 inline-block" href="#">
                                        <img src="img/Vector-3.png " className="-mt-8"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text_color_cream_1 text-xs md:text-lg text-center mt-8 md:mt-12">
                        All Right Reserved 2021©  PT. Sosial Berkat Kreatif Indonesia
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;