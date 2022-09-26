import React from 'react'
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className="home__newsletter-box">
      <section className="container home__newsletter-section">
        <h5> • STAY UP TO DATE • </h5>
        <h2>newsletter</h2>

        <h3>Be Informed!</h3>
        <p>Get important news and announcements delivered straight into your inbox.<br/>Enter your email address below to sign up!</p>

        <form className="home__newsletter-form">
          <input type="email" placeholder="Enter your email address" className="home__newsletter-email" name="email" />

          <input type="submit" value="Subscribe" class="subscribe-btn btn" />
        </form>



      </section>
    </div>
  )
}

export default Newsletter