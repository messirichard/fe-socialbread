import Slider from '../components/slider'
function Home() {
  return (

    <div className="md:container mx-auto px-4 home-page-section-1">
      <Slider>
      </Slider>
      <h5 className="text-4xl	font-normal color__green">Layanan Kami</h5>
      <div className="grid grid-cols-2 gap-6">
        <div className="backgrounds__home_api">

        </div>
        <div>Influencer</div>
      </div>
    </div>

  );
}

export default Home;
