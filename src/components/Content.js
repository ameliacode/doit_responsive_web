const Content = () => {
    return(
        <>
            <section className="inline-block w-full mt-[59px] text-center md:mt-[95px] xl:text-left">
                <div className="w-[90%] max-w-screen-xl  my-0 mx-auto">
                    <h2 className="text-[42px] text-indigo-blue font-normal mb-[30px] xl:float-left xl:mb-0">WE ARE</h2>
                    <p className="font-serif text-[#616161] leading-loose 
                    xl:relative xl:float-right xl:pl-[20px] xl:font-serif xl:text-[#616161] xl:leading-loose
                    xl:before:block xl:before:absolute xl:before:top-[9px] xl:before:left-0 xl:before:w-[2px] xl:before:h-[44px] xl:before:bg-[#e0e0e0]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a<br/>piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                </div>
            </section>
            <section className="inline-block mt-[68px] md:mt-[110px] w-full">
                <div className="w-[90%] max-w-screen-xl my-0 mx-auto">
                    <ul>
                        <li className="mt-[52px] text-center md:float-left ml-0 mb:float-left md:mt-0 md:w-[23.046875%] md:ml-0 xl:w-[23%] xl:ml-[1.76%]">
                            <a href>
                                <img className="h-[52px] m-auto" src="images/s-images/promo01.png" alt=""/>
                                <h3 className="mt-[29px] mb-[20px] text-indigo-blue font-normal">HOME</h3>
                                <p className="text-sm font-serif text-[#616161] leading-normal">Lorem Ipsum is simply dummy text 
                                    of the printing and typesetting industry</p>
                            </a>
                        </li>
                        <li className="mt-[52px] text-center md:float-left ml-0 mb:float-left md:mt-0 md:w-[23.046875%] md:ml-[2.6041666667%] xl:w-[23%] xl:ml-[1.76%]">
                            <a href>
                                <img className="h-[52px] m-auto" src="images/s-images/promo02.png" alt=""/>
                                <h3 className="mt-[29px] mb-[20px] text-indigo-blue font-normal">WE ARE</h3>
                                <p className="text-sm font-serif text-[#616161] leading-normal">Lorem Ipsum is simply dummy text 
                                    of the printing and typesetting industry</p>
                            </a>
                        </li>
                        <li className="mt-[52px] text-center md:float-left ml-0 mb:float-left md:mt-0 md:w-[23.046875%] md:ml-[2.6041666667%] xl:w-[23%] xl:ml-[1.76%]">
                            <a href>
                                <img className="h-[52px] m-auto" src="images/s-images/promo03.png" alt=""/>
                                <h3 className="mt-[29px] mb-[20px] text-indigo-blue font-normal">WORK</h3>
                                <p className="text-sm font-serif text-[#616161] leading-normal">Lorem Ipsum is simply dummy text 
                                    of the printing and typesetting industry</p>
                            </a>
                        </li>
                        <li className="mt-[52px] text-center md:float-left ml-0 mb:float-left md:mt-0 md:w-[23.046875%] md:ml-[2.6041666667%] xl:w-[23%] xl:ml-[1.76%]">
                            <a href>
                                <img className="h-[52px] m-auto" src="images/s-images/promo04.png" alt=""/>
                                <h3 className="mt-[29px] mb-[20px] text-indigo-blue font-normal">BLOG</h3>
                                <p className="text-sm font-serif text-[#616161] leading-normal">Lorem Ipsum is simply dummy text 
                                    of the printing and typesetting industry</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Content;