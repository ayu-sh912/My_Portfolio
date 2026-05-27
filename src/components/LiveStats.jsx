'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  Linkedin,
  ExternalLink,
  MapPin,
  GraduationCap,
  CheckCircle2,
  Github,
  Trophy,
  GitFork,
  Users,
  Flame,
  Star,
  Target,
} from 'lucide-react';

import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

import AyushHeadshot from '/public/images/ayush-headshot.png';

const githubStats = [
  {
    icon: <GitFork size={20} />,
    value: '10',
    label: 'Repositories',
    sub: 'Public projects',
  },
  {
    icon: <Users size={20} />,
    value: '3',
    label: 'Followers',
    sub: 'Growing network',
  },
  {
    icon: <Flame size={20} />,
    value: '365+',
    label: 'Contributions',
    sub: 'Daily coding',
  },
];

const leetcodeStats = [
  {
    icon: <Star size={20} />,
    value: '50',
    label: 'Easy',
  },
  {
    icon: <Flame size={20} />,
    value: '100',
    label: 'Medium',
  },
  {
    icon: <Trophy size={20} />,
    value: '50',
    label: 'Hard',
  },
  {
    icon: <Target size={20} />,
    value: '1480',
    label: 'Contest Rating',
  },
];

const LiveStats = () => {
  return (
    <Container id="live-stats">
      <section
        className="
        relative overflow-hidden rounded-[32px]
        border border-black/5
        bg-white
        px-5 py-8
        shadow-[0_10px_50px_rgba(0,0,0,0.04)]
        dark:border-white/10
        dark:bg-[#030712]
        md:px-8 md:py-10
      "
      >
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10"></div>

        {/* Heading */}
        <div className="relative mb-10 flex flex-col items-center text-center">
          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Developer Analytics
          </div>

          <Typography
            variant="h2"
            className="mt-5 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl"
          >
            Real Time{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Developer Stats
            </span>
          </Typography>

          <Typography className="mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Live overview of my coding journey, development activity and
            professional presence.
          </Typography>
        </div>

        {/* TOP GRID */}
        <div className="relative grid gap-6 lg:grid-cols-2">
          {/* Github */}
          <div
            className="
            rounded-[28px]
            border border-black/5
            bg-white
            p-6
            shadow-sm
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-[#07101d]/80
          "
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                  <Github size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                    GitHub Analytics
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    GitHub Activity
                  </h3>
                </div>
              </div>

              <Link
                href="https://github.com/ayu-sh912"
                target="_blank"
                className="
                group flex h-11 w-11 items-center justify-center
                rounded-xl border border-black/5
                bg-white text-gray-600
                transition-all duration-300
                hover:scale-110
                hover:border-blue-500/20
                hover:bg-blue-500
                hover:text-white
                dark:border-white/10
                dark:bg-[#111827]
                dark:text-gray-300
              "
              >
                <ExternalLink
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {githubStats.map((item, index) => (
                <div
                  key={index}
                  className="
                  rounded-2xl border border-black/5
                  bg-white p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/20
                  dark:border-white/10
                  dark:bg-[#111827]
                  dark:hover:bg-[#131d2d]
                "
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                    {item.icon}
                  </div>

                  <h4 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {item.label}
                  </p>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leetcode */}
          <div
            className="
            rounded-[28px]
            border border-black/5
            bg-white
            p-6
            shadow-sm
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-[#07101d]/80
          "
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                  <Trophy size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                    LeetCode Analytics
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    Coding Progress
                  </h3>
                </div>
              </div>

              <Link
                href="https://leetcode.com/u/ayush_ag2005/"
                target="_blank"
                className="
                group flex h-11 w-11 items-center justify-center
                rounded-xl border border-black/5
                bg-white text-gray-600
                transition-all duration-300
                hover:scale-110
                hover:border-blue-500/20
                hover:bg-blue-500
                hover:text-white
                dark:border-white/10
                dark:bg-[#111827]
                dark:text-gray-300
              "
              >
                <ExternalLink
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {leetcodeStats.map((item, index) => (
                <div
                  key={index}
                  className="
                  rounded-2xl border border-black/5
                  bg-white p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/20
                  dark:border-white/10
                  dark:bg-[#111827]
                  dark:hover:bg-[#131d2d]
                "
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                    {item.icon}
                  </div>

                  <h4 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LINKEDIN SECTION */}
        <div
          className="
          relative mt-6 grid gap-6
          rounded-[30px]
          border border-black/5
          bg-white
          p-6
          shadow-sm
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-[#07101d]/80
          lg:grid-cols-[0.85fr_1.15fr]
        "
        >
          {/* Left */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                <Linkedin size={22} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                LinkedIn Profile
              </span>
            </div>

            <Typography
              variant="h2"
              className="max-w-lg text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Connect
              </span>{' '}
              Professionally
            </Typography>

            <Typography className="mt-5 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Open to internships, collaborations, freelance opportunities and
              meaningful developer connections.
            </Typography>

            <div className="mt-6 flex flex-col gap-4">
              {[
                'Software Engineering Opportunities',
                'Freelance & Client Projects',
                'Open Source Collaboration',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-blue-500 dark:text-blue-400"
                  />

                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="https://linkedin.com/in/ayushagrawal0912"
              target="_blank"
              className="
              group mt-8 flex w-fit items-center gap-3
              rounded-2xl bg-blue-600 px-6 py-4
              text-white transition-all duration-300
              hover:scale-[1.02]
              hover:bg-blue-500
            "
            >
              <Linkedin size={22} />

              <span className="font-semibold">
                View LinkedIn Profile
              </span>

              <ExternalLink
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right LinkedIn Card */}
          <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-[#0B1220]">
            
            {/* Banner */}
            <div className="relative h-28 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5616AQGkZHi3tThPMg/profile-displaybackgroundimage-shrink_200_800/B56ZtjsBYAKEAU-/0/1766904045151?e=1781740800&v=beta&t=TDsKRZLTdoyQCIuTSl7ZX6lYsbJ0sEpBqMPyWKfSU9I"
                alt="LinkedIn Banner"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Profile */}
            <div className="relative px-6 pb-6">
              <div className="-mt-12 flex items-end gap-4">
                <div className="relative">
                  <div className="overflow-hidden rounded-full border-4 border-white bg-white shadow-xl dark:border-[#0B1220]">
                    <Image
                      src={AyushHeadshot}
                      alt="Ayush Agrawal"
                      width={92}
                      height={92}
                      className="h-[92px] w-[92px] object-cover"
                    />
                  </div>

                  <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-[#0B1220]"></div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Ayush Agrawal
                  </h3>

                  <CheckCircle2
                    size={18}
                    className="fill-blue-500 text-white"
                  />
                </div>

                <p className="mt-1 text-base font-medium text-gray-600 dark:text-gray-400">
                  Software Engineer
                </p>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={15} />
                    <span>GLA University</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={15} />
                    <span>Firozabad, India</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                  🎓 Computer Science Student | 🚀 Aspiring Software Engineer | 💻 Java, Python, SQL | 📊 Data Structures & Algorithms | 🛠️ Project-Based Learning | 🌍 Passionate About Solving Real-World Problems | GLA University,Mathura
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    'React',
                    'Next.js',
                    'Node.js',
                    'TypeScript',
                    'MongoDB',
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="
                      rounded-full border border-black/5
                      bg-slate-100 px-3 py-1.5
                      text-xs font-medium text-gray-700
                      dark:border-white/10
                      dark:bg-[#111827]
                      dark:text-gray-300
                    "
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 border-t border-black/5 pt-4 dark:border-white/10">
                  <Link
                    href="https://linkedin.com/in/ayushagrawal0912"
                    target="_blank"
                    className="group flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                  >
                    Visit My LinkedIn Profile

                    <ExternalLink
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LiveStats;