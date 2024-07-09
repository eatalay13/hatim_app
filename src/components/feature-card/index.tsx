interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image }) => (
    <div className="bg-emerald-50 p-6 rounded-lg shadow-md text-center">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
        <div className="mb-4 flex justify-center">{icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-emerald-700">{title}</h4>
        <p>{description}</p>
    </div>
);

export default FeatureCard;