import React from "react";

const Contact =() => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Interested in collaborating or just want to say hi? Drop me a message!</p>
            <form action="#">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;