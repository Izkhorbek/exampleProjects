import { ICategory } from "../interfaces/category.interface";
import clientHygraph from "../lib/client";
import { IBlogs } from "./../interfaces/blogs.interface";
import { gql } from "graphql-request";
// const graphqlAPI =
//   "https://us-west-2.cdn.hygraph.com/content/cm3k1p78y02mi07uva2agv13i/master";

// link to review
//https://www.npmjs.com/package/graphql-request
export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          id
          excerpt
          slug
          title
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          createdAt
          description {
            text
          }
        }
      }
    `;

    const result = await clientHygraph.request<{ blogs: IBlogs[] }>(query);

    //A class is available for constructing your own instances:
    return result.blogs;
  },

  async getLatestBlogs(values: number) {
    const query = gql`
      query getLastBlogs {
        blogs(last: ${values}) {
          id
          excerpt
          slug
          title
          image {
            url
          }
          createdAt
          description {
            text
          }
          author {
            name
            avatar {
              url
            }
          }
            
        }
      }
    `;

    const result = await clientHygraph.request<{ blogs: IBlogs[] }>(query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query getCategories {
        categories {
          label
          slug
          id
        }
      }
    `;

    const result = await clientHygraph.request<{ categories: ICategory[] }>(
      query
    );

    return result.categories;
  },

  async getDetailedBlog(slug: string) {
    const query = gql`
      query getDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          id
          excerpt
          slug
          title
          image {
            url
          }
          createdAt
          description {
            text
            html
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const result = await clientHygraph.request<{ blog: IBlogs }>(query, {
      slug,
    });
    return result.blog;
  },

  async getCategoryBlogs(slug: string) {
    const query = gql`
      query getCategoryBlogs($slug: String!) {
        blogs(where: { category: { slug_contains: $slug } }) {
          id
          excerpt
          slug
          title
          image {
            url
          }
          createdAt
          description {
            text
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const result = await clientHygraph.request<{ blogs: IBlogs[] }>(query, {
      slug,
    });
    return result.blogs;
  },
};
