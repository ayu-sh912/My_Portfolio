"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="intro-overlay" className={hide ? "hidden" : ""}>
      <div className="intro-content">
        <div className="intro-logo">
              <span className="intro-lt">&lt;</span>

              <span className="intro-brand">
                Ayush Agrawal
              </span>

              <span className="intro-slash">/</span>

              <span className="intro-gt">&gt;</span>

              <span className="intro-mini-tag">
                &lt;AA Developers/&gt;
              </span>
            </div>

        <div className="intro-tagline">
          Building the web, one component at a time.
        </div>

        <div className="intro-bar">
          <div className="intro-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}