'use client';
import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// export const metadata: Metadata = {
//   title: "Privacy Policy - Hotel Nakshathra",
//   description:
//     "Privacy Policy for Hotel Nakshathra - Your privacy is important to us",
// };

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />
      <section className='relative w-full bg-[#FFFFFF] overflow-hidden'>
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
                  className='heading heading leading-[1.15] '
                >
                  Privacy Policy
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-6 '
                >
                  <p className='text-lg text-[#5A5A5A] leading-relaxed'>
                    At Hotel Nakshathra Royal Stay, accessible from
                    www.hotelnakshathra.com, one of our main priorities is the
                    privacy of our visitors. This Privacy Policy document
                    contains types of information that is collected and recorded
                    by Hotel Nakshathra Royal Stay and how we use it.
                  </p>
                  <p className='text-lg text-[#5A5A5A] leading-relaxed'>
                    If you have additional questions or require more information
                    about our Privacy Policy, do not hesitate to contact
                    us.{' '}
                  </p>
                  <p className='text-lg text-[#5A5A5A] leading-relaxed'>
                    This Privacy Policy applies only to our online activities
                    and is valid for visitors to our website with regards to the
                    information that they shared and/or collect in Hotel
                    Nakshathra Royal Stay. This policy is not applicable to any
                    information collected offline or via channels other than
                    this website.
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
              src='/facilities/intro.webp'
              alt='Hotel Nakshathra Elegant Interior'
              fill
              className='object-cover object-center'
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>
      <section className='py-20 px-4 bg-[#FFFFFF]'>
        {/* Content Section */}
        <div className='max-w-6xl mx-auto'>
          <div className='px-8 sm:px-12'>
            <div className='space-y-12'>
              {/* Introduction */}

              {/* Information Collection */}
              <section className='space-y-4'>
                <h3 className='privacy leading-[1.15]'>Consent</h3>

                <p className='para'>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
              </section>

              {/* How We Use Information */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Information we collect
                </h3>

                <p className='para'>
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                </p>
                <p className='para'>
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                </p>
                <p className='para'>
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, company name,
                  address, email address, and telephone number.
                </p>
              </section>

              {/* Data Sharing */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  How we use your information
                </h3>

                <p className='para'>
                  We use the information we collect in various ways, including
                  to:
                </p>
                <ul className='pl-6 space-y-2 '>
                  <li className='group list flex items-center gap-3'>
                    <span className='w-6 h-6 flex-shrink-0 rounded-full bg-[#F6F7F9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F4C430]'>
                      <Check
                        className='w-4 h-4 group-hover:text-white'
                        strokeWidth={3}
                      />
                    </span>
                    Provide, operate, and maintain our website
                  </li>
                  <li className='group list flex items-center gap-3 py-1'>
                    <span className='w-6 h-6 flex-shrink-0 rounded-full bg-[#F6F7F9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F4C430]'>
                      <Check
                        className='w-4 h-4 group-hover:text-white'
                        strokeWidth={3}
                      />
                    </span>
                    Improve, personalize, and expand our website
                  </li>
                  <li className='group list flex items-center gap-3 py-1'>
                    <span className='w-6 h-6 flex-shrink-0 rounded-full bg-[#F6F7F9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F4C430]'>
                      <Check
                        className='w-4 h-4 group-hover:text-white'
                        strokeWidth={3}
                      />
                    </span>
                    Understand and analyze how you use our website
                  </li>
                  <li className='group list flex items-center gap-3 py-1'>
                    <span className='w-6 h-6 flex-shrink-0 rounded-full bg-[#F6F7F9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F4C430]'>
                      <Check
                        className='w-4 h-4 group-hover:text-white'
                        strokeWidth={3}
                      />
                    </span>
                    Develop new products, services, features, and functionality
                  </li>
                  <li className='group list flex items-start gap-3 py-1'>
                    <span className='w-6 h-6 flex-shrink-0 rounded-full bg-[#F6F7F9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F4C430]'>
                      <Check
                        className='w-4 h-4 group-hover:text-white'
                        strokeWidth={3}
                      />
                    </span>

                    <span>
                      Communicate with you, either directly or through one of
                      our partners, including for customer service, to provide
                      you with updates and other information relating to the
                      website, and for marketing and promotional purposes
                    </span>
                  </li>

                  <li className='group flex list items-center gap-3 py-1'>
                    <span className='w-6 h-6 flex-shrink-0 rounded-full bg-[#F6F7F9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F4C430]'>
                      <Check
                        className='w-4 h-4 group-hover:text-white'
                        strokeWidth={3}
                      />
                    </span>
                    Send you emails
                  </li>
                  <li className='group flex list items-center gap-3 py-1'>
                    <span className='w-6 h-6 flex-shrink-0 rounded-full bg-[#F6F7F9] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F4C430]'>
                      <Check
                        className='w-4 h-4 group-hover:text-white'
                        strokeWidth={3}
                      />
                    </span>
                    Find and prevent fraud
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>Log Files</h3>
                <p className='para'>
                  Hotel Nakshathra Royal Stay follows a standard procedure of
                  using log files. These files log visitors when they visit
                  websites. All hosting companies do this and a part of hosting
                  services' analytics. The information collected by log files
                  include internet protocol (IP) addresses, browser type,
                  Internet Service Provider (ISP), date and time stamp,
                  referring/exit pages, and possibly the number of clicks. These
                  are not linked to any information that is personally
                  identifiable. The purpose of the information is for analyzing
                  trends, administering the site, tracking users' movement on
                  the website, and gathering demographic information.
                </p>
              </section>

              {/* Your Rights */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Cookies and Web Beacons
                </h3>

                <p className='para'>
                  Like any other website, Hotel Nakshathra Royal Stay uses
                  'cookies'. These cookies are used to store information
                  including visitors' preferences, and the pages on the website
                  that the visitor accessed or visited. The information is used
                  to optimize the users' experience by customizing our web page
                  content based on visitors' browser type and/or other
                  information.
                </p>
                <p className='para'>
                  For more general information on cookies, please read{' '}
                  <a
                    href='https://www.generateprivacypolicy.com/#cookies'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#8B4513] underline underline-offset-4 hover:opacity-80 transition'
                  >
                    the Cookies article on Generate Privacy Policy website.
                  </a>
                  .
                </p>
              </section>

              {/* Cookies */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Google DoubleClick DART Cookie
                </h3>
                <p className='para'>
                  Google is one of a third-party vendor on our site. It also
                  uses cookies, known as DART cookies, to serve ads to our site
                  visitors based upon their visit to www.website.com and other
                  sites on the internet. However, visitors may choose to decline
                  the use of DART cookies by visiting the Google ad and content
                  network Privacy Policy at the following URL –{' '}
                  <a
                    href='https://policies.google.com/technologies/ads'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#8B4513] underline underline-offset-4 hover:opacity-80 transition'
                  >
                    https://policies.google.com/technologies/ads
                  </a>
                </p>
              </section>

              {/* Third-Party Links */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Advertising Partners Privacy Policies
                </h3>
                <p className='para'>
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of Hotel Nakshathra Royal Stay.
                </p>
                <p className='para'>
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on Hotel
                  Nakshathra Royal Stay, which are sent directly to users'
                  browser. They automatically receive your IP address when this
                  occurs. These technologies are used to measure the
                  effectiveness of their advertising campaigns and/or to
                  personalize the advertising content that you see on websites
                  that you visit.
                </p>
                <p className='para'>
                  Note that Hotel Nakshathra Royal Stay has no access to or
                  control over these cookies that are used by third-party
                  advertisers.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Third Party Privacy Policies
                </h3>
                <p className='para'>
                  Hotel Nakshathra Royal Stay's Privacy Policy does not apply to
                  other advertisers or websites. Thus, we are advising you to
                  consult the respective Privacy Policies of these third-party
                  ad servers for more detailed information. It may include their
                  practices and instructions about how to opt-out of certain
                  options.
                </p>
                <p className='para'>
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
                </p>
              </section>

              {/* Policy Updates */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </h3>
                <p className='para'>
                  Under the CCPA, among other rights, California consumers have
                  the right to:
                </p>
                <p className='para'>
                  Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                </p>
                <p className='para'>
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                </p>
                <p className='para'>
                  Request that a business that sells a consumer's personal data,
                  not sell the consumer's personal data.
                </p>
                <p className='para'>
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
              </section>

              {/* Contact Information */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  GDPR Data Protection Rights
                </h3>
                <div className='space-y-4 text-gray-600 leading-relaxed'>
                  <p className='para'>
                    We would like to make sure you are fully aware of all of
                    your data protection rights. Every user is entitled to the
                    following:
                  </p>
                  <p className='para'>
                    The right to access – You have the right to request copies
                    of your personal data. We may charge you a small fee for
                    this service.
                  </p>
                  <p className='para'>
                    The right to rectification – You have the right to request
                    that we correct any information you believe is inaccurate.
                    You also have the right to request that we complete the
                    information you believe is incomplete.
                  </p>
                  <p className='para'>
                    The right to erasure – You have the right to request that we
                    erase your personal data, under certain conditions.
                  </p>
                  <p className='para'>
                    The right to restrict processing – You have the right to
                    request that we restrict the processing of your personal
                    data, under certain conditions.
                  </p>
                  <p className='para'>
                    The right to object to processing – You have the right to
                    object to our processing of your personal data, under
                    certain conditions.
                  </p>
                  <p className='para'>
                    The right to data portability – You have the right to
                    request that we transfer the data that we have collected to
                    another organization, or directly to you, under certain
                    conditions.
                  </p>
                  <p className='para'>
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us.
                  </p>
                </div>
              </section>

              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Children's Information
                </h3>
                <div className='space-y-4 text-gray-600 leading-relaxed'>
                  <p className='para'>
                    Another part of our priority is adding protection for
                    children while using the internet. We encourage parents and
                    guardians to observe, participate in, and/or monitor and
                    guide their online activity.
                  </p>
                  <p className='para'>
                    Hotel Nakshathra Royal Stay does not knowingly collect any
                    Personal Identifiable Information from children under the
                    age of 13. If you think that your child provided this kind
                    of information on our website, we strongly encourage you to
                    contact us immediately and we will do our best efforts to
                    promptly remove such information from our records.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
