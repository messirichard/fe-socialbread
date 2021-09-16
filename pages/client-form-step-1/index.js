import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function clientFormStep1() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:bg_color_grey_2 md:pb-40 md:pt-44">
            <div className="md:container mx-auto px-12 md:px-10">
                <div className="grid grid-cols-3 md:px-40 text-center pt-14 pb-9 md:pt-40 md:pb-40">
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
                        <img src="img/Vector-5.png" className="hidden md:block w-full mt-10"></img>
                        <img src="img/Vector-7-2.png" className="block md:hidden w-5/12 mx-auto mt-4"></img>
                    </div>
                    <div>
                        <div className="mx-auto">
                            <div className="relative text-sm md:text-4xl font-medium color__green border_color_green_mobile md:border_color_green md:border-2 inline-block mb-2 md:mb-5 w-8 h-8 md:w-20 md:h-20 leading-loose rounded-half">
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

                <section className="section-2 bg-white mb-6 md:mb-11 pb-16 border">
                    <div className="grid grid-cols-2 bg_color_green px-5 py-2 md:px-8 md:py-5">
                        <div className="text-xs md:text-3xl text_color_cream_1">
                            Form Klien
                        </div>
                        <div className="hidden md:block text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-5 md:px-20">
                        <div class="block">
                            <div class="mt-12">
                                <div>
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox w-3 h-3 md:w-6 md:h-6"></input>
                                        <span class="ml-3 md:ml-5 text-xs md:text-sm text_color_grey_3">Gunakan Form yang sudah di isi</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 md:mt-9">
                            <div className="col-span-10 md:col-span-4 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Kategori Usaha
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <button className="py-2 md:py-4 md:width-extra-1 rounded md:rounded-xl border_color_grey px-3 md:px-5 text-left text_color_grey_3 text-xs md:text-sm min-w-full">
                                    Kategori Usaha
                                </button>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Nama Usaha
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 " id="username" type="text" placeholder="Tulis Nama Lengkap"></input>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    E-mail
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 " id="username" type="text" placeholder="cth: bantubisnisumkm@gmail.com, bantubisnisumkm@yahoo.com, dst,."></input>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Nomor HP
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 " id="username" type="text" placeholder="cth: bantubisnisumkm@gmail.com, bantubisnisumkm@yahoo.com, dst,."></input>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Link Media Social
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-3 md:mb-7 md:pr-3">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 mb-2 md:mb-auto " id="username" type="text" placeholder="Instagram Link"></input>
                            </div>
                            <div className="col-span-10 md:col-span-3 md:mb-7 md:pl-3">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 " id="username" type="text" placeholder="Tik Tok Link"></input>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Alamat Usaha
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                                text-left text_color_grey_3 text-xs md:text-sm" rows="12" placeholder=" Cth:
                                Cabang 1
                                Jl Gajah Mada"></textarea>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Link Media Social
                                </p>
                            </div>
                            <div className="col-span-10 md:inline-block md:col-span-3 mb-7 md:pr-3">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 mb-2 md:mb-3" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 mb-2 md:mb-auto" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                            </div>
                            <div className="hidden md:inline-block col-span-3 mb-7 pl-3">
                                <input class="appearance-none border w-full py-2 md:py-4 md:text-sm text-xs px-3 md:px-5 text-gray-700 leading-tight mb-3 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                                <input class="appearance-none border w-full py-2 md:py-4 md:text-sm text-xs px-3 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Keunikan Produk/Jasa
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                                text-left text_color_grey_3 text-xs md:text-sm" rows="6" placeholder=" Keunikan bisnis/brand dibandingkan pesaing lainnya (ex: baju muslim 
                                kekinian PERtama yang memberikan jasa pengiriman TERcepat)"></textarea>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Sejarah Usaha
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                                text-left text_color_grey_3 text-xs md:text-sm" rows="15" placeholder=" Sejarah terbentuk-nya bisnis/brand (tanggal, pendiri, motivasi awal,
                                    perjuangan), Arti nama atau filosofi bisnis/brand, Visi & misi atau tujuan 
                                    bisnis/brand.">
                                </textarea>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Kelebihan
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                                text-left text_color_grey_3 text-xs md:text-sm" rows="10" placeholder="Keunggualan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Kelemahan
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                                text-left text_color_grey_3 text-xs md:text-sm" rows="10" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Kompetitor
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                                text-left text_color_grey_3 text-xs md:text-sm" rows="5" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section-3 bg-white mb-6 md:mb-11 pb-16 border">
                    <div className="grid grid-cols-2 bg_color_green px-5 py-2 md:px-8 md:py-5">
                        <div className="text-xs md:text-3xl text_color_cream_1">
                            Target Market
                        </div>
                        <div className="hidden md:block text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-5 md:px-20">
                        <div className="grid grid-cols-10 mt-16">
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Umur
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <div className="grid grid-cols-2 relative">
                                    <p className="absolute left-1/2 text-sm md:text-4xl text_color_grey_2 font-medium transform -translate-x-1/2">-</p>
                                    <div className="col-span-1 pr-6 md:pr-12">
                                        <input class="appearance-none border w-full py-2 md:py-4 md:text-sm text-xs md:px-5 px-1 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="18 Tahun"></input>
                                    </div>
                                    <div className="col-span-1 pl-6 md:pl-12">
                                        <input class="appearance-none border w-full py-2 md:py-4 md:text-sm text-xs md:px-5 px-1 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="18 Tahun"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-10 md:col-span-4 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Jenis Kelamin
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <input class="rounded-lg w-full" type="range" min="1" max="100" step="1" value="50" />
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Tingkat Ekonomi
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <button className="py-2 md:py-4 md:width-extra-1 rounded md:rounded-xl border_color_grey px-3 md:px-5 text-left text_color_grey_3 text-xs md:text-sm min-w-full">
                                    .
                                </button>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Target Lokasi
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 " id="username" type="text" placeholder="Ex: Jakarta, Tanggerang, Bekasi"></input>
                            </div>
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Keterangan
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                                text-left text_color_grey_3 text-xs md:text-sm" rows="5" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section-4 bg-white mb-6 md:mb-11 pb-16 border">
                    <div className="grid grid-cols-2 bg_color_green px-5 py-2 md:px-8 md:py-5">
                        <div className="text-xs md:text-3xl text_color_cream_1">
                            Logo Usaha/Bisnis
                        </div>
                        <div className="hidden md:block text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-5 md:px-20">
                        <div className="grid grid-cols-10 mt-16">
                            <div className="col-span-10 md:col-span-4 mb-2 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Logo
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-3 md:mb-7">
                                <button className="text-xs md:text-2xl text_color_white bg_color_green_2 py-3  text-center w-2/3 md:w-1/2 rounded md:rounded-xl">
                                    Upload File
                                </button>
                            </div>
                            <div className="col-span-10 md:col-span-4 md:mb-7">
                                <p className="text-xs md:text-2xl text_color_grey_2 font-medium mt-3">
                                    Refrensi Warna
                                </p>
                            </div>
                            <div className="col-span-10 md:col-span-6 mb-2 md:mb-7">
                                <input class="appearance-none border w-full md:py-4 text-xs md:text-sm md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl py-2 px-3 " id="username" type="text" placeholder="Cth: Merah, Biru/Kode Warna (#007789)"></input>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section-5 bg-white mb-6 md:mb-16 pb-16 border">
                    <div className="grid grid-cols-2 bg_color_green px-8 py-5">
                        <div className="text-xs md:text-3xl text_color_cream_1">
                            Catatan
                        </div>
                        <div className="hidden md:block text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-5 md:px-20 mt-5 md:mt-11">
                        <textarea class="resize-none focus:outline-none md:py-4 py-2 md:width-extra-1 rounded md:rounded-xl border_color_grey md:px-5 px-3 min-w-full 
                        text-left text_color_grey_3 text-xs md:text-sm" rows="9" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                        </textarea>
                    </div>
                </section>
                <button className="text-xs md:text-2xl text_color_white bg_color_green_2 py-3  text-center w-full rounded mb-12 md:mb-auto md:rounded-xl">
                    Lanjut & Simpan
                </button>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default clientFormStep1;