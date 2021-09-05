import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function profileChangePageClient() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:container mx-auto px-4 mb-28 pt-72 ">
            <div className="grid grid-cols-8">

                <div className="col-span-2">
                    <h1 className="text-6xl color__green">
                        Edit Profil
                    </h1>
                </div>

                <div className="col-span-3">
                </div>

                <div className="col-span-3 mt-2">
                    <div className="grid grid-cols-2 gap-x-8">
                        <div className="col-span-1">
                            <button className="text-sm text_color_green_2 py-3 border_color_green_2 text-center rounded-xl w-full">
                                Batalkan
                            </button>
                        </div>
                        <div className="col-span-1">
                            <button className="text-sm text_color_white bg_color_green_3 py-3  text-center rounded-xl w-full">
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-span-8 mt-14">
                    <div className="grid grid-cols-12 mb-20">
                        <div className="col-span-2 pr-7">
                            <img src="img/Rectangle-165.png" className="w-full"></img>
                            <button className="text-sm text_color_white bg_color_green py-3 mt-9  text-center rounded-xl w-full">
                                Ganti Foto
                            </button>
                            <p className="my-6 text-lg text_color_grey_3">
                                Kata Kunci
                            </p>
                            <button className=" text-sm text_color_white bg_color_green_2 py-3  text-center rounded-xl w-full">
                                Ganti Kata Kunci
                            </button>
                        </div>

                        <div className="col-span-8 pl-10">
                            <h3 className="color__green text-4xl font-bold mb-4">
                                Data Diri
                            </h3>

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
                                        Nomor Rekening
                                    </h3>
                                    <div className="grid grid-cols-2">
                                        <div className="col-span-2">
                                            <input class="appearance-none border w-full py-4 mb-6 text-sm px-5 text-gray-700 leading-tight 
                                            focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Nama Bank & cabang"></input>
                                        </div>
                                        <div className="col-span-1 pr-3">
                                            <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                            focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Nama pemilik rekening    "></input>
                                        </div>
                                        <div className="col-span-1 pl-3">
                                            <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                            focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Nomor Rekening"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-span-8 mt-14">
                                <h3 className="color__green text-4xl font-bold mb-4">
                                    Social Media
                                </h3>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 pr-3">
                                        <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                            Tiktok
                                        </h3>
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis nama pengguna akun"></input>
                                    </div>
                                    <div className="col-span-1 pr-3">
                                        <h3 className="text-lg font-medium text_color_green_3 mb-2">
                                            Instagram
                                        </h3>
                                        <input class="appearance-none border w-full py-4 text-sm px-5 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline rounded-xl" id="username" type="text" placeholder="Tulis nama pengguna akun"></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2">
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default profileChangePageClient;