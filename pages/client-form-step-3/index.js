import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function clientFormStep3() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:pb-40 md:pt-44 pb-8">
            <div className="md:container mx-auto px-5 md:px-10">
                <div className="grid grid-cols-3 md:px-40 text-center pt-40 pb-24">
                    <div>
                        <div className="mx-auto">
                            <div className="relative text-sm md:text-4xl font-medium bg_color_green text_color_white inline-block mb-2 md:mb-5 w-8 h-8 md:w-20 md:h-20 leading-loose rounded-half">
                                <p className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    1
                                </p>
                            </div>
                            <p className="text-xs md:text-2xl color__green">
                                Informasi Klien
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="img/Vector-5.png" className="w-3/4 mx-auto md:w-full mt-5 md:mt-10"></img>
                    </div>
                    <div>
                        <div className="mx-auto">
                            <div className="relative text-sm md:text-4xl font-medium bg_color_green text_color_white inline-block mb-2 md:mb-5 w-8 h-8 md:w-20 md:h-20 leading-loose rounded-half">
                                <p className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    2
                                </p>
                            </div>
                            <p className="text-xs md:text-2xl color__green px-2">
                                Proses Pembayaran
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="text-sm md:text-5xl mb-4 md:mb-12">
                    Detail pembayaran
                </h2>
                <div className="rounded-xl border px-4 py-4 md:py-12 md:px-14 mb-8 md:mb-16">
                    <div className="grid grid-cols-10">
                        <div className="hidden md:block md:col-span-1">
                            <div className="w-24 h-24 rounded-full bg-gray-200">
                            </div>
                        </div>
                        <div className="col-span-7 md:col-span-7">
                            <p className="text-xs md:text-lg text_color_green_3 md:mt-3 mb-1">
                                Bussiness Name
                            </p>
                            <h3 className="text-xs md:text-2xl font-semibold color__green">
                                Social Media Management
                            </h3>
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <h3 className="text-xs md:text-2xl font-semibold color__green md:mt-3">
                                Rp 5.000.000
                            </h3>
                            <p className="text-xs md:text-lg text_color_green_3">
                                Detail Pembayaran
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-12 md:mb-14">
                    <h3 className="text-xs md:text-4xl font-light mb-3">
                        Lakukan Pembayaran Sebelum
                    </h3>
                    <h3 className="text-2xl md:text-6xl font-bold text_color_green_3 mb-3 md:mb-7">
                        23:59:49
                    </h3>
                    <p className="md:text-lg text-xs">
                        Batas Pembayaran
                    </p>
                    <p className="text-sm md:text-2xl text_color_green_3 font-bold">
                        Saturday, 17 July 2021
                    </p>
                </div>
                <div className="rounded-xl border">
                    <div className="grid grid-cols-10 md:pb-8 md:pt-12 py-4 px-4 border-b md:px-14">
                        <div className="col-span-9">
                            <h3 className="text-xs md:text-2xl font-semibold color__green md:pl-4 ">
                                BCA Virtual Account
                            </h3>
                        </div>
                        <div className="col-span-1">
                            <img src="img/BCA_logo_Bank_Central_Asia-1.png"></img>
                        </div>
                    </div>
                    <div className="grid grid-cols-10 md:pb-10 md:pt-9 py-4 px-4 md:px-14">
                        <div className="col-span-9 md:col-span-9">
                            <p className="md:text-lg text-xs text_color_green_3 mb-1 md:pl-4">
                                No. Virtual Account
                            </p>
                            <h3 className="md:text-2xl text-xs font-semibold color__green md:pl-4 ">
                                900080896781098
                            </h3>
                        </div>
                        <div className="col-span-1 md:col-span-1 relative">
                            <a className="md:text-2xl text-xs font-semibold color__green md:pl-4 md:top-1/2 md:transform md:-translate-y-2/4 md:absolute" href="#">
                                Copy
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-x-6 mt-9 md:mt-10">
                    <div className="col-span-3">
                        <button className="text-xs md:text-sm text_color_green_2 py-3 border_color_green_2 text-center rounded-xl w-full">
                            Pengembalian Dana
                        </button>
                    </div>
                    <div className="col-span-3">
                        <button className="text-xs md:text-sm text_color_white bg_color_green_2 py-3  text-center rounded-xl w-full">
                            Pesan Ulang
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default clientFormStep3;