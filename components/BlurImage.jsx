import Image from "next/image";
import Link from "next/link";

export default function BlurImage() {
  return (
    <a href="#">
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt="image"
          width="500"
          height="500"
          src="https://bit.ly/placeholder-img"
          className="hover:opacity-75"
        />
      </div>
      <Link href="https://www.pexels.com" className="mt-4 text-sm text-slate-700">Photographer:</Link>
    </a>
  );
}
