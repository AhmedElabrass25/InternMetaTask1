import { FiSearch } from "react-icons/fi";
interface EmptyStateProps {
  message: string;
}
const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      {/* Changed to a lighter indigo tint and added a ring */}
      <div className="bg-indigo-50 ring-8 ring-indigo-50/50 p-6 rounded-full mb-8">
        <FiSearch className="text-indigo-600" size={32} />
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Nothing matched your search
      </h2>
      <p className="text-gray-500 text-center max-w-[280px]">{message}</p>
    </div>
  );
};
export default EmptyState;
