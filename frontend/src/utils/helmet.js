import React from "react";
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
const helmet = (props) => {
    const {title, description} = props
    return(
        <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>
    );
}


helmet.prototype ={
    title: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}
export default helmet;