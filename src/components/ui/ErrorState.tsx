import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorState = ({
  message = "Something went wrong",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-red-50 ring-8 ring-red-50/50 p-8 rounded-3xl mb-8">
        <FiAlertCircle className="text-red-500" size={48} />
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
        Oops ! <span className="text-red-600">Error Occurred</span>
      </h2>

      <p className="text-lg text-gray-500 font-medium max-w-md mb-8">
        {message}. Please check your connection or try again later.
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-200 active:scale-95"
        >
          <FiRefreshCw size={20} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
