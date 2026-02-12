import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TestimonialCard({
  name,
  role,
  rating = 5,
  review,
  avatar,
  platform,
}: any) {
  // show 5 stars, highlight according to rating
  const stars = Array.from({ length: 5 });

  return (
    <div className='relative bg-white rounded-2xl border border-[#D9B66E] p-8 shadow-sm h-full md:h-[420px] flex flex-col overflow-hidden'>
      {/* Stars (outlined gold) */}
      <div className='flex gap-2 mb-6'>
        {stars.map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`transition-all duration-200 ${
              i < rating
                ? 'text-[#D9B66E] fill-[#D9B66E]' // highlighted
                : 'text-[#D9B66E]/40' // faded
            }`}
          />
        ))}
      </div>

      {/* Review */}
      <p className='para mb-6 flex-1'>{review}</p>

      <hr className='mb-6 border-t border-[#efe9df]' />

      {/* Footer */}
      <div className='flex items-center justify-between mt-auto'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 relative rounded-full overflow-hidden border-2 border-white flex-shrink-0'>
            <Image src={avatar} alt={name} fill className='object-cover' />
          </div>
          <div>
            <p className='para-title'>{name}</p>
            <p className='subtitle'>{role}</p>
          </div>
        </div>

        {/* Platform badge (Tripadvisor-like) */}
        {/* <div className='flex items-center gap-3'>
          <div className='text-sm text-[#00AA6C] font-semibold hidden sm:block'>
            {platform}
          </div>
          <div className='w-8 h-8 rounded-full bg-[#00AA6C] flex items-center justify-center shadow-sm'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='6.5' cy='6.5' r='2' fill='#fff' />
              <circle cx='17.5' cy='6.5' r='2' fill='#fff' />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
}
