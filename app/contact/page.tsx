'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // merge fields into single message
    formData.delete('name');
    formData.delete('email');
    formData.delete('message');

    formData.append(
      'message',
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    try {
      const response = await fetch(
        'https://formsubmit.co/repute.pragathi@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      );

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen bg-white'>
      <Header />

      {/* HERO */}
      <section className='relative w-full overflow-hidden'>
        <div className='flex flex-col lg:flex-row w-full'>
          <div className='w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center'>
            <div className='w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-14 sm:py-16 lg:py-20'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='heading leading-[1.15]'
              >
                Contact <span className='text-[#b3862f]'>Us</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='para mt-6'
              >
                At Hotel Nakshatra, we strive to make your experience seamless
                and memorable. Reach out for bookings or inquiries.
              </motion.p>
            </div>
          </div>

          <div className='relative w-full lg:w-1/2 h-[260px] sm:h-[360px] lg:h-auto min-h-[420px]'>
            <Image
              src='/contact/contact-banner.png'
              alt='Hotel Nakshatra'
              fill
              className='object-cover object-center'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className='px-4 py-10 sm:py-14 lg:py-20 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='rounded-3xl bg-[#F8F4E9] border p-8 sm:p-10 hover:shadow-xl transition'>
              <Phone className='w-6 h-6 mx-auto text-[#8B4513]' />

              <a
                href='tel:+914562264233'
                className='block mt-6 text-base sm:text-lg lg:text-xl font-light hover:text-[#8B4513] transition'
              >
                +91-45622 64233
              </a>
            </div>

            <div className='rounded-3xl bg-[#F8F4E9] border p-8 sm:p-10 hover:shadow-xl transition'>
              <Mail className='w-6 h-6 mx-auto text-[#8B4513]' />

              <a
                href='mailto:hotelnakshatra33@gmail.com'
                className='block mt-6 text-base sm:text-lg lg:text-xl font-light break-all hover:text-[#8B4513] transition'
              >
                hotelnakshatra33@gmail.com
              </a>

              <a
                href='mailto:info@hotelnakshatra.com'
                className='block mt-3 text-base sm:text-lg lg:text-xl font-light break-all hover:text-[#8B4513] transition'
              >
                info@hotelnakshatra.com
              </a>
            </div>

            <div className='rounded-3xl bg-[#F8F4E9] border p-8 sm:p-10 hover:shadow-xl transition'>
              <MapPin className='w-6 h-6 mx-auto text-[#8B4513]' />
              <p className='mt-6 text-base sm:text-lg lg:text-xl font-light'>
                #1828, PKN Road,
                <br />
                Sivakasi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className='px-4'>
        <div className='relative max-w-7xl mx-auto rounded-3xl h-[240px] sm:h-[320px] lg:h-[380px] overflow-hidden'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7871.199574144209!2d77.805296!3d9.456447!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjcnMjMuMiJOIDc3wrA0OCcxOS4xIkU!5e0!3m2!1sen!2sin!4v1771243748690!5m2!1sen!2sin'
            className='w-full h-full border-0'
            loading='lazy'
            allowFullScreen
          />
        </div>
      </section>

      {/* FORM */}
      <section className='px-4 py-10 sm:py-14 lg:py-20'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
          <div className='relative w-full h-full min-h-full overflow-hidden rounded-3xl'>
            {/* IMAGE */}
            <Image
              src='/contact/contact.png'
              alt='Nakshatra Royal Stay Concierge'
              fill
              className='object-cover z-0'
            />

            {/* OVERLAY */}
            <div className='absolute inset-0 bg-[#152A38]/60 z-10' />

            {/* TEXT */}
            <div className='absolute bottom-10 left-10 right-10 text-white z-20'>
              <p className='text-l uppercase tracking-widest text-white'>
                Nakshatra
              </p>
              <h2 className='heading !text-white leading-[1.15] mt-2'>
                Personalized Assistance
              </h2>
            </div>
          </div>

          <div className='w-full border rounded-2xl p-6 sm:p-8 lg:p-10'>
            <h2 className='heading mb-8'>We’d love to hear from you.</h2>

            <form onSubmit={handleSubmit} className='space-y-8'>
              {/* Hidden fields for FormSubmit */}
              <input type='hidden' name='_captcha' value='false' />
              <input type='hidden' name='_template' value='table' />
              <input type='hidden' name='_subject' value='Nakshatra Contact' />

              <Input name='name' placeholder='Name' required />
              <Input type='email' name='email' placeholder='Email' required />
              <Textarea
                name='message'
                rows={5}
                placeholder='Message'
                required
              />

              <Button
                disabled={loading}
                className='w-full bg-[#8B4513] hover:bg-[#723610]'
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              {success === true && (
                <p className='text-green-600'>Message sent successfully!</p>
              )}
              {success === false && (
                <p className='text-red-600'>Something went wrong!</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
