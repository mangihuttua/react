import "./Footer.css"

function Footer() {
    return(
        <footer>

            <div className="container footer-container">

                <div className="footer-about">

                    <h2>Cafe Delight</h2>

                    <p>
                        Nikmati kopi terbaik dengan suasana yang nyaman
                        bersama keluarga maupun teman.
                    </p>

                </div>

                <div className="footer-link">

                    <h3>Menu</h3>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                </div>

                <div className="footer-social">

                    <h3>Follow Us</h3>

                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>TikTok</p>

                </div>

            </div>

            <div className="copyright">

                © 2026 Cafe Delight | All Rights Reserved

            </div>

    </footer>
    );
}

export default Footer;