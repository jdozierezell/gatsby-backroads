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
            redirects: allContentfulRedirect {
                edges {
                    node {
                        oldUrl
                        newUrl
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

    data.redirects.edges.forEach(({ node }) => {
        createRedirect({
            fromPath: node.oldUrl,
            toPath: node.newUrl,
            isPermanent: true,
        })
    })
}
