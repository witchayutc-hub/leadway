export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse p-4  text-gray-300">
      <div className="space-y-2">
        <div className="flex items-center justify-center w-full aspect-video bg-gray-100 rounded-2xl">
          <i className="bi bi-images text-8xl" />
        </div>
        <div className="flex items-center justify-center w-full aspect-video bg-gray-100 rounded-2xl">
          <i className="bi bi-images text-8xl" />
        </div>
        <div className="flex items-center justify-center w-full aspect-video bg-gray-100 rounded-2xl">
          <i className="bi bi-images text-8xl" />
        </div>
        <div className="flex items-center justify-center w-full aspect-video bg-gray-100 rounded-2xl">
          <i className="bi bi-images text-8xl" />
        </div>
      </div>
    </div>
  );
}
