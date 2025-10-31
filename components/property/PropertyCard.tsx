import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl?: string;
  description?: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  // safe src: ensure a string (next/image accepts string | StaticImport)
  const src = property.imageUrl ?? "/images/default-property.jpg";

  return (
    <article className="border rounded-2xl shadow-sm hover:shadow-md transition-all bg-white overflow-hidden">
      {/* Image + link */}
      {/* <Link href={/}> */}
      {/* <Link href={/properties/${property.id}} > */}
      {/* anchor ensures href is treated as a string (not a RegExp) and keeps compatibility */}
      <a className="block relative w-full h-48 cursor-pointer">
        <Image
          src={src}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </a>
      {/* </Link> */}

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {property.title}
        </h3>

        <p className="text-sm text-gray-600">{property.location}</p>

        <p className="text-blue-600 font-bold mt-2">
          ${property.price} / night
        </p>

        {property.description && (
          <p className="text-gray-700 text-sm mt-2 line-clamp-2">
            {property.description}
          </p>
        )}

        {/* <Link href={"/"}> */}
        {/* <Link href={/properties/${property.id}}> */}
        <a className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors">
          View Details
        </a>
        {/* </Link> */}
      </div>
    </article>
  );
}
