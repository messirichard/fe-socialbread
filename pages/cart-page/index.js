import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function AboutUs() {
    return(
        <div>
            <Navbar></Navbar>
            <section className="cart-page section-1 md:pt-36">
                <div className="md:container mx-auto px-6 md:px-10 md:mb-36 pt-8 md:pt-28">
                    <h1 className="md:text-6xl font-medium">
                        Cart
                    </h1>
                    <div className="grid grid-cols-12 md:pt-7">
                        <div className="col-span-12 md:col-span-9 md:pr-28">
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox w-3 h-3 rounded-lg md:w-6 md:h-6"></input>
                                <span class="ml-3 md:ml-5 text-xs md:text-sm text_color_grey_3">Select All</span>
                            </label>

                            <div className="w-full border my-10">
                            </div>

                            <div className="grid grid-cols-12">
                                <div className="col-span-12 text-right">
                                    <img src="img/Vector-4-2.png" className=" inline-block"></img>
                                </div>
                                <div className="col-span-1">
                                    <input type="checkbox" class="form-checkbox w-3 h-3 rounded-lg md:w-6 md:h-6"></input>
                                </div>
                                <div className="col-span-11 mb-9">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-8 md:col-span-2">
                                            <img src="img/Rectangle-286.png" className=" inline-block w-full"></img>
                                        </div>
                                        <div className="col-span-full md:col-span-10 md:ml-8">
                                            <div className="grid grid-cols-12 mt-3 md:mt-4">
                                                <div className="col-span-12 md:col-span-8">
                                                    <p className="md:text-2xl md:font-medium mb-3 text_color_grey_2">
                                                        Influencer Name
                                                    </p>
                                                    <div className="relative mb-3">
                                                        <div className="h-4 w-4 bg_color_grey_5 inline-block mr-3 md:mr-6 text_color_grey_2">
                                                        </div>
                                                        <p className="md:text-sm md:font-medium inline-block absolute top-1/2 transform -translate-y-1/2 text_color_grey_2">
                                                            DKI Jakarta
                                                        </p>
                                                    </div>
                                                    <p className="md:text-lg md:font-normal text_color_grey_2">
                                                            Lifestyle, Game, Music
                                                        </p>
                                                </div>
                                                <div className="col-span-full md:col-span-4 mt-3 md:mt-auto">
                                                    <p className="md:text-lg md:font-normal text_color_grey_2">
                                                        Total (1 Item)
                                                    </p>
                                                    <p className="md:text-2xl md:font-medium text_color_grey_2">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mr-3 mt-4 md:mt-9">
                                            <div className="grid grid-cols-12 rounded-xl border px-8 py-4">
                                                <div className="col-span-7 md:col-span-8">
                                                    <p className="text_color_green_3 text-xs md:text-sm mb-2">
                                                        Tiktok Video
                                                    </p>
                                                    <p className="color__green text-sm md:text-lg font-medium">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                                <div className="col-span-5 md:col-span-4 relative">
                                                    <div className="grid grid-cols-3 gap-x-3 md:gap-x-3">
                                                        <div className="col-span-1 text-right">
                                                            <button className="font-semibold rounded-full border w-5 h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className="text-2xl w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <input className="border-b w-full h-8 md:h-11"></input>
                                                        </div>
                                                        <div className="col-span-1 text-left">
                                                            <button className="font-semibold rounded-full border w-5 bg_color_blue h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className=" w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                                <img src="img/Vector-38.png" className="h-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mr-3 mt-4 md:mt-9">
                                            <div className="grid grid-cols-12 rounded-xl border px-8 py-4">
                                                <div className="col-span-7 md:col-span-8">
                                                    <p className="text_color_green_3 text-xs md:text-sm mb-2">
                                                        Instagram Post
                                                    </p>
                                                    <p className="color__green text-sm md:text-lg font-medium">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                                <div className="col-span-5 md:col-span-4 relative">
                                                    <div className="grid grid-cols-3 gap-x-3 md:gap-x-3">
                                                        <div className="col-span-1 text-right">
                                                            <button className="font-semibold rounded-full border w-5 h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className="text-2xl w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <input className="border-b w-full h-8 md:h-11"></input>
                                                        </div>
                                                        <div className="col-span-1 text-left">
                                                            <button className="font-semibold rounded-full border w-5 bg_color_blue h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className=" w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                                <img src="img/Vector-38.png" className="h-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full border my-10">
                            </div>

                            <div className="grid grid-cols-12">
                                <div className="col-span-12 text-right">
                                    <img src="img/Vector-4-2.png" className=" inline-block"></img>
                                </div>
                                <div className="col-span-1">
                                    <input type="checkbox" class="form-checkbox w-3 h-3 rounded-lg md:w-6 md:h-6"></input>
                                </div>
                                <div className="col-span-11 mb-9">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-8 md:col-span-2">
                                            <img src="img/Rectangle-292.png" className=" inline-block w-full"></img>
                                        </div>
                                        <div className="col-span-full md:col-span-10 md:ml-8">
                                            <div className="grid grid-cols-12 mt-3 md:mt-4">
                                                <div className="col-span-12 md:col-span-8">
                                                    <p className="md:text-2xl md:font-medium mb-3 text_color_grey_2">
                                                        Influencer Name
                                                    </p>
                                                    <div className="relative mb-3">
                                                        <div className="h-4 w-4 bg_color_grey_5 inline-block mr-3 md:mr-6 text_color_grey_2">
                                                        </div>
                                                        <p className="md:text-sm md:font-medium inline-block absolute top-1/2 transform -translate-y-1/2 text_color_grey_2">
                                                            DKI Jakarta
                                                        </p>
                                                    </div>
                                                    <p className="md:text-lg md:font-normal text_color_grey_2">
                                                            Lifestyle, Game, Music
                                                        </p>
                                                </div>
                                                <div className="col-span-full md:col-span-4 mt-3 md:mt-auto">
                                                    <p className="md:text-lg md:font-normal text_color_grey_2">
                                                        Total (1 Item)
                                                    </p>
                                                    <p className="md:text-2xl md:font-medium text_color_grey_2">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mr-3 mt-4 md:mt-9">
                                            <div className="grid grid-cols-12 rounded-xl border px-8 py-4">
                                                <div className="col-span-7 md:col-span-8">
                                                    <p className="text_color_green_3 text-xs md:text-sm mb-2">
                                                        Tiktok Video
                                                    </p>
                                                    <p className="color__green text-sm md:text-lg font-medium">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                                <div className="col-span-5 md:col-span-4 relative">
                                                    <div className="grid grid-cols-3 gap-x-3 md:gap-x-3">
                                                        <div className="col-span-1 text-right">
                                                            <button className="font-semibold rounded-full border w-5 h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className="text-2xl w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <input className="border-b w-full h-8 md:h-11"></input>
                                                        </div>
                                                        <div className="col-span-1 text-left">
                                                            <button className="font-semibold rounded-full border w-5 bg_color_blue h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className=" w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                                <img src="img/Vector-38.png" className="h-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mr-3 mt-4 md:mt-9">
                                            <div className="grid grid-cols-12 rounded-xl border px-8 py-4">
                                                <div className="col-span-7 md:col-span-8">
                                                    <p className="text_color_green_3 text-xs md:text-sm mb-2">
                                                        Instagram Post
                                                    </p>
                                                    <p className="color__green text-sm md:text-lg font-medium">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                                <div className="col-span-5 md:col-span-4 relative">
                                                    <div className="grid grid-cols-3 gap-x-3 md:gap-x-3">
                                                        <div className="col-span-1 text-right">
                                                            <button className="font-semibold rounded-full border w-5 h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className="text-2xl w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <input className="border-b w-full h-8 md:h-11"></input>
                                                        </div>
                                                        <div className="col-span-1 text-left">
                                                            <button className="font-semibold rounded-full border w-5 bg_color_blue h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className=" w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                                <img src="img/Vector-38.png" className="h-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full border my-10">
                            </div>

                            <div className="grid grid-cols-12">
                                <div className="col-span-12 text-right">
                                    <img src="img/Vector-4-2.png" className=" inline-block"></img>
                                </div>
                                <div className="col-span-1">
                                    <input type="checkbox" class="form-checkbox w-3 h-3 rounded-lg md:w-6 md:h-6"></input>
                                </div>
                                <div className="col-span-11 mb-9">
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-8 md:col-span-2">
                                            <img src="img/Rectangle-295.png" className=" inline-block w-full"></img>
                                        </div>
                                        <div className="col-span-full md:col-span-10 md:ml-8">
                                            <div className="grid grid-cols-12 mt-3 md:mt-4">
                                                <div className="col-span-12 md:col-span-8">
                                                    <p className="md:text-2xl md:font-medium mb-3 text_color_grey_2">
                                                        Influencer Name
                                                    </p>
                                                    <div className="relative mb-3">
                                                        <div className="h-4 w-4 bg_color_grey_5 inline-block mr-3 md:mr-6 text_color_grey_2">
                                                        </div>
                                                        <p className="md:text-sm md:font-medium inline-block absolute top-1/2 transform -translate-y-1/2 text_color_grey_2">
                                                            DKI Jakarta
                                                        </p>
                                                    </div>
                                                    <p className="md:text-lg md:font-normal text_color_grey_2">
                                                            Lifestyle, Game, Music
                                                        </p>
                                                </div>
                                                <div className="col-span-full md:col-span-4 mt-3 md:mt-auto">
                                                    <p className="md:text-lg md:font-normal text_color_grey_2">
                                                        Total (1 Item)
                                                    </p>
                                                    <p className="md:text-2xl md:font-medium text_color_grey_2">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mr-3 mt-4 md:mt-9">
                                            <div className="grid grid-cols-12 rounded-xl border px-8 py-4">
                                                <div className="col-span-7 md:col-span-8">
                                                    <p className="text_color_green_3 text-xs md:text-sm mb-2">
                                                        Tiktok Video
                                                    </p>
                                                    <p className="color__green text-sm md:text-lg font-medium">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                                <div className="col-span-5 md:col-span-4 relative">
                                                    <div className="grid grid-cols-3 gap-x-3 md:gap-x-3">
                                                        <div className="col-span-1 text-right">
                                                            <button className="font-semibold rounded-full border w-5 h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className="text-2xl w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <input className="border-b w-full h-8 md:h-11"></input>
                                                        </div>
                                                        <div className="col-span-1 text-left">
                                                            <button className="font-semibold rounded-full border w-5 bg_color_blue h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className=" w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                                <img src="img/Vector-38.png" className="h-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mr-3 mt-4 md:mt-9">
                                            <div className="grid grid-cols-12 rounded-xl border px-8 py-4">
                                                <div className="col-span-7 md:col-span-8">
                                                    <p className="text_color_green_3 text-xs md:text-sm mb-2">
                                                        Instagram Post
                                                    </p>
                                                    <p className="color__green text-sm md:text-lg font-medium">
                                                        Rp 1.000.000
                                                    </p>
                                                </div>
                                                <div className="col-span-5 md:col-span-4 relative">
                                                    <div className="grid grid-cols-3 gap-x-3 md:gap-x-3">
                                                        <div className="col-span-1 text-right">
                                                            <button className="font-semibold rounded-full border w-5 h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className="text-2xl w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                        <div className="col-span-1">
                                                            <input className="border-b w-full h-8 md:h-11"></input>
                                                        </div>
                                                        <div className="col-span-1 text-left">
                                                            <button className="font-semibold rounded-full border w-5 bg_color_blue h-5 relative inline-block">
                                                                <img src="img/Vector-39.png" className=" w-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                                <img src="img/Vector-38.png" className="h-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                                </img>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className="col-span-full md:col-span-3">
                            <div className="md:px-9 md:py-11 md:border md:rounded-lg">
                                <h3 className="md:text-2xl font-medium mb-5">
                                    Jumlah Pembelian (3)
                                </h3>
                                <div className="grid grid-cols-4">
                                    <div className="col-span-2">
                                        <p className="md:text-lg inline-block text_color_green_6">
                                            Grand Total
                                        </p>
                                    </div>
                                    <div className="col-span-2 text-right ">
                                        <p className="md:text-lg font-medium inline-block color__green">
                                            Rp 3.000.000
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full border mb-10 mt-5">
                                </div>
                                <button className="text-xs md:text-lg text_color_white bg_color_green_3 py-3  text-center w-full rounded-md mb-12 md:mb-auto md:rounded-xl">
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>
                        
                            
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default AboutUs;

