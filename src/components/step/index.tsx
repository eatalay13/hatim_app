interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="text-center">
    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-emerald-800">
      {number}
    </div>
    <h4 className="mb-2 text-xl font-semibold text-emerald-700">{title}</h4>
    <p>{description}</p>
  </div>
);

export default Step;
