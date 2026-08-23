
"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  PenLine,
  Star,
  ThumbsUp,
} from "lucide-react";

import "./trustpilot-reviews.css";

const reviews = [
  {
    name: "Hafsa",
    initial: "H",
    color: "#a100ff",
    title: "Very warm and welcoming interaction",
    text: `Very warm and welcoming interaction. I will recommend your service to friends and family. The hotel in Makkah was just a short walk to the Haram!`,
    date: "Jun 17, 2026",
    ago: "1 review",
    helpful: 12,
  },

  {
    name: "Jamila",
    initial: "J",
    color: "#1c9b8b",
    title: "First time umrah, and it went so smoothly",
    text: `First time umrah, and it went so smoothly, had a few issues but Mutieba would reassure me and solve the problems straight away definitely will be returning!`,
    date: "Jun 18, 2026",
    ago: "2 days ago",
    helpful: 18,
  },

  {
    name: "Sabih",
    initial: "S",
    color: "#279e78",
    title: "Extraordinary service & attention to detail",
    text: `My call was handled by an agent called Safaura, who was exceptionally helpful and knowledgeable. She took the time to make enquiries on my behalf and came back with clear answers.`,
    date: "Jun 10, 2026",
    ago: "Jun 10, 2026",
    helpful: 23,
  },

  {
    name: "Raheem Mumin Abolore Desmond",
    initial: "R",
    color: "#4d38f4",
    title: "Classic customer service & timely response",
    text: `Classic customer service. Always on time with accurate information and prompt flight updates. Extremely trustworthy UK travel agency.`,
    date: "Jun 19, 2026",
    ago: "3 days ago",
    helpful: 16,
  },

  {
    name: "Waqas Ahmed",
    initial: "W",
    color: "#e87900",
    title: "I strongly encourage you use Al Musafir...",
    text: `I strongly encourage you use Al Musafir as they were more than they had said. Our agent brother Umar in particular made sure that from booking our tickets to our return everything was handled.`,
    date: "Jun 16, 2026",
    ago: "6 days ago",
    helpful: 20,
  },

  {
    name: "Zubair",
    initial: "Z",
    color: "#9b36ef",
    title: "Excellent support throughout our journey",
    text: `The support throughout our Umrah journey was excellent. The team were responsive, helpful and made everything much easier for our family.`,
    date: "Jun 14, 2026",
    ago: "8 days ago",
    helpful: 14,
  },
];


/* ============================================================
   STARS
   ============================================================ */

function TrustpilotStars() {
  return (
    <div
      className="trustpilot-reviews__stars"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>
          <Star fill="currentColor" />
        </span>
      ))}
    </div>
  );
}


/* ============================================================
   COMPONENT
   ============================================================ */

export function TrustpilotReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = reviews[currentIndex];

  const goToReview = (index: number) => {
    if (index < 0) {
      setCurrentIndex(reviews.length - 1);
      return;
    }

    if (index >= reviews.length) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex(index);
  };


  /* ==========================================================
     OPTIONAL AUTO ROTATION
     ========================================================== */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (
        previous === reviews.length - 1
          ? 0
          : previous + 1
      ));
    }, 8000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);


  return (
    <section className="trustpilot-reviews">

      <div className="trustpilot-reviews__container">


        {/* =====================================================
            TOP MARQUEE
            ===================================================== */}

        <div className="trustpilot-reviews__marquee">

          <div className="trustpilot-reviews__marquee-track">

            {/* Duplicated content creates a seamless loop */}

            {[...reviews, ...reviews].map((review, index) => (
              <div
                className="trustpilot-reviews__marquee-item"
                key={`${review.name}-${index}`}
              >

                <span className="trustpilot-reviews__marquee-rating">
                  ★ 5.0
                </span>

                <strong>
                  "{review.title}"
                </strong>

                <span className="trustpilot-reviews__marquee-name">
                  — {review.name}
                </span>

                <span className="trustpilot-reviews__marquee-dot">
                  ·
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* =====================================================
            HEADER
            ===================================================== */}

        <header className="trustpilot-reviews__header">

          <div className="trustpilot-reviews__heading">

            <div className="trustpilot-reviews__trustpilot-icon">
              <Star fill="currentColor" />
            </div>

            <h2>
              Trustpilot
              <span>Verified Reviews</span>
            </h2>

            <a
              href="#"
              className="trustpilot-reviews__write"
            >
              <PenLine />
              <span>Write a Review</span>
              <ExternalLink />
            </a>

          </div>


          <div className="trustpilot-reviews__rating">

            <span className="trustpilot-reviews__rating-dot" />

            <strong>Excellent 4.9</strong>

            <div className="trustpilot-reviews__mini-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  fill="currentColor"
                />
              ))}
            </div>

          </div>

        </header>


        <p className="trustpilot-reviews__subtitle">
          Authentic 5-star pilgrim feedback, verified independently on Trustpilot UK
        </p>


        {/* =====================================================
            MAIN REVIEW AREA
            ===================================================== */}

        <div className="trustpilot-reviews__layout">


          {/* ===================================================
              FEATURED REVIEW
              =================================================== */}

          <article className="trustpilot-featured">

            {/* TOP STARS */}

            <TrustpilotStars />


            {/* REVIEW TITLE */}

            <h3>
              "{currentReview.title}"
            </h3>


            {/* REVIEW QUOTE */}

            <div className="trustpilot-featured__quote">

              <p>
                {currentReview.text}
              </p>

            </div>


            {/* PERSON */}

            <div className="trustpilot-featured__person">

              <div
                className="trustpilot-featured__avatar"
                style={{
                  backgroundColor: currentReview.color,
                }}
              >
                {currentReview.initial}
              </div>

              <div>

                <strong>
                  {currentReview.name}
                </strong>

                <span>
                  {currentReview.ago} · {currentReview.date}
                </span>

              </div>

            </div>


            {/* HELPFUL */}

            <button
              type="button"
              className="trustpilot-featured__helpful"
            >
              <ThumbsUp />
              Helpful
            </button>


            {/* QUOTE MARK */}

            <div className="trustpilot-featured__quote-mark">
              99
            </div>


            {/* FOOTER */}

            <div className="trustpilot-featured__footer">

              <div className="trustpilot-featured__dots">

                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={
                      index === currentIndex
                        ? "is-active"
                        : ""
                    }
                    onClick={() => goToReview(index)}
                    aria-label={`Show review ${index + 1}`}
                  />
                ))}

              </div>


              <div className="trustpilot-featured__navigation">

                <span>
                  {String(currentIndex + 1).padStart(2, "0")}
                  <small>/</small>
                  {String(reviews.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => goToReview(currentIndex - 1)}
                  aria-label="Previous review"
                >
                  <ArrowLeft />
                </button>

                <button
                  type="button"
                  onClick={() => goToReview(currentIndex + 1)}
                  aria-label="Next review"
                >
                  <ArrowRight />
                </button>

              </div>

            </div>

          </article>


          {/* ===================================================
              RIGHT REVIEW LIST
              =================================================== */}

          <aside className="trustpilot-list">

            <div className="trustpilot-list__header">

              <span>
                MORE VERIFIED STORIES
              </span>

              <strong>
                {reviews.length} REVIEWS
              </strong>

            </div>


            <div className="trustpilot-list__items">

              {reviews.map((review, index) => (

                <button
                  key={review.name}
                  type="button"
                  className={
                    `trustpilot-list__item ${
                      index === currentIndex
                        ? "is-active"
                        : ""
                    }`
                  }
                  onClick={() => goToReview(index)}
                >

                  <div
                    className="trustpilot-list__avatar"
                    style={{
                      backgroundColor: review.color,
                    }}
                  >
                    {review.initial}
                  </div>


                  <div className="trustpilot-list__content">

                    <div className="trustpilot-list__top">

                      <strong>
                        {review.name}
                      </strong>

                      <span>
                        {review.ago}
                      </span>

                    </div>


                    <h4>
                      {review.title}
                    </h4>


                    <p>
                      "{review.text}"
                    </p>

                  </div>

                </button>

              ))}

            </div>

          </aside>

        </div>

      </div>

    </section>
  );
}
