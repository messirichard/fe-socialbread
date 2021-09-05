import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function influencerPage() {
return (
    <div>
        <Navbar></Navbar>
        <div className="bg_color_grey_2 pb-20 pt-52">
            <div className="md:container mx-auto px-4 pt-16">
                <div className="w-full h-56 bg_color_white_1 rounded-xl border mb-6">
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-3">
                        <h3 className="text-5xl mb-6">
                            Filter
                        </h3>
                        <div className="w-full bg_color_white_1 rounded-xl border mb-6">
                            <p className="px-6 py-5 text-lg font-semibold">
                                Kategori
                            </p>
                            <div className="border-b"></div>
                            <p className="px-6 py-5 text-lg font-semibold">
                                Influencer
                            </p>
                            <div className="border-b"></div>
                            <p className="px-6 py-5 text-lg font-semibold">
                                Lokasi
                            </p>
                            <div className="border-b"></div>
                            <p className="px-6 py-5 text-lg font-semibold">
                                Sosial Media
                            </p>
                            <div className="border-b"></div>
                            <p className="px-6 py-5 text-lg font-semibold">
                                Rate
                            </p>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <div className="grid grid-cols-10">
                            <div className="col-span-6">
                            </div>
                            <div className="col-span-4 text-right">
                                <p className="pr-6 text-lg inline-block">
                                    Sort By
                                </p>
                                <select className="appearance-none border w-80 py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl inline-block">
                                    <option></option>
                                    <option>No</option>
                                    <option>Maybe</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-9 gap-x-6 mt-5">
                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="w-full bg_color_white_1 rounded-xl border mb-7 p-6">
                                    <img src="img/Rectangle-165-3.png" className="w-full mb-6"></img>
                                    <h4 className="text-3xl font-medium color__green mb-5">
                                        Jacqueline Sheerine
                                    </h4>
                                    <div className="">
                                        <img src="img/Group-1.png" className="inline-block mr-3 -mt-2"></img>
                                        <p className="text-lg inline-block">
                                            DKI Jakarta
                                        </p>
                                    </div>
                                    <a href="#" className="text-lg text_color_grey_2 inline-block mt-3">
                                        Life Style, Music, Self-Dev...
                                    </a>
                                    <h4 className="text-2xl font-medium color__green mt-3">
                                        Rp 1 - 3.5 JT
                                    </h4>
                                    <div className="grid grid-cols-10 gap-x-5">
                                        <div className="col-span-3">
                                            <img src="img/Vector-2.png" className="inline-block mr-4"></img>
                                            <p className="text-sm inline-block border-r pr-5">
                                                48
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/580b57fcd9996e24bc43c521-1.png" className="inline-block mr-3"></img>
                                            <p className="text-sm inline-block">
                                                23K
                                            </p>
                                        </div>
                                        <div className="col-span-3">
                                            <img src="img/tiktok-l-min-1.png" className="inline-block mr-2"></img>
                                            <p className="text-sm inline-block">
                                                120K
                                            </p>
                                        </div>
                                    </div>
                                </div>
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

export default influencerPage;