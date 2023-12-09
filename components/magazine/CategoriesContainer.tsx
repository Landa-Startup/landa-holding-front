'use client'
import React, { useEffect, useState } from 'react';

export default function CategoriesContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}blog/categories`);
      const data = await response.json();
      console.log(data)
      setCategories(data);
    }
    fetchTags();
  }, []);
  return (
    <div className="rounded-sm bg-whiteGold px-4 py-8">
      <span className="block border-b-2 border-[#AA84534D] pb-4 font-gilda text-xl tracking-[4px]">
        Categories
      </span>
      <ul className="mt-7 space-y-4 font-condensed text-xl text-[#6B6B6B]">
      {categories.map((category:any, index) => (
          <li key={index}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
