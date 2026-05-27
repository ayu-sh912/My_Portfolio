import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-black/5 bg-white py-4 dark:border-white/[0.06] dark:bg-[#030712]">

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]"></div>

      <div className="relative flex items-center justify-center px-4 text-center">

        <Typography
          className="flex flex-wrap items-center justify-center gap-x-1 text-gray-600 dark:text-gray-400"
          variant="body3"
        >
          <Copyright className="h-4 w-4" />

          {new Date().getFullYear()}

          <span>|</span>

          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.FIGMA_FILE}
            className="transition-colors hover:text-blue-500"
          >
            Designed
          </Link>

          <span>and</span>

          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB_REPO}
            className="transition-colors hover:text-blue-500"
          >
            coded
          </Link>

          <span>
            with <span className="text-pink-500">❤️</span> by Ayush Agrawal
          </span>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;