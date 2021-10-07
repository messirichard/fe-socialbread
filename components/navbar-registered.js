import React from "react";
import Hamburger from "./hamburger";
import Link from 'next/link'

class Navbar extends React.Component{

    render(){
        return(
            <div>
                <div className="not-registered-navbar hidden md:py-12 md:px-24 md:grid md:grid-cols-12 md:shadow-lg md:absolute md:w-full md:z-50 bg_color_white_1">
                    <div className="md:col-span-2">
                        <Link href="/">
                            <img src="img/Frame-3.png" className="cursor-pointer"></img>
                        </Link>
                    </div>
                    <div className="md:col-span-7">
                        <div className="md:grid md:grid-cols-5 md:gap-x-20 md:mt-5">
                            <div className="col-span-1">
                                <Link href="/about-us">
                                    <a href="#" className="md:text-lg md:color__green">
                                        ABOUT US
                                    </a>
                                </Link>
                            </div>
                            <div className="md:col-span-1">
                                <a href="#" className="md:text-lg md:color__green">
                                    SERVICES
                                </a>
                            </div>
                            <div className="md:col-span-1">
                                <a href="#" className="md:text-lg md:color__green">
                                    ARTICLE
                                </a>
                            </div>
                            <div className="md:col-span-1">
                                <Link href="/contact-us">
                                    <a href="#" className="md:text-lg md:color__green">
                                        CONTACT US
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-3 md:mt-3">
                        <div className="md:grid md:grid-cols-10">
                            <div className="md:col-span-2">
                                <Link href="/cart-page">
                                    <img src="img/Vector-4.png" className="md:border-r md:pr-7"></img>
                                </Link>
                            </div>
                            <div className="md:col-span-8">
                                <div className="md:grid md:grid-cols-2 md:gap-x-4 ">
                                    <div className="md:col-span-1">
                                        <button className="md:text-sm text_color_green_2 md:py-2 border_color_green_2 md:text-center md:rounded-xl md:w-full">
                                            Login
                                        </button>
                                    </div>
                                    <div className="md:col-span-1">
                                        <button className="md:text-sm text_color_white bg_color_green_2 md:py-2 md:text-center md:rounded-xl md:w-full">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    
                
                <div className="not-registered-navbar-mobile block md:hidden xl:hidden px-5 pt-6 pb-5 shadow-lg">
                    <div className="grid grid-cols-12">
                        <Hamburger/>
                        <div className="col-span-3 pl-3">
                            <a href="#">
                                <img src="img/Frame-3.png" className="w-full"></img>
                            </a>
                        </div>
                        <div className="col-span-4">
                        </div>
                        <div className="col-span-4 pt-1">
                            <div className="grid grid-cols-6 relative">
                                <div className="col-span-2 pl-2">
                                    <a href="#" className="">
                                        <img src="img/Vector-4-mobile-3.png" className="absolute top-1/2 transform -translate-y-1/2"></img>
                                    </a>
                                </div>
                                <div className="col-span-2 pl-2 border-r">
                                    <a href="#" className="">
                                        <img src="img/Vector-4-mobile-2.png" className=""></img>
                                    </a>
                                </div>
                                <div className="col-span-2 pl-2">
                                    <a href="#">
                                        <img src="img/Vector-4-mobile.png" className=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;