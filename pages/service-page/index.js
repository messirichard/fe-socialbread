import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function servicePage() {
return (
    <div>
        <Navbar></Navbar>
        <div className="mb-44 relative text-center">
            <img src="img/IMG-Sercice-Sosmed.png" className="w-full z-0"></img>
            <div className="z-10 text_color_white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-7xl font-medium">
                    Social Media 
                    <span className="block font-light">
                        Management Service
                    </span>
                </h1>
                <p className="font-medium mt-9 text-lg max-w-2xl px-9">
                    Manajemen influencers untuk membantu aktivitas branding atau campaign di platform Instagram dan Tiktok.
                </p>
            </div>
            <div className="z-10 text_color_white absolute bottom-0 mb-20 left-1/2 transform -translate-x-1/2">
                <button>
                    Selengkapnya
                </button>
            </div>
        </div>
        <div className="md:container mx-auto px-4 home-page-section-1">
            <div className="grid grid-cols-3 mb-20">
                <div className="col-span-1">
                    <h1 className="text-6xl font-medium color__green">
                        Social Media Management
                    </h1>
                </div>
                <div className="col-span-2">
                    <p className="font-normal text-lg text_color_grey_3 mt-4 pl-56">
                        Social Bread berfokus untuk menerapkan pola customer journey yang sesuai dengan pola kebiasaan audiens saat 
                        ini, dimana konten akan secara berkesinambungan dapat memperkenalkan brand kepada audiens baru sampai dengan 
                        menonjolkan keunikan brand sehingga mampu membantu audiens hingga tahap pembelian.
                    </p>
                </div>                
            </div>
            <div className="grid grid-cols-8 mb-36 z-0 relative">
                <div className="col-span-3 bg_color_grey_2 pt-8 pl-12 color__green">
                    <p className="text-9xl font-medium color__green">
                        01
                    </p>
                    <div className="absolute z-10 bottom-20">
                        <h3 className="text-4xl ml-8 max-w-sm pr-6 mb-7">
                            Jasa Manajemen Sosial media
                        </h3>
                        <ul className="text-lg list-disc pl-16">
                            <li>
                                12 Content Tiktok
                            </li>
                            <li>
                                1 Kali Photoshoots
                            </li>
                            <li>
                                4 Instagram Post
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-5 relative">
                    <img src="img/Group-116.png"></img>
                    <div className="absolute z-10 bg_color_white_1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl px-12 py-14 rounded-xl">
                        <button className="py-5 width-extra-1 mb-5 rounded-xl border_color_grey pl-7 w-96 text-left text_color_grey_3 text-lg">
                            Lokasi Usaha
                        </button>
                        <button className="py-5 width-extra-1 mb-5 rounded-xl border_color_grey pl-7 w-96 text-left text_color_grey_3 text-lg">
                            Bidang Usaha
                        </button>
                        <textarea class="resize-none focus:outline-none py-5 width-extra-1 rounded-xl border_color_grey pl-7 w-96 text-left text_color_grey_3 text-lg mb-8" rows="4" placeholder="Keunikan Dari Usahamu"></textarea>
                        <button className="text-lg text_color_white bg_color_green_2 py-3  text-center w-full rounded-xl">
                            Saya Berminat
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default servicePage;