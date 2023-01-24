import Header from "components/Header";
import Content from "components/Content";
import Recent from "components/Recent";
import Footer from "components/Footer";
import Contact from "components/Contact";
import Work from "components/Work";

function App() {
  return (
   <>
      <Header/>
      <article>
        <img className="block w-full max-w-full h-auto" 
        src="images/p-images/slide01.jpg" alt=""/>
      </article>
      <section className="block">
        <Content/>
        <hr className="w-full max-w-screen-xl mx-auto mt-[77px] md:mt-[124px] bg-[#eee]"/>
        <Work/>
        <hr className="w-[20px] max-w-screen-xl mx-auto mt-[77px] md:mt-[124px] bg-indigo-blue"/>
        <Recent/>
        <Contact/>
      </section>
      <Footer/>
   </>
  );
};

export default App;
