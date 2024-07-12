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
  <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
    <div className="relative">
      <Image
        className="w-full transition-transform hover:scale-110 hover:transform"
        src="/images/hatim-group-default.jpg"
        alt="Hatm-i Şerif Takibi"
        width={500}
        height={500}
        quality={100}
      />
      <div className="absolute left-2 top-2 rounded-full bg-white p-1">
        <div className="h-4 w-4 rounded-full border-2 border-green-500"></div>
      </div>
      <div className="absolute bottom-2 left-2 rounded-full bg-green-500 px-3 py-1 text-sm font-semibold text-white">
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
      <div className="mb-2 text-lg font-semibold capitalize">{title}</div>
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
    <div className="flex items-center justify-between bg-gray-100 px-6 py-4">
      <div className="flex items-center">
        <UserCircle className="mr-2 h-6 w-6 text-gray-500" />
        <div>
          <div className="text-sm font-semibold">Group Admin</div>
          <div className="text-xs text-green-600">Grup Yöneticisi</div>
        </div>
      </div>
      <div className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-yellow-800">
        Durum: Açık
      </div>
    </div>
  </div>
);

export default HatimGroupCard;
