import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <section className="sticky top-16 z-30 bg-white/70 backdrop-blur-xl py-5 border-b border-gray-100">
      <div className="overflow-x-auto no-scrollbar px-6 flex gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#e98047] to-[#A569BD] text-white shadow-lg shadow-purple-300/40 scale-105'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;
