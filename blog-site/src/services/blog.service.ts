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
          excerpt
          slug
          title
          image {
            url
          }
          createdAt
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
};
