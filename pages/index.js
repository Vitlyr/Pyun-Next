import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import FAQ from '../components/faq'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Pyun</title>
          <meta
            name="description"
            content="Great ready to upgrade or start your experience, with a FREE hosted Discord bot and Roblox ranking, its truly one of its kind."
          />
          <meta property="og:title" content="Pyun" />
          <meta
            property="og:description"
            content="Great ready to upgrade or start your experience, with a FREE hosted Discord bot and Roblox ranking, its truly one of its kind."
          />
        </Head>
        <Navbar
          imageSrc1="https://public.vitly.xyz/images/pyun/PyunMain.png"
          brandingLogo="https://public.vitly.xyz/images/pyun/PyunMain.png"
          rootClassName="navbar-root-class-name"
        ></Navbar>
        <section className="home-section">
          <div className="home-hero">
            <div className="home-content">
              <main className="home-main">
                <header className="home-header">
                  <h1 className="home-heading">
                    <span>
                      The fastest way to manage your
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>bot.</span>
                  </h1>
                  <span className="home-caption">
                    <span>
                      Manage your Discord server or Roblox group in a whole new
                      level.
                    </span>
                    <br></br>
                  </span>
                </header>
                <div className="home-buttons">
                  <a href="#pricing" className="home-link">
                    <div className="home-get-started button">
                      <span className="home-text05">Get started</span>
                    </div>
                  </a>
                  <a href="#features" className="home-link1">
                    <div className="home-get-started1 button">
                      <span className="home-text06">View features</span>
                    </div>
                  </a>
                </div>
              </main>
              <div className="home-highlight">
                <div className="home-avatars">
                  <img
                    alt="image"
                    src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-959DD16B0AE0231D2DB1A81F0F15F0C8-Png/150/150/AvatarHeadshot/Png/noFilter"
                    className="home-image avatar"
                  />
                  <img
                    alt="image"
                    src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-17E83288104AAFD6C602F43853DFFE40-Png/150/150/AvatarHeadshot/Png/noFilter"
                    className="home-image1 avatar"
                  />
                  <img
                    alt="image"
                    src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-8D316752847B1FB487AE536D8B3B1C82-Png/150/150/AvatarHeadshot/Png/noFilter"
                    className="home-image2 avatar"
                  />
                </div>
                <label className="home-caption1">
                  Loved by many people like you!
                </label>
              </div>
            </div>
            <div className="home-image3">
              <img
                alt="image"
                src="https://public.vitly.xyz/images/pyun/PyunBotImg.png"
                className="home-image4"
              />
            </div>
            <div className="home-image5"></div>
          </div>
        </section>
        <section className="home-section1">
          <h2 className="home-text07">What we offer</h2>
          <div className="home-features">
            <header className="home-feature feature feature-active">
              <h3 className="home-text08">Customer Support</h3>
              <p className="home-text09">Issues? Contact us!</p>
            </header>
            <header className="feature home-feature1">
              <h3 className="home-text10">Bot Management</h3>
              <p className="home-text11">
                Manage your bot in your group with many options.
              </p>
            </header>
            <header className="feature home-feature2">
              <h3 className="home-text12">Options</h3>
              <p className="home-text13">
                Lots of selective options such as Roblox ranking!
              </p>
            </header>
          </div>
          <div className="home-note">
            <div className="home-content1">
              <main className="home-main1">
                <h2 className="home-heading1">
                  Starting your journey is always easy!
                </h2>
                <p className="home-paragraph">
                  <span>
                    To begin, head over to the navigation selection toolbox and
                    select &quot;get started&quot;. When selected, you will be
                    redirected to our signup page. When signing up or accessing
                    this webpage, you are automatically agreeing to our Terms of
                    Service and Privacy Policy, in this main page, no cookies
                    are/will be registered, and no information about you will be
                    released to our partners.
                  </span>
                  <br></br>
                </p>
              </main>
              <div className="home-explore-more">
                <p className="home-text16">Explore more -&gt;</p>
              </div>
            </div>
            <div className="home-image6">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image7"
              />
            </div>
          </div>
        </section>
        <section className="home-section2">
          <header className="home-header01">
            <h2 className="home-text17">
              Why should you select us over others?
            </h2>
            <span className="home-text18">
              Us/we market ourselves as a great solution due to our diverse
              options that we offer, with many free features to play and use,
              you can customize your experience in a whole new level.
            </span>
          </header>
        </section>
        <section className="home-section3">
          <div className="home-cube">
            <div className="home-top side"></div>
            <div className="home-front side"></div>
            <div className="home-left side"></div>
          </div>
          <main id="pricing" className="home-pricing">
            <header className="home-header02">
              <header className="home-left1">
                <span className="home-section4 section-head">Pricing</span>
                <h2 className="section-heading home-heading2">
                  <span>
                    Start
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text20">small</span>
                  <span>
                    , go
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text22">big</span>
                </h2>
              </header>
              <div className="home-right">
                <p className="home-paragraph1 section-description">
                  Upgrade your account with our selective plans. 
                </p>
              </div>
            </header>
            <div className="home-plans-container">
              <main id="options" className="home-plans">
                <div className="home-plan">
                  <div className="home-details">
                    <div className="home-header03">
                      <label className="home-name">Basic</label>
                      <div className="home-pricing1">
                        <h1 className="home-price">Free</h1>
                      </div>
                    </div>
                    <p className="home-description">
                      Get started with our service by starting out with our free
                      plan. Its a great plan for people who are starting out
                      with Roblox group management and so much more!
                    </p>
                  </div>
                  <div className="home-buy-details">
                    <a
                      href="/get-started?type=1"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link2"
                    >
                      <div className="home-buy button">
                        <span className="home-text23">
                          <span>Start Basic</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                    <div className="home-features1">
                      <span className="home-heading3">You will receive:</span>
                      <div className="home-list">
                        <Includes
                          label="Discord Bot (Watermarked)"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Preset Bot Commands"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Excludes
                          label="Multiple Discord Bots"
                          rootClassName="excludes-root-class-name23"
                        ></Excludes>
                        <Includes
                          label="Rankify (Restricted)"
                          rootClassName="includes-root-class-name25"
                        ></Includes>
                        <Excludes
                          label="Discord Bot Online 24/7"
                          rootClassName="excludes-root-class-name18"
                        ></Excludes>
                        <Includes
                          label="Rankify and Discord Logging"
                          rootClassName="includes-root-class-name27"
                        ></Includes>
                        <Excludes
                          label="Custom Roblox Rankify Bot"
                          rootClassName="excludes-root-class-name"
                        ></Excludes>
                        <Excludes
                          label="Custom Discord Commands"
                          rootClassName="excludes-root-class-name"
                        ></Excludes>
                        <Excludes
                          label="ChatGPT Integration"
                          rootClassName="excludes-root-class-name21"
                        ></Excludes>
                        <Excludes
                          label="Access To Early Features"
                          rootClassName="excludes-root-class-name22"
                        ></Excludes>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-plan1">
                  <div className="home-details1">
                    <div className="home-header04">
                      <label className="home-name1">Professional</label>
                      <div className="home-pricing2">
                        <h1 className="home-price1">$10</h1>
                        <span className="home-duration">
                          <span>/mo</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <p className="home-description1">
                      <span>
                        Already a expert? Get started or upgrade with our
                        Professional plan and get exclusive features that are
                        locked to flourish your creativity.
                      </span>
                      <br></br>
                      <br></br>
                    </p>
                  </div>
                  <div className="home-buy-details1">
                    <a
                      href="/get-started?type=2"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link3"
                    >
                      <div className="home-buy1 button">
                        <span className="home-text31">
                          <span>Start Professional</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                    <div id="features" className="home-features2">
                      <span className="home-heading4">You will receive:</span>
                      <div className="home-list1">
                        <Includes
                          label="Discord Bot (No Watermark)"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Preset Bot Commands"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Multiple Discord Bots (5 Max)"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Rankify (Restricted)"
                          rootClassName="includes-root-class-name21"
                        ></Includes>
                        <Includes
                          label="Discord Bot Online 24/7"
                          rootClassName="includes-root-class-name22"
                        ></Includes>
                        <Includes
                          label="Full Rankify and Discord Logging"
                          rootClassName="includes-root-class-name28"
                        ></Includes>
                        <Excludes
                          label="Custom Roblox Rankify Bot"
                          rootClassName="excludes-root-class-name"
                        ></Excludes>
                        <Excludes
                          label="Custom Discord Commands"
                          rootClassName="excludes-root-class-name19"
                        ></Excludes>
                        <Excludes
                          label="ChatGPT Integration"
                          rootClassName="excludes-root-class-name20"
                        ></Excludes>
                      </div>
                      <Includes
                        label="Some Access To Early Features"
                        rootClassName="includes-root-class-name23"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <div className="home-plan2">
                  <div className="home-details2">
                    <div className="home-header05">
                      <label className="home-name2">Enterprise</label>
                      <div className="home-pricing3">
                        <span className="home-price2">
                          <span>Custom</span>
                          <br></br>
                        </span>
                        <span className="home-duration1">
                          <span>/mo</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <p className="home-description2">
                      <span>
                        Wanna upgrade, or get awesome features that are
                        unavailable for other plans? Then this plan is perfect
                        for you, grow with your community in a whole new level.
                      </span>
                      <br></br>
                      <br></br>
                    </p>
                  </div>
                  <div className="home-buy-details2">
                    <a
                      href="/get-started?type=3"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link4"
                    >
                      <div className="home-buy2 button">
                        <span className="home-text41">
                          <span>Start Enterprise</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                    <div className="home-features3">
                      <span className="home-heading5">You will receive:</span>
                      <div className="home-list2">
                        <Includes
                          label="Discord Bot (No Watermark)"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Preset Bot Commands"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Multiple Bots (Max: 25)"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Full Access to Rankify"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Discord Bot Online (24/7)"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="Full Rankify and Discord Logging"
                          rootClassName="includes-root-class-name29"
                        ></Includes>
                        <Includes
                          label="Custom Roblox Rankify Bot"
                          rootClassName="includes-root-class-name26"
                        ></Includes>
                        <Includes
                          label="Custom Discord Bot Commands"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                        <Includes
                          label="ChatGPT Integration"
                          rootClassName="includes-root-class-name24"
                        ></Includes>
                        <Includes
                          label="Access To Early Features"
                          rootClassName="includes-root-class-name"
                        ></Includes>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </section>
        <div className="home-help">
          <span className="home-text44">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text47">Contact support -&gt;</p>
          </div>
        </div>
        <section id="testimonials" className="home-section5">
          <header className="home-header06">
            <header className="home-left2">
              <span className="home-section6 section-head">Reviews</span>
              <h2 className="home-heading6 section-heading">
                What users say about us
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph2 section-description">
                Take note of what others say about us.
              </p>
            </div>
          </header>
          <main className="home-cards">
            <div className="home-container1">
              <Review
                quote='"This tool has been created to inspire and create a great and easy-to-use environment for Discord and Roblox users, taking advantage of this opportunity is truly awesome."'
                author="Viceroyez"
                position="Former Founder &amp; CEO"
                avatarSrc="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-8D316752847B1FB487AE536D8B3B1C82-Png/150/150/AvatarHeadshot/Png/noFilter"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
            <div className="home-container2">
              <Review rootClassName="review-root-class-name"></Review>
            </div>
            <div className="home-container3">
              <Review rootClassName="review-root-class-name"></Review>
            </div>
          </main>
          <div className="home-view-more">
            <p className="home-text48">View more</p>
          </div>
        </section>
        <section id="questions" className="home-section7">
          <header className="home-header07">
            <span className="home-section8 section-head">FAQ</span>
            <h2 className="home-heading7 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="home-accordion">
            <FAQ rootClassName="faq-root-class-name"></FAQ>
          </main>
        </section>
        <footer className="home-footer">
          <div className="home-content2">
            <main className="home-main-content">
              <div className="home-content3">
                <header className="home-main2">
                  <div className="home-header08">
                    <img
                      alt="image"
                      src="https://public.vitly.xyz/images/pyun/PyunMain.png"
                      className="home-branding"
                    />
                  </div>
                  <div className="home-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link5"
                    >
                      <img
                        alt="image"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link6"
                    >
                      <img
                        alt="image"
                        src="https://public.vitly.xyz/images/pyun/x.png"
                        className="home-twitter social"
                      />
                    </a>
                  </div>
                </header>
                <header className="home-categories">
                  <div className="home-category">
                    <div className="home-header09">
                      <span className="footer-header">Quick Links</span>
                    </div>
                    <div className="home-links">
                      <a
                        href="/legal/privacy"
                        className="home-text50 footer-link"
                      >
                        Privacy Policy
                      </a>
                      <a href="/legal/tos" className="home-text51 footer-link">
                        Terms of Service
                      </a>
                      <a href="/legal/tou" className="home-text52 footer-link">
                        Terms of Use
                      </a>
                      <a
                        href="/legal/return"
                        className="home-text53 footer-link"
                      >
                        Returns
                      </a>
                      <a
                        href="/feedback"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-text54 footer-link"
                      >
                        <span>Feedback</span>
                        <br></br>
                      </a>
                    </div>
                  </div>
                </header>
              </div>
              <section className="home-copyright">
                <span className="home-text57">
                  © 2024 Vitly. All Rights Reserved.
                </span>
              </section>
            </main>
            <main className="home-subscribe"></main>
            <section className="home-copyright1">
              <span className="home-text58">
                © 2024 Vitly. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
        <div>
          <div className="home-container5">
            <Script
              html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .home-section {
            width: 100%;
            height: 856px;
            display: flex;
            align-items: center;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 30px;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-get-started {
            display: flex;
            animation-name: pulse;
            animation-delay: 0s;
            text-decoration: none;
            background-color: var(--dl-color-primary-700);
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text05 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .home-link1 {
            display: contents;
          }
          .home-get-started1 {
            text-decoration: none;
            background-color: #2a2a2a;
          }
          .home-text06 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-avatars {
            width: 115px;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-image {
            left: 0px;
            position: absolute;
            border-radius: 25px;
            background-color: var(--dl-color-gray-900);
          }
          .home-image1 {
            left: var(--dl-space-space-twounits);
            position: absolute;
            object-fit: cover;
            border-radius: 25px;
            background-color: var(--dl-color-gray-900);
          }
          .home-image2 {
            left: var(--dl-space-space-fourunits);
            position: absolute;
            object-fit: cover;
            border-radius: 25px;
            background-color: var(--dl-color-gray-900);
          }
          .home-caption1 {
            color: rgb(255, 255, 255);
            font-family: 'Poppins';
            line-height: 24px;
          }
          .home-image3 {
            top: 150px;
            right: 0px;
            width: 650px;
            height: 695px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image4 {
            top: 0px;
            right: 0px;
            width: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-image5 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .home-section1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-text07 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            user-select: none;
            border-color: #5a5a5a;
            margin-bottom: 120px;
            flex-direction: row;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-feature {
            border-color: var(--dl-color-primary-300);
          }
          .home-text08 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text09 {
            color: rgb(121, 124, 128);
            font-family: 'Poppins';
          }
          .home-text10 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text11 {
            color: rgb(121, 124, 128);
            font-family: 'Poppins';
          }
          .home-text12 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text13 {
            color: rgb(121, 124, 128);
            font-family: 'Poppins';
          }
          .home-note {
            gap: 140px;
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 520px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .home-paragraph {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .home-explore-more {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-primary-500);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-explore-more:hover {
            opacity: 0.5;
          }
          .home-text16 {
            color: var(--dl-color-primary-500);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-image6 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-image7 {
            object-fit: cover;
            border-radius: 50px;
          }
          .home-section2 {
            gap: var(--dl-space-space-sixunits);
            width: 100%;
            height: 218px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #292929;
          }
          .home-header01 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text17 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text18 {
            color: rgb(194, 198, 204);
            width: 100%;
            max-width: 600px;
            text-align: center;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .home-section3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: fit-content;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-cube {
            right: -150px;
            width: 210px;
            bottom: -80px;
            height: 210px;
            margin: auto;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(50deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top {
            transform: translateZ(-210px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left {
            width: 210px;
            transform: translateZ(-210px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-pricing {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .home-header02 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: 136px;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section4 {
            color: var(--dl-color-primary-500);
          }
          .home-text20 {
            font-size: 75%;
            font-style: normal;
            font-weight: 800;
          }
          .home-text22 {
            font-size: 150%;
            font-weight: 800;
          }
          .home-right {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph1 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            line-height: 32px;
          }
          .home-plans-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 911px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-plans {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: fit-content;
            display: flex;
            z-index: 50;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .home-plan {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            height: fit-content;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header03 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-description {
            color: rgba(255, 255, 255, 0.8);
            font-family: 'Poppins';
            line-height: 22px;
          }
          .home-buy-details {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link2 {
            display: contents;
          }
          .home-buy {
            width: 100%;
            display: flex;
            text-decoration: none;
            background-color: var(--dl-color-primary-700);
          }
          .home-text23 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading3 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .home-list {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-plan1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            height: fit-content;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header04 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: 'Poppins';
            line-height: 36px;
          }
          .home-pricing2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price1 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-duration {
            color: rgb(179, 179, 179);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 40px;
          }
          .home-description1 {
            color: rgba(255, 255, 255, 0.8);
            font-family: 'Poppins';
            line-height: 22px;
          }
          .home-buy-details1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link3 {
            display: contents;
          }
          .home-buy1 {
            width: 100%;
            display: flex;
            text-decoration: none;
            background-color: var(--dl-color-primary-700);
          }
          .home-text31 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading4 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .home-list1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-plan2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            height: fit-content;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header05 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price2 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-duration1 {
            color: rgb(179, 179, 179);
            font-size: 20px;
            font-family: 'Poppins';
            line-height: 40px;
          }
          .home-description2 {
            color: rgba(255, 255, 255, 0.8);
            font-family: 'Poppins';
            line-height: 22px;
          }
          .home-buy-details2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link4 {
            display: contents;
          }
          .home-buy2 {
            width: 100%;
            display: flex;
            text-decoration: none;
            background-color: var(--dl-color-primary-700);
          }
          .home-text41 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading5 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .home-list2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-help {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text44 {
            color: #ffffff;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-contact-support {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-primary-300);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-contact-support:hover {
            opacity: 0.5;
          }
          .home-text47 {
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section5 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header06 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section6 {
            color: var(--dl-color-primary-500);
          }
          .home-heading6 {
            text-align: center;
          }
          .home-right1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph2 {
            width: 100%;
            max-width: 600px;
            text-align: center;
          }
          .home-cards {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            max-width: 1200px;
            align-self: center;
            align-items: center;
            align-content: center;
            flex-direction: row;
            grid-template-columns: auto auto auto;
          }
          .home-container1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-view-more {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-view-more:hover {
            opacity: 0.5;
          }
          .home-text48 {
            color: rgb(128, 255, 68);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section7 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #292929;
            border-top-width: 1px;
          }
          .home-header07 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section8 {
            color: var(--dl-color-primary-500);
          }
          .home-heading7 {
            text-align: center;
          }
          .home-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-content2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-main2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-branding {
            width: 75px;
            object-fit: cover;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link5 {
            display: contents;
          }
          .home-link6 {
            display: contents;
          }
          .home-twitter {
            background-color: var(--dl-color-gray-white);
          }
          .home-categories {
            gap: var(--dl-space-space-fourunits);
            width: 1021px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            padding-left: 52px;
            flex-direction: column;
            justify-content: center;
          }
          .home-header09 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text50 {
            text-decoration: none;
          }
          .home-text51 {
            text-decoration: none;
          }
          .home-text52 {
            text-decoration: none;
          }
          .home-text53 {
            text-decoration: none;
          }
          .home-text54 {
            text-decoration: none;
          }
          .home-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text57 {
            color: rgb(196, 196, 196);
            width: 100%;
            font-size: 14px;
            font-family: 'Poppins';
            line-height: 21px;
          }
          .home-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text58 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-content {
              position: relative;
              align-items: center;
            }
            .home-main {
              align-items: center;
            }
            .home-heading {
              text-align: left;
            }
            .home-caption {
              text-align: left;
            }
            .home-buttons {
              width: 100%;
            }
            .home-get-started {
              flex: 1;
            }
            .home-get-started1 {
              flex: 1;
            }
            .home-highlight {
              width: 100%;
              flex-direction: column;
            }
            .home-image3 {
              right: 0px;
              display: none;
              position: absolute;
              flex-direction: column;
            }
            .home-image5 {
              width: 100%;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .home-text07 {
              text-align: center;
            }
            .home-note {
              gap: var(--dl-space-space-fourunits);
              flex-direction: column;
            }
            .home-content1 {
              max-width: 100%;
            }
            .home-main1 {
              align-items: flex-start;
            }
            .home-text17 {
              text-align: center;
            }
            .home-section3 {
              height: var(--dl-size-size-maxwidth);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-plans {
              width: fit-content;
              height: fit-content;
              margin-top: 25%;
              flex-direction: column;
            }
            .home-description {
              color: rgba(255, 255, 255, 0.8);
              font-family: Poppins;
              line-height: 22px;
            }
            .home-description1 {
              color: rgba(255, 255, 255, 0.8);
              font-family: Poppins;
              line-height: 22px;
            }
            .home-description2 {
              color: rgba(255, 255, 255, 0.8);
              font-family: Poppins;
              line-height: 22px;
            }
            .home-section5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-cards {
              grid-template-columns: auto;
            }
            .home-container3 {
              display: none;
            }
            .home-view-more {
              display: flex;
              border-color: #cccccc;
            }
            .home-text48 {
              color: #cccccc;
              font-style: normal;
              font-weight: 500;
              line-height: 24px;
            }
            .home-content2 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-copyright {
              display: none;
            }
            .home-copyright1 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-content {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading {
              font-size: 40px;
            }
            .home-caption {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .home-get-started {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-get-started1 {
              display: none;
            }
            .home-caption1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-section1 {
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-text07 {
              font-size: 32px;
              text-align: center;
            }
            .home-features {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-top: var(--dl-space-space-threeunits);
              border-color: #5a5a5a;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-feature {
              width: 100%;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text08 {
              font-size: 20px;
            }
            .home-feature1 {
              width: 100%;
              border-color: #5a5a5a;
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 1px;
            }
            .home-text10 {
              font-size: 20px;
            }
            .home-feature2 {
              width: 100%;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text12 {
              font-size: 20px;
            }
            .home-note {
              gap: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              width: 100%;
              align-items: flex-start;
            }
            .home-heading1 {
              font-size: 28px;
            }
            .home-paragraph {
              line-height: 24px;
            }
            .home-section2 {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text17 {
              font-size: 32px;
              text-align: center;
            }
            .home-section3 {
              height: 3229px;
              flex-flow: column;
            }
            .home-cube {
              right: -250px;
            }
            .home-pricing {
              height: 3200px;
              margin-top: -25%;
            }
            .home-header02 {
              margin-top: 25%;
            }
            .home-plans-container {
              height: 1096px;
              margin-top: 250%;
            }
            .home-plans {
              margin-top: -225%;
              flex-direction: column;
            }
            .home-plan {
              margin-top: -25%;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-plan1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-plan2 {
              height: fit-content;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-help {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-section5 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content3 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-main2 {
              gap: var(--dl-space-space-twounits);
            }
            .home-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text58 {
              color: rgb(196, 196, 196);
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              align-items: flex-start;
            }
            .home-heading {
              max-width: 280px;
            }
            .home-image7 {
              width: 100%;
            }
            .home-pricing {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header02 {
              margin-top: -125%;
            }
            .home-heading2 {
              font-size: 32px;
              text-align: center;
            }
            .home-paragraph1 {
              font-size: 16px;
            }
            .home-plans {
              margin-top: -50%;
            }
            .home-content3 {
              width: auto;
            }
            .home-categories {
              width: 162px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
