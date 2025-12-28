const FallBack = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 w-full px-6">
        <div className="h-48 bg-gray-300 rounded animate-pulse"></div>

        <div className="grid grid-cols-4 gap-4">
          <div className="h-24 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-24 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-24 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-24 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="h-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-32 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default FallBack;
