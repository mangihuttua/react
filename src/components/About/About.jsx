import "./About.css";

function About() {
    return(
       <section id="about" class="about">
    <div class="container about-container">

        <div class="about-image">
           img
        </div>

        <div class="about-content">
            <h2>Tentang Cafe Delight</h2>

            <p>
                Cafe Delight merupakan tempat yang nyaman untuk menikmati kopi
                berkualitas, makanan lezat, dan suasana yang hangat. Kami
                menggunakan biji kopi pilihan yang diseduh oleh barista
                profesional.
            </p>

            <div class="about-feature">

                <div class="feature-card">
                    <h3>☕ Premium Coffee</h3>
                    <p>Biji kopi pilihan dari petani lokal Indonesia.</p>
                </div>

                <div class="feature-card">
                    <h3>🥐 Fresh Bakery</h3>
                    <p>Roti dan pastry selalu dibuat setiap hari.</p>
                </div>

                <div class="feature-card">
                    <h3>🏡 Cozy Place</h3>
                    <p>Tempat yang nyaman untuk bekerja maupun berkumpul.</p>
                </div>

            </div>

        </div>

    </div>
</section>
    );
}

export default About;