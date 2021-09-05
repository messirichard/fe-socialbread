import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function registrationPageBussinessOwner() {
return (
    <div>
        <Navbar></Navbar>
        <div className="bg_color_grey_2 pb-40 pt-44">
            <div className="md:container mx-auto px-80 pt-44">
                <section className="section-2 bg-white mb-11 pb-16">
                    <div className="px-20">
                        <h2 className="text-4xl pt-14 mb-5">
                            Daftar Akun
                        </h2>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 pr-3">
                                <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                    Nama
                                </h3>
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis nama pengguna akun"></input>
                            </div>
                            <div className="col-span-1 pl-3">
                                <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                    Jenis Kelamin
                                </h3>
                                <label class="inline-flex items-center mt-3">
                                    <input type="radio" class="form-radio w-6 h-6 mr-3" name="accountType" value="personal"></input>
                                    <span class="ml-2 text-lg">Laki-Laki</span>
                                </label>
                                <label class="inline-flex items-center ml-6">
                                    <input type="radio" class="form-radio w-6 h-6 mr-3" name="accountType" value="busines"></input>
                                    <span class="ml-2 text-lg font-normal">Perempuan</span>
                                </label>
                            </div>
                            <div className="col-span-1 pr-3 mt-10">
                                <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                    Email
                                </h3>
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis alamat surel"></input>
                            </div>
                            <div className="col-span-1 pl-3 mt-10">
                                <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                    No. Handphone
                                </h3>
                                <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis nomor handphone"></input>
                            </div>
                            <div className="col-span-2 mt-10">
                                <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                    Alamat
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 pr-3">
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis kota/Kecamatan usaha"></input>
                                    </div>
                                    <div className="col-span-1 pl-3">
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis Kode Pos"></input>
                                    </div>
                                    <div className="col-span-2">
                                        <textarea class="resize-none focus:outline-none py-4 mt-6 rounded-xl border_color_grey px-5 min-w-full 
                                        text-left text_color_grey_3 text-sm" rows="3" placeholder="Tulis alamat usaha lengkap">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 mt-10">
                                <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                    Kata Kunci
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 pr-3">
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis password"></input>
                                    </div>
                                    <div className="col-span-1 pl-3">
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Konfirmasi Password"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="text-2xl text_color_white bg_color_green_2 py-3  text-center w-full rounded-xl mt-14">
                            Daftar Sekarang
                        </button>
                    </div>
                </section>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default registrationPageBussinessOwner;