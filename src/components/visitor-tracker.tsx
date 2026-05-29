'use client';

import { useEffect, useState } from 'react';

import {
  MapPin,
  // Sparkles,
  // X,
} from 'lucide-react';


const TRACK_INTERVAL =
   7* 60 * 60 * 1000;


export default function VisitorTracker() {

  const [showPopup, setShowPopup] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    const lastTracked =
      localStorage.getItem(
        'aa_visitor_tracked_at'
      );

// If we've tracked the visitor recently, don't show the popup
    if (
      lastTracked &&
      Date.now() -
      Number(lastTracked)
      <
      TRACK_INTERVAL
    ) {
      return;
    }

// Show the popup after a short delay
    const timer =
      setTimeout(() => {
        setShowPopup(true);
      }, 1800);

    return () =>
      clearTimeout(timer);

  }, []);

  const sendVisitorData = async ({
    latitude,
    longitude,
    accuracy,
  }: {
    latitude:number | null;
    longitude:number | null;
    accuracy:number | null;
  }) => {
    try {
      await fetch('/api/visitor',{
          method:'POST',
          headers:{
            'Content-Type':
              'application/json',
          },

          body:JSON.stringify({
            latitude,
            longitude,
            accuracy,

            timezone:
              Intl
              .DateTimeFormat()
              .resolvedOptions()
              .timeZone,

            referrer:
              document.referrer ||
              'Direct',

            userAgent:
              navigator.userAgent,
          }),
        }
      );

      localStorage.setItem(
        'aa_visitor_tracked_at',
        Date.now().toString()
      );
    } catch(error){
      console.error(
        'Visitor Tracking Error:',
        error
      );
    }
  };

  const handleAllow = async () => {
    localStorage.setItem(
      'location_permission_handled',
      'true'
    );

    setShowPopup(false);

    if(!navigator.geolocation){
      await sendVisitorData({
        latitude:null,
        longitude:null,
        accuracy:null,
      });
      return;
    }

    navigator.geolocation
    .getCurrentPosition(
      async(position)=>{
        await sendVisitorData({
          latitude:
            position.coords.latitude,
          longitude:
            position.coords.longitude,
          accuracy:
            position.coords.accuracy,
        });
      },

      async()=>{
        await sendVisitorData({
          latitude:null,
          longitude:null,
          accuracy:null,
        });
      },
      {
        enableHighAccuracy:true,
        timeout:15000,
        maximumAge:0,
      }
    );
  };

  const handleSkip = async()=>{
    localStorage.setItem(
      'location_permission_handled',
      'true'
    );

    setShowPopup(false);

    await sendVisitorData({
      latitude:null,
      longitude:null,
      accuracy:null,
    });
  };

  if(
    !mounted ||
    !showPopup
  )
  return null;

  return (
    <>
      {/* BLUR BACKDROP */}
      <div
        className="
          fixed
          inset-0
          z-[9998]

          bg-white/50
          backdrop-blur-md

          dark:bg-black/50
        "
      />



      {/* FLASH CARD */}
      <div
        className="
          fixed
          left-1/2
          top-1/2

          z-[9999]

          w-[90%]
          max-w-[380px]

          -translate-x-1/2
          -translate-y-1/2

          animate-in
          zoom-in-95
          duration-300
        "
      >


        <div
          className="
            relative
            overflow-hidden

            rounded-[24px]

            border
            border-blue-100

            bg-white/90

            p-5

            shadow-[0_25px_80px_rgba(59,130,246,0.25)]

            backdrop-blur-xl


            dark:border-white/[0.08]

            dark:bg-[#071120]/95

            dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          "
        >


          {/* Glow */}
          <div
            className="
              absolute
              -right-10
              -top-10

              h-32
              w-32

              rounded-full

              bg-cyan-400/30

              blur-3xl


              dark:bg-blue-500/20
            "
          />



          {/* Close
          <button
            onClick={handleSkip}

            className="
              absolute
              right-4
              top-4

              text-gray-400

              transition

              hover:text-gray-800

              dark:hover:text-white
            "
          >

            <X size={17}/>

          </button> */}




          {/* Header */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >


            <div
              className="
                flex

                h-11
                w-11

                shrink-0

                items-center
                justify-center


                rounded-2xl


                bg-gradient-to-r

                from-blue-600
                to-cyan-500


                text-white


                shadow-lg
                shadow-blue-500/30
              "
            >

              <MapPin size={26}/>

            </div>




            <div>


              <h2
                className="
                  text-xl

                  font-bold


                  text-gray-900


                  dark:text-white
                "
              >

                Explore My Digital Space 🚀

              </h2>



              <p
                className="
                  mt-1

                  text-sm

                  leading-5


                  text-gray-600


                  dark:text-gray-400
                "
              >

                Enable a smarter portfolio experience.

              </p>


            </div>


          </div>






          {/* Small info */}

          <div
            className="
              mt-5

              flex
              items-center
              gap-2

              rounded-xl

              bg-blue-50

              px-10
              py-3

              text-xs


              text-gray-600



              dark:bg-white/[0.04]

              dark:text-gray-400
            "
          >

            ✨ Smart • Secure • Personalized

          </div>






          {/* Buttons */}


          <div
            className="
              mt-5

              flex

              gap-3
            "
          >


            <button

              onClick={handleAllow}

              className="
                flex-1

                rounded-xl


                bg-gradient-to-r

                from-blue-600
                to-cyan-500


                py-3


                text-sm

                font-semibold

                text-white


                shadow-lg

                shadow-blue-500/25


                transition


                hover:scale-[1.03]
              "
            >

              🎉Enter Portfolio →

            </button>





            {/* <button
              onClick={handleSkip}
              className="
                flex-1
                rounded-xl
                border
                border-blue-100
                bg-white/70
                py-3
                text-sm
                font-semibold
                text-gray-700
                transition
                hover:bg-blue-50
                dark:border-white/[0.08]
                dark:bg-transparent
                dark:text-gray-300
                dark:hover:bg-white/[0.05]
              "
            >
              No
            </button> */}

          </div>

        </div>

      </div>

    </>
  );
}