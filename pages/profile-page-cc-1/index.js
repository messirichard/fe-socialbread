import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function profilePageCC1() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:container mx-auto px-5 mb-8 md:mb-32 md:pt-64">
            <h1 className="text-2xl md:text-6xl color__green font-medium mb-4 md:mb-14">
                Profil
            </h1>
            <div className="grid grid-cols-12 mb-20">
                <div className="col-span-6 md:col-span-2 mb-3 md:mb-0">
                    <img src="img/Rectangle165.png" className="w-full"></img>
                </div>
                <div className="block md:hidden col-span-6 text-right relative">
                    <a href="#">
                        <img src="img/eva_edit-fill.png" className="inline-block mb-1 md:mb-3 w-1/12"></img>
                        <p className="text-xs text_color_green_2">
                            Edit Profile
                        </p>
                    </a>
                </div>
                <div className="col-span-12 md:col-span-10">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 md:col-span-7 md:pl-24 md:pr-12">
                            <h3 className="text-lg md:text-5xl color__green">
                                Yolia Kristanto
                            </h3>
                            <p className="text-lg text_color_grey_3 mb-6 md:mb-12">
                                Jakarta, Indonesia
                            </p>
                            <div className="grid grid-cols-4 md:grid-cols-3 gap-x-6 md:gap-x-24">
                                <div className="col-span-2 md:col-span-1">
                                    <h3 className="text-sm md:text-lg color__green font-semibold mb-2">
                                        Address
                                    </h3>
                                    <p className="text-sm md:text-lg text_color_grey_3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing sed est. 
                                    </p>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <h3 className="text-sm md:text-lg color__green font-semibold mb-2">
                                        Phone Number
                                    </h3>
                                    <p className="text-sm md:text-lg text_color_grey_3">
                                        08976527654
                                    </p>
                                    <p className="text-sm md:text-lg text_color_grey_3">
                                        (021) 77688
                                    </p>
                                </div>
                                <div className="col-span-4 md:col-span-1 mt-4 md:mt-0">
                                    <h3 className="text-sm md:text-lg color__green font-semibold mb-2">
                                        E-Mail
                                    </h3>
                                    <p className="text-sm md:text-lg text_color_grey_3">
                                        socialbread@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:col-span-1 text-right relative">
                            <a href="#">
                                <img src="img/eva_edit-fill.png" className="inline-block mb-3"></img>
                                <p className="text-lg text_color_green_2">
                                    Edit Profile
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 mb-4 md:mb-11">
                <div className="col-span-3 md:col-span-1">
                    <div className="grid grid-cols-2 gap-x-24">
                        <div>
                            <a className="text-sm md:text-2xl color__green font-semibold" href="#">
                                Project Dashboard
                            </a>
                        </div>
                        <div>
                            <a className="text-sm md:text-2xl text_color_grey_3 font-semibold" href="#">
                                Project Done
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border py-4 md:py-8 px-3 md:pl-14 md:pr-16 mb-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6">
                        <div className="grid grid-cols-4 md:grid-cols-6">
                            <div className="col-span-1">
                                <img className="w-20 h-20 rounded-full" src="img/Ellipse-30.png">
                                </img>
                            </div>
                            <div className="col-span-3 pl-3">
                                <h3 className="text-lg md:text-2xl font-semibold color__green mt-2">
                                    Sour Sally
                                </h3>
                                <p className="text-sm md:text-lg text_color_green_3 mt-2">
                                    KOL Management
                                </p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-sm md:text-lg text_color_green_3">
                                    Respon Sebelum
                                </p>
                                <h3 className="text-sm md:text-lg font-semibold color__green mt-2">
                                    20 Sep - 19:80
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 ">
                        <div className="grid grid-cols-6 gap-x-5 pt-4">
                            <div className="col-span-2 relative">
                                <button className="text-xs md:text-sm text_color_green_2 py-2 md:py-3 border_color_green_2 text-center rounded md:rounded-xl w-full">
                                    Komplain
                                </button>
                            </div>
                            <div className="col-span-2">
                                <button className="text-xs md:text-sm text_color_white bg_color_green_2 py-2 md:py-3  text-center rounded md:rounded-xl w-full">
                                    Selesai
                                </button>
                            </div>
                            <div className="col-span-2">
                                <button className="text-xs md:text-sm text_color_white bg_color_green_3 py-2 md:py-3  text-center rounded md:rounded-xl w-full">
                                    Perpanjang
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="rounded-xl border py-4 md:py-8 px-3 md:pl-14 md:pr-16 mb-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-4">
                        <div className="grid grid-cols-4">
                            <div className="col-span-1">
                                <img className="w-20 h-20 rounded-full" src="img/Ellipse30.png">
                                </img>
                            </div>
                            <div className="col-span-3 pl-3">
                                <h3 className="text-lg md:text-2xl font-semibold color__green mt-2">
                                    Wowteg
                                </h3>
                                <p className="text-sm md:text-lg text_color_green_3 mt-2">
                                    Social Media Management
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 mt-4 md:mt-auto">
                        <div className="grid grid-cols-6 md:grid-cols-5">
                            <div className="col-span-2 md:col-span-2">
                                <p className="text-sm md:text-lg text_color_green_3">
                                    Batas Respons
                                </p>
                                <h3 className="text-sm md:text-lg font-semibold color__green mt-2">
                                    7 July 2020
                                </h3>
                            </div>
                            <div className="col-span-4 md:col-span-3 md:pr-8">
                                <div className="grid grid-cols-5">
                                    <div className="col-span-4">
                                        <p className="text-sm md:text-lg text_color_green_3">
                                            Project Progress
                                        </p>
                                    </div>
                                    <div className="col-span-1 text-right">
                                        <p className="text-sm md:text-lg text_color_green_3">
                                            60%
                                        </p>
                                    </div>
                                </div>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-3.5 mt-2 md:mt-4 text-xs flex rounded bg_color_grey_3">
                                        <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg_color_green"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-3 relative">
                        <div className="grid grid-cols-8 gap-x-4 mt-3 pt-3 md:pt-auto">
                            <div className="col-span-4 md:col-span-3">
                            </div>
                            <div className="col-span-4 md:col-span-5">
                                <button className="text-xs md:text-sm text_color_white bg_color_green_2 py-2 md:py-3  text-center rounded md:rounded-xl w-full">
                                    View Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <Footer></Footer>
    </div>
    );
}

export default profilePageCC1;