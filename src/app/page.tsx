import FeatureCard from "@/components/feature-card";
import HatimGroupCard from "@/components/hatim-group-card";
import Step from "@/components/step";
import { Book, Bookmark, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="">
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">

        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-emerald-800">Kur&#39;an-ı Kerim&#39;i Keşfedin ve Paylaşın</h2>
          <p className="text-xl mb-8 text-emerald-700">Modern ve kullanıcı dostu hatim uygulaması ile manevi yolculuğunuzu zenginleştirin.</p>
          <button className="bg-yellow-500 text-emerald-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg">Hemen Başlayın</button>
        </div>
      </section>

      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-800">Özellikler</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Book className="w-12 h-12 text-yellow-500" />}
              title="Kur'an Okuma"
              description="Özel tasarlanmış arayüz ile Kur'an-ı Kerim'i kolayca okuyun ve dinleyin."
              image="/api/placeholder/300/200"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-yellow-500" />}
              title="Toplu Hatim"
              description="Diğer kullanıcılarla birlikte hatimlere katılın ve sevabınızı artırın."
              image="/api/placeholder/300/200"
            />
            <FeatureCard
              icon={<Bookmark className="w-12 h-12 text-yellow-500" />}
              title="İlerleme Takibi"
              description="Kişisel ve toplu hatimlerinizin ilerlemesini kolayca takip edin."
              image="/api/placeholder/300/200"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 bg-emerald-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-800">Nasıl Çalışır?</h3>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
            <Step number={1} title="Üye Olun" description="Hızlı ve kolay üyelik işlemi ile uygulamaya katılın." />
            <Step number={2} title="Hatim Seçin" description="Mevcut hatimlere katılın veya yeni bir hatim başlatın." />
            <Step number={3} title="Okuyun ve Paylaşın" description="Kur'an okuyun, ilerlemenizi takip edin ve sevabınızı paylaşın." />
          </div>
        </div>
      </section>

      <section id="recent-hatims" className="relative py-32 bg-[#faf8f3] px-4 md:px-0 bg-no-repeat bg-center" style={{
        backgroundImage: "url('/images/background/courses-two_bg.png')"
      }}>
        <div className="container mx-auto">
          <h3 className="text-lg uppercase font-semibold text-center mb-12 text-emerald-800">Popüler Hatim Grupları</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <HatimGroupCard
                key={index}
                title={`Hatim Grubu ${index + 1}`}
                participants={30}
                duration="30 gün"
                completionDate="15 Mayıs 2024"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
