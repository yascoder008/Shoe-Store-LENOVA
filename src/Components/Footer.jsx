import logo_img from "../assets/Logo.png";
import facebook_icon from "../assets/facebook.png";
import x_icon from "../assets/logos.png";
import instagram_icon from "../assets/instagram.png";
import whatsapp_icon from "../assets/whatsapp.png";

function Footer(){
    return(
        <footer className="mt-7 p-5 border-t font-(family-name:--OpenSans-font) border-blue-500 bg-blue-100">

            <div className="flex flex-col gap-5 pt-8 lg:grid lg:grid-cols-3 justify-center items-center">

              <div className="flex flex-col justify-center items-center">
                <img src={logo_img}
                   className="w-54 lg:w-60" />
                <h3 className="text-xl text-center"><i>Step into a better you</i></h3>
              </div>

              <div className="flex flex-col justify-center items-center gap-5 text-center md:grid md:grid-cols-3">

               <div>
                  <h1 className="text-xl font-bold">Shop</h1>
                  <ul>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">New Arrivals</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Men</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Women</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Kids</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Sale</li>
                  </ul>
               </div>

               <div>
                  <h1 className="text-xl font-bold">Help</h1>
                  <ul>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Contact</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Shipping</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Returns</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">FAQ</li>
                  </ul>
               </div>

               <div>
                  <h1 className="text-xl font-bold">About</h1>
                  <ul>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Our Story</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Careers</li>
                    <li className="cursor-pointer hover:text-blue-800 delay-200">Blog</li>
                  </ul>
              </div>

             </div>

             <div className="flex gap-2 justify-center items-center">
                <img src={facebook_icon} 
                     className="w-8 cursor-pointer"/>
                <img src={x_icon} 
                     className="w-8 cursor-pointer"/>
                <img src={instagram_icon} 
                     className="w-8 cursor-pointer"/>
                <img src={whatsapp_icon} 
                     className="w-8 cursor-pointer"/>
             </div>

            </div>

            <p className="mt-6 text-2xs text-gray-800 md:text-left border-t border-blue-300 pt-3 w-65">©2026 SOLEVA. All right preserved.</p>
          </footer>
    )
}

export default Footer;