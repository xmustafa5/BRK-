import React from 'react'

export default function SmallLabelProductsLanding({ title }) {
  return (
    <h2 className="flex  flex-col gap-3 mt-4 text-white font-light tracking-wider text-xs sm:text-md md:text-lg">
      {title}
    </h2>
  );
}
