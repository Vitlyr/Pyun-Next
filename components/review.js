import React from 'react'

import PropTypes from 'prop-types'

const Review = (props) => {
  return (
    <>
      <section className={`review-card ${props.rootClassName} `}>
        <div className="review-stars">
          <svg viewBox="0 0 1024 1024" className="review-icon">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon02">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon04">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon06">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon08">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <main className="review-content">
          <p className="review-quote">{props.quote}</p>
          <div className="review-author">
            <img
              alt={props.avatarAlt}
              src={props.avatarSrc}
              className="review-avatar"
            />
            <div className="review-details">
              <h1 className="review-author1">{props.author}</h1>
              <label className="review-position">{props.position}</label>
            </div>
          </div>
        </main>
      </section>
      <style jsx>
        {`
          .review-card {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .review-stars {
            gap: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .review-icon {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon02 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon04 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon06 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon08 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-quote {
            color: #cccccc;
            font-size: 18px;
            font-family: Poppins;
            line-height: 25px;
          }
          .review-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .review-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 25px;
            background-color: var(--dl-color-gray-900);
          }
          .review-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-author1 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .review-position {
            color: #cccccc;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }
          .review-root-class-name {
            align-self: flex-start;
          }

          @media (max-width: 991px) {
            .review-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Review.defaultProps = {
  quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
  author: '{username}',
  rootClassName: '',
  avatarSrc:
    'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-8D316752847B1FB487AE536D8B3B1C82-Png/150/150/AvatarHeadshot/Png/noFilter',
  position: '{position}',
  avatarAlt: 'image',
}

Review.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
  avatarSrc: PropTypes.string,
  position: PropTypes.string,
  avatarAlt: PropTypes.string,
}

export default Review
