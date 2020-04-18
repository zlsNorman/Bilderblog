import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import mapStyles from "./imgMapStyles.module.scss";
import Img from 'gatsby-image';

const ImgMapList = ({imagesArray}) => 
<div className={mapStyles.imageList}>
    {imagesArray.map((image) => {
        const { node } = image;
        return <Img fluid={node.childImageSharp.fluid} objectFit="cover" />;
    })}
</div>
export default ImgMapList;

ImgMapList.propTypes = {
    images: PropTypes.array,
  }
  
ImgMapList.defaultProps = {
  }