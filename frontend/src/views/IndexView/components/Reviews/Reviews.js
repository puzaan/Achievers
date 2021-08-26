import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import { SectionHeader} from 'components/molecules';
import { CardReview } from 'components/organisms';
import { Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  swiperContainer: {
    width: '100%',
    textAlign: "left",
    position: 'relative',
    // maxWidth: 600,
  },
  swiperNav: {
    '& .swiper-button-prev, & .swiper-button-next': {
      width: theme.spacing(6),
      height: theme.spacing(6),
      padding: theme.spacing(2),
      background: theme.palette.primary.main,
      borderRadius: '100%',
      boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      '&:after': {
        fontSize: 'initial',
        color: theme.palette.background.paper,
      },
    },
  },
}));

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });
  React.useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: isXs ? 15 : 0,
      
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
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
              text={<Typography align = 'left' variant = "h6"> {item.review} </Typography>}
              authorName={item.name}
              authorTitle={` Enrolled in: ${item.enroll}`}
              authorPhoto={item.authorPhoto}
            />
          ))}
        </div>
        {!isXs ? null : <div className="swiper-pagination" />}
        {isXs ? null : (
          <div className={classes.swiperNav}>
            <div className={clsx('swiper-button-prev')} />
            <div className={clsx('swiper-button-next')} />
          </div>
        )}
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
