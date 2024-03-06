export default function Home() {
    return (
        <div>
            <section id="hero">
                <h2>Welcome to Your Website</h2>
                <p>Discover the best in...</p>
                <a href="#learn-more" className="button">
                    Learn More
                </a>
            </section>

            <section id="about">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </section>

            <section id="services">
                <h2>Our Services</h2>
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                </ul>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <p>
                    Reach out to us at:{" "}
                    <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
                </p>
            </section>

            <footer>
                <p>&copy; 2024 Your Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
