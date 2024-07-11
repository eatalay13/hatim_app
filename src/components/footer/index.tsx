import React from "react";

const Footer: React.FC = () => {
    return (
        <div>
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white text-center bg-cover" style={{
                backgroundImage: "url('/images/background/footer-bg.jpg')"
            }}>
                <div className="container mx-auto">
                    <h3 className="text-4xl font-bold mb-4">Manevi Yolculuğunuza Bugün Başlayın</h3>
                    <p className="text-xl mb-8">Kur'an-ı Kerim'i keşfetmek ve paylaşmak için hemen ücretsiz üye olun.</p>
                    <button className="bg-yellow-500 text-emerald-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg">Ücretsiz Üye Ol</button>
                </div>
            </section>

            <footer className="bg-emerald-800 text-white py-10 w-full flex items-center justify-center bg-cover" style={{
                backgroundImage: "url('/images/background/footer-bg_2.jpg')"
            }}>
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Kur'an Hatim Uygulaması. Tüm hakları saklıdır.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;