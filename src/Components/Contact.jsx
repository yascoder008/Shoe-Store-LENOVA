import email_img from "../assets/email.png";
import phone_img from "../assets/appel.png";
import localisation_img from "../assets/gps.png";
import horloge_img from "../assets/horloge.png";
import Footer from "./Footer";

function Contact(){
    return(
        <main className="font-(family-name:--OpenSans-font)">

          <section className="flex flex-col justify-center items-center p-3 mt-20 md:flex-row-reverse md:gap-4 lg:gap-30 lg:mt-16">
            <img src="https://i.pinimg.com/736x/36/05/04/360504135fee37ee2d97ee2bbcfaa472.jpg"
                 className="w-70 rounded-2xl md:w-80 md:mt-20 lg:W-100" />
            <div className="text-center p-3 gap-5 mt-4 flex flex-col justify-center items-center md:items-start md:justify-start">
              <p className="p-1 bg-blue-200 text-blue-900 font-bold w-30">CONTACT US</p>
              <h1 className="text-4xl font-bold md:text-left md:text-5xl lg:text-6xl">We’d Love to Hear From You</h1>
              <p className="md:text-left md:text-xl lg:text-2xl">
                Have a question, feedback, or just want to say hi? 
                Our team is here to help.
             </p>
            </div>
          </section>

          <section className="mt-8 p-4 flex flex-col justify-center items-center gap-4 lg:grid lg:grid-cols-2">

            <div className="flex flex-col justify-center pt-7 pb-6 w-full h-full rounded-xl items-center gap-3 lg:gap-2 text-center lg:text-left shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

              <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl lg:self-start lg:p-6">Send Us a Message</h1>

              <div className="mt-4 w-full flex flex-col justify-center items-center gap-3 lg:justify-start lg:items-start lg:p-5">
                <h3 className="text-xl text-gray-800 lg:text-2xl">Full Name</h3>
                <input type="text" 
                       placeholder="Your name"
                       className="p-2 w-[95%] rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] focus:outline-2 focus:outline-blue-900 lg:p-3 lg:h-14"/>
              </div>

              <div className="mt-4 w-full flex flex-col justify-center items-center gap-3 lg:justify-start lg:items-start lg:p-5">
                <h3 className="text-xl text-gray-800 lg:text-2xl">Email Address</h3>
                <input type="email" 
                       placeholder="youremail@example.com"
                       className="p-2 w-[95%] rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] focus:outline-2 focus:outline-blue-900 lg:p-3 lg:h-14"/>
              </div>
              <div className="mt-4 w-full flex flex-col justify-center items-center gap-3 lg:justify-start lg:items-start lg:p-5">
                <h3 className="text-xl text-gray-800 lg:text-2xl">Subject</h3>
                <input type="text" 
                       placeholder="How can we help you?"
                       className="p-2 w-[95%] rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] focus:outline-2 focus:outline-blue-900 lg:p-3 lg:h-14"/>
              </div>
              <div className="mt-4 w-full flex flex-col justify-center items-center gap-3 lg:justify-start lg:items-start lg:p-5">
                <h3 className="text-xl text-gray-800 lg:text-2xl">Message</h3>
                <textarea placeholder="Write your message here..."
                          className="w-[95%] p-2 min-h-30 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] focus:outline-2 focus:outline-blue-900">
                </textarea>
              </div>
              <button className="bg-blue-800 text-white hover:bg-blue-900 cursor-pointer p-3 w-[95%] lg:max-w-70 self-start lg:ml-5">Send Message</button>
            </div>

            <div className="flex flex-col justify-center pb-6 rounded-xl items-center gap-10 text-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <div className="pt-8">
                  <h1 className="text-3xl font-bold text-blue-800 lg:text-4xl">Get In Touch</h1>
                  <p className="pl-5 pr-5 lg:text-xl">
                    We're here for you! Reach out to us through any of 
                    the channels below.
                  </p>
                </div>

                <div className="flex flex-col w-full justify-center items-center gap-10">
                    <div className="flex flex-col justify-center items-center gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-5 w-[90%] rounded-xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] transition-all delay-200">
                       <img src={email_img}
                            className="w-14"/>
                       <div>
                        <h3>Email</h3>
                        <p>hello@soleva.com</p>
                       </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-5 w-[90%] rounded-xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] transition-all delay-200">
                       <img src={phone_img}
                            className="w-14"/>
                       <div>
                        <h3>Phone</h3>
                        <p>+213 555 55 55 55</p>
                       </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-5 w-[90%] rounded-xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] transition-all delay-200">
                       <img src={localisation_img}
                            className="w-14"/>
                       <div>
                        <h3>Address</h3>
                        <p>123 Sneaker Street. Algiers, Algeria</p>
                       </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-5 w-[90%] rounded-xl hover:shadow-[1px_4px_18px_0px_#2b6cb0] transition-all delay-200">
                       <img src={horloge_img}
                            className="w-14"/>
                       <div>
                        <h3>Working Hours</h3>
                        <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                        <p>Sat: 10:00 AM – 4:00 PM</p>
                        <p>Sun: Closed</p>
                       </div>
                    </div>
                </div>
            </div>

          </section>

          <Footer/>

        </main>
    )
}

export default Contact;