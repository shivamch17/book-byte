import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className='flex bg-gray-300 text-white rounded-xl shadow-xl'>
      <Skeleton className="w-[200px] h-100 rounded-xl" />
      <div className="w-1/2 m-4 flex flex-col justify-between">
        <div>
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[180px] my-4" />
          <Skeleton className="h-4 w-[180px] my-4" />
          <Skeleton className="h-4 w-[150px] my-4" />
          <Skeleton className="h-4 w-[100px] my-4" />
          <Skeleton className="h-4 w-[120px] my-4" />
        </div>
        <Skeleton className="w-full h-10 mt-4 bg-white my-4" />
      </div>
    </div>
  )
}