'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get values
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Clear original fields
    formData.delete('name');
    formData.delete('email');
    formData.delete('message');

    // Append a single message with your custom format
    formData.append(
      'message',
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    // Required for raw template
    formData.set('_template', 'raw');

    // Optional: subject and reply-to
    formData.set('_subject', 'Nakshatra');
    formData.set('_replyto', 'rdba.developer@gmail.com');

    try {
      const response = await fetch(
        'https://formsubmit.co/rdba.developer@gmail.com',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccess(false);
    }
  };

  return (
    <main className='min-h-screen bg-white'>
      <Header />

      {/* HERO */}
      <section className='relative w-full overflow-hidden'>
        <div className='relative flex flex-col lg:flex-row  w-full'>
          {/* LEFT CONTENT - Light Background */}
          <div className='relative z-10 w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center'>
            <div className='w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20'>
              <div>
                {/* Eyebrow / Subtitle */}

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='heading leading-[1.15] '
                >
                  Contact <span className='text-[#b3862f]'>Us</span>{' '}
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-6 mb-10 '
                >
                  <p className='para'>
                    At Hotel Nakshatra, we strive to make your experience
                    seamless and memorable. Reach out to us for bookings,
                    inquiries or any assistance, you’ll receive prompt and
                    personalized support.
                  </p>
                </motion.div>

                {/* Decorative Line */}

                {/* Features */}
              </div>
            </div>
          </div>

          {/* DIAGONAL SEPARATOR */}
          <div className='hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 z-20 pointer-events-none'>
            <div className='relative h-full w-px'>
              <div className='absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px]'>
                <div className='h-full bg-gradient-to-b from-[#8B4513]/20 via-[#8B4513]/40 to-[#8B4513]/20'></div>
              </div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FBF6E6] border-2 border-[#8B4513]/30 rounded-full'></div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='w-full lg:w-1/2 relative'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10'></div>
            <Image
              src='/contact/contact-banner.png'
              alt='Hotel Nakshatra Elegant Interior'
              fill
              className='object-cover object-center'
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}

      {/* CONTACT DETAILS */}
      <section className='px-4 py-12 sm:py-16 md:py-20 lg:py-20 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
            {/* Phone */}
            <div className='rounded-3xl border border-[#8B4513]/20 p-10 hover:shadow-xl transition'>
              <Phone className='w-6 h-6 mx-auto text-[#8B4513]' />
              <p className='mt-6 text-xl text-[#1F3A44] font-light'>
                +91-45622 64233 
              </p>
            </div>

            {/* Email */}
            <div className='rounded-3xl border border-[#8B4513]/20 p-10 hover:shadow-xl transition'>
              <Mail className='w-6 h-6 mx-auto text-[#8B4513]' />
              <p className='mt-6 text-xl text-[#1F3A44] font-light break-all'>
                hotelnakshatra33@gmail.com
              </p>
              
              <p className='mt-6 text-xl text-[#1F3A44] font-light break-all'>
                info@hotelnakshatra.com
              </p>
            </div>

            {/* Location */}
            <div className='rounded-3xl  border border-[#8B4513]/20 p-10 hover:shadow-xl transition'>
              <MapPin className='w-6 h-6 mx-auto text-[#8B4513]' />
              <p className='mt-6 text-xl text-[#1F3A44] font-light'>
              <br/> #1828, PKN Road,<br/> Sivakasi
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative max-w-7xl  mx-auto rounded-3xl h-[300px]'>
        <div className='relative w-full h-full min-h-[300px] overflow-hidden rounded-3xl'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3935.5997870721044!2d77.805296!3d9.456446999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjcnMjMuMiJOIDc3wrA0OCcxOS4xIkU!5e0!3m2!1sen!2sin!4v1771068439471!5m2!1sen!2sin'
            className='absolute inset-0 w-full h-full border-0'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
      </section>

      {/* FORM */}
      <section className='px-4 py-12 sm:py-16 md:py-20 lg:py-20 bg-[#FFFFF]'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-stretch'>
          {/* IMAGE SIDE */}
          <div className='relative w-full h-full min-h-full overflow-hidden rounded-3xl'>
            <Image
              src='/contact/contact.png' // replace with your image
              alt='Nakshatra Royal Stay Concierge'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-[#152A38]/60' />

            <div className='absolute bottom-10 left-10 right-10 text-white'>
              <p className='text-l uppercase tracking-widest text-white'>
                Nakshatra Royal Stay
              </p>
              <h2 className='heading !text-white leading-[1.15] mt-2'>
                Personalized Assistance
              </h2>
            </div>
          </div>

          {/* FORM SIDE */}
          <div className='max-w-xl mx-auto w-full border border-[#8B4513]/25 rounded-2xl p-10 bg-transparent'>
            <h2 className='heading leading-[1.15] mb-10'>
              We’d love to hear from you.
            </h2>

            <form onSubmit={(e) => handleSubmit(e)} className='space-y-10'>
              {/* hidden settings */}
              <input type='hidden' name='_captcha' value='false' />
              <input
                type='hidden'
                name='_subject'
                value='New Contact Form Submission'
              />
              <input type='hidden' name='_template' value='table' />

              <div>
                <label className='text-xs uppercase tracking-widest text-gray-500'>
                  Full Name
                </label>
                <Input
                  name='name'
                  placeholder='Your name'
                  required
                  className='mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]'
                />
              </div>

              <div>
                <label className='text-xs uppercase tracking-widest text-gray-500'>
                  Email Address
                </label>
                <Input
                  type='email'
                  name='email'
                  placeholder='your@email.com'
                  required
                  className='mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]'
                />
              </div>

              <div>
                <label className='text-xs uppercase tracking-widest text-gray-500'>
                  Subject
                </label>
                <Input
                  name='subject'
                  placeholder='Booking / Inquiry / Support'
                  className='mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]'
                />
              </div>

              <div>
                <label className='text-xs uppercase tracking-widest text-gray-500'>
                  Message
                </label>
                <Textarea
                  name='message'
                  rows={5}
                  placeholder='Write your message...'
                  required
                  className='mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]'
                />
              </div>

              <Button
                type='submit'
                className='w-full mt-10 bg-[#8B4513] hover:bg-[#723610] text-white py-6 text-sm uppercase tracking-widest cursor-pointer'
              >
                Send Message
              </Button>

              {/* Success / Error Messages */}
              {success === true && (
                <p className='text-green-600 !font-[300] !text-[21px] mt-4'>
                  Message sent successfully!
                </p>
              )}

              {success === false && (
                <p className='text-red-600 !font-[300] !text-[21px] mt-4'>
                  Something went wrong!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
