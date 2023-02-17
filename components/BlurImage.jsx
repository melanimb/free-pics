import Image from "next/image";

export default function BlurImage() {
  return (
    <a href="#" className="group">
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt="image"
          width="500"
          height="500"
          src="https://bit.ly/placeholder-img"
          className="group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Lee Robinson</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
    </a>
  );
}
