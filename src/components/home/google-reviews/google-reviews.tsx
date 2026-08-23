"use client";

import { useState } from "react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Star,
  ThumbsUp,
} from "lucide-react";

import "./google-reviews.css";

const reviews = [
  {
    name: "Gulam Khan",
    initial: "G",
    type: "Local Guide • Google Reviewer",
    time: "1 week ago",
    helpful: 24,
    rating: 5,
    text: `I went to Umrah by Al Musafir Travel. My overall experience from the beginning till the end it was amazing with them. They have told me everything step-by-step, which is very helpful for me and my family. The person who guide me he's name is umar he was very friendly and make sure we understand everything he has said to us. He was also helping us throughout the journey even when we're in Makka & Medinah.`,
  },

  {
    name: "Ahmed Family",
    initial: "A",
    type: "Google Reviewer",
    time: "2 weeks ago",
    helpful: 18,
    rating: 5,
    text: `Excellent service from start to finish. The team explained every part of our Umrah journey clearly and were always available whenever we needed help. Everything was organised very professionally.`,
  },

  {
    name: "Fatima A.",
    initial: "F",
    type: "Google Reviewer",
    time: "3 weeks ago",
    helpful: 21,
    rating: 5,
    text: `A very smooth and peaceful Umrah experience. The team were helpful, responsive and made everything easy for our family. We would definitely recommend Al Musafir Travel.`,
  },

  {
    name: "Mohammed R.",
    initial: "M",
    type: "Local Guide • Google Reviewer",
    time: "1 month ago",
    helpful: 15,
    rating: 5,
    text: `Very professional service and excellent communication throughout our trip. The guidance we received before and during Umrah was especially helpful.`,
  },

  {
    name: "Aisha Khan",
    initial: "A",
    type: "Google Reviewer",
    time: "1 month ago",
    helpful: 12,
    rating: 5,
    text: `Our family had a wonderful experience. Everything was explained clearly and the support from the team gave us real peace of mind throughout the journey.`,
  },

  {
    name: "Bilal S.",
    initial: "B",
    type: "Google Reviewer",
    time: "1 month ago",
    helpful: 19,
    rating: 5,
    text: `From booking to returning home, the service was excellent. The team were friendly and always ready to answer our questions.`,
  },

  {
    name: "Sana M.",
    initial: "S",
    type: "Google Reviewer",
    time: "2 months ago",
    helpful: 11,
    rating: 5,
    text: `A brilliant experience for our family. We felt supported throughout the whole Umrah journey and would happily travel with them again.`,
  },
];

function GoogleStars({ count = 5 }: { count?: number }) {
  return (
    <div className="google-reviews__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          fill="currentColor"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [current, setCurrent] = useState(0);

  const review = reviews[current];

  const previousReview = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="google-reviews">
      <div className="google-reviews__container">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <header className="google-reviews__header">

          <h2>
            Verified Pilgrim Reviews On
            <span>Google</span>
          </h2>

          <p>
            Real feedback from UK families and travellers who booked
            their sacred Umrah and holiday packages with Al-Musafir Travel.
          </p>

        </header>


        {/* =====================================================
            RATING ACTIONS
            ===================================================== */}

        <div className="google-reviews__actions">

          <div className="google-reviews__rating">

            <strong>4.9</strong>

            <div className="google-reviews__rating-info">

              <GoogleStars />

              <span>
                4.9 Rating on Google Reviews
              </span>

            </div>

          </div>


          <a
            href="#"
            className="google-reviews__feedback"
          >
            <MessageSquare />
            <span>Give Your Feedback</span>
            <ExternalLink />
          </a>

        </div>


        {/* =====================================================
            REVIEW CARD
            ===================================================== */}

        <article className="google-review-card">

          {/* TOP BAR */}

          <div className="google-review-card__top">

            <div className="google-review-card__source">

              <div className="google-review-card__google">
                G
              </div>

              <div>
                <strong>Google Review</strong>

                <span>
                  Posted on Al-Musafir Travel Business Profile
                </span>
              </div>

            </div>


            <div className="google-review-card__top-actions">

              <a
                href="#"
                className="google-review-card__feedback"
              >
                <MessageSquare />
                Give Your Feedback
                <ExternalLink />
              </a>

              <span className="google-review-card__verified">
                <BadgeCheck />
                Verified Pilgrim
              </span>

            </div>

          </div>


          {/* DIVIDER */}

          <div className="google-review-card__divider" />


          {/* REVIEW BODY */}

          <div className="google-review-card__body">

            <div className="google-review-card__person">

              <div className="google-review-card__avatar">
                {review.initial}
              </div>

              <div className="google-review-card__person-info">

                <div className="google-review-card__name">
                  {review.name}

                  <BadgeCheck />
                </div>

                <span>
                  {review.type}
                </span>

                <small>
                  {review.time}
                </small>

              </div>

            </div>


            <GoogleStars count={review.rating} />


            <blockquote>
              “{review.text}”
            </blockquote>

          </div>


          {/* DIVIDER */}

          <div className="google-review-card__divider" />


          {/* FOOTER */}

          <footer className="google-review-card__footer">

            <button className="google-review-card__helpful">
              <ThumbsUp />
              Helpful ({review.helpful})
            </button>


            <div className="google-review-card__navigation">

              <button
                onClick={previousReview}
                aria-label="Previous review"
              >
                <ChevronLeft />
              </button>

              <span>
                {current + 1}
                <small>/</small>
                {reviews.length}
              </span>

              <button
                onClick={nextReview}
                aria-label="Next review"
              >
                <ChevronRight />
              </button>

            </div>

          </footer>

        </article>

      </div>
    </section>
  );
}
