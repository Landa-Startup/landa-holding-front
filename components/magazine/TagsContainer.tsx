'use client'
import React, { useState, useEffect } from 'react';

export default function TagsContainer() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}blog/tags`);
      const data = await response.json();
      console.log(data)
      setTags(data);
    }
    fetchTags();
  }, []);

  return (
    <div className="rounded-sm bg-whiteGold px-4 py-8">
      <span className="block border-b-2 border-[#AA84534D] pb-4 font-gilda text-xl tracking-[4px]">
        Tags
      </span>
      <div className="mt-7 grid grid-cols-3 gap-2">
        {tags.map((tag:any) => (
          <button key={tag.id} className="btn rounded-sm bg-[#D9D9D9] px-2">
            {tag.title}
          </button>
        ))}
      </div>
    </div>
  );
}
