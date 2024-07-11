interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-yellow-500 text-emerald-800 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
      {number}
    </div>
    <h4 className="text-xl font-semibold mb-2 text-emerald-700">{title}</h4>
    <p>{description}</p>
  </div>
);

export default Step;
