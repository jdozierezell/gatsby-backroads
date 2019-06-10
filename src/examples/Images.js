import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from 'styled-components'
import img from '../images/connectBcg.jpeg'
import Img from 'gatsby-image'

const Images = () => {
    return (
        <Wrapper>
            <article>
                <h3>Basic Image</h3>
                <img src={img} className="basic" />
            </article>
            <article>
                <h3>Basic Image</h3>
                <img src={img} className="basic" />
            </article>
            <article>
                <h3>Basic Image</h3>
                <img src={img} className="basic" />
            </article>
        </Wrapper>
    )
}

const Wrapper = styles.div``

export default Images
