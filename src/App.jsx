import { useState } from 'react'
import './App.css' 
import Logo from './images/Logo.png'
import arrow from "./images/arrow.png"
import Vector_3 from "./images/Vector_3.png"
import Frame_1000001716 from "./images/Frame_1000001716.png"
import triangle from "./images/triangle.png"
import Ellipse_1 from "./images/Ellipse_1.png"
import Rectangle_9 from "./images/Rectangle_9.png"
import wifi from "./images/wifi.png"
import write from "./images/write.png"
import block from "./images/block.png"
import hos from "./images/hos.png"
import line_70 from "./images/line_70.png"
import blue_check_circle from "./images/blue_check_circle.png"
import check_circle from "./images/check_circle.png"
import magic_wand from "./images/magic_wand.png"
import plus from "./images/plus.png"
import minus from "./images/minus.png"
import logo2 from "./images/logo2.png"
import socials from "./images/socials.png"
function App() {
  return (
    <>
<main>
  <div className="top">
    {/* HEADER PART */}
    <div className="head">
      <div className="blue-scissors">
        <img src={Logo} alt="" />
      </div>
      <nav className="navigator">
        <ul>
          <li>
            <a href="#" style={{ color: "#2D7EF9" }}>
              My URLs
            </a>
          </li>
          <li>
            <a href="#">
              Features <img src={arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </nav>
      <div className="sign-in">
        <div className="log-in">
          <a href="#">
            <h5>Log in</h5>
          </a>
        </div>
        <div className="try-for-free">
          <a href="#">Try for free</a>
        </div>
      </div>
    </div>
    {/* top-2nd part */}
    <div className="second-part">
      {/* second-text */}
      <div className="optimize-text">
        <h2>
          {" "}
          Optimize Your Online Experience with Our{" "}
          <b>
            Advanced <span>URL Shortening</span> Solution
          </b>{" "}
        </h2>
        <div className="lines">
          {" "}
          <img src={Vector_3} alt="" srcSet="" />
        </div>
      </div>
      <div className="personalize-text">
        <h4>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </h4>
      </div>
      {/* button */}
      <div className="second-sign-in">
        <div className="sign-up">
          <a href="#">Sign Up</a>
        </div>
        <div className="learn">
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="second-img">
        <div className="shareable ">
          <img src={Frame_1000001716} alt="" />
          <h4>
            Seamlessly transform your long URLs into concise and shareable links
            with just few clicks.
          </h4>
        </div>
        <div className="triangle-image go">
          <img src={triangle} alt="" srcSet="" className="tri" />
        </div>
        <div className="dine">
          <div className="plate go is">
            <img src={Ellipse_1} alt="" />
          </div>
          <div className="rectangle go is">
            <img src={Rectangle_9} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="three">
    <div className="three-money-top">
      <div className="three-top-left">
        <h2>
          One Stop. <br />
          Four <ayo className="ayo">Possibilities</ayo>.{" "}
        </h2>
      </div>
      <div className="three-money-right">
        <div className="three-million bro">
          <h3>
            <mil className="mil">3M</mil> <br />
            Active users
          </h3>
        </div>
        <div className="sixty-million bro">
          <h3>
            <mil className="mil">60M</mil> <br /> link &amp; QR <br /> codes
            created
          </h3>
        </div>
        <div className="one-billion bro">
          <h3>
            <mil className="mil">1B</mil> <br />
            Clickrd &amp; Scanned <br /> connections
          </h3>
        </div>
        <div className="hundred-thousand bro">
          <h3>
            <mil className="mil">300K</mil> <br /> App integrations
          </h3>
        </div>
      </div>
    </div>
    {/* three-middle-part */}
    <div className="three-middle-part">
      <div className="three-one">
        <div className="three-choose">
          <img src="images/line 70.png" alt="" />
          <h2>
            Why choose <sc className="three-scissors">Scissors</sc>{" "}
          </h2>
        </div>
        <div className="three-one-text">
          <h3>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.{" "}
          </h3>
        </div>
      </div>
      <div className="three-grid-right">
        <div className="three-two">
          <div className="three-url-img">
            <img src={wifi} alt="" srcSet="" />
          </div>
          <div className="three-url-short">
            <h2>URL Shortening</h2>
          </div>
          <div className="three-two-text tec">
            <h3>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </h3>
          </div>
        </div>
        <div className="three-three-3">
          <div className="three-write-img">
            <img src={write} alt="" />
          </div>
          <div className="three-write-url">
            <h2>Custom URLs</h2>
          </div>
          <div className="three-three-3-text tec">
            <h3>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </h3>
          </div>
        </div>
        <div className="three-four">
          <div className="three-block-img">
            <img src={block} alt="" />
          </div>
          <div className="three-block-qr">
            <h2>QR Codes</h2>
          </div>
          <div className="three-block-text tec">
            <h3>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </h3>
          </div>
        </div>
        <div className="three-five">
          <div className="three-hos-img">
            <img src={hos} alt="" />
          </div>
          <div className="three-hos-data">
            <h2>Data Analytics</h2>
          </div>
          <div className="three-hos-text tec">
            <h3>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* four */}
  <div className="four-middle-part">
    <div className="four-top">
      <div className="four-top-big">
        <img src={line_70} alt="" />
        <h1>
          A <pr className="four-pre">price perfect</pr> for your needs.
        </h1>
      </div>
      <div className="four-top-small">
        <h3>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing
        </h3>
      </div>
    </div>
    <div className="four-pricing-tables">
      {/* price-1 */}
      <div className="four-price-1">
        <basic className="basic">Basic</basic>
        <span className="free for-real">Free</span>
        <span className="free-plan">Free plan for all users</span>
        <div className="four-check-items-1">
          <div className="four-unlim bm">
            <img src={blue_check_circle} alt="" />
            <h5>Unlimited URL Shortening</h5>
          </div>
          <div className="four-link bm">
            <img src={blue_check_circle} alt="" />
            <h5>Basic Link Analytics</h5>
          </div>
          <div className="four-cust bm">
            <img src={blue_check_circle} alt="" />
            <h5>Customize Short Links</h5>
          </div>
          <div className="four-stand bm">
            <img src={blue_check_circle} alt="" />
            <h5>Standard Support</h5>
          </div>
          <div className="four-add bm">
            <img src={blue_check_circle} alt="" />
            <h5>Ad-supported</h5>
          </div>
        </div>
      </div>
      {/* price-2 */}
      <div className="four-price-2">
        <basic className="pro">Professional</basic>
        <span className="free fifthin">$15/month</span>
        <span className="ideal-for">Ideal for business creators</span>
        <div className="four-check-items-2">
          <div className="four-ehnan br">
            <img src={check_circle} alt="" />
            <h5>Enhanced Links Analytics</h5>
          </div>
          <div className="four-brand br">
            <img src={check_circle} alt="" />
            <h5>Custom Branded Domians</h5>
          </div>
          <div className="four-Advance br">
            <img src={check_circle} alt="" />
            <h5>Advanced Links Customization</h5>
          </div>
          <div className="four-prior br">
            <img src={check_circle} alt="" />
            <h5>Priority Support</h5>
          </div>
          <div className="four-exp-free br">
            <img src={check_circle} alt="" />
            <h5>Ad-free EXperience</h5>
          </div>
        </div>
      </div>
      {/* price-3 */}
      <div className="four-price-3">
        <basic className="teams">Teams</basic>
        <span className="free twenty">$25/month</span>
        <span className="share-with">Share with up to 10 users</span>
        <div className="four-check-items-3">
          <div className="four-collab apl">
            <img src={blue_check_circle} alt="" />
            <h5>Team Collaboration</h5>
          </div>
          <div className="four-roles apl">
            <img src={blue_check_circle} alt="" />
            <h5>User Roles and Permissions</h5>
          </div>
          <div className="four-secure apl">
            <img src={blue_check_circle} alt="" />
            <h5>Enhanced Security</h5>
          </div>
          <div className="four-api apl">
            <img src={blue_check_circle} alt="" />
            <h5>API Acess</h5>
          </div>
          <div className="four-dedicate apl">
            <img src={blue_check_circle}  alt="" />
            <h5 className="dead">Dedicated Account Manager</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="four-form">
      <div className="four-button-pricing">
        <a href="#">
          <h4>Get Custom Pricing</h4>
        </a>
      </div>
      <div className="four-button-select">
        <a href="#">
          <h4>Select Pricing</h4>
        </a>
      </div>
    </div>
  </div>
  {/* FIVE-MIDDLE-PART */}
  <div className="five-middle-part">
    <div className="five-form">
      <form className="form">
        <div className="five-inputs">
          <div className="five-input-url">
            <input
              type="url"
              placeholder="Paste URL here..."
              required="required"
            />
          </div>
          <div className="five-select-alias">
            {/* SELECT */}
            <div className="five-option">
              <select required="required">
                <option value="Choose Domain" selected="">
                  Choose Domain
                </option>
                <option value="2nd option">2nd option</option>
              </select>
            </div>
            <div className="five-input-text">
              <input
                type="text"
                placeholder="Type Alias here"
                required="required"
              />
            </div>
          </div>
        </div>
        <div className="five-submit">
          <div className="five-button">
            <button>
              Trim URL <img src={magic_wand} alt="" />
            </button>
          </div>
          <div className="five-submit-text">
            <p>
              By clicking TrimURL, I agree to the{" "}
              <span style={{ fontWeight: 900 }}>
                Terms of Service, Privacy Policy
              </span>{" "}
              and Use of Cookies.{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* six */}
  <div className="six-container">
    <div className="faq-top">
      <img src={line_70} alt="" />
      <h2>FAQs</h2>
    </div>
    <div className="accordion">
      <div className="accordion-item" id="question1">
        <a className="accordion-link" href="#question1">
          How does URL shortening work?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question2">
        <a className="accordion-link" href="#question2">
          Is it necessary to create an account to use the URL shortening
          service?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question3">
        <a className="accordion-link" href="#question3">
          Are the shortened links permanent? Will they expire?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question4">
        <a className="accordion-link" href="#question4">
          Are there any limitations on the number of URLs I can shorten?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question5">
        <a className="accordion-link" href="#question5">
          Can I customize the shortened URLs to reflect my brand or content?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question6">
        <a className="accordion-link" href="#question6">
          Can I track the performance of my shortened URLs?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question7">
        <a className="accordion-link" href="#question7">
          Are the shortened links protected against spam or malicious activity?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question8">
        <a className="accordion-link" href="#question8">
          What is a QR code and what can it do?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question9">
        <a className="accordion-link" href="#question9">
          Is there an API available for integrating the URL shortening service
          into my own applications or websites?
          <img src={plus} alt="" className="add" />
          <img src={minus} alt="" className="remove" />
        </a>
        <div className="six-answer">
          <p>
            {" "}
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        </div>
      </div>
    </div>
    {/* <div class="six-image-left"><img src="images/faq-left.png" alt=""></div> */}
    {/* <div class="six-faq-question">
      <div class="faq-top"><img src="images/Line 70.png" alt=""><h2>FAQs</h2></div>
      <div class="six-table">
      <div class="six-one we"><h3>How does URL shortening work? <img src="images/minus.png" alt=""></h3> <h4>URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.</h4><img src="images/line.png" alt="" class="line ss"></div>
     <div class="six-two we"><h3>Is it necessary to create an account to use the URL shortening service? <img src="images/plus.png" alt=""></h3><img src="images/line.png" alt="" class="line ss"></div>
     <div class="six-three we"><h3>Are the shortened links permanent? Will they expire? <img src="images/plus.png" alt=""></h3><img src="images/line.png" alt="" class="line ss"></div>
     <div class="six-four we"><h3>Are there any limitations on the number of URLs I can shorten? <img src="images/plus.png" alt=""></h3><img src="images/line.png" alt="" class="line ss"></div>
     <div class="six-five we"><h3>Can I customize the shortened URLs to reflect my brand or content? <img src="images/plus.png" alt=""></h3><img src="images/line.png" alt="" class="line ss"></div>
     <div class="six-six we"><h3>Can I track the performance of my shortened URLs? <img src="images/plus.png" alt=""></h3><img src="images/line.png" alt="" class="line ss"></div>
     <div class="six-seven we"><h3>How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity? <img src="images/plus.png" class="sas"></h3><img src="images/line.png " alt="" class="line ss"></div>
     <div class="six-eight we"><h3>What is a QR code and what can it do? <img src="images/plus.png" alt=""></h3><img src="images/line.png" alt="" class="line ss"></div>
     <div class="six-nine we"><h3>Is there an API available for integrating the URL shortening service into my own applications or websites? <img src="images/plus.png" class="sas"></h3><img src="images/line.png" alt="" class="line"></div>
  </div>
  </div> */}
    {/* <div class="six-image-right"><img src="images/faq-right.png" alt=""></div> */}
  </div>
  {/* SEVEN */}
  <div className="seven-container">
    <div className="seven-text-container">
      <div className="seven-revolution">
        <h4>Revolutionizing Link Optimization</h4>
      </div>
      <div className="seven-button">
        <button>Get Started</button>
      </div>
    </div>
  </div>
  {/* Eight */}
  <div className="eight-container">
    <div className="eight-images">
      <div className="eight-black-scissor">
        <img src={logo2} alt="" />
      </div>
      <div className="eight-last-multiple-image">
        <img src={socials} alt="" />
      </div>
    </div>
    <div className="eight-grid-texts">
      <div className="grid-container-1">
        <div className="eight-grid-1">
          <h3>Why Scissor ?</h3>{" "}
          <h4>
            Scissor 101 <br />
            Integrations &amp; API <br />
            Pricing
          </h4>
        </div>
        <div className="eight-grid-2">
          <h3>Resources</h3>
          <h4>
            Blog <br />
            Resource Library <br />
            Developers <br />
            App Connectors <br />
            Support <br />
            Trust Center <br />
            Browser Extension <br />
            Mobile App
          </h4>
        </div>
      </div>
      <div className="grid-container-2">
        <div className="eight-grid-3">
          <h3>Solutions</h3>
          <h4>
            Social Media <br />
            Digital Marketing <br />
            Customer Service <br />
            For Developers
          </h4>
        </div>
        <div className="eight-grid-4">
          <h3>Features</h3>
          <h4>
            Branded Links <br />
            Mobile Links <br />
            Campaign <br />
            Management &amp; <br />
            Analytics <br />
            QR Code generation
          </h4>
        </div>
      </div>
      <div className="grid-container-3">
        <div className="eight-grid-5">
          <h3>Products</h3>
          <h4>
            Link Management <br />
            QR Codes <br />
            Link-in-bio
          </h4>
        </div>
        <div className="eight-grid-6">
          <h3>Legal</h3>
          <h4>
            Privacy Policy <br />
            Cookie Policy <br />
            Terms of Service <br />
            Acceptable Use Policy <br />
            Code of Conduct
          </h4>
        </div>
      </div>
      <div className="grid-container-4">
        <div className="eight-grid-7">
          <h3>Company</h3>
          <h4>
            About Scissor <br />
            Careers <br />
            Partners <br />
            Press <br />
            Contact <br />
            Reviews
          </h4>
        </div>
      </div>
    </div>
    <div className="final-footer">
      <p>Term of Service | Security | © Scissor 2023</p>
    </div>
  </div>
</main>

     
    </>
  )
}

export default App
