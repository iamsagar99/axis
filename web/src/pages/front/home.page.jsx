import { Button } from "@/components/ui/button"; // ShadCN UI Button

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-gray-800">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg w-full sm:w-96">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Home Page!</h1>
        <p className="text-lg mb-6">This is a simple example using Tailwind CSS and ShadCN UI components.</p>
        
        {/* ShadCN UI Button */}
        <Button
          onClick={() => alert('Button clicked!')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
