"use client";

import { ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  rotation?: string; // ✅ optional
}

export default function ExperienceCard({
  title,
  description,
  image,
  rotation = "", // ✅ default value
}: ExperienceCardProps) {
  return (
    <div
      className={`group relative w-[320px] ${rotation} hover:rotate-0 transition-all duration-500`}
    >
      <div className="bg-white p-5 shadow-2xl rounded-sm">
        <div className="relative h-[280px] rounded-sm overflow-hidden mb-5">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="space-y-2 px-2 pb-2">
          <h3 className="font-serif text-2xl text-[#2C1810] mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {description}
          </p>
          <button className="flex items-center gap-2 text-[#8B4513] text-sm font-medium group-hover:gap-3 transition-all">
            Know More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
