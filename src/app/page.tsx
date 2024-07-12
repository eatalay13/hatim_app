import FeatureCard from '@/components/feature-card';
import HatimGroupCard from '@/components/hatim-group-card';
import Step from '@/components/step';
import { Book, Bookmark, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="">
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto">
          <h2 className="mb-4 text-5xl font-bold text-emerald-800">
            Kur'an-ı Kerimi Keşfedin ve Paylaşın
          </h2>
          <p className="mb-8 text-xl text-emerald-700">
            Modern ve kullanıcı dostu hatim uygulaması ile manevi yolculuğunuzu
            zenginleştirin.
          </p>
          <button className="rounded-full bg-yellow-500 px-8 py-3 text-lg font-semibold text-emerald-900 shadow-lg transition duration-300 hover:bg-yellow-400">
            Hemen Başlayın
          </button>
        </div>
      </section>

      <section id="features" className="bg-white py-16">
        <div className="container mx-auto">
          <h3 className="mb-12 text-center text-3xl font-bold text-emerald-800">
            Özellikler
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Book className="h-12 w-12 text-yellow-500" />}
              title="Kur'an Okuma"
              description="Özel tasarlanmış arayüz ile Kur'an-ı Kerim'i kolayca okuyun ve dinleyin."
              image="/api/placeholder/300/200"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-yellow-500" />}
              title="Toplu Hatim"
              description="Diğer kullanıcılarla birlikte hatimlere katılın ve sevabınızı artırın."
              image="/api/placeholder/300/200"
            />
            <FeatureCard
              icon={<Bookmark className="h-12 w-12 text-yellow-500" />}
              title="İlerleme Takibi"
              description="Kişisel ve toplu hatimlerinizin ilerlemesini kolayca takip edin."
              image="/api/placeholder/300/200"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-emerald-50 py-16">
        <div className="container mx-auto">
          <h3 className="mb-12 text-center text-3xl font-bold text-emerald-800">
            Nasıl Çalışır?
          </h3>
          <div className="flex flex-col items-center justify-around space-y-8 md:flex-row md:space-y-0">
            <Step
              number={1}
              title="Üye Olun"
              description="Hızlı ve kolay üyelik işlemi ile uygulamaya katılın."
            />
            <Step
              number={2}
              title="Hatim Seçin"
              description="Mevcut hatimlere katılın veya yeni bir hatim başlatın."
            />
            <Step
              number={3}
              title="Okuyun ve Paylaşın"
              description="Kur'an okuyun, ilerlemenizi takip edin ve sevabınızı paylaşın."
            />
          </div>
        </div>
      </section>

      <section
        id="recent-hatims"
        className="relative bg-[#faf8f3] bg-center bg-no-repeat px-4 py-32 md:px-0"
        style={{
          backgroundImage: "url('/images/background/courses-two_bg.png')",
        }}
      >
        <div className="container mx-auto">
          <h3 className="mb-12 text-center text-lg font-semibold uppercase text-emerald-800">
            Popüler Hatim Grupları
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
