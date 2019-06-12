const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
    const { data } = await graphql(`
        query {
            tours: allContentfulTour {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    data.tours.edges.forEach(({ node }) => {
        createPage({
            path: `tours/${node.slug}`,
            component: path.resolve('./src/templates/tour-template.js'),
            context: {
                slug: node.slug,
            },
        })
    })

    createRedirect({
        fromPath: '/test',
        toPath: '/tours',
        isPermanent: true,
    })
}
