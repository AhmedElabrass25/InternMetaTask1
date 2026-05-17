import { FiSearch } from "react-icons/fi";

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 animate-in fade-in zoom-in duration-500">
      <div className="bg-brand-primary/10 ring-8 ring-brand-primary/5 p-8 rounded-3xl mb-8">
        <FiSearch className="text-brand-primary" size={48} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        No Results Found
      </h2>
      <p className="text-gray-500 text-center max-w-sm font-medium">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;
