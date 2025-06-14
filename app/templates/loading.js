// app/templates/loading.tsx
import AllTemplatesSkeleton from "@/components/skeletons/AllTemplates";

export default function Loading() {
  return (
    <div className="m-auto">
      <div className="flex gap-3 sm:gap-5 md:gap-6 flex-wrap items-center justify-center mb-20">
        {Array(16).fill(null).map((_, i) => (
          <AllTemplatesSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
