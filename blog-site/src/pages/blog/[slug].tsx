import SideBar from "@/src/components/sideBar/sideBar";
import { IBlogs } from "@/src/interfaces/blogs.interface";
import { ICategory } from "@/src/interfaces/category.interface";
import Layout from "@/src/layout/layout";
import SEOConfig from "@/src/layout/seo/seo";
import BlogDescription from "@/src/lib/blogDescription";
import calcReadingTime from "@/src/lib/calcReadingTime";
import { BlogsService } from "@/src/services/blog.service";
import { Avatar, Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from "next/image";
const DetailedBlogPage = ({
  blog,
  lastestBlogs,
  categories,
}: DetailedBlogPage) => {
  return (
    <SEOConfig metaTitle={blog.slug}>
      <Layout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "70%" }, padding: "10px" }}>
            <Box
              position={"relative"}
              sx={{ width: "100%", minHeight: "40vh" }}
            >
              <Image
                src={blog.image.url}
                alt={blog.title}
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
            <Box sx={{ padding: "20px" }}>
              <Typography variant="h4" sx={{ mt: "20px" }}>
                {blog.title}
              </Typography>
              <Typography variant="h5" color="grey" mb={"10px"}>
                {blog.excerpt}
              </Typography>
              <Box sx={{ display: "flex", gap: "10px", pt: "10px" }}>
                <Avatar
                  alt={blog.author.name}
                  src={blog.author.avatar.url}
                  sx={{ width: 40, height: 40 }}
                  imgProps={{
                    style: {
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    },
                  }}
                />
                <Box>
                  <Typography>{blog.author.name}</Typography>
                  <Box>
                    {format(new Date(blog.createdAt), "dd MMM yyyy")}{" "}
                    &#x2022;&nbsp;
                    {calcReadingTime(blog.description.text)}min read
                  </Box>
                </Box>
              </Box>
            </Box>
            <BlogDescription
              htmlContent={blog.description.html}
            ></BlogDescription>
          </Box>
          <SideBar latestBlogs={lastestBlogs} categories={categories} />
        </Box>
      </Layout>
    </SEOConfig>
  );
};

export default DetailedBlogPage;

export const getServerSideProps: GetServerSideProps<DetailedBlogPage> = async ({
  query,
}) => {
  const blog = await BlogsService.getDetailedBlog(query.slug as string);
  const lastestBlogs = await BlogsService.getLatestBlogs(2);
  const categories = await BlogsService.getCategories();
  return {
    props: {
      blog,
      lastestBlogs,
      categories,
    },
  };
};

interface DetailedBlogPage {
  blog: IBlogs;
  lastestBlogs: IBlogs[];
  categories: ICategory[];
}
