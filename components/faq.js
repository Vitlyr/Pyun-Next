import React from 'react'

import PropTypes from 'prop-types'

const FAQ = (props) => {
  return (
    <>
      <div className={`faq-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq-element accordion-element"
        >
          <div className="faq-details">
            <span className="faq-text">Is my data fully protected?</span>
            <span data-role="accordion-content" className="faq-text1">
              Yup, your and our data are fully encrypted to prevent any data
              breaches, for more information about what type of data is being
              collected about you please visit our Privacy Policy.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq-element1 accordion-element"
        >
          <div className="faq-details1">
            <span className="faq-text2">How do I manage all my commands?</span>
            <span data-role="accordion-content" className="faq-text3">
              Unto managing your commands in your server depends with your
              preference, either you manage in our easy-to-use dashboard or use
              Discord&apos;s preset settings by heading over too &quot;Server
              Settings&quot; then &quot;Integrations&quot; and select your bot,
              just to add a restriction to your users, so they&apos;ll wont use
              any of your preset admin commands.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq-icon2">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq-element {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text1 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: 'Poppins';
            line-height: 24px;
            user-select: text;
          }
          .faq-icon {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq-text2 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq-text3 {
            color: rgb(204, 204, 204);
            width: 100%;
            font-family: Poppins;
            line-height: 28px;
            user-select: text;
          }
          .faq-icon2 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq-text {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text2 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq-text3 {
              color: rgb(204, 204, 204);
            }
          }
        `}
      </style>
    </>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
