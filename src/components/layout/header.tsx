'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';
import useWindowSize from '@/hooks/use-window-size';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';
import Typography from '@/components/general/typography';

const Logo = () => (
  <div className="flex flex-col leading-none">
      <Typography variant="h3" className="font-semibold tracking-tight">
        {`<Ayush Agrawal`}
        <span className="text-blue-500">/</span>
        {`>`}
      </Typography>
      <Typography
            variant="body1"
            className="
              ml-1
              text-[10px]
              md:text-[15px]
              font-medium
              tracking-[0.18em]
              md:tracking-[0.20em]
              text-blue-500
              opacity-90
            "
          >        
          {`<AA Developers/>`}
      </Typography>
  </div>
  
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        'sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100',
        scrolled ? 'bg-gray/50 backdrop-blur-xl md:border-gray-100' : ''
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="
                      group
                      relative
                      text-[15px]
                      font-semibold
                      text-gray-700
                      transition-all
                      duration-300

                      hover:text-blue-500

                      dark:text-gray-300
                      dark:hover:text-[#60a5fa]
                    "
                  >
                    {/* Text */}
                    <span
                      className="
                        relative
                        z-10
                        transition-all
                        duration-300
                        group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]
                      "
                    >
                      {link.label}
                    </span>

                    {/* Neon underline */}
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-1/2
                        h-[2px]
                        w-0
                        -translate-x-1/2
                        rounded-full
                        bg-blue-500
                        shadow-[0_0_12px_#3b82f6]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />

                    {/* Glow background */}
                    <span
                      className="
                        absolute
                        inset-0
                        -z-10
                        rounded-xl
                        opacity-0
                        blur-xl
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        bg-blue-500/10
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">

                {/* Theme Switch */}
                <div
                  className="
                    rounded-full
                    border
                    border-transparent
                    transition-all
                    duration-300

                    hover:border-blue-500/40
                    hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]
                  "
                >
                  <ThemeSwitcher />
                </div>

                {/* Download CV */}
                <div
                  className="
                    rounded-full
                    transition-all
                    duration-300

                    hover:shadow-[0_0_22px_rgba(59,130,246,0.55)]
                    hover:-translate-y-[1px]
                  "
                >
                  <DownloadCV />
                </div>
              </div>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton
                className="
                  transition-all
                  duration-300

                  hover:border-blue-500/40
                  hover:text-blue-500
                  hover:shadow-[0_0_18px_rgba(59,130,246,0.5)]
                "
              >
                <Menu />
              </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
