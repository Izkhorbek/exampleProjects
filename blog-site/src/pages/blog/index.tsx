import { Content } from "@/src/components";
import { IBlogs } from "@/src/interfaces/blogs.interface";
import Layout from "@/src/layout/layout";
import SEOConfig from "@/src/layout/seo/seo";
import { BlogsService } from "@/src/services/blog.service";
import { Box, Typography } from "@mui/material";
import { GetServerSideProps } from "next";

const BlogPage = ({ blogs }: BlogPageProps) => {
  return (
    <SEOConfig metaTitle="Blogs">
      <Layout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: { xs: "10px", md: "20px" },
            flexDirection: { xs: "column" },
          }}
        >
          <Box
            sx={{
              height: {
                xs: "5vh",
                md: "10vh",
                alignContent: "center",
                justifyItems: "center",
              },
            }}
          >
            <Typography
              variant="h4"
              fontFamily={"cursive"}
              fontSize={{ xs: "24px", md: "50px" }}
            >
              All Blogs
            </Typography>
          </Box>
          <Box sx={{ justifyItems: "center" }}>
            <Content blogs={blogs} />
          </Box>
        </Box>
      </Layout>
    </SEOConfig>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};

interface BlogPageProps {
  blogs: IBlogs[];
}
