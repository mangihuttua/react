import "./Footer.css"

function Footer() {
    return(
        <footer>

            <div class="container footer-container">

                <div class="footer-about">

                    <h2>Cafe Delight</h2>

                    <p>
                        Nikmati kopi terbaik dengan suasana yang nyaman
                        bersama keluarga maupun teman.
                    </p>

                </div>

                <div class="footer-link">

                    <h3>Menu</h3>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                </div>

                <div class="footer-social">

                    <h3>Follow Us</h3>

                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>TikTok</p>

                </div>

            </div>

            <div class="copyright">

                © 2026 Cafe Delight | All Rights Reserved

            </div>

    </footer>
    );
}

export default Footer;