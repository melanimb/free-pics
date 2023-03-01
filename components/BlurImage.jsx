import Image from "next/image";
import Link from "next/link";

export default function BlurImage({ alt, src, photographer, photographer_url }) {
  return (
    <a href="#">
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={alt}
          width="500"
          height="500"
          src={src}
          className="hover:opacity-75"
        />
      </div>
      <Link href={photographer_url} className="mt-4 text-sm text-slate-700">{photographer}</Link>
    </a>
  );
}
