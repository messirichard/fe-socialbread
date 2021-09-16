import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function servicePage2() {
return (
    <div>
        <Navbar></Navbar>
        <div className="mb-7 md:mb-44 relative text-center">
            <img src="img/IMG-Service KOL.png" className="md:block hidden w-full z-0"></img>
            <img src="img/IMG-Service KOL-2.png" className="md:hidden block w-full z-0"></img>
            <div className="z-10 text_color_white w-full md:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-2xl md:text-7xl font-medium">
                    KOL Influencer
                    <span className="block font-light">
                        Management Service
                    </span>
                </h1>
                <p className="font-medium mr mt-9 text-xs px-28 md:text-lg md:max-w-2xl md:px-9">
                    Manajemen konten sosial media di platform Instagram dan Tiktok.
                </p>
            </div>
            <div className="z-10 text_color_white absolute bottom-0 mb-20 left-1/2 transform -translate-x-1/2">
                <button>
                    Selengkapnya
                </button>
            </div>
        </div>
        <div className="hidden md:block md:container mx-auto px-4 home-page-section-1">
            <div className="grid grid-cols-3 mb-20">
                <div className="col-span-1">
                    <h1 className="text-6xl font-medium color__green">
                        KOL Influencer Management
                    </h1>
                </div>
                <div className="col-span-2">
                    <p className="font-normal text-lg text_color_grey_3 mt-4 pl-56">
                        Social Bread memiliki lebih dari 10.000 influencers di seluruh Indonesia yang siap untuk 
                        membantu menaikkan branding atau campaign yang sesuai dengan kategori bisnis serta target market brand.
                    </p>
                </div>                
            </div>
            <div className="grid grid-cols-8 z-0 relative">
                <div className="col-span-3 bg_color_grey_2 pt-8 pl-12 color__green">
                    <p className="text-9xl font-medium color__green">
                        02
                    </p>
                    <div className="absolute z-10 bottom-20">
                        <h3 className="text-4xl ml-8 max-w-sm pr-6 mb-7">
                            Kami Menghubungkan anda dengan para influencer
                        </h3>
                    </div>
                </div>
                <div className="col-span-5 relative">
                    <img src="img/Group-90.png"></img>
                    <div className="absolute z-10 bg_color_white_1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl px-12 py-14 rounded-xl">
                        <button className="py-5 width-extra-1 mb-5 rounded-xl border_color_grey pl-7 w-96 text-left text_color_grey_3 text-lg">
                            Lokasi Usaha
                        </button>
                        <button className="py-5 width-extra-1 mb-5 rounded-xl border_color_grey pl-7 w-96 text-left text_color_grey_3 text-lg">
                            Bidang Usaha
                        </button>
                        <button className="text-lg text_color_white bg_color_green_2 py-3  text-center w-full rounded-xl">
                            Saya Berminat
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        {/* mobile */}
        <div className="block md:hidden md:container mx-auto  home-page-section-1-mobile px-4">
            <div className="grid grid-cols-4 pb-5 bg_color_grey_2 pl-4 pt-4 pr-7">
                <div className="col-span-1">
                    <p className="text-5xl font-medium color__green">
                        02
                    </p>
                </div>
                <div className="col-span-3">
                    <h1 className="text-lg font-medium color__green">
                        Social Media Management
                    </h1>
                    <p className="font-normal text-xs text_color_grey_3 mt-3">
                        Social Bread memiliki lebih dari 10.000 influencers di seluruh Indonesia yang siap 
                        untuk membantu menaikkan branding atau campaign yang sesuai dengan kategori bisnis 
                        serta target market brand.
                    </p>
                    <h3 className="text-sm color__green max-w-sm pr-6 mb-7 mt-3">
                        Kami Menghubungkan anda dengan para Influencer
                    </h3>
                    <ul className="text-xs list-disc pl-5">
                    </ul>
                </div>
            </div>
            <div className="md:grid md:grid-cols-8 mb-9 z-0 relative">
                <div className="col-span-5 relative">
                    <img src="img/Group-90-2.png" className="w-full"></img>
                    <div className="absolute w-11/12 z-10 bg_color_white_1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl px-5 py-6 rounded-xl">
                        <button className="py-2 w-full mb-3 rounded border_color_grey pl-3 text-left text_color_grey_3 text-xs">
                            Lokasi Usaha
                        </button>
                        <button className="py-2 w-full mb-4 rounded border_color_grey pl-3 text-left text_color_grey_3 text-xs">
                            Bidang Usaha
                        </button>
                        <button className="text-xs text_color_white bg_color_green_2 py-3  text-center w-full rounded">
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

export default servicePage2;