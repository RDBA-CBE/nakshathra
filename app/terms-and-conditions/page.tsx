'use client';
import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// export const metadata: Metadata = {
//   title: "Privacy Policy - Hotel Nakshatra",
//   description:
//     "Privacy Policy for Hotel Nakshatra - Your privacy is important to us",
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
                  className='heading heading leading-[1.15]'
                >
                  Terms and Conditions
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-6 '
                >
                  <p className='para'>
                    This page states the Terms and Conditions under which you
                    (Visitor) may visit this website. Please read this page
                    carefully. If you do not accept the Terms and Conditions
                    stated here, we would request you to exit this site.
                    Nakshatra Royal Stay , any of its business divisions and /
                    or its subsidiaries, associate companies or subsidiaries to
                    subsidiaries or such other investment companies (in India or
                    abroad) reserve their respective rights to revise these
                    Terms and Conditions at any time by updating this posting.
                    You should visit this page periodically to re-appraise
                    yourself of the Terms and Conditions, because they are
                    binding on all users of this website.
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
              alt='Hotel Nakshatra Elegant Interior'
              fill
              className='object-cover object-center'
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>
      <section className='pb-20 px-4 bg-white'>
        {/* Hero Section */}

        {/* Content Section */}
        <div className='max-w-6xl mx-auto mt-16'>
          <div className='px-8 sm:px-12'>
            <div className='space-y-12'>
              {/* How We Use Information */}
              <section className='space-y-4'>
                <h3 className='privacy leading-[1.15]'>Use of Content</h3>

                <p className='para'>
                  All logos, brands and marks appearing in this site, except as
                  otherwise noted, are properties either owned, or used under
                  licence, by Nakshatra Royal Stay and / or its associate
                  entities who feature on this website. The use of these
                  properties or any other content on this site, except as
                  provided in these terms and conditions or in the site content,
                  is strictly prohibited.
                </p>
                <p className='para'>
                  You may not sell or modify the content of this website or
                  reproduce, display, publicly perform, distribute, or otherwise
                  use the materials in any way for any public or commercial
                  purpose without the respective organisation’s or entity’s
                  written permission.
                </p>
              </section>

              {/* Data Sharing */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>Acceptable Site Use</h3>

                <p className='para-title'>(A) Security Rules</p>
                <p className='para'>
                  Visitors are prohibited from violating or attempting to
                  violate the security of the website, including, without
                  limitation, (1) accessing data not intended for such user or
                  logging into a server or account which the user is not
                  authorized to access, (2) attempting to probe, scan or test
                  the vulnerability of a system or network or to breach security
                  or authentication measures without proper authorization, (3)
                  attempting to interfere with service to any user, host or
                  network, including, without limitation, via means of
                  submitting a virus or “trojan horse” to the website,
                  overloading, “flooding”, “mail bombing” or “crashing”, or (4)
                  sending unsolicited electronic mail, including promotions
                  and/or advertising of products or services. Violations of
                  system or network security may result in civil or criminal
                  liability. Nakshatra Royal Stay and / or its associate
                  entities will have the right to investigate occurrences that
                  they suspect as involving such violations and will have the
                  right to involve, and cooperate with, law enforcement
                  authorities in prosecuting users who are involved in such
                  violations.
                </p>
                <p className='para'>(B) General Rules</p>
                <p className='para'>
                  Visitors may not use the website in order to transmit,
                  distribute, store or destroy material (a) that could
                  constitute or encourage conduct that would be considered a
                  criminal offence or violate any applicable law or regulation,
                  (b) in a manner that will infringe the copyright, trademark,
                  trade secret or other intellectual property rights of others
                  or violate the privacy or publicity of other personal rights
                  of others, or (c) that is libellous, defamatory, pornographic,
                  profane, obscene, threatening, abusive or hateful.
                </p>
              </section>

              {/* Data Security */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Links to/from other Websites
                </h3>
                <p className='para'>
                  This website contains links to other websites. These links are
                  provided solely as a convenience to you. Wherever such link/s
                  lead to sites which do not belong to Nakshatra Royal Stay and
                  / or its associate entities, Nakshatra Royal Stay is not
                  responsible for the content of linked sites and does not make
                  any representations regarding the security, correctness or
                  accuracy of the content on such websites. Any reference on
                  this website to a hypertext link, to a specific product,
                  process, or service, or other reference to any third party
                  products, services, or website does not constitute or imply
                  any ownership, sponsorship, endorsement arrangement or any
                  other relationship between Nakshatra Royal Stay website and
                  anything found at such hypertext link or third party website.
                  If you decide to access such linked websites, you do so at
                  your own risk.
                </p>
                <p className='para'>
                  Similarly, this website can be made accessible through a link
                  created by other websites. Access to this website through such
                  link/s shall not mean or be deemed to mean that the
                  objectives, aims, purposes, ideas, concepts of such other
                  websites or their aim or purpose in establishing such link/s
                  to this website are necessarily the same or similar to the
                  idea, concept, aim or purpose of our website or that such
                  links have been authorised by Nakshatra Royal Stay and / or
                  its associate entities. We are not responsible for any
                  representation/s of such other websites while affording such
                  link and no liability can arise upon Nakshatra Royal Stay and
                  / or its associate entities consequent to such representation,
                  its correctness or accuracy. You hereby disclaim and waive any
                  rights and claim you may have against Nakshatra Royal Stay
                  with respect to third party products and services. In the
                  event that any link/s afforded by any other website/s
                  derogatory in nature to the objectives, aims, purposes, ideas
                  and concepts of this website is utilised to visit this website
                  and such event is brought to the notice or is within the
                  knowledge of Nakshatra Royal Stay and / or its associate
                  entities, civil or criminal remedies as may be appropriate
                  shall be invoked.
                </p>
              </section>

              {/* Your Rights */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>Indemnity</h3>

                <p className='para'>
                  You agree to defend, indemnify, and hold harmless Nakshatra
                  Royal Stay and/ or its associate entities, their officers,
                  directors, employees and agents, from and against any losses,
                  damages, costs and expenses incurred or threatening to arise
                  against You under any third party claims, actions, settlement,
                  judgement, governmental authority proceeding or demands,
                  including without limitation reasonable legal and accounting
                  fees, alleging or resulting/ arising from your use of the
                  website material or your breach of these terms and conditions
                  of website use.
                </p>
              </section>

              {/* Cookies */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>Liability</h3>
                <p className='para'>
                  While all reasonable care has been taken in providing the
                  content on this website, Nakshatra Royal Stay. and / or its
                  associate entities shall not be responsible or liable as to
                  the completeness or correctness of such information and any or
                  all consequential liabilities arising out of use of any
                  information or contents on this website. Under no
                  circumstances (including negligence and fundamental breach)
                  will Nakshatra Royal Stay or anyone else involved in providing
                  the service be liable for any direct, indirect, incidental,
                  special or consequential damages or losses from or through the
                  use of or inability to use the service or that result from
                  mistakes, omissions, interruptions, delays in operation or
                  transmission or any failure of performance, even if advised of
                  the possibility thereof.
                </p>
                <p className='para'>
                  No warranty is given that the website will operate error-free
                  or that this website and its server are free of computer
                  viruses or other harmful mechanisms. If your use of the
                  website results in the need for servicing or replacing
                  equipment or data, Nakshatra Royal Stay and / or its associate
                  entities are not responsible for those costs.
                </p>
                <p className='para'>
                  The website is provided on an ‘as is’ basis without any
                  warranties either express or implied whatsoever. Nakshatra
                  Royal Stay and / or its associate entities, to the fullest
                  extent permitted by law, disclaims all warranties, including
                  non-infringement of third parties rights, and the warranty of
                  fitness for a particular purpose and makes no warranties about
                  the accuracy, reliability, completeness, or timeliness of the
                  content, services, software, text, graphics, and links.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className='space-y-4 pt-8 border-t border-gray-200'>
                <h3 className='privacy leading-[1.15]'>
                  Disclaimer of Consequential Damages
                </h3>
                <p className='para'>
                  In no event shall Nakshatra Royal Stay, or any parties,
                  organisations or entities associated with the corporate brand
                  name Nakshatra Royal Stay or otherwise, mentioned at this
                  website be liable for any damages whatsoever (including,
                  without limitations, incidental and consequential damages,
                  lost profits, or damage to computer hardware or loss of data
                  information or business interruption) resulting from the use
                  or inability to use the website and the website material,
                  whether based on warranty, contract, tort, or any other legal
                  theory, and whether or not, such organisations or entities
                  were advised of the possibility of such damages.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
