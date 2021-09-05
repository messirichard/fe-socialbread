import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function clientFormStep3() {
return (
    <div>
        <Navbar></Navbar>
        <div className="pb-40 pt-44">
            <div className="md:container mx-auto px-10">
                <div className="grid grid-cols-3 px-40 text-center pt-40 pb-24">
                    <div>
                        <div className="mx-auto">
                            <div className="text-4xl font-medium bg_color_green text_color_white inline-block mb-5 w-20 h-20 leading-loose rounded-half">
                                1
                            </div>
                            <p className="text-2xl color__green">
                                Informasi Klien
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="img/Vector-5.png" className="w-full mt-10"></img>
                    </div>
                    <div>
                        <div className="mx-auto">
                            <div className="text-4xl font-medium bg_color_green text_color_white inline-block mb-5 w-20 h-20 leading-loose rounded-half">
                                2
                            </div>
                            <p className="text-2xl color__green">
                                Proses Pembayaran
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="text-5xl mb-12">
                    Detail pembayaran
                </h2>
                <div className="rounded-xl border py-12 px-14 mb-16">
                    <div className="grid grid-cols-10">
                        <div className="col-span-1">
                            <div className="w-24 h-24 rounded-full bg-gray-200">
                            </div>
                        </div>
                        <div className="col-span-7">
                            <p className="text-lg text_color_green_3 mt-3 mb-1">
                                Bussiness Name
                            </p>
                            <h3 className="text-2xl font-semibold color__green">
                                Social Media Management
                            </h3>
                        </div>
                        <div className="col-span-2">
                            <h3 className="text-2xl font-semibold color__green mt-3">
                                Rp 5.000.000
                            </h3>
                            <p className="text-lg text_color_green_3">
                                Detail Pembayaran
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-14">
                    <h3 className="text-4xl font-light mb-3">
                        Lakukan Pembayaran Sebelum
                    </h3>
                    <h3 className="text-6xl font-bold text_color_green_3 mb-7">
                        23:59:49
                    </h3>
                    <p className="text-lg ">
                        Batas Pembayaran
                    </p>
                    <p className="text-2xl text_color_green_3 font-bold">
                        Saturday, 17 July 2021
                    </p>
                </div>
                <div className="rounded-xl border  mb-16">
                    <div className="grid grid-cols-10 pb-8 pt-12 border-b px-14">
                        <div className="col-span-9">
                            <h3 className="text-2xl font-semibold color__green pl-4 ">
                                Social Media Management
                            </h3>
                        </div>
                        <div className="col-span-1">
                            <img src="img/BCA_logo_Bank_Central_Asia-1.png"></img>
                        </div>
                    </div>
                    <div className="grid grid-cols-10 pb-10 pt-9 px-14">
                        <div className="col-span-9">
                            <p className="text-lg text_color_green_3 mb-1 pl-4">
                                No. Virtual Account
                            </p>
                            <h3 className="text-2xl font-semibold color__green pl-4 ">
                                900080896781098
                            </h3>
                        </div>
                        <div className="col-span-1 relative">
                            <a className="text-2xl font-semibold color__green pl-4 top-1/2 transform -translate-y-2/4 absolute" href="#">
                                Copy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default clientFormStep3;