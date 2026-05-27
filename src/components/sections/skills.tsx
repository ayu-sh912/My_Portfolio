import { SKILL_CATEGORIES } from '@/lib/data';

import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const categoryColors: Record<string, string> = {
  Frontend:
    'dark:from-blue-500/20 dark:via-blue-500/5 dark:to-transparent dark:border-blue-500/20 dark:hover:border-blue-400/40',

  Backend:
    'dark:from-emerald-500/20 dark:via-emerald-500/5 dark:to-transparent dark:border-emerald-500/20 dark:hover:border-emerald-400/40',

  Database:
    'dark:from-purple-500/20 dark:via-purple-500/5 dark:to-transparent dark:border-purple-500/20 dark:hover:border-purple-400/40',

  'Tools & Design':
    'dark:from-orange-500/20 dark:via-orange-500/5 dark:to-transparent dark:border-orange-500/20 dark:hover:border-orange-400/40',
};

const SkillsSection = () => {
  return (
    <Container
      id="skills"
      className="bg-[#fafafa] dark:bg-[#030712]"
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-5">
        <Tag label="Skills" />

        <Typography
          variant="subtitle"
          className="
            max-w-3xl
            text-center
            text-lg
            leading-relaxed
            text-gray-600
            dark:text-gray-400
          "
        >
          Technologies, frameworks and tools I use to build
          scalable and modern digital products.
        </Typography>
      </div>

      {/* Skill Cards */}
      <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <div
            key={index}
            className={`
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              p-8
              transition-all
              duration-500
              hover:-translate-y-2

              bg-white
              border-gray-200
              shadow-[0_4px_30px_rgba(0,0,0,0.04)]

              dark:bg-[#0b1120]/80
              dark:border-white/10
              dark:backdrop-blur-xl
              dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]

              ${categoryColors[category.title]}
            `}
          >
            {/* Background Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100

                dark:bg-gradient-to-br
              "
            />

            {/* Top Gradient Line */}
            <div
              className="
                absolute
                left-0
                top-0
                h-[2px]
                w-full

                bg-gradient-to-r
                from-blue-500/80
                to-transparent
              "
            />

            {/* Header */}
            <div className="mb-8 flex items-start gap-5">
              {/* Dot Box */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  shadow-lg

                  bg-gray-50
                  border-gray-200

                  dark:bg-white/[0.03]
                  dark:border-white/10
                "
              >
                <div
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-blue-500
                    shadow-[0_0_20px_#3b82f6]
                  "
                />
              </div>

              {/* Text */}
              <div>
                <Typography
                  variant="h3"
                  className="
                    text-2xl
                    font-semibold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {category.title}
                </Typography>
              </div>
            </div>

            {/* Technologies */}
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
              {category.technologies.map((technology, techIndex) => (
                <div
                  key={techIndex}
                  className="
                    group/item
                    flex
                    flex-col
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    p-4
                    transition-all
                    duration-300

                    border-gray-200
                    bg-gray-50

                    hover:scale-105
                    hover:bg-gray-100
                    hover:border-gray-300

                    dark:border-white/5
                    dark:bg-white/[0.02]
                    dark:hover:border-white/15
                    dark:hover:bg-white/[0.04]
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      group-hover/item:scale-110
                    "
                  >
                    <TechDetails {...technology} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="flex justify-center">
        <Typography
          className="
            text-sm
            tracking-wide
            text-gray-500
            dark:text-gray-500
          "
        >
          ✨ Always learning. Always building.
        </Typography>
      </div>
    </Container>
  );
};

export default SkillsSection;