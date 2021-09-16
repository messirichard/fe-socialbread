function Navbar(){
    return(
        <div>
            <div className="hidden md:py-12 md:px-24 md:grid md:grid-cols-12 md:shadow-lg md:absolute md:w-full md:z-50 bg_color_white_1">
                <div className="md:col-span-2">
                    <img src="img/Frame-3.png" ></img>
                </div>
                <div className="md:col-span-7">
                    <div className="md:grid md:grid-cols-5 md:gap-x-20 md:mt-5">
                        <div className="col-span-1">
                            <a href="#" className="md:text-lg md:color__green">
                                ABOUT US
                            </a>
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
                            <a href="#" className="md:text-lg md:color__green">
                                CONTACT US
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 md:mt-3">
                    <div className="md:grid md:grid-cols-10">
                        <div className="md:col-span-2">
                            <img src="img/Vector-4.png" className="md:border-r md:pr-7"></img>
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
        </div>
    )
}

export default Navbar;