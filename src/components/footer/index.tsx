import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <section
        className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-cover py-20 text-center text-white"
        style={{
          backgroundImage: "url('/images/background/footer-bg.jpg')",
        }}
      >
        <div className="container mx-auto">
          <h3 className="mb-4 text-4xl font-bold">
            Manevi Yolculuğunuza Bugün Başlayın
          </h3>
          <p className="mb-8 text-xl">
            Kur'an-ı Kerim'i keşfetmek ve paylaşmak için hemen ücretsiz üye
            olun.
          </p>
          <button className="rounded-full bg-yellow-500 px-8 py-3 text-lg font-semibold text-emerald-900 shadow-lg transition duration-300 hover:bg-yellow-400">
            Ücretsiz Üye Ol
          </button>
        </div>
      </section>

      <footer
        className="flex w-full items-center justify-center bg-emerald-800 bg-cover py-10 text-white"
        style={{
          backgroundImage: "url('/images/background/footer-bg_2.jpg')",
        }}
      >
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kur'an Hatim Uygulaması. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
