import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardReview } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  swiperContainer: {
    width: '100%',
    maxWidth: 600,
  },
}));

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  React.useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 8000,
      },
    });
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Students Review"
        subtitle="Take a quick glance at some of our student response."
      />
      <div className={clsx('swiper-container', classes.swiperContainer)}>
        <div className="swiper-wrapper">
          {data.map((item, index) => (
            <CardReview
              key={index}
              className={'swiper-slide'}
              noBorder
              noShadow
              text={item.review}
              // icon={
              //   <IconAlternate
              //     color={colors.indigo}
              //     fontIconClass="fas fa-quote-right"
              //   />
              // }
              authorName={item.name}
              authorTitle={` Enrolled in: ${item.enroll}`}
              authorPhoto={item.authorPhoto}
            />
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
