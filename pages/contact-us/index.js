import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function contactUsPage() {
return (
    <div>
        <Navbar></Navbar>
        <div className="grid grid-cols-5 pt-36 pb-16">
            <div className="col-span-3">
                <div className="pl-40 my-36">
                    <h2 className="text-6xl font-medium color__green mb-5">
                        About Us
                    </h2>
                    <h3 className="text-4xl	color__green font-medium leading-7 max-w-lg mb-5">
                        Location
                    </h3>
                    <div className="grid grid-cols-2 mb-16">
                        <div className="pr-32">
                            <h4 className="text-lg mb-5 text_color_green_2">
                                Tangerang
                            </h4>
                            <p className="text-lg text_color_grey_3">
                                Ruko Graha Boulevard Summarecon Serpong, Jln Gading Serpong Boulevard BVA1, Curug Sangereng, Kec. Klp. Dua, Tangerang, Banten 15810
                            </p>
                        </div>
                        <div className="pr-32">
                            <h4 className="text-lg mb-5 text_color_green_2">
                                Tangerang
                            </h4>
                            <p className="text-lg text_color_grey_3">
                                Ruko Graha Boulevard Summarecon Serpong, Jln Gading Serpong Boulevard BVA1, Curug Sangereng, Kec. Klp. Dua, Tangerang, Banten 15810
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mb-16">
                        <div>
                            <h3 className="text-4xl	color__green font-medium leading-7 max-w-lg mb-5">
                                Phone
                            </h3>
                            <div className="grid grid-cols-2">
                                <div>
                                    <h4 className="text-lg mb-2 text_color_green_2">
                                        Tangerang
                                    </h4>
                                    <p className="text-lg text_color_grey_3">
                                        08189xxxxxxx
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg mb-2 text_color_green_2">
                                        Tangerang
                                    </h4>
                                    <p className="text-lg text_color_grey_3">
                                        08189xxxxxxx
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-4xl	color__green font-medium leading-7 max-w-lg mb-5">
                                Mail
                            </h3>
                            <p className="text-lg text_color_grey_3">
                                Socialbread.id@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mb-16">
                        <div>
                            <h3 className="text-4xl	color__green font-medium leading-7 max-w-lg mb-5">
                                Social Media
                            </h3>
                            <img src="img/Icon-Instagram.png" className="inline-block mr-6"></img>
                            <img src="img/Icon-Instagram.png" className="inline-block mr-6"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 z-10">
                <div className="mt-20 bg_color_grey_1 pl-24 pt-16 pr-36 pb-28">
                    <h2 className="text-6xl font-medium color__green mb-5">
                        About Us
                    </h2>
                    <p className="text-lg text_color_grey_3 mb-10">
                        Jangan ragu untuk memberi kami pertanyaan dan saran/pesan di bawah ini:
                    </p>
                    <label class="text-lg text_color_green_2 font-medium" for="username">
                        Nama
                    </label>
                    <input class="shadow mt-4 mb-4 appearance-none border w-full py-4 text-lg pl-7 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline rounded-lg" id="username" type="text" placeholder="Tulis Nama Lengkap"></input>
                    <label class="text-lg text_color_green_2 font-medium" for="username">
                        Email
                    </label>
                    <input class="shadow mt-4 mb-4 appearance-none border rounded w-full py-4 text-lg pl-7 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Tulis Alamat Email"></input>
                    <label class="text-lg mt-3 text_color_green_2 font-medium" for="username">
                        Pesan
                    </label>
                    <textarea class="w-full mt-3 py-4 text-lg px-7 text-gray-700 border rounded-lg focus:outline-none resize-none" 
                    placeholder="Tulis pesan/komentar yang ingin di sampaikan" rows="4"></textarea>
                </div>
            </div>
            <div className="bg-color-cream absolute h-extra-full right-0 w-1/6 z-0">
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default contactUsPage;