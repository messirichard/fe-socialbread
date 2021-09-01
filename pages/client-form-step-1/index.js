function clientFormStep1() {
return (
    <div>
        <div className="bg_color_grey_2 pb-40">
            <div className="md:container mx-auto px-10">
                <div className="grid grid-cols-3 px-40 text-center pt-40 pb-40">
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
                            <div className="text-4xl font-medium color__green border_color_green border-2 inline-block mb-5 w-20 h-20 leading-loose rounded-half">
                                2
                            </div>
                            <p className="text-2xl color__green">
                                Proses Pembayaran
                            </p>
                        </div>
                    </div>
                </div>
                <section className="section-2 bg-white mb-11 pb-16">
                    <div className="grid grid-cols-2 bg_color_green px-8 py-5">
                        <div className="text-3xl text_color_cream_1">
                            Form Klien
                        </div>
                        <div className="text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-20">
                        <div class="block">
                            <div class="mt-12">
                                <div>
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox w-6 h-6"></input>
                                        <span class="ml-5 text-sm text_color_grey_3">Gunakan Form yang sudah di isi</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 mt-9">
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Kategori Usaha
                                </p>
                            </div>
                            <div className="col-span-6 mb-7">
                                <button className="py-7 width-extra-1 rounded-xl border_color_grey px-5 text-left text_color_grey_3 text-sm min-w-full">
                                </button>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Nama Usaha
                                </p>
                            </div>
                            <div className="col-span-6 mb-7">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis Nama Lengkap"></input>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    E-mail
                                </p>
                            </div>
                            <div className="col-span-6 mb-7">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="cth: bantubisnisumkm@gmail.com, bantubisnisumkm@yahoo.com, dst,."></input>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Nomor HP
                                </p>
                            </div>
                            <div className="col-span-6 mb-7">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="cth: bantubisnisumkm@gmail.com, bantubisnisumkm@yahoo.com, dst,."></input>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Link Media Social
                                </p>
                            </div>
                            <div className="col-span-3 mb-7 pr-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Instagram Link"></input>
                            </div>
                            <div className="col-span-3 mb-7 pl-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tik Tok Link"></input>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Alamat Usaha
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-3">
                                <textarea class="resize-none focus:outline-none py-4 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                                text-left text_color_grey_3 text-sm" rows="12" placeholder=" Cth:
                                Cabang 1
                                Jl Gajah Mada"></textarea>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Link Media Social
                                </p>
                            </div>
                            <div className="col-span-3 mb-7 pr-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight mb-3 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                            </div>
                            <div className="col-span-3 mb-7 pl-3">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight mb-3 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Link Tokopedia, Shopee, etc."></input>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Keunikan Produk/Jasa
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-3">
                                <textarea class="resize-none focus:outline-none py-4 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                                text-left text_color_grey_3 text-sm" rows="6" placeholder=" Keunikan bisnis/brand dibandingkan pesaing lainnya (ex: baju muslim 
                                kekinian PERtama yang memberikan jasa pengiriman TERcepat)"></textarea>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Sejarah Usaha
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-3">
                                <textarea class="resize-none focus:outline-none py-4 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                                text-left text_color_grey_3 text-sm" rows="15" placeholder=" Sejarah terbentuk-nya bisnis/brand (tanggal, pendiri, motivasi awal,
                                    perjuangan), Arti nama atau filosofi bisnis/brand, Visi & misi atau tujuan 
                                    bisnis/brand.">
                                </textarea>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Kelebihan
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-3">
                                <textarea class="resize-none focus:outline-none py-4 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                                text-left text_color_grey_3 text-sm" rows="10" placeholder="Keunggualan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Kelemahan
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-3">
                                <textarea class="resize-none focus:outline-none py-4 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                                text-left text_color_grey_3 text-sm" rows="10" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                            <div className="col-span-4">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Kompetitor
                                </p>
                            </div>
                            <div className="col-span-6 pr-3">
                                <textarea class="resize-none focus:outline-none py-4 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                                text-left text_color_grey_3 text-sm" rows="5" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-3 bg-white mb-11 pb-16">
                    <div className="grid grid-cols-2 bg_color_green px-8 py-5">
                        <div className="text-3xl text_color_cream_1">
                            Target Market
                        </div>
                        <div className="text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-20">
                        <div className="grid grid-cols-10 mt-16">
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Umur
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-12">
                                <div className="grid grid-cols-2 relative">
                                    <p className="absolute left-1/2 text-4xl text_color_grey_2 font-medium transform -translate-x-1/2">-</p>
                                    <div className="col-span-1 pr-12">
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="18 Tahun"></input>
                                    </div>
                                    <div className="col-span-1 pl-12">
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="18 Tahun"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Jenis Kelamin
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-12">
                                asd
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Tingkat Ekonomi
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-12">
                                <button className="py-7 rounded-xl border_color_grey px-5 text-left text_color_grey_3 text-sm w-2/4">
                                </button>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Target Lokasi
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-12">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Ex: Jakarta, Tanggerang, Bekasi"></input>
                            </div>
                            <div className="col-span-4">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Keterangan
                                </p>
                            </div>
                            <div className="col-span-6 pr-12">
                                <textarea class="resize-none focus:outline-none py-4 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                                text-left text_color_grey_3 text-sm" rows="5" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-4 bg-white mb-11 pb-16">
                    <div className="grid grid-cols-2 bg_color_green px-8 py-5">
                        <div className="text-3xl text_color_cream_1">
                            Target Market
                        </div>
                        <div className="text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-20">
                        <div className="grid grid-cols-10 mt-16">
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Umur
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-12">
                                <button className="text-2xl text_color_white bg_color_green_2 py-3  text-center w-1/2 rounded-xl">
                                    Upload File
                                </button>
                            </div>
                            <div className="col-span-4 mb-7">
                                <p className="text-2xl text_color_grey_2 font-medium mt-3">
                                    Target Lokasi
                                </p>
                            </div>
                            <div className="col-span-6 mb-7 pr-12">
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Cth: Merah, Biru/Kode Warna (#007789)"></input>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-5 bg-white mb-16 pb-16">
                    <div className="grid grid-cols-2 bg_color_green px-8 py-5">
                        <div className="text-3xl text_color_cream_1">
                            Target Market
                        </div>
                        <div className="text-lg text-right text_color_cream_1">
                            *Wajib di isi
                        </div>
                    </div>
                    <div className="px-20">
                        <textarea class="resize-none focus:outline-none py-4 mt-12 width-extra-1 rounded-xl border_color_grey px-5 min-w-full 
                        text-left text_color_grey_3 text-sm" rows="9" placeholder="Kelemahan Produk/Jasa yang dimiliki">
                        </textarea>
                    </div>
                </section>
                <button className="text-2xl text_color_white bg_color_green_2 py-3  text-center w-full rounded-xl">
                    Lanjut & Simpan
                </button>
            </div>
        </div>
    </div>
    );
}

export default clientFormStep1;