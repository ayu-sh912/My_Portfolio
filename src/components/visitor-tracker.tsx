'use client';

import { useEffect, useState } from 'react';

import {
  MapPin,
  ShieldCheck,
  Lock,
  X,
} from 'lucide-react';

const TRACK_INTERVAL = 24 * 60 * 60 * 1000;

export default function VisitorTracker() {
  const [showPopup, setShowPopup] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    const lastTracked =
      localStorage.getItem(
        'visitor_tracked_at'
      );

    // prevent spam
    if (
      lastTracked &&
      Date.now() - Number(lastTracked) <
        TRACK_INTERVAL
    ) {
      return;
    }

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // SEND DATA
  const sendVisitorData = async (
    latitude: number | null,
    longitude: number | null
  ) => {
    try {
      await fetch('/api/visitor', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          latitude,
          longitude,

          timezone:
            Intl.DateTimeFormat().resolvedOptions()
              .timeZone,

          referrer:
            document.referrer || 'Direct',

          userAgent:
            navigator.userAgent,
        }),
      });

      // save timestamp
      localStorage.setItem(
        'visitor_tracked_at',
        Date.now().toString()
      );
    } catch (error) {
      console.error(error);
    }
  };

  // ALLOW
  const handleAllow = async () => {
    setShowPopup(false);

    if (!navigator.geolocation) {
      await sendVisitorData(null, null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        await sendVisitorData(
          position.coords.latitude,
          position.coords.longitude
        );
      },

      async (error) => {
        console.error(error);

        // still send metadata
        await sendVisitorData(null, null);
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  // SKIP
  const handleSkip = async () => {
    setShowPopup(false);

    await sendVisitorData(null, null);
  };

  if (!mounted || !showPopup)
    return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="
          fixed
          inset-0
          z-[9998]
          bg-black/50
          backdrop-blur-md
        "
      />

      {/* MODAL */}
      <div
        className="
          fixed
          left-1/2
          top-1/2
          z-[9999]

          w-[92%]
          max-w-[430px]

          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            relative
            overflow-hidden

            rounded-[32px]

            border
            border-black/[0.06]

            bg-white

            p-6

            shadow-[0_30px_100px_rgba(0,0,0,0.18)]

            dark:border-white/[0.08]
            dark:bg-[#020817]
          "
        >
          {/* CLOSE */}
          <button
            onClick={handleSkip}
            className="
              absolute
              right-5
              top-5

              text-gray-400

              transition-all
              duration-300

              hover:rotate-90
              hover:text-gray-600

              dark:hover:text-white
            "
          >
            <X size={18} />
          </button>

          {/* ICON */}
          <div
            className="
              mx-auto

              flex
              h-24
              w-24
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-blue-500/10
              to-cyan-500/10
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-full

                bg-gradient-to-r
                from-blue-600
                to-cyan-500

                text-white
              "
            >
              <MapPin size={28} />
            </div>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-7
              text-center
              text-3xl
              font-bold

              text-gray-900

              dark:text-white
            "
          >
            Enable Location Access
          </h2>

          {/* DESC */}
          <p
            className="
              mt-4
              text-center
              text-[15px]
              leading-7

              text-gray-600

              dark:text-gray-400
            "
          >
            Allow location access for a more
            personalized and region-aware
            experience.
          </p>

          {/* FEATURES */}
          <div className="mt-7 space-y-3">

            <Feature
              icon={
                <MapPin size={18} />
              }
              color="blue"
              text="Better regional experience"
            />

            <Feature
              icon={
                <ShieldCheck size={18} />
              }
              color="green"
              text="100% private & secure"
            />

            <Feature
              icon={<Lock size={18} />}
              color="yellow"
              text="Can be disabled anytime"
            />
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-3">

            <button
              onClick={handleAllow}
              className="
                h-14
                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                to-cyan-500

                text-base
                font-semibold
                text-white

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >
              Enable Location
            </button>

            <button
              onClick={handleSkip}
              className="
                h-14
                rounded-2xl

                border
                border-black/[0.06]

                bg-black/[0.02]

                text-sm
                font-semibold

                text-gray-700

                transition-all
                duration-300

                hover:bg-black/[0.04]

                dark:border-white/[0.06]
                dark:bg-white/[0.03]
                dark:text-gray-300
              "
            >
              Maybe Later
            </button>
          </div>

          <p
            className="
              mt-5
              text-center
              text-xs

              text-gray-500
            "
          >
            Your data stays private and secure.
          </p>
        </div>
      </div>
    </>
  );
}

function Feature({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3

        rounded-2xl

        border
        border-black/[0.05]

        bg-black/[0.02]

        px-4
        py-3

        dark:border-white/[0.06]
        dark:bg-white/[0.03]
      "
    >
      <div
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl

          ${
            color === 'blue'
              ? 'bg-blue-500/10 text-blue-500'
              : color === 'green'
              ? 'bg-green-500/10 text-green-500'
              : 'bg-yellow-500/10 text-yellow-500'
          }
        `}
      >
        {icon}
      </div>

      <p
        className="
          text-sm
          font-medium

          text-gray-700

          dark:text-gray-300
        "
      >
        {text}
      </p>
    </div>
  );
}