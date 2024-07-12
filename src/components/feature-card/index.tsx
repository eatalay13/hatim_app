import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image,
}) => (
  <div className="rounded-lg bg-emerald-50 p-6 text-center shadow-md">
    <Image
      src={image}
      alt={title}
      className="mb-4 h-40 w-full rounded-t-lg object-cover"
      width={250}
      height={250}
      quality={100}
    />
    <div className="mb-4 flex justify-center">{icon}</div>
    <h4 className="mb-2 text-xl font-semibold text-emerald-700">{title}</h4>
    <p>{description}</p>
  </div>
);

export default FeatureCard;
