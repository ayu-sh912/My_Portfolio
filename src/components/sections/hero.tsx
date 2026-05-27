import Image from 'next/image';
import { MapPin } from 'lucide-react';

import AyushHeadshot from '/public/images/ayush-headshot.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={AyushHeadshot}
              alt="Headshot of Ayush"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Ayush{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              I&apos;m a full stack developer specializing in React.js and Node.js, focused on building fast, responsive,
               and user-friendly digital experiences. I enjoy turning ideas into real products through clean design 
               and scalable backend systems. For me, coding is more than just development — it&apos;s 
               something I genuinely enjoy learning and improving every day.

            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Firozabad, India</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>

          {/* Buttons of Hire me and view my work */}
          <div className="flex flex-wrap items-center gap-5">

              {/* View My Work */}
              <a
                href="#work"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl

                  border
                  border-black/10
                  dark:border-white/10

                  bg-black/[0.03]
                  dark:bg-white/[0.03]

                  px-7
                  py-4

                  text-sm
                  font-medium
                  tracking-wide

                  text-black
                  dark:text-white

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:border-black/20
                  dark:hover:border-white/20

                  hover:bg-black/[0.05]
                  dark:hover:bg-white/[0.05]

                  hover:shadow-[0_0_40px_rgba(0,0,0,0.04)]
                  dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]

                  active:scale-[0.98]
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100

                    bg-gradient-to-r
                    from-black/[0.03]
                    via-black/[0.01]
                    to-transparent

                    dark:from-white/[0.03]
                    dark:via-white/[0.01]
                  "
                />

                <span className="relative z-10">
                  View My Work
                </span>

                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>

              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl

                  bg-black
                  dark:bg-white

                  px-7
                  py-4

                  text-sm
                  font-semibold
                  tracking-wide

                  text-white
                  dark:text-black

                  transition-all
                  duration-500

                  hover:scale-[1.02]

                  hover:shadow-[0_0_45px_rgba(0,0,0,0.08)]
                  dark:hover:shadow-[0_0_45px_rgba(255,255,255,0.08)]

                  active:scale-[0.98]
                "
              >

                {/* Shine */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full

                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent

                    dark:via-black/10

                    transition-transform
                    duration-1000

                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">
                  Hire Me
                </span>

                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>

              </a>

            </div>

            <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
