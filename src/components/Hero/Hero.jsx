import "./Hero.css";

function Hero() {
    return(
         <section className="hero" id="home">
      <div className="hero-content">
        <h2>Selamat Datang di Cafe Delight</h2>

        <p>
          Tempat yang sempurna untuk menikmati kopi dan makanan lezat
        </p>

        <a href="#menu" className="btn">
          Lihat Menu
        </a>
      </div>
    </section>
    );
}

export default Hero;