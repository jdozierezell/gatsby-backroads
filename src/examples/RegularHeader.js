import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
                data {
                    age
                }
            }
        }
    }
`

const RegularHeader = () => {
    return (
        <StaticQuery
            query={getSiteData}
            render={({ site }) => {
                return (
                    <div>
                        <h2>title: {site.siteMetadata.title}</h2>
                        <h2>author: {site.siteMetadata.author}</h2>
                    </div>
                )
            }}
        />
    )
}

export default RegularHeader
