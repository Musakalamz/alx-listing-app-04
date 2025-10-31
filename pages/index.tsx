import React, { useState } from "react";
import {
  PROPERTYLISTINGSAMPLE,
  FILTER_OPTIONS,
  HERO_BACKGROUND_IMAGE,
} from "@/constants";
import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/Image 1.jpg')`,
        }}
      >
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find your favorite
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">place here!</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div> */}
      </section>

      {/* Filter Section */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1 mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                Top picks
              </span>
              <span className="text-sm text-gray-500">Free Rated Good</span>
              <span className="text-sm text-gray-500">Book Now, Pay Later</span>
              <span className="text-sm text-gray-500">Self Check-in</span>
              <span className="text-sm text-gray-500">Instant Book</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-teal-600">
                Filter
              </button>
              <button className="text-sm text-gray-600 hover:text-teal-600">
                Sort by: Top rated first
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Pill
              label="All"
              isActive={activeFilter === null}
              onClick={() => setActiveFilter(null)}
            />
            {FILTER_OPTIONS.slice(0, 8).map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <Card
                key={property.name}
                id={property.name}
                title={property.name}
                description={`${property.address.city}, ${property.address.country}`}
                imageUrl={property.image}
                price={property.price}
                location={`${property.address.city}, ${property.address.state}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      <section className="py-8 text-center">
        <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors">
          Show more
        </button>
        <p className="text-sm text-gray-500 mt-2">Over 2 million listings</p>
      </section>
    </div>
  );
};

export default Home;
