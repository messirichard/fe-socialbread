import React from "react";

function ModalLogin() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="md:text-sm text_color_green_2 md:py-2 border_color_green_2 md:text-center md:rounded-xl md:w-full"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between md:pt-11 md:px-14 border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Masuk Ke Akun
                  </h3>
                  <button
                    className=""
                    onClick={() => setShowModal(false)}
                  >
                    <img src="img/Close-Button.png" className="w-full"></img>
                  </button>
                </div>
                {/*body*/}
                <div className="relative md:pt-11 md:px-14 flex-auto">
                  <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                      E-Mail
                  </h3>
                  <input class="appearance-none border w-full py-2 md:mb-5 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                  focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tuliskan Alamat Email"></input>

                  <h3 className="text-xs md:text-lg font-medium text_color_green_3 mb-2">
                      Password
                  </h3>
                  <input class="appearance-none border w-full py-2 md:py-4 text-xs md:text-sm px-2 md:px-5 text-gray-700 leading-tight 
                  focus:outline-none focus:shadow-outline rounded md:rounded-xl" id="username" type="text" placeholder="Tulis Password"></input>
                </div>
                {/*footer*/}
                <div className="justify-end md:py-11 md:px-14 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-lg text_color_white font-medium bg_color_green_2 py-3  text-center w-full rounded-xl block mb-5"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Masuk
                  </button>
                  <button
                    className="text-lg color__green font-medium bg_color_green_6 py-3  text-center w-full rounded-xl block"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalLogin;