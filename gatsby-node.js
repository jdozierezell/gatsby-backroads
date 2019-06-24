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
            posts: allContentfulPost {
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

    data.posts.edges.forEach(({ node }) => {
        createPage({
            path: `blog/${node.slug}`,
            component: path.resolve('./src/templates/blog-template.js'),
            context: {
                slug: node.slug,
            },
        })
    })

    // amount of posts
    const posts = data.posts.edges
    // posts per page
    const postsPerPage = 1
    // how many pages; use ceil to make sure the number rounds up
    const numPages = Math.ceil(posts.length / postsPerPage)
    // create a array so that forEach will run
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
            component: path.resolve('./src/templates/blog-list-template.js'),
            context: {
                limit: postsPerPage,
                skip: postsPerPage * i,
                numPages,
                currentPage: i + 1,
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
