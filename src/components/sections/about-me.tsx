import Image from 'next/image';

import AyushFullPose from '/public/images/ayush-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AyushFullPose}
              alt="Fullpose of Ayush"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a{' '}
            full stack developer specializing in (React.js & Node.js), passionate about 
            building digital experiences that are fast, modern, and genuinely enjoyable to use. 
            I enjoy bringing both the technical and creative sides of a product together — from 
            designing smooth user interfaces to building scalable backend systems that power 
            everything behind the scenes.
          </Typography>
          <Typography>
            My journey into web development started in 2022 with simple curiosity, and over 
            time it turned into something I truly love doing every day. Since then, I&apos;ve been 
            constantly learning, building projects, and exploring modern technologies like 
            Next.js, TypeScript, Tailwind CSS, Supabase, and more.
          </Typography>
          <Typography>
            What matters most to me is creating products that feel clean, responsive, and 
            meaningful. I care deeply about user experience, performance, and writing code 
            that is clear, maintainable, and built to scale. I enjoy working on products end-to-
            end — from the initial idea all the way to development and deployment.
          </Typography>
          <Typography>
            When I&apos;m not in development mode, you&apos;ll 
            usually find me exploring startup culture, learning from developers and creators on 
            X and LinkedIn You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.INSTAGRAM}
            >
              Instagram
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Full stack developer
              </Typography>
              <Typography component="li">Backend Engineering Enthusiast</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">B.Tech CSE 2nd Year Student</Typography>
              <Typography component="li">Open to Freelance & Collaboration Opportunities</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
