import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function faqsPage() {
return (
    <div>
        <Navbar></Navbar>
        <div className="md:container mx-auto px-4 pt-80 pb-36">
            <h1 className="text-8xl font-medium color__green mb-4">
                FAQs
            </h1>
            <p className="text-lg text_color_grey_3 font-medium mb-4">
                Frequently Asked Questions
            </p>
            <p className="text-lg text_color_grey_3 font-normal mb-12">
                Kami memiliki beberapa pertanyaan umum tentang layanan Social Bread
            </p>

            <div class="bg-white hover:bg-gray-100 hover:bg-opacity-50 duration-300 py-4 rounded-lg flex
            text-2xl font-medium justify-between text_color_green_2 border-t-2"
            role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eu rhoncus arcu, faucibus ?
            <i class="fas fa-chevron-down mt-1"></i>
            </div>
            <div class="bg-white hover:bg-gray-100 hover:bg-opacity-50 duration-300 py-4 rounded-lg flex
            text-2xl font-medium justify-between text_color_green_2 border-t-2"
            role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eu rhoncus arcu, faucibus ?
            <i class="fas fa-chevron-down mt-1"></i>
            </div>
            <div class="bg-white hover:bg-gray-100 hover:bg-opacity-50 duration-300 py-4 rounded-lg flex
            text-2xl font-medium justify-between text_color_green_2 border-t-2"
            role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eu rhoncus arcu, faucibus ?
            <i class="fas fa-chevron-down mt-1"></i>
            </div>
            <div class="bg-white hover:bg-gray-100 hover:bg-opacity-50 duration-300 py-4 rounded-lg flex
            text-2xl font-medium justify-between text_color_green_2 border-t-2"
            role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eu rhoncus arcu, faucibus ?
            <i class="fas fa-chevron-down mt-1"></i>
            </div>

            <div class="text-2xl font-medium bg-white  bg-opacity-50 duration-300 py-4 rounded-lg rounded-b-none flex 
            justify-between text_color_green_2 border-t-2"
            role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eu rhoncus arcu, faucibus ?
            <i class="fas fa-chevron-up"></i>
            </div>
            <div class=" bg-opacity-50 border-b-2 rounded-b-lg text-lg text_color_grey_3 pt-5 pb-8 pr-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant in in interdum egestas. Pulvinar 
            laoreet elementum, leo lorem risus molestie id et felis. Amet lorem consequat, sed scelerisque semper 
            ornare odio a. Sagittis, diam blandit nulla aliquam hac posuere tortor elementum. Dignissim elit donec 
            luctus quis nisl tempus tortor malesuada. Gravida fames ultricies ante mus pellentesque diam blandit tincidunt 
            risus. Elementum ut ante vel feugiat nunc sed.
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default faqsPage;