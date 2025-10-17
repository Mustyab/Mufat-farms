import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Mufat Farms</h1>
          <p>Family. Freshness. Farming.</p>
        </div>
        <img
          src="https://via.placeholder.com/400x250"
          alt="Farm view"
          className="hero-image"
        />
      </section>

      {/* Story Section */}
      <section className="about-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <p>
            Mufat Farms began as a small family-owned poultry business dedicated
            to providing fresh, high-quality chicken and eggs to the community.
            Over the years, our commitment to sustainable farming and animal
            welfare has helped us grow while staying true to our roots.
          </p>
          <img
            src="https://via.placeholder.com/350x250"
            alt="Farm history"
            className="story-image"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We aim to provide nutritious, ethically-raised poultry products while
          promoting sustainable farming practices and supporting local growth.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>We ensure every product meets the highest standards.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We believe in honesty and transparency with our customers.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>Our practices protect the environment and animal welfare.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>We support local families and businesses in our area.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery">
        <h2>Life on the Farm</h2>
        <div className="gallery-grid">
          <img src="https://via.placeholder.com/200x150" alt="Farm life 1" />
          <img src="https://via.placeholder.com/200x150" alt="Farm life 2" />
          <img src="https://via.placeholder.com/200x150" alt="Farm life 3" />
          <img src="https://via.placeholder.com/200x150" alt="Farm life 4" />
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder">
        <img
          src="https://via.placeholder.com/200x200"
          alt="Founder"
          className="founder-image"
        />
        <div className="founder-text">
          <h2>Meet the Founder</h2>
          <p>
            Abubakar Haruna built Mufat Farms with a vision to bring freshness
            and trust to every meal. His dedication to quality and passion for
            farming continue to drive our success today.
          </p>
        </div>
      </section>

      {/* Promise Section */}
      <section className="about-promise">
        <h2>Our Vision</h2>
        <p>
          At Mufat Farms, we promise freshness, honesty, and care — from our
          farm to your table.
        </p>
      </section>

      {/* Explore Links */}
      <section className="about-links">
        <a href="/products" className="btn">View Our Products</a>
        <a href="/contact" className="btn">Contact Us</a>
      </section>

    </div>
  );
}

export default About;
