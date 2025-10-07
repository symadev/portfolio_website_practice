import AboutSection from "./AboutSection";
import Banner from "./Banner";
import SkillsSection from "./skillSection";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Review from "./Review";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import CompletionStats from "./CompletionStats";
import Blogs from "./Blogs";



const Home = () => {
    return (
        <div>
           <section id="/"><Banner></Banner></section>
           <section id="/about"><AboutSection></AboutSection></section>
           <section id="/skill"><SkillsSection></SkillsSection></section>
           <section id="stats/"><CompletionStats></CompletionStats></section>
           <section id="/services"><Service></Service></section>
           <section id="/portfolio"><Portfolio></Portfolio></section>
           <section id="/"><Review></Review></section>
           <section id="/"><Testimonial></Testimonial></section>
           <section id="/blogs"><Blogs></Blogs></section>
           <section id="/contact"><Contact></Contact></section>
           <section id="/"><Footer></Footer></section>


           </div>
    );
};

export default Home;