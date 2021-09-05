import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function profilePageClient3() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:container mx-auto px-4 mb-36 pt-64">
            <h1 className="text-6xl color__green font-medium mb-14">
                Profil
            </h1>
            <div className="grid grid-cols-12 mb-20">
                <div className="col-span-2">
                    <img src="img/Rectangle-165.png" className="w-full"></img>
                </div>
                <div className="col-span-10">
                    <div className="grid grid-cols-8">
                        <div className="col-span-7 pl-24 pr-12">
                            <h3 className="text-5xl color__green">
                                Jonathan S
                            </h3>
                            <p className="text-lg text_color_grey_3 mb-12">
                                Jakarta, Indonesia
                            </p>
                            <div className="grid grid-cols-3 gap-x-24">
                                <div className="col-span-1">
                                    <h3 className="text-lg color__green font-semibold mb-2">
                                        Address
                                    </h3>
                                    <p className="text-lg text_color_grey_3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing sed est. 
                                    </p>
                                </div>
                                <div className="col-span-1">
                                    <h3 className="text-lg color__green font-semibold mb-2">
                                        Phone Number
                                    </h3>
                                    <p className="text-lg text_color_grey_3">
                                        08976527654
                                    </p>
                                    <p className="text-lg text_color_grey_3">
                                        (021) 77688
                                    </p>
                                </div>
                                <div className="col-span-1">
                                    <h3 className="text-lg color__green font-semibold mb-2">
                                        E-Mail
                                    </h3>
                                    <p className="text-lg text_color_grey_3">
                                        socialbread@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 text-right relative">
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
            <div className="grid grid-cols-3 mb-11">
                <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-x-24">
                        <div>
                            <a className="text-2xl text_color_grey_3 font-semibold" href="#">
                                Project Dashboard
                            </a>
                        </div>
                        <div>
                            <a className="text-2xl color__green font-semibold" href="#">
                                Project Done
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl border mb-9">
                <div className="grid grid-cols-12 py-8 pl-14 pr-16">
                    <div className="col-span-4">
                        <div className="grid grid-cols-4">
                            <div className="col-span-1">
                                <img className="w-20 h-20 rounded-full" src="img/Ellipse-30.png">
                                </img>
                            </div>
                            <div className="col-span-3">
                                <h3 className="text-2xl font-semibold color__green">
                                    Sour Sally
                                </h3>
                                <p className="text-lg text_color_green_3 mt-2">
                                    Social Media Management
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="grid grid-cols-5">
                            <div className="col-span-2">
                                <p className="text-lg text_color_green_3">
                                    Batas Respons
                                </p>
                                <h3 className="text-lg font-semibold color__green mt-2">
                                    7 July 2020
                                </h3>
                            </div>
                            <div className="col-span-3 pr-8">
                                <div className="grid grid-cols-5">
                                    <div className="col-span-4">
                                        <p className="text-lg text_color_green_3">
                                            Waiting Confirmation
                                        </p>
                                    </div>
                                    <div className="col-span-1 text-right">
                                        <p className="text-lg text_color_green_3">
                                            100%
                                        </p>
                                    </div>
                                </div>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-3.5 mt-4 text-xs flex rounded bg_color_grey_3">
                                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg_color_green"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 relative">
                        <div className="grid grid-cols-8 gap-x-4 mt-3">
                            <div className="col-span-3">
                            </div>
                            <div className="col-span-5">
                                <button className="text-sm text_color_white bg_color_green_2 py-3  text-center rounded-xl w-full">
                                    View Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border">
                </div>
                <div className="grid grid-cols-12 py-10 pl-14 pr-16">
                    <div className="col-span-6">
                    </div>
                    <div className="col-span-6">
                        <div className="grid grid-cols-6 gap-x-5">
                            <div className="col-span-2">
                                <button className="text-sm text_color_green_2 py-3 border_color_green_2 text-center rounded-xl w-full">
                                    Komplain
                                </button>
                            </div>
                            <div className="col-span-2">
                                <button className="text-sm text_color_white bg_color_green_2 py-3  text-center rounded-xl w-full">
                                    Selesai
                                </button>
                            </div>
                            <div className="col-span-2">
                                <button className="text-sm text_color_white bg_color_green_3 py-3  text-center rounded-xl w-full">
                                    Perpanjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl border mb-9">
                <div className="grid grid-cols-12 py-8 pl-14 pr-16">
                    <div className="col-span-4">
                        <div className="grid grid-cols-4">
                            <div className="col-span-1">
                                <img className="w-20 h-20 rounded-full" src="img/Rectangle-183.png">
                                </img>
                            </div>
                            <div className="col-span-3">
                                <h3 className="text-2xl font-semibold color__green">
                                    Sour Sally
                                </h3>
                                <p className="text-lg text_color_green_3 mt-2">
                                    Social Media Management
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="grid grid-cols-5">
                            <div className="col-span-2">
                                <p className="text-lg text_color_green_3">
                                    Batas Respons
                                </p>
                                <h3 className="text-lg font-semibold color__green mt-2">
                                    7 July 2020
                                </h3>
                            </div>
                            <div className="col-span-3 pr-8">
                                <div className="grid grid-cols-5">
                                    <div className="col-span-4">
                                        <p className="text-lg text_color_green_3">
                                            Waiting Confirmation
                                        </p>
                                    </div>
                                    <div className="col-span-1 text-right">
                                        <p className="text-lg text_color_green_3">
                                            100%
                                        </p>
                                    </div>
                                </div>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-3.5 mt-4 text-xs flex rounded bg_color_grey_3">
                                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg_color_green"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 relative">
                        <div className="grid grid-cols-8 gap-x-4 mt-3">
                            <div className="col-span-3">
                            </div>
                            <div className="col-span-5">
                                <button className="text-sm text_color_white bg_color_green_2 py-3  text-center rounded-xl w-full">
                                    View Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border">
                </div>
                <div className="grid grid-cols-12 py-10 pl-14 pr-16">
                    <div className="col-span-6">
                    </div>
                    <div className="col-span-6">
                        <div className="grid grid-cols-6 gap-x-5">
                            <div className="col-span-2">
                            </div>
                            <div className="col-span-2">
                            </div>
                            <div className="col-span-2">
                                <button className="text-sm text_color_white bg_color_green_3 py-3  text-center rounded-xl w-full">
                                    Beri Ulasan
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

export default profilePageClient3;