import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function profilePageCC2() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:container mx-auto px-4 mb-9 pt-9 md:mb-32 md:pt-64 ">
            <div className="grid grid-cols-12 md:grid-cols-9 md:gap-x-28">
                <div className="col-span-12 md:col-span-2">
                    <h3 className="text-4xl md:text-6xl text_color_grey_2 font-medium">
                        Wowteg
                    </h3>
                    <p className="text-lg md:text-lg text_color_grey_3 mt-3">
                        Food & Baverage
                    </p>

                    <div className="grid md:hidden grid-cols-10">
                        <div className="col-span-0 md:col-span-7">
                        </div>
                        <div className="col-span-full md:col-span-3 pt-7">
                            <div className="grid grid-cols-12 gap-x-3">
                                <div className="col-span-1 pt-2">
                                    <img src="img/Icon-Instagram.png" className=""></img>
                                </div>
                                <div className="col-span-1 pt-2">
                                    <img src="img/Vector.png" className="w-10/12"></img>
                                </div>
                                <div className="col-span-6">
                                </div>
                                <div className="col-span-4">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <img src="img/Rectangle-165-2.png" className="w-full mt-8"></img>

                    <div className="grid grid-cols-8 md:grid-cols-1 md:gap-x-auto gap-x-12">
                        <div className="col-span-full">
                            <a href="#">
                                <div className="grid grid-cols-5 mt-8">
                                    <div className="col-span-4">
                                        <p className="text-sm md:text-lg font-semibold text_color_grey_2">
                                            Client Card
                                        </p>
                                    </div>
                                    <div className="col-span-1 text-right">
                                        <img src="img/bx_bxs-download-2.png" className="inline-block"></img>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-span-4 md:col-span-full">
                            <p className="text-sm md:text-lg font-semibold text_color_grey_2 mt-3 md:mt-8">
                                Address
                            </p>
                            <p className="text-xs md:text-lg font-normal text_color_grey_3 mt-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing sed est. 
                            </p>
                        </div>

                        <div className="col-span-4 md:col-span-full">
                            <p className="text-sm md:text-lg font-semibold text_color_grey_2 mt-3 md:mt-8">
                                Phone Number
                            </p>
                            <p className="text-xs md:text-lg font-normal text_color_grey_3 mt-1">
                                08976527654
                            </p>
                            <p className="text-xs md:text-lg font-normal text_color_grey_3 mt-1">
                                (021) 77688
                            </p>
                        </div>

                        <div className="hidden md:block col-span-4 md:col-span-full">
                            <p className="text-sm md:text-lg font-semibold text_color_grey_2 mt-3 md:mt-8">
                                E-Mail
                            </p>
                            <p className="text-xs md:text-lg font-normal text_color_grey_3 mt-1">
                                socialbread@gmail.com
                            </p>
                        </div>

                        <div className="col-span-4 md:col-span-full">
                            <p className="text-sm md:text-lg font-semibold text_color_grey_2 mt-3 md:mt-8 md:mt-10">
                                Content Creator
                            </p>
                            <a href="#">
                                <div className="grid grid-cols-4 gap-x-2 md:gap-x-5">
                                    <div className="col-span-1">
                                        <img className="mt-1 w-100" src="img/Rectangle-180.png">
                                        </img>
                                    </div>
                                    <div className="col-span-3 relative">
                                        <p className="text-xs md:text-lg font-normal text_color_grey_3 absolute top-1/2 transform -translate-y-1/2">
                                            Yolia Kristanto
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="block md:hidden col-span-4 md:col-span-full">
                            <p className="text-sm md:text-lg font-semibold text_color_grey_2 mt-3 md:mt-8">
                                E-Mail
                            </p>
                            <p className="text-xs md:text-lg font-normal text_color_grey_3 mt-1">
                                socialbread@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="col-span-12 md:col-span-7">
                    <div className="grid-cols-10 hidden md:grid">
                        <div className="col-span-0 md:col-span-7">
                        </div>
                        <div className="col-span-full md:col-span-3 pt-7">
                            <div className="grid grid-cols-9">
                                <div className="col-span-5">
                                </div>
                                <div className="col-span-2 pt-3">
                                    <img src="img/Icon-Instagram.png"></img>
                                </div>
                                <div className="col-span-2 pt-3">
                                    <img src="img/Vector.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 md:grid-cols-6 mb-8 md:mb-11 pt-7 md:pt-12">
                        <div className="col-span-6">
                            <div className="grid grid-cols-6 md:grid-cols-7">
                                <div className="hidden md:block col-span-3 md:col-span-1">
                                    <h3 className="text-5xl md:text-7xl color__green">
                                        06
                                    </h3>
                                    <p className="text-sm md:text-lg mt-2">
                                        Tiktok Posted
                                    </p>
                                </div>
                                <div className="hidden md:block col-span-3 md:col-span-1 md:border-l pl-5 border-black">
                                    <h3 className="text-5xl md:text-7xl text_color_grey_3">
                                        01
                                    </h3>
                                    <p className="text-sm md:text-lg text_color_grey_3 mt-2">
                                        Instagram Posted
                                    </p>
                                </div>
                                <div className="block md:hidden col-span-3 md:col-span-1">
                                    <h3 className="text-5xl md:text-7xl color__green">
                                        07
                                    </h3>
                                    <p className="text-sm md:text-lg mt-2">
                                        Content Posted
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="rounded-xl bg_color_blue border pt-5 pb-4 pl-14 pr-5 mb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-9">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                        </img>
                                        <p className="text-lg color__green inline-block">
                                            Yolia Kristanto
                                        </p>
                                    </div>
                                    <div className="col-span-1">
                                        <p className="text-sm color__green mt-4">
                                            Submited: 20/06/21, 12.30 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="tiktok.com/akkkAAAA"></input>
                            </div>
                        </div>
                    </div> */}
{/* 
                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 px-4 md:pl-14 md:pr-5 mb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-9">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-2 md:col-span-1">
                                        <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                        </img>
                                        <p className="text-lg color__green inline-block">
                                            Yolia Kristanto
                                        </p>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <p className="text-sm color__green mt-4">
                                            Submited: 20/06/21, 12.30 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl mt-4 md:mt-auto" id="username" type="text" placeholder="tiktok.com/akkkAAAA"></input>
                            </div>
                        </div>
                    </div> */}

                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 px-3 md:pl-14 md:pr-5 mb-4">
                        <div className="grid-cols-10 hidden md:grid">
                            <div className="col-span-10 md:col-span-4">
                                <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                                <p className="text-base md:text-lg color__green inline-block">
                                    Yolia Kristanto
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-4">
                                <p className="text-sm color__green mt-4">
                                    Submited: 20/06/21, 12.30 PM
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl mt-4 md:mt-auto" id="username" type="text" placeholder="tiktok.com/akkkAAAA"></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 md:hidden">
                            <div className="col-span-2 md:col-span-4">
                                <img className="w-full rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                            </div>
                            <div className="col-span-10 md:col-span-4 pl-3">
                                <p className="text-xs md:text-lg inline-block font-semibold text_color_grey_3">
                                    Yolia Kristanto
                                </p>
                                <p className="text-xs color__green mt-2">
                                    Submited: 20/06/21, 12.30 PM
                                </p>
                                <div className="col-span-12 md:col-span-3">
                                <input class="appearance-none border w-full py-1 md:py-4 md:text-sm px-1 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl mt-2 md:mt-auto text-xs" id="username" type="text" placeholder="tiktok.com/akkkAAAA"></input>
                            </div>
                            </div>
                            <div className="col-span-10 md:col-span-2">
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 px-3 md:pl-14 md:pr-5 mb-4">
                        <div className="grid-cols-10 hidden md:grid">
                            <div className="col-span-10 md:col-span-4">
                                <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                                <p className="text-base md:text-lg color__green inline-block">
                                    Yolia Kristanto
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-4">
                                <p className="text-sm color__green mt-4">
                                    Submited: -
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl mt-4 md:mt-auto" id="username" type="text" placeholder=""></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 md:hidden">
                            <div className="col-span-2 md:col-span-4">
                                <img className="w-full rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                            </div>
                            <div className="col-span-10 md:col-span-4 pl-3">
                                <p className="text-xs md:text-lg inline-block font-semibold text_color_grey_3">
                                    Yolia Kristanto
                                </p>
                                <p className="text-xs color__green mt-2">
                                    Submited: -
                                </p>
                                <div className="col-span-12 md:col-span-3">
                                <input class="appearance-none border w-full py-1 md:py-4 md:text-sm px-1 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl mt-2 md:mt-auto text-xs" id="username" type="text" placeholder=""></input>
                            </div>
                            </div>
                            <div className="col-span-10 md:col-span-2">
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 px-3 md:pl-14 md:pr-5 mb-4">
                        <div className="grid-cols-10 hidden md:grid">
                            <div className="col-span-10 md:col-span-4">
                                <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                                <p className="text-base md:text-lg color__green inline-block">
                                    Yolia Kristanto
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-4">
                                <p className="text-sm color__green mt-4">
                                    Submited: -
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl mt-4 md:mt-auto" id="username" type="text" placeholder=""></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 md:hidden">
                            <div className="col-span-2 md:col-span-4">
                                <img className="w-full rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                            </div>
                            <div className="col-span-10 md:col-span-4 pl-3">
                                <p className="text-xs md:text-lg inline-block font-semibold text_color_grey_3">
                                    Yolia Kristanto
                                </p>
                                <p className="text-xs color__green mt-2">
                                    Submited: -
                                </p>
                                <div className="col-span-12 md:col-span-3">
                                <input class="appearance-none border w-full py-1 md:py-4 md:text-sm px-1 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl mt-2 md:mt-auto text-xs" id="username" type="text" placeholder=""></input>
                            </div>
                            </div>
                            <div className="col-span-10 md:col-span-2">
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 px-3 md:pl-14 md:pr-5 mb-4">
                        <div className="grid-cols-10 hidden md:grid">
                            <div className="col-span-10 md:col-span-4">
                                <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                                <p className="text-base md:text-lg color__green inline-block">
                                    Yolia Kristanto
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-4">
                                <p className="text-sm color__green mt-4">
                                    Submited: -
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl mt-4 md:mt-auto" id="username" type="text" placeholder=""></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 md:hidden">
                            <div className="col-span-2 md:col-span-4">
                                <img className="w-full rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                            </div>
                            <div className="col-span-10 md:col-span-4 pl-3">
                                <p className="text-xs md:text-lg inline-block font-semibold text_color_grey_3">
                                    Yolia Kristanto
                                </p>
                                <p className="text-xs color__green mt-2">
                                    Submited: -
                                </p>
                                <div className="col-span-12 md:col-span-3">
                                <input class="appearance-none border w-full py-1 md:py-4 md:text-sm px-1 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl mt-2 md:mt-auto text-xs" id="username" type="text" placeholder=""></input>
                            </div>
                            </div>
                            <div className="col-span-10 md:col-span-2">
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 px-3 md:pl-14 md:pr-5 mb-4">
                        <div className="grid-cols-10 hidden md:grid">
                            <div className="col-span-10 md:col-span-4">
                                <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                                <p className="text-base md:text-lg color__green inline-block">
                                    Yolia Kristanto
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-4">
                                <p className="text-sm color__green mt-4">
                                    Submited: -
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl mt-4 md:mt-auto" id="username" type="text" placeholder=""></input>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 md:hidden">
                            <div className="col-span-2 md:col-span-4">
                                <img className="w-full rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                </img>
                            </div>
                            <div className="col-span-10 md:col-span-4 pl-3">
                                <p className="text-xs md:text-lg inline-block font-semibold text_color_grey_3">
                                    Yolia Kristanto
                                </p>
                                <p className="text-xs color__green mt-2">
                                    Submited: -
                                </p>
                                <div className="col-span-12 md:col-span-3">
                                <input class="appearance-none border w-full py-1 md:py-4 md:text-sm px-1 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl mt-2 md:mt-auto text-xs" id="username" type="text" placeholder=""></input>
                            </div>
                            </div>
                            <div className="col-span-10 md:col-span-2">
                            </div>
                        </div>
                    </div>

{/*                     
                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 pl-14 pr-5 mb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-9">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                        </img>
                                        <p className="text-lg color__green inline-block">
                                            Yolia Kristanto
                                        </p>
                                    </div>
                                    <div className="col-span-1">
                                        <p className="text-sm color__green mt-4">
                                            Submited: -
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder=""></input>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 pl-14 pr-5 mb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-9">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                        </img>
                                        <p className="text-lg color__green inline-block">
                                            Yolia Kristanto
                                        </p>
                                    </div>
                                    <div className="col-span-1">
                                        <p className="text-sm color__green mt-4">
                                            Submited: -
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder=""></input>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg_color_blue border pt-5 pb-4 pl-14 pr-5 mb-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-9">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <img className="w-14 h-14 rounded-full inline-block mr-5" src="img/Rectangle-180.png">
                                        </img>
                                        <p className="text-lg color__green inline-block">
                                            Yolia Kristanto
                                        </p>
                                    </div>
                                    <div className="col-span-1">
                                        <p className="text-sm color__green mt-4">
                                            Submited: -
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder=""></input>
                            </div>
                        </div>
                    </div>
                     */}
                    <h3 className="text-lg md:text-5xl font-semibold color__green mt-8 md:mt-auto mb-8 md:mb-16">
                        Pesan
                    </h3>
                    <div className="grid grid-cols-12 gap-x-2">
                        <div className="col-span-2">
                            <img src="img/Rectangle-183.png"></img>
                        </div>
                        <div className="col-span-10 mb-11">
                            <h4 className="text-xs md:text-2xl color__green font-semibold mb-2 md:mb-5">
                                Wowteg
                            </h4>
                            <div className="px-6 py-4 md:px-16 md:py-6 bg_color_green_2 rounded-t-3xl rounded-br-3xl">
                                <p className="text-xs md:text-lg text_color_white_2 ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate turpis tempor nisi, 
                                    magna eget eget. Sit ut quis aliquam laoreet phasellus. Eget accumsan, posuere ut pulvinar suscipit 
                                    nulla. Lacus amet, tincidunt ac neque maecenas sit. Condimentum aliquet donec pretium, quis proin ac 
                                    elit cras gravida. Massa tempus dis dui enim, metus nunc sed lorem. Adipiscing nisl viverra amet, ut quam 
                                    enim sed scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-10 mb-5 md:mb-11">
                            <h4 className="text-xs md:text-2xl color__green font-semibold mb-2 md:mb-5 text-right">
                                Yolia Kristanto
                            </h4>
                            <div className="px-6 py-4 md:px-16 md:py-6 bg_color_blue rounded-t-3xl rounded-bl-3xl">
                                <p className="text-xs md:text-lg color__green">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate turpis tempor nisi, 
                                    magna eget eget. Sit ut quis aliquam laoreet phasellus. Eget accumsan, posuere ut pulvinar suscipit 
                                    nulla. Lacus amet.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 text-right">
                            <img src="img/Rectangle-192.png" className="inline-block"></img>
                        </div>
                        <div className="col-span-10 mb-5 md:mb-24">
                            <h4 className="text-xs md:text-2xl color__green font-semibold mb-5 text-right">
                                Admin
                            </h4>
                            <div className="px-6 py-4 md:px-16 md:py-6 bg_color_blue rounded-t-3xl rounded-bl-3xl">
                                <p className="text-xs md:text-lg color__green">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate turpis tempor nisi, 
                                    magna eget eget. Sit ut quis aliquam laoreet phasellus. Eget accumsan, posuere ut pulvinar suscipit 
                                    nulla. Lacus amet.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 text-right">
                            <img src="img/Rectangle-192.png" className="inline-block"></img>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 md:grid-cols-12 gap-x-3">
                        <div className="col-span-10 md:col-span-11">
                            <input class="appearance-none border w-full py-3 md:py-5 text-xs md:text-2xl bg_color_grey_2 px-3 md:px-12 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Add Comment"></input>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <button className=" px-4 py-2 md:px-6 md:py-3 rounded md:rounded-2xl bg_color_green w-full">
                                <img src="img/Group.png" className="w-full"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default profilePageCC2;