import React, { useState } from 'react';
import { Heart, MapPin } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const progressColor = project.percentage >= 100 ? '#e98047' : '#e98047';

  return (
    <div
      onClick={() => onClick && onClick(project)}
      className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-orange-100/40 transition-all duration-500 ease-out transform hover:-translate-y-3 cursor-pointer w-full"
    >
      {/* Thumbnail Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/95 backdrop-blur-md text-gray-900 text-xs font-black px-3.5 py-2 rounded-full shadow-lg">
            D-{project.daysLeft}
          </span>
          {project.isHot && (
            <span className="bg-gradient-to-r from-[#e98047] to-red-500 text-white text-xs font-black px-3.5 py-2 rounded-full shadow-lg flex items-center gap-1">
              🔥 Hot
            </span>
          )}
        </div>

        {/* Heart Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
        >
          <Heart
            className={`w-5 h-5 transition-all ${isLiked ? 'fill-[#e98047] text-[#e98047]' : 'text-gray-700'}`}
            strokeWidth={2.5}
          />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500 text-xs font-semibold">{project.organizer}</span>
          <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#e98047]/10 to-[#A569BD]/10 text-[#e98047] text-xs font-black">
            {project.category}
          </span>
        </div>

        <h3 className="text-gray-900 font-black text-lg leading-tight mb-4 line-clamp-2 min-h-[3.5rem]">
          {project.title}
        </h3>

        <div className="flex items-center gap-1.5 mb-5 text-gray-500 text-xs">
           <MapPin className="w-4 h-4" strokeWidth={2.5} />
           <span className="font-semibold">{project.location}</span>
        </div>

        {/* Funding Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="font-black text-3xl bg-gradient-to-r from-[#e98047] to-[#A569BD] bg-clip-text text-transparent">
              {project.percentage}%
            </span>
            <span className="text-gray-400 text-xs font-bold">달성률</span>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#e98047] to-[#A569BD] transition-all duration-1000 ease-out shadow-md"
              style={{ width: `${Math.min(project.percentage, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
