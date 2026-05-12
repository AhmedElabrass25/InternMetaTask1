const ProductCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xs shadow-md p-4 animate-pulse"
        >
          <div className="h-52 w-full bg-gray-200 rounded-lg"></div>

          <div className="h-4 bg-gray-200 rounded mt-4"></div>

          <div className="h-4 w-1/2 bg-gray-200 rounded mt-3"></div>

          <div className="h-4 w-1/3 bg-gray-200 rounded mt-3"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
