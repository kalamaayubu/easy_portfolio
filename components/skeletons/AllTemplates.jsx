const AllTemplatesSkeleton = () => {
  return (
    <div className="flex flex-col mb-5">
      <div className="h-52 w-72 bg-gray-100 rounded-md animate-pulse" />
      <div className="flex gap-2 items-center bg-red mt-2">
        <div className="h-10 w-12 rounded-full bg-gray-100 animate-pulse"/>
        <div className="w-full h-8 rounded-full bg-gray-100 animate-pulse"/>
      </div>
    </div>
  );
};

export default AllTemplatesSkeleton;
