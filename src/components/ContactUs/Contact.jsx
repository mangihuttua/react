import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

function Contact() {
    return (
        <section className="bg-amber-100 md:py-16">
            
            <Container>
            <  SectionTitle title="Contact Us"
                            subtitle="We would love to hear from you."/>
                <div className="container">
                    <h2>Hubungi Kami</h2>
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <div className="info-box">
                        <h3>📍 Alamat</h3>
                        <p>Jl. Sudirman No.123, Medan</p>
                    </div>

                    <div className="info-box">
                        <h3>📞 Telepon</h3>
                        <p>0812-3456-7890</p>
                    </div>

                    <div className="info-box">
                        <h3>✉ Email</h3>
                        <p>info@cafedelight.com</p>
                    </div>

                    <div className="info-box">
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
            </Container>
        </section>
    );
}

export default Contact;