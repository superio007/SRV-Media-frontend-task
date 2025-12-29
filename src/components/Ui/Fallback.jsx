const FallBack = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      aria-label="Loading content"
      aria-busy="true"
    >
      <div className="space-y-4 w-full px-6">
        <div
          className="h-48 bg-gray-300 rounded animate-pulse"
          role="presentation"
        ></div>

        <div className="grid grid-cols-4 gap-4">
          <div
            className="h-24 bg-gray-300 rounded animate-pulse"
            role="presentation"
          ></div>
          <div
            className="h-24 bg-gray-300 rounded animate-pulse"
            role="presentation"
          ></div>
          <div
            className="h-24 bg-gray-300 rounded animate-pulse"
            role="presentation"
          ></div>
          <div
            className="h-24 bg-gray-300 rounded animate-pulse"
            role="presentation"
          ></div>
        </div>

        <div
          className="h-32 bg-gray-300 rounded animate-pulse"
          role="presentation"
        ></div>
        <div
          className="h-32 bg-gray-300 rounded animate-pulse"
          role="presentation"
        ></div>
      </div>
      <span className="sr-only">Loading page content, please wait...</span>
    </section>
  );
};

export default FallBack;
