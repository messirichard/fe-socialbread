import Slider from '../components/slider'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Link from 'next/link'

function Home() {
  return (
    <div>
      
      <Navbar></Navbar>
      <div className="md:container mx-auto px-4 home-page-section-1 pt-8 md:pt-60">
        <Slider>
        </Slider>
        <h5 className="text-4xl	font-normal color__green mb-7 hidden md:inline-block md:mt-11">
          Layanan Kami
        </h5>
        <div className="grid md:grid-cols-2 gap-y-4 md:gap-6 md:mb-28 mb-10">
          <img className="backgrounds__home_api absolute  -ml-32 -mt-40 z-0" src="img/Frame.png">
          </img>

          <Link href="/service-page">
            <a className="rounded-3xl z-10 relative mt-5 md:mt-0" href="#">
              <img src="img/Button-SM-Management.png"></img>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-2xl text_color_white">
                Social Media Management
              </p>
            </a>
          </Link>

          <Link href="/service-page-2">
            <a className="rounded-3xl z-10 relative" href="#">
              <img src="img/Button-Influencer.png"></img>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-2xl text_color_white">
                Influencer
              </p>
            </a>
          </Link>
        </div>
      </div>
      
      <Footer></Footer>
    </div>

  );
}

export default Home;
