// app/templates/loading.tsx
import AllTemplatesSkeleton from "@/components/skeletons/AllTemplates";

export default function Loading() {
  return (
    <div className="m-auto flex justify-center z-0">
      <div className="grid z-0 grid-cols-1 max-w-[12800px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 xl:gap-6">
        {Array(16).fill(null).map((_, i) => (
          <AllTemplatesSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
