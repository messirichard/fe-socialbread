import Slider from '../components/slider'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:container mx-auto px-4 home-page-section-1 pt-60">
        <Slider>
        </Slider>
        <h5 className="text-4xl	font-normal color__green mb-7">
          Layanan Kami
        </h5>
        <div className="grid md:grid-cols-2 gap-6 mb-28">
          <img className="backgrounds__home_api absolute  -ml-32 -mt-40 z-0" src="img/Frame.png">
          </img>
          <a className="rounded-3xl z-10 relative" href="#">
            <img src="img/Button-SM-Management.png"></img>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text_color_white">
              Social Media Management
            </p>
          </a>
          <a className="rounded-3xl z-10 relative" href="#">
            <img src="img/Button-Influencer.png"></img>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text_color_white">
              Influencer
            </p>
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>

  );
}

export default Home;
