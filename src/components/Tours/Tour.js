import React from 'react'
import Img from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
    query {
        file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const Tour = ({ tour }) => {
    const data = useStaticQuery(getImage)
    const image = data.file.childImageSharp.fluid
    const { name, price, country, days, slug, images } = tour
    let mainImage = images ? images[0].fluid : image
    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Img
                    fluid={mainImage}
                    className={styles.img}
                    alt="single tour"
                />
                <AniLink fade className={styles.link} to={`/tours/${slug}`}>
                    details
                </AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    <h4 className={styles.country}>
                        <FaMap className={styles.icon} />
                        {country || 'default country'}
                        {/* will display 'default country' if country value is null */}
                    </h4>
                    <div className={styles.details}>
                        <h6>{days} days</h6>
                        <h6>from ${price}</h6>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Tour
