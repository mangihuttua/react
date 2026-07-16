import "./Hero.css";
import Button from "../Button/Button";

function Hero() {
    return(
         <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="text-3xl font-bold text-amber-700">Selamat Datang di Cafe Delight</h2>

        <p>
          Tempat yang sempurna untuk menikmati kopi dan makanan lezat
        </p>

        <Button onClick={() => console.log("Button diklik")}>
            Lihat Menu
        </Button>
      </div>
    </section>
    );
}

export default Hero;