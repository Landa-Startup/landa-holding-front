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
    <div className="bg-whiteGold px-4 py-8 rounded-sm">
      <span className="border-b-2 border-[#AA84534D] pb-4 font-gilda text-xl tracking-[4px] block">
        Categories
      </span>
      <ul className="font-condensed text-xl mt-7 space-y-4 text-[#6B6B6B]">
      {categories.map((category:any) => (
          <li key={category.id}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
