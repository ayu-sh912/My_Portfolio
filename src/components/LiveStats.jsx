// components/DeveloperStats.jsx

"use client";

import { useEffect, useState } from "react";

import {
  Github,
  Users,
  FolderGit2,
  Trophy,
  Flame,
  Star,
  Linkedin,
} from "lucide-react";

export default function LiveStats() {

  const [github, setGithub] =
    useState(null);

  const [leetcode, setLeetcode] =
    useState(null);

  useEffect(() => {

    /* =========================
       GITHUB API
    ========================== */

    fetch(
      "https://api.github.com/users/ayu-sh912"
    )
      .then((res) => res.json())
      .then((data) => {
        setGithub(data);
      });

    /* =========================
       LEETCODE API
    ========================== */

    fetch(
      "https://alfa-leetcode-api.onrender.com/ayush_ag2005"
    )
      .then((res) => res.json())
      .then((data) => {
        setLeetcode(data);
      });

  }, []);

  return (
    <section className="developer-stats">

      <div className="stats-container">

        {/* =====================================
            GITHUB SECTION
        ====================================== */}

        <div className="section-header">

          <p>GITHUB ANALYTICS</p>

          <h2>
            Real Time
            <span> GitHub Stats</span>
          </h2>

        </div>

        <div className="stats-grid">

          {/* REPOSITORIES */}

          <div className="stats-card">

            <div className="stats-icon">
              <FolderGit2 size={30} />
            </div>

            <h3>
              {github?.public_repos || "0"}
            </h3>

            <span>Repositories</span>

          </div>

          {/* FOLLOWERS */}

          <div className="stats-card">

            <div className="stats-icon">
              <Users size={30} />
            </div>

            <h3>
              {github?.followers || "0"}
            </h3>

            <span>Followers</span>

          </div>

          {/* CONTRIBUTIONS */}

          <div className="stats-card">

            <div className="stats-icon">
              <Github size={30} />
            </div>

            <h3>365+</h3>

            <span>Yearly Contributions</span>

          </div>

        </div>

        {/* =====================================
            LEETCODE SECTION
        ====================================== */}

        <div
          className="section-header"
          style={{ marginTop: "120px" }}
        >

          <p>LEETCODE ANALYTICS</p>

          <h2>
            Real Time
            <span> Coding Stats</span>
          </h2>

        </div>

        <div className="stats-grid">

          {/* EASY */}

          <div className="stats-card">

            <div className="stats-icon">
              <Star size={30} />
            </div>

            <h3>
              {leetcode?.easySolved || "50"}
            </h3>

            <span>Easy Solved</span>

          </div>

          {/* MEDIUM */}

          <div className="stats-card">

            <div className="stats-icon">
              <Flame size={30} />
            </div>

            <h3>
              {leetcode?.mediumSolved || "100"}
            </h3>

            <span>Medium Solved</span>

          </div>

          {/* HARD */}

          <div className="stats-card">

            <div className="stats-icon">
              <Trophy size={30} />
            </div>

            <h3>
              {leetcode?.hardSolved || "50"}
            </h3>

            <span>Hard Solved</span>

          </div>

          {/* CONTEST RATING */}

          <div className="stats-card">

            <div className="stats-icon">
              <Trophy size={30} />
            </div>

            <h3>
              {leetcode?.contestRating || "1480"}
            </h3>

            <span>Contest Rating</span>

          </div>

        </div>

        {/* =====================================
            LINKEDIN SECTION
        ====================================== */}

        <div className="linkedin-section">

          <div className="linkedin-content">

            <div>

              <p className="linkedin-tag">
                LINKEDIN PROFILE
              </p>

              <h2>
                Let&apos;s Connect
                Professionally
              </h2>

              <p className="linkedin-desc">
                Follow my professional journey,
                connect with me, and stay updated
                with my latest work, projects,
                and achievements.
              </p>

              <a
                href="https://linkedin.com/in/ayushagrawal0912"
                target="_blank"
                className="linkedin-btn"
              >
                <Linkedin size={20} />

                Visit LinkedIn
              </a>

            </div>

            <div className="linkedin-card">

              <div className="linkedin-avatar">
                AA
              </div>

              <h3>
                Ayush Agrawal
              </h3>

              <span>
                Full Stack Developer
              </span>

              <div className="linkedin-stats">

                <div>
                  <strong>250+</strong>
                  <p>Connections</p>
                </div>

                <div>
                  <strong>10+</strong>
                  <p>Projects</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}