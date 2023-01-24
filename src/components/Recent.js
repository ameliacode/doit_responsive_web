const Recent = () => {
    return(
        <section className="inline-block w-full mt-[77px] md:mt-[124px]">
            <div className="w-[90%] max-w-screen-xl  my-0 mx-auto">
                <h2 className="text-[42px] text-indigo-blue mb-[47px] text-center md:mb-[76px] xl:float-left xl:mb-0">BLOG</h2>
                <ul className="xl:float-right xl:w-[75%] md:flex md:justify-center md:align-center">
                    <li className="w-full mt-0 md:float-left md:w-[30%] md:ml-0 md:mt-0 xl:w-[30.75%] xl:ml-[2.3696%]">
                        <a href><img className="block w-full max-w-full h-auto" src="images/p-images/blog01.jpg"/></a>
                        <time className="block mt-[11px] mb-[10px] text-[11px] text-[#9e9e9e]" datetime="2016-10-30">OCT 30, 2016</time>
                        <a href=""><h3 className="text-[#424242] font-normal leading-relaxed">There are many variations of passages of Lorem Ipsum</h3></a>
                    </li>
                    <li className="w-full md:float-left md:w-[30%] mt-[45px] md:ml-[2.6041666667%] md:mt-0 xl:w-[30.75%] xl:ml-[2.3696%]">
                        <a href><img className="block w-full max-w-full h-auto" src="images/p-images/blog02.jpg"/></a>
                        <time className="block mt-[11px] mb-[10px] text-[11px] text-[#9e9e9e]" datetime="2016-10-30">OCT 30, 2016</time>
                        <a href=""><h3 className="text-[#424242] font-normal leading-relaxed">There are many variations of passages of Lorem Ipsum</h3></a>
                    </li>
                    <li className="w-full md:float-left md:w-[30%] mt-[45px] md:ml-[2.6041666667%] md:mt-0 xl:w-[30.75%] xl:ml-[2.3696%]">
                        <a href><img className="block w-full max-w-full h-auto" src="images/p-images/blog03.jpg"/></a>
                        <time className="block mt-[11px] mb-[10px] text-[11px] text-[#9e9e9e]" datetime="2016-10-30">OCT 30, 2016</time>
                        <a href=""><h3 className="text-[#424242] font-normal leading-relaxed">There are many variations of passages of Lorem Ipsum</h3></a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Recent;