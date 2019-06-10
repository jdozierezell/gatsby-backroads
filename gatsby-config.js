module.exports = {
    siteMetadata: {
        title: 'BackRoads',
        description:
            'Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily' +
            ' routine & say yes to adventure',
        author: 'Jonathan Dozier-Ezell',
        data: {
            name: 'john',
            age: 24,
        },
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
    ],
}