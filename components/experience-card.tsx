'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  description?: string;
  image: string;
  link?: string;
  rotation?: string;
}

export default function ExperienceCard({
  title,
  description,
  image,
  link,
  rotation = '',
}: ExperienceCardProps) {
  return (
    <div
      className={`group relative w-full max-w-[320px] max-[1290px]:max-w-[280px]${rotation}
      mx-auto transition-all duration-500`}
    >
      <div className="bg-white p-5 rounded-xl min-h-[100px] flex flex-col">
        
        {/* Image with Link */}
        {link ? (
          <Link href={link} className="block">
            <div className="relative h-[260px] rounded-lg overflow-hidden mb-5">
              <img
                src={image || '/placeholder.svg'}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </Link>
        ) : (
          <div className="relative h-[260px] rounded-lg overflow-hidden mb-5">
            <img
              src={image || '/placeholder.svg'}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-2">
          
          {/* Title with Link */}
          {link ? (
            <Link href={link}>
              <h3 className="heading leading-tight hover:text-[#8B4513] transition-colors">
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className="heading leading-tight">{title}</h3>
          )}

          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}

          {link && (
            <Link
              href={link}
              className="flex mt-2 items-center gap-2 text-[#8B4513] text-sm font-medium hover:gap-3 transition-all"
            >
              Know More
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
