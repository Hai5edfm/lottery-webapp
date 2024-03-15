export default function LoginFormSkeleton() {
  return (
    <div role="status" className="flex max-w-sm animate-pulse flex-col gap-9">
      <div className="mb-4 h-6 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mb-4 h-6 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="m-auto mb-4  w-1/2 rounded-full bg-gray-200 p-3 text-center dark:bg-gray-700">
        Cargando...
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
