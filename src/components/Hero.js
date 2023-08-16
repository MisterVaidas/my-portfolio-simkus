import '../styles/Hero.css';
import { motion } from 'framer-motion';


const Hero = () => {
 

    return (
        <section className="hero">
           
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}   
                transition={{ duration: 0.5 }}       
                className="hero-content"
            >
                <img src="/images/VaidasSimkus.png" alt="Vaidas Simkus" className="profile-pic"/>
                <h1>Hello, I'm Vaidas</h1>
                <p>Front-end Developer & UX Designer</p>
                <button className="cta-btn">View my work</button>
            </motion.div>
            
            <i className="fa fa-arrow-down scroll-indicator"></i>
        </section>

    );
}

export default Hero;