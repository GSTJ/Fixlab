const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            path
            id
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            path
            id
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            path
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage, allWordpressPost, allWordpressCategory } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const { edges: pages } = allWordpressPage
  pages.forEach(page => {
    createPage({
      path: page.node.path,
      component: slash(pageTemplate),
      context: {
        id: page.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post/index.js`)
  const { edges: posts } = allWordpressPost
  posts.forEach((post, index) => {
    const next = posts[index + 1]
    const previous = posts[index - 1]
    createPage({
      path: post.node.path,
      component: slash(postTemplate),
      context: {
        current: post.node.id,
        next: next && next.node.id,
        previous: previous && previous.node.id,
      },
    })
  })

  const categoryTemplate = path.resolve(`./src/templates/category/index.js`)
  const { edges: categories } = allWordpressCategory
  categories.forEach(category => {
    const postsPerPage = 10
    const posts = allWordpressPost.edges
    const total = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: total }).forEach((_, i) => {
      createPage({
        path: category.node.path + (i ? `page/${i + 1}` : ""),
        component: slash(categoryTemplate),
        context: {
          id: category.node.id,
          limit: postsPerPage,
          skip: i * postsPerPage,
          total: posts.length
        }
      })
    })
  })
}