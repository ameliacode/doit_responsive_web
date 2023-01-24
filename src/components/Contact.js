const Contact = () => {
    return (
        <section className="mt-[109px] md:mt-[176px]">
            <div className="w-[90%] max-w-screen-xl my-0 mx-auto">
                <h2 className="xl:float-left xl:mr-[50px] text-[42px] text-indigo-blue mb-[47px] text-center md:mb-[76px]">CONTACT</h2>
                <div>
                    <form action method className="xl:mr-[2.3696682464455%]">
                        <fieldset className="md:flex md:justify-between md:align-center">
                        <lagend className="absolute w-0 h-0 leading-0 hidden">CONTACT US</lagend>
                        <div className="md:w-[48.5%] md:float-left">
                            <label className="absolute w-0 h-0 leading-0 hidden">name</label>
                            <input className="placeholder-indigo-blue pb-[13px] mb-[38px] text-indigo-blue" type="text" id="name" placeholder="Name"/>
                            <label className="absolute w-0 h-0 leading-0 hidden" for="phone">phone</label>
                            <input className="placeholder-indigo-blue pb-[13px] mb-[38px] text-indigo-blue" type="tel" id="phone" placeholder="Phone"/>
                            <label className="absolute w-0 h-0 leading-0 hidden" for="email">email</label>
                            <input className="placeholder-indigo-blue pb-[13px] mb-[38px] text-indigo-blue" type="email" id="email" placeholder="Email Address"/>
                        </div>
                        <div className="md:w-[48.5%] md:float-left">
                            <label className="absolute w-0 h-0 leading-0 hidden" for="message">message</label>
                            <textarea className="placeholder-indigo-blue h-[165px] text-indigo-blue" name="message" id="message" placeholder="Message"/>
                        </div>
                        </fieldset>
                        <div className="mt-[36px] text-right">
                            <button className="p-[15px] m-0 border-0 text-xs bg-indigo-blue font-[Montserrat] cursor-pointer text-white">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;