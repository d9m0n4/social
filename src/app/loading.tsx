export default function Loader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="border-t-transparent absolute h-16 w-16 animate-spin rounded-full border-4 border-solid border-[#8DCEF4]"></div>
        <div className="border-b-transparent absolute h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#48AD43]"></div>
        <div className="border-t-transparent absolute h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#F6C31A]"></div>
      </div>
    </div>
  );
}
