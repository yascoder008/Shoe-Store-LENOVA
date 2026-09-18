import { Link } from "react-router-dom";
import diamond_img from "../assets/diamant.png";
import inspiration_img from "../assets/ampoule.png";
import shoes_img from "../assets/baskets.png";
import heart_img from "../assets/coeur.png";
import Footer from "./Footer";

function About(){
    return(
        <main className="font-(family-name:--OpenSans-font)">

          <section className="flex flex-col justify-center items-center p-3 mt-24 md:flex-row-reverse md:gap-4 lg:p-6 lg:gap-10 lg:mt-16">
            <img src="https://i.pinimg.com/736x/c0/38/ba/c038ba834f393cf0aff34a5257cf6589.jpg"
                 className="w-70 rounded-2xl md:w-90 md:mt-20 lg:w-120" />
            <div className="text-center p-3 gap-5 mt-4 flex flex-col justify-center items-center md:items-start md:justify-start">
              <p className="p-1 bg-blue-200 text-blue-900 font-bold w-30">OUR STORY</p>
              <h1 className="text-4xl font-bold md:text-left md:text-5xl lg:text-6xl">Built For Passion. Made For Every Step.</h1>
              <p className="md:text-left md:text-xl lg:text-2xl">
                SOLEVA was born from a simple belief: the right pair of shoes 
                can take you anywhere. We combine premium materials, modern design, 
                and everyday comfort to create sneakers you'll love to wear, anytime, 
                anywhere.
             </p>
             <button className="bg-blue-700 text-white p-3 rounded-xl w-70 lg:p-5 lg:w-100 hover:shadow-[1px_4px_18px_0px_#2b6cb0]">
                <Link to="/shop" className="cursor-pointer font-bold lg:text-xl">SHOP OUR COLLECTION</Link>
             </button>
            </div>
          </section>
  
          <section className="p-4 flex flex-col justify-center items-center text-center gap-3 md:grid md:grid-cols-2 lg:grid-cols-4">

            <div className="w-70 md:w-full md:h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
            rounded-2xl p-4 transition-all delay-100 hover:-translate-y-2.5">
              <div className="flex flex-col justify-center items-center">
                <img src={diamond_img}
                   className="w-10"/>
                <h1 className="font-bold text-xl">Premium Quality</h1>
              </div>
              <p>
                Carefully selected materials for durability and comfort.
              </p>
            </div>

            <div className="w-70 md:w-full md:h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
            rounded-2xl p-4 transition-all delay-100 hover:-translate-y-2.5">
              <div className="flex flex-col justify-center items-center">
                <img src={shoes_img}
                   className="w-10"/>
                <h1 className="font-bold text-xl">Modern Design</h1>
              </div>
              <p>
                Timeless style meets the latest trends.
              </p>
            </div>

            <div className="w-70 md:w-full md:h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
            rounded-2xl p-4 transition-all delay-100 hover:-translate-y-2.5">
              <div className="flex flex-col justify-center items-center">
                <img src={heart_img}
                   className="w-7"/>
                <h1 className="font-bold text-xl">All-Day Comfort</h1>
              </div>
              <p>
                Engineered for support, made for your everyday.
              </p>
            </div>

            <div className="w-70 md:w-full md:h-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
            rounded-2xl p-4 transition-all delay-100 hover:-translate-y-2.5">
              <div className="flex flex-col justify-center items-center">
                <img src={inspiration_img}
                   className="w-10"/>
                <h1 className="font-bold text-xl">Made to Inspire</h1>
              </div>
              <p>
                We design shoes that move you forward.
              </p>
            </div>

          </section>

          <section className="mt-8">

            <div className="text-center p-3 gap-2 mt-4 flex flex-col justify-center items-center">
              <p className="p-1 bg-blue-200 text-blue-900 font-bold w-30">OUR VALUES</p>
              <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">More Than Just Shoes</h1>
              <p className="md:text-xl max-w-200">
                At SOLEVA, we stand for creativity, authenticity, and self-expression. 
                We're here to inspire confidence in every step you take.
             </p>
            </div>

            <div className="mt-2 p-4 flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-2xl overflow-hidden w-full md:h-full transition-all delay-100 hover:-translate-y-2.5">
                <img src="https://i.pinimg.com/236x/b6/25/3e/b6253ecdc0e2f3c4e5bbbd9f88540d38.jpg"
                     className="content-square md:h-140 w-full"/>
                <div className="pt-1 pl-3">
                  <h1 className="font-bold text-2xl">Empowering Movement</h1>
                  <p>
                    We believe movement is freedom. Our shoes are designed to 
                    empower yours.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden w-full md:h-full transition-all delay-100 hover:-translate-y-2.5">
                <img src="https://i.pinimg.com/736x/6e/58/8a/6e588a068f14622520344b7a3265a8dc.jpg"
                     className="content-square md:h-140 w-full"/>
                <div className="pt-1 pl-3">
                  <h1 className="font-bold text-2xl">Sustainable Choices</h1>
                  <p>
                    We care about the planet and strive to make better, more 
                    sustainable choices.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden w-full md:h-full transition-all delay-100 hover:-translate-y-2.5">
                <img src="https://i.pinimg.com/736x/88/6b/c1/886bc185170f445f2c50a00ec904dedf.jpg"
                     className="content-square md:h-140 w-full"/>
                <div className="pt-1 pl-3">
                  <h1 className="font-bold text-2xl">For Every You</h1>
                  <p>
                    Every style, every size, every journey. There's a pair for everyone.
                  </p>
                </div>
              </div>
            </div>

          </section>

          <Footer/>

        </main>
    )
} 

export default About;