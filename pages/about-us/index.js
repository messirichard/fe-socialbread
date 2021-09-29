import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function AboutUs() {
    return(
        <div>
            <Navbar></Navbar>
            <section className="about-us section-1 md:pt-36">
                <div className="md:grid md:grid-cols-2 bg-purple-100 hidden">
                    <div className="max-w-xl inline-block relative inset-0 m-auto px-4 md:px-auto">
                        <h2 className="text-4xl md:text-6xl mb-5 font-medium color__green">
                            About Us
                        </h2>
                        <p className="text-sm mb-5 md:mb-auto md:text-lg text_color_grey_3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi ullamcorper tellus, ipsum volutpat. In eget volutpat lorem rhoncus proin enim, ac orci non. Velit leo mi metus rutrum a, nulla semper leo. Orci, vitae bibendum turpis pellentesque augue.
                        </p>
                    </div>
                    <div>
                        <img src="img/IMG-About-Us-2.png" className=""></img>
                    </div>
                    <div className="block md:hidden md:container mx-auto col-span-full">
                        <div className="grid grid-cols-1 relative">
                            <div>
                                <img src="img/IMG-About-Us -1.png" className=""></img>
                            </div>
                            <div>
                                <img src="img/IMG-About-Us -2.png" className=""></img>
                            </div>
                            <div>
                                <img src="img/IMG-About-Us-3.png" className=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden md:grid-cols-2 bg-purple-100 block">
                    <div className="relative">
                        <img src="img/Rectangle-68-2.png" className="w-full"></img>
                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
                            <h2 className="text-4xl md:text-6xl mb-5 font-medium text_color_white_2 block">
                                About Us
                            </h2>
                            <p className="text-xs mb-5 md:mb-auto md:text-lg text_color_white_2 block w-72">
                                Social Bread dengan setia menyiapkan pelayanan  terbaik yang berfokus kepada UMKM di Indonesia. Konten yang dibuat juga konten yang mengikuti perkembangan trend di media sosial dan tentunya dengan harga yang terjangkau dan dikelola oleh praktisi dan konten creator yang berpengalaman. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:container mx-auto px-4 mb-36">
                    <div className="grid md:grid-cols-4 relative">
                        <img src="img/IMG-About-Us -1.png" className="-mt-40 pr-10"></img>
                        <img src="img/IMG-About-Us -2.png" className="-mt-40 pr-10 -ml-4"></img>
                        <img src="img/IMG-About-Us-3.png" className="-mt-40 pr-10 -ml-8"></img>
                    </div>
                </div>
            </section>

            <section className="about-us section-2">
                <div className="md:container mx-auto px-4 text-center mb-6 md:mb-20 hidden md:block">
                    <h2 className="text-4xl md:text-6xl mt-6 md:mt-auto font-medium color__green mb-6 md:mb-14">
                        The Story
                    </h2>
                    <p className="text-sm md:text-lg text_color_grey_3">
                        Berawal dari Edho Zell yang sudah berkecimpung sebagai social media influencers selama lebih dari 10 tahun yang menjadi co-founder di salah satu social media agency besar di Jakarta di tahun 2019, dengan satu kerinduan untuk membantu bisnis kecil atau UMKM di Indonesia untuk dapat lebih dikenal di dunia media sosial dan digital. Seiring pertumbuhan yang sangat cepat di dunia social media agency, semakin banyak kepercayaan dari berbagai client besar di Indonesia yang diterima. Namun disatu sisi, banyak UMKM yang belum bisa terbantu dikarenakan faktor harga yang belum terjangkau. Oleh karena itu, Edho Zell memutuskan untuk keluar dan membangun social media agency yang terfokus untuk UMKM di Indonesia bersama beberapa teman co-founder yang memiliiki visi serta misi yang sama, sehingga terbentuklah Social Bread Creative Agency pada bulan Juni 2020
                    </p>
                </div>
                <div className="md:container mx-auto px-4 text-center mb-6 md:mb-20 block md:hidden">
                    <h2 className="text-2xl  md:text-6xl mt-6 md:mt-auto font-medium color__green mb-6 md:mb-14">
                        The Story
                    </h2>
                    <p className="text-xs w-72 mx-auto md:text-lg text_color_grey_3">
                        Pada tahun 2019, Edho Zell dipercaya menjadi co-founder dari salah satu social media agency besar di Jakarta yang banyak memegang klien besar dan ternama karena pertumbuhannya yang begitu cepat. Namun, hal ini malah menambah kekhawatiran Edho Zell karena pelayanan yang diberikan tidak bisa dinikmati banyak pengusaha, terutama UMKM, karena harganya yang begitu tinggi. Dari kekhawatiran ini, Edho Zell memutuskan untuk membuat social media agency yang baru dengan harapan dapat membantu para UMKM di Indonesia. 
                    </p>
                </div>
                <img src="img/IMG-Story.png" className="w-100 mb-7 md:mb-20">
                </img>
            </section>

            <section className="about-us section-3">
                <div className="md:container mx-auto px-4 text-center mb-9 md:mb-36">
                    <h2 className="text-4xl md:text-6xl font-medium color__green mb-7 md:mb-14">
                        The Team
                    </h2>
                    <div className="grid grid-cols-2 gap-y-3 md:gap-24">
                        <div className="mt-5 md:mt-auto col-span-full md:col-span-1 grid grid-cols-3 text-center">
                            <div className="col-span-full md:col-span-1">
                            <img src="img/Ellipse-20.png" className="inline-block">
                            </img>
                            </div>
                            <div className="col-span-full md:col-span-2 text-center md:text-left md:ml-10 mt-5">
                                <h3 className="text-2xl md:text-4xl color__green mb-5">
                                    Edho zell
                                </h3>
                                <h4 className="text-sm md:text-lg mb-5 font-medium">
                                    CEO & CO-Founder Social Bread
                                </h4>
                                <p className="text-lg text_color_grey_3 max-w-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi ullamcorper tellus, ipsum volutpat. In eget volutpat lorem rhoncus proin enim.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-auto col-span-full md:col-span-1 grid grid-cols-3 text-center">
                            <div className="col-span-full md:col-span-1">
                            <img src="img/Ellipse-20.png" className="inline-block">
                            </img>
                            </div>
                            <div className="col-span-full md:col-span-2 text-center md:text-left md:ml-10 mt-5">
                                <h3 className="text-2xl md:text-4xl color__green mb-5">
                                    Edho zell
                                </h3>
                                <h4 className="text-sm md:text-lg mb-5 font-medium">
                                    CEO & CO-Founder Social Bread
                                </h4>
                                <p className="text-lg text_color_grey_3 max-w-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi ullamcorper tellus, ipsum volutpat. In eget volutpat lorem rhoncus proin enim.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-auto col-span-full md:col-span-1 grid grid-cols-3 text-center">
                            <div className="col-span-full md:col-span-1">
                            <img src="img/Ellipse-20.png" className="inline-block">
                            </img>
                            </div>
                            <div className="col-span-full md:col-span-2 text-center md:text-left md:ml-10 mt-5">
                                <h3 className="text-2xl md:text-4xl color__green mb-5">
                                    Edho zell
                                </h3>
                                <h4 className="text-sm md:text-lg mb-5 font-medium">
                                    CEO & CO-Founder Social Bread
                                </h4>
                                <p className="text-lg text_color_grey_3 max-w-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi ullamcorper tellus, ipsum volutpat. In eget volutpat lorem rhoncus proin enim.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-auto col-span-full md:col-span-1 grid grid-cols-3 text-center">
                            <div className="col-span-full md:col-span-1">
                            <img src="img/Ellipse-20.png" className="inline-block">
                            </img>
                            </div>
                            <div className="col-span-full md:col-span-2 text-center md:text-left md:ml-10 mt-5">
                                <h3 className="text-2xl md:text-4xl color__green mb-5">
                                    Edho zell
                                </h3>
                                <h4 className="text-sm md:text-lg mb-5 font-medium">
                                    CEO & CO-Founder Social Bread
                                </h4>
                                <p className="text-lg text_color_grey_3 max-w-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi ullamcorper tellus, ipsum volutpat. In eget volutpat lorem rhoncus proin enim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us section-4 mb-8 md:mb-36">
                <div className="grid grid-cols-2 relative">
                    <div className="block md:hidden col-span-2 md:col-span-1">
                        <img src="img/IMG-Vision-4.png">
                        </img>
                    </div>
                    <div className="block relative md:hidden col-span-2 text-center md:col-span-1">
                        <div className="inline-block relative text-center pt-8 pb-6">
                            <h2 className="text-2xl md:text-6xl font-medium color__green mb-5 md:mb-12 mx-auto text-center">
                                Vision
                            </h2>
                            <p className="text-sm md:text-lg text_color_grey_3 leading-7 w-64 text-center max-w-xl ">
                                Membantu pemilik UMKM & Local Brandsdi Indonesia untuk dapat mengembangkan bisnis mereka di platform digital
                            </p>
                        </div>
                    </div>
                    <div className="block md:hidden col-span-2 md:col-span-1">
                        <img src="img/IMG-Vision-3.png">
                        </img>
                    </div>
                    <div className="block relative md:hidden col-span-2 text-center md:col-span-1">
                        <div className="inline-block relative text-center pt-8 pb-6">
                            <h2 className="text-2xl md:text-6xl font-medium color__green mb-5 md:mb-12 mx-auto text-center">
                                Vision
                            </h2>
                            <ul className="text-xs w-64 text_color_grey_3 list-disc leading-7 max-w-lg">
                                <li className="text-left pb-4">
                                    Menciptakan pemerataan kepada semua pemilik bisnis UMKM dari berbagai bisnis sektor
                                </li>
                                <li className="text-left pb-4">
                                    Memberikan pengetahuan serta pemahaman tentang pentingnya social media untuk mendukung bisnis UMKM
                                </li>
                                <li className="text-left pb-4">
                                    Mengimplementasikan ide dan trend di dunia sosial media sebagai sumber untuk mendukung pengembangan bisnis UMKM
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="max-w-xl hidden md:inline-block absolute left-1/2 top-20 transform -translate-x-1/2 ">
                            <h2 className="text-4xl md:text-6xl font-medium color__green mb-12">
                                Visions
                            </h2>
                            <p className="text-lg text_color_grey_3 leading-7 max-w-lg">
                                Membantu pemilik UMKM & Local Brandsdi Indonesia untuk dapat mengembangkan bisnis mereka di platform digital
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="img/IMG-Vision.png" className="hidden md:inline-block">
                    </img>
                    </div>
                    <div>
                        <img src="img/IMG-Mission-2.png" className="hidden md:inline-block">
                        </img>
                    </div>
                    <div className="relative">
                        <div className="max-w-xl hidden md:inline-block absolute left-1/2 top-20 transform -translate-x-1/2 ">
                            <h2 className="text-4xl md:text-6xl font-medium color__green mb-12">
                                Mission
                            </h2>
                            <ul className="text-lg text_color_grey_3 list-disc pl-7 leading-7 max-w-lg">
                                <li>
                                    Menciptakan pemerataan kepada semua pemilik bisnis UMKM dari berbagai bisnis sektor
                                </li>
                                <li>
                                    Memberikan pengetahuan serta pemahaman tentang pentingnya social media untuk mendukung bisnis UMKM
                                </li>
                                <li>
                                    Mengimplementasikan ide dan trend di dunia sosial media sebagai sumber untuk mendukung pengembangan bisnis UMKM
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us section-5 mb-36">
                <div className="md:container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-medium color__green mb-6 md:mb-40">
                        Core Value
                    </h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-36">
                        <div className="">
                            <img src="img/Rectangle-110.png" className="w-full"></img>
                        </div>
                        <div className="">
                            <img src="img/Rectangle-110.png" className="w-full"></img>
                        </div>
                        <div className="">
                            <img src="img/Rectangle-110.png" className="w-full"></img>
                        </div>
                        <div className="">
                            <img src="img/Rectangle-110.png" className="w-full"></img>
                        </div>
                        <div className="">
                            <img src="img/Rectangle-110.png" className="w-full"></img>
                        </div>
                    </div>
                    <div className="hidden md:grid md:grid-cols-5 px-11">
                        <div>
                            <button className="text-2xl text_color_grey_3 font-normal w-60">
                                Berdampak
                            </button>
                        </div>
                        <div className="w-60 text-center">
                            <button className="text-2xl font-medium border-b-4 h-11 border-black align-top inline-block">
                                Relevan
                            </button>
                        </div>
                        <div>
                            <button className="text-2xl text_color_grey_3 font-normal w-60">
                                Elaborasi
                            </button>
                        </div>
                        <div>
                            <button className="text-2xl text_color_grey_3 font-normal w-60">
                                Antusias
                            </button>
                        </div>
                        <div>
                            <button className="text-2xl text_color_grey_3 font-normal w-60">
                                Di berkati
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default AboutUs;

