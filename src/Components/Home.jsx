import Slider from "./Slider/Slider";
import { Link } from "react-router-dom";
import CategoryCards from "./CategoryCards";
import sneakers_img from "../assets/sneakers.jpg";
import casual_img from "../assets/casual.jpg";
import formal_img from "../assets/formal.jpg";
import boots_img from "../assets/boots.jpg";
import about_shoes from "../assets/about-shoes.png";
import secure_img from "../assets/secure.png";
import support_img from "../assets/support.png";
import return_img from "../assets/return.png";
import delivery_img from "../assets/delivery.png";
import HomeCards from "./HomeCards";
import Footer from "./Footer";

function Home(){
    return(
        <main className="font-(family-name:--OpenSans-font)">

          <Slider/>

          <section className="min-h-[70vh] md:min-h-[40vh] flex flex-col md:flex-row justify-center items-center md:justify-around 
          mt-7 text-center gap-10 md:gap-0">
            <div>
                <h1 className="font-bold text-2xl md:text-3xl">10K+</h1>
                <p className="text-xl md:text-2xl">Happy customers</p>
            </div>
            <div>
                <h1 className="font-bold text-2xl md:text-3xl">100%</h1>
                <p className="text-xl md:text-2xl">Original products</p>
            </div>
            <div>
                <h1 className="font-bold text-2xl md:text-3xl">Free shipping</h1>
                <p className="text-xl md:text-2xl">Over 500</p>
            </div>
          </section>

          <section className="min-h-[80vh]">
            <h1 className="font-bold text-4xl text-center">Shop By Category</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-8">
              <CategoryCards  image={sneakers_img} name="Sneakers"/>
              <CategoryCards  image={casual_img} name="Casual"/>
              <CategoryCards  image={formal_img} name="Formal"/>
              <CategoryCards  image={boots_img} name="Boots"/>
            </div>
          </section>

          <section className="min-h-[80vh] p-4">
            <div className="mt-14 flex p-4 justify-between">
              <h1 className="text-3xl font-bold">New Arrivals</h1>
              <Link to="/shop" className="text-xl text-blue-800 hover:text-blue-950">View All &rarr;</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <HomeCards  image="https://i.pinimg.com/1200x/66/10/43/6610430a2f6a1281c4a8335e01b1e272.jpg" name="Air Max Pulse" price="150" rating="4.8"/>
              <HomeCards  image="https://i.pinimg.com/1200x/be/2b/8e/be2b8e393f5e504318952f01e7b24072.jpg" name="Ultraboost Light" price="180" rating="4.9"/>
              <HomeCards  image="https://i.pinimg.com/1200x/c0/e9/56/c0e956ad051f2c59ea48961d55dd0c22.jpg" name="Grand Court 2.0" price="85" rating="4.3"/>
              <HomeCards  image="https://i.pinimg.com/1200x/bc/dc/47/bcdc4793b446e8075161f2d5b5d2f11b.jpg" name="Forum Low" price="115" rating="4.6"/>
            </div>
          </section>

          <section className="min-h-[70vh] bg-[url('https://i.pinimg.com/736x/70/4e/df/704edff63bdbcaa1cb37e11a04e14f1b.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full
          flex flex-col justify-center items-center p-3 text-white md:flex-row lg:h-[70vh]">
            <img src={about_shoes}
                 className="w-70 md:w-84 lg:w-120"/>
            <div className="text-center flex flex-col gap-1 md:text-left md:gap-3 lg:gap-5">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">The Everyday Collection</h1>
                <p className="text-xl md:text-2xl lg:text-5xl">Shoes made for everyone</p>
                <button className="p-2 bg-blue-900 md:p-3 md:text-xl lg:text-2xl rounded-xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] md:w-60 lg:w-80">
                  <Link to="/about">Explore &rarr;</Link>
                </button>
            </div>
          </section>

          <section className="min-h-[80vh] p-4">

            <h1 className="text-4xl font-bold">Best Sellers</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              <HomeCards  image="https://i.pinimg.com/1200x/4e/72/85/4e7285938767628bb477defa7d7b027c.jpg" name="Hiker Waterproof" price="230" rating="4.9"/>
              <HomeCards  image="https://i.pinimg.com/736x/df/5b/91/df5b91228d5ff4ceea455811a0c8f0cd.jpg" name="574 Core" price="105" rating="4.8"/>
              <HomeCards  image="https://i.pinimg.com/1200x/56/62/5a/56625a13310bc6cc78ff4c30826242ec.jpg" name="Combat Leather Boot" price="210" rating="4.9"/>
              <HomeCards  image="https://i.pinimg.com/1200x/48/2b/ab/482bab4627c021d872ce9123609a90cf.jpg" name="Air Force 1 '07" price="130" rating="4.9"/>
            </div>
          </section>

          <section className="mt-8 p-4 flex flex-col justify-center items-center gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex justify-center items-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-xl w-full lg:shadow-none">
              <img src={delivery_img}
                   className="w-10"/>
              <p className="text-xl">Fast Delivery</p>
            </div>
            <div className="flex justify-center items-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-xl w-full lg:shadow-none">
              <img src={return_img}
                   className="w-7"/>
              <p className="text-xl">Easy Returns</p>
            </div>
            <div className="flex justify-center items-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-xl w-full lg:shadow-none">
              <img src={secure_img}
                   className="w-8"/>
              <p className="text-xl">Secure Payment</p>
            </div>
            <div className="flex justify-center items-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 rounded-xl w-full lg:shadow-none">
              <img src={support_img}
                   className="w-9"/>
              <p className="text-xl">24/7 Support</p>
            </div>
          </section>

          <section className="flex justify-center items-center min-h-[40vh]">
            <div className="bg-blue-200 text-center rounded-2xl w-[90%] h-60 flex flex-col justify-center items-center gap-4 lg:gap-6 lg:w-[70%]">
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">Get 10% off your first order</h1>
                <p className="md:text-xl">Sign up for exclusive offers and new arrivals</p>
              </div>
              <div className="flex flex-col gap-3 w-[80%] md:flex-row md:justify-center md:items-center md:w-full">
                <input type="email" 
                       placeholder="Enter your email..."
                       className="bg-white p-2 rounded-xl md:p-3 md:w-[50%] md:text-xl" />
                <button className="bg-blue-600 text-white p-2 md:p-3 rounded-xl cursor-pointer hover:bg-blue-700 md:min-w-40 md:text-xl">Subscribe</button>
              </div>
            </div>
          </section>

          <Footer/>

        </main>
    )
}

export default Home;