'use client';

import { UserCircle } from 'lucide-react';
import Image from 'next/image';

interface HatimGroupCardProps {
  title: string;
  participants: number;
  duration: string;
  completionDate: string;
}

const HatimGroupCard: React.FC<HatimGroupCardProps> = ({
  title,
  participants,
  duration,
  completionDate,
}) => (
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="relative">
      <Image
        className="w-full hover:transform hover:scale-110 transition-transform"
        src="/images/hatim-group-default.jpg"
        alt="Hatm-i Şerif Takibi"
        width={500}
        height={500}
        quality={100}
      />
      <div className="absolute top-2 left-2 bg-white rounded-full p-1">
        <div className="w-4 h-4 rounded-full border-2 border-green-500"></div>
      </div>
      <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        + Katıl
      </div>
      <div className="absolute right-[25px] top-[232px]">
        <Image
          src="/images/course-block_two.png"
          alt="Hatm-i Şerif Takibi"
          width={75}
          height={75}
          quality={100}
        />
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="font-semibold text-lg mb-2 capitalize">{title}</div>
      <hr className="mb-4" />
      <div className="flex flex-col text-sm text-gray-600">
        <div className="flex justify-between">
          <div>Grup Üye Sayısı</div>
          <div className="font-semibold">2</div>
        </div>
        <div className="flex justify-between">
          <div>Hatim Sayısı</div>
          <div className="font-semibold">15</div>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
      <div className="flex items-center">
        <UserCircle className="w-6 h-6 text-gray-500 mr-2" />
        <div>
          <div className="text-sm font-semibold">Group Admin</div>
          <div className="text-xs text-green-600">Grup Yöneticisi</div>
        </div>
      </div>
      <div className="bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
        Durum: Açık
      </div>
    </div>
  </div>
);

export default HatimGroupCard;
