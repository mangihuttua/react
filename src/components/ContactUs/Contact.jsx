import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Hubungi Kami</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div class="info-box">
                    <h3>📍 Alamat</h3>
                    <p>Jl. Sudirman No.123, Medan</p>
                </div>

                <div class="info-box">
                    <h3>📞 Telepon</h3>
                    <p>0812-3456-7890</p>
                </div>

                <div class="info-box">
                    <h3>✉ Email</h3>
                    <p>info@cafedelight.com</p>
                </div>

                <div class="info-box">
                    <h3>🕐 Jam Operasional</h3>
                    <p>08.00 - 22.00 WIB</p>
                </div>

                    </div>

                    <form action="contact-form">
                        <input type="text" placeholder="Nama"/>
                         <input type="email" placeholder="email"/>
                </form>
                </div>
            </div>

        </section>
    );
}

export default Contact;