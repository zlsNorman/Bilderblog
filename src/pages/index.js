import React, { useState, Fragment, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import styles from '../styles/index.module.scss';
import classNames from 'classnames';
import Button from '../components/button/button';
import ImgMapList from '../components/ImgMap/imgMap';

export default ({ data }) => {
	const [ active, setActive ] = useState(true);
	const [ images, setImages ] = useState([]);
	const { artImages, refImages } = data;
	const artButton = classNames({
		[styles.btn]: true,
		[styles.active]: active
	});

	const refButton = classNames({
		[styles.btn]: true,
		[styles.active]: !active
	});
	useEffect(
		() => {
			if (active) setImages(artImages.edges);
			else setImages(refImages.edges);
		},
		[ active ]
	);
	console.log(artButton);
	return (
		<Fragment>
			<div className= {styles.header}>
				<h1 className={styles.headerText}>Jannis Art Gallery</h1>
				<div className={styles.buttonSwitcher}>
					<Button name= "Art" handleClick= {() => setActive(true)} ClassName ={artButton}/>
					<Button name= "References" handleClick= {() => setActive(false)} ClassName ={refButton}/>
				</div>
			</div>
			<div className= {styles.content}>
				<ImgMapList imagesArray = {images}/>
			</div>
		</Fragment>
	);
};

export const artImages = graphql`
	query getImagesQuery {
		artImages: allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, relativeDirectory: { eq: "art" } }) {
			edges {
				node {
					name
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		refImages: allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, relativeDirectory: { eq: "ref" } }) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
							
						}
					}
				}
			}
		}
	}
`;
