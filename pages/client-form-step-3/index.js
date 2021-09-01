function clientFormStep1() {
return (
    <div>
        <div className="pb-40">
            <div className="md:container mx-auto px-10">
                <div className="grid grid-cols-3 px-40 text-center pt-40 pb-24">
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
                            <div className="text-4xl font-medium bg_color_green text_color_white inline-block mb-5 w-20 h-20 leading-loose rounded-half">
                                2
                            </div>
                            <p className="text-2xl color__green">
                                Proses Pembayaran
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="text-5xl mb-12">
                    Detail pembayaran
                </h2>
                <div className="rounded-xl border py-12 px-14">
                    <div className="">
                        <div className="w-24 h-24 rounded-full bg-gray-200">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default clientFormStep1;