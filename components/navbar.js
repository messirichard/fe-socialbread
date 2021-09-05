function Navbar(){
    return(
        <div>
            <div className="py-12 px-24 grid grid-cols-12 shadow-lg absolute w-full z-50 bg_color_white_1">
                <div className="col-span-2">
                    <img src="img/Frame-3.png" ></img>
                </div>
                <div className="col-span-7">
                    <div className="grid grid-cols-5 gap-x-20 mt-5">
                        <div className="col-span-1">
                            <a href="#" className="text-lg color__green">
                                ABOUT US
                            </a>
                        </div>
                        <div className="col-span-1">
                            <a href="#" className="text-lg color__green">
                                SERVICES
                            </a>
                        </div>
                        <div className="col-span-1">
                            <a href="#" className="text-lg color__green">
                                ARTICLE
                            </a>
                        </div>
                        <div className="col-span-1">
                            <a href="#" className="text-lg color__green">
                                CONTACT US
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 mt-3">
                    <div className="grid grid-cols-10">
                        <div className="col-span-2">
                            <img src="img/Vector-4.png" className="border-r pr-7"></img>
                        </div>
                        <div className="col-span-8">
                            <div className="grid grid-cols-2 gap-x-4 ">
                                <div className="col-span-1">
                                    <button className="text-sm text_color_green_2 py-2 border_color_green_2 text-center rounded-xl w-full">
                                        Login
                                    </button>
                                </div>
                                <div className="col-span-1">
                                    <button className="text-sm text_color_white bg_color_green_2 py-2 text-center rounded-xl w-full">
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