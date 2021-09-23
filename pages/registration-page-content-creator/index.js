import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function registrationPageContentCreator() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:bg_color_grey_2 md:pb-40 md:pt-44">
            <div className="md:container mx-auto md:px-80 px-10 pt-44">
                <section className="section-2 bg-white mb-11 pb-1 md:pb-16">
                    <div className="md:px-20 px-5 border">
                        <h2 className="md:text-4xl text-sm md:pt-14 pt-4 mb-5">
                            Daftar Akun
                        </h2>
                        <div className="grid grid-cols-2">
                            <div className="col-span-2 md:col-span-1 md:pr-3">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Nama
                                </h3>
                                <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis nama pengguna akun"></input>
                            </div>
                            <div className="col-span-2 md:col-span-1 md:pl-3 mt-3 md:mt-auto">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Jenis Kelamin
                                </h3>
                                <label class="block md:inline-flex items-center md:mt-3">
                                    <input type="radio" class=" form-radio md:w-6 md:h-6 w-3 h-3 mr-0 md:mr-3" name="accountType" value="personal"></input>
                                    <span class="ml-2 text-xs md:text-lg">Laki-Laki</span>
                                </label>
                                <label class="block md:inline-flex items-center md:ml-6">
                                    <input type="radio" class=" form-radio md:w-6 md:h-6 w-3 h-3 mr-0 md:mr-3" name="accountType" value="busines"></input>
                                    <span class="ml-2 text-xs md:text-lg font-normal">Perempuan</span>
                                </label>
                            </div>
                            <div className="col-span-2 md:col-span-1 md:pr-3 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    E-mail
                                </h3>
                                <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis alamat surel"></input>
                            </div>
                            <div className="col-span-2 md:col-span-1 md:pl-3 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    No. Handphone
                                </h3>
                                <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis nomor handphone"></input>
                            </div>
                            <div className="col-span-2 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Alamat
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-2 md:col-span-1 md:pr-3 mb-3 md:mb-auto">
                                        <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis kota/Kecamatan usaha"></input>
                                    </div>
                                    <div className="col-span-2 md:col-span-1 md:pl-3 mb-3 md:mb-auto">
                                        <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis Kode Pos"></input>
                                    </div>
                                    <div className="col-span-2">
                                        <textarea class="resize-none focus:outline-none py-2 md:py-4 mt-0 md:mt-6 rounded md:rounded-xl border_color_grey px-2 md:px-5 min-w-full 
                                        text-left text_color_grey_3 text-xs md:text-sm" rows="3" placeholder="Tulis alamat usaha lengkap">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Password
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-2 md:mb-auto mb-3 md:col-span-1 md:pr-3">
                                        <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis password"></input>
                                    </div>
                                    <div className="col-span-2 md:mb-auto mb-3 md:col-span-1 md:pl-3">
                                        <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Konfirmasi Password"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Kategori
                                </h3>
                                <div className="grid grid-cols-3 gap-x-5">
                                    <div className="col-span-3 mb-2 md:mb-auto md:col-span-1">
                                        <select className="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl">
                                            <option></option>
                                            <option>No</option>
                                            <option>Maybe</option>
                                        </select>
                                    </div>
                                    <div className="col-span-3 mb-2 md:mb-auto md:col-span-1">
                                        <select className="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl">
                                            <option></option>
                                            <option>No</option>
                                            <option>Maybe</option>
                                        </select>
                                    </div>
                                    <div className="col-span-3 mb-2 md:mb-auto md:col-span-1">
                                        <select className="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded md:rounded-xl">
                                            <option></option>
                                            <option>No</option>
                                            <option>Maybe</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Link Akun Tiktok
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-2">
                                        <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Link Akun tiktok"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 md:pr-3 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Jumlah Followers
                                </h3>
                                <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis Jumlah Followers"></input>
                            </div>
                            <div className="col-span-2 md:col-span-1 md:pl-3 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Engagement Rate
                                </h3>
                                <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis Engagement rate"></input>
                            </div>
                            <div className="col-span-2 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Link Akun Instagram
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-2">
                                        <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Link Akun Instagram"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 md:pr-3 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Jumlah Followers
                                </h3>
                                <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis Jumlah Followers"></input>
                            </div>
                            <div className="col-span-2 md:col-span-1 md:pl-3 mt-3 md:mt-10">
                                <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                                    Engagement Rate
                                </h3>
                                <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                                focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis Engagement rate"></input>
                            </div>
                        </div>
                        <button className="text-xs md:text-2xl text_color_white bg_color_green_2 py-1 md:py-3  text-center w-full rounded md:rounded-xl mt-4 mb-4 md:mt-14 md:mb-20">
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

export default registrationPageContentCreator;