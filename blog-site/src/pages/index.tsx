import Layout from "../layout/layout";
import { Content, Hero, SideBar } from "../components";
import { Box } from "@mui/material";
import { BlogsService } from "../services/blog.service";
import { GetServerSideProps } from "next";
import { IBlogs } from "../interfaces/blogs.interface";
import { ICategory } from "../interfaces/category.interface";
import SEOConfig from "../layout/seo/seo";

const Page = ({ blogs, lastestBlogs, categories }: HomePageProps) => {
  return (
    <SEOConfig>
      <Layout>
        <Hero blogs={blogs.slice(0, 3)} />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <SideBar latestBlogs={lastestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEOConfig>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  const lastestBlogs = await BlogsService.getLatestBlogs(2);
  const categories = await BlogsService.getCategories();
  return {
    props: {
      blogs,
      lastestBlogs,
      categories,
    },
  };
};

interface HomePageProps {
  blogs: IBlogs[];
  lastestBlogs: IBlogs[];
  categories: ICategory[];
}
