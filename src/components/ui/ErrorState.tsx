import { FiAlertCircle } from "react-icons/fi";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorState = ({
  message = "Something went wrong",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-red-100 p-6 rounded-full mb-4">
        <FiAlertCircle className="text-red-500" size={32} />
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-red-600">
        {message}
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Please try again or check your internet connection.
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
