import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { useNavigate } from "react-router-dom"; // For navigation

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="text-center max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl mb-4">Something went wrong. Please try again later.</p>
        
        <Button
          onClick={handleGoBack}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
