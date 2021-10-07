import React, {Component} from "react";


class MenuMobile extends Component{
    render(){
        return(
            // nak col span-12 kudu dikei position absloute
            <div className="col-span-12 absolute top-16 z-20 bg-white w-full left-0 mobile-loader-1">
                <a className="p-2 text-sm pl-5 border-t block hover:bg-gray-50 focus:bg-gray-50" href="#">
                    About Us
                </a>
                <a className="p-2 text-sm pl-5 border-t block hover:bg-gray-50 focus:bg-gray-50" href="#">
                    Services
                </a>
                <a className="p-2 text-sm pl-5 border-t block hover:bg-gray-50 focus:bg-gray-50" href="#">
                    Article
                </a>
                <a className="p-2 text-sm pl-5 border-t block hover:bg-gray-50 focus:bg-gray-50" href="#">
                    Contact Us
                </a>

            </div>

        )
    }
}

export default MenuMobile;
