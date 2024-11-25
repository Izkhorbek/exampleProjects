import { Content, SideBar } from "@/src/components";
import { IBlogs } from "@/src/interfaces/blogs.interface";
import { ICategory } from "@/src/interfaces/category.interface";
import Layout from "@/src/layout/layout";
import SEOConfig from "@/src/layout/seo/seo";
import { BlogsService } from "@/src/services/blog.service";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const CategoryPage = ({
  blogs,
  lastestBlogs,
  categories,
}: CategoryPageProps) => {
  const router = useRouter();
  return (
    <SEOConfig metaTitle={`${router.query.slug}-category`}>
      <Layout>
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

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async ({ query }) => {
  const blogs = await BlogsService.getCategoryBlogs(query.slug as string);
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

interface CategoryPageProps {
  blogs: IBlogs[];
  lastestBlogs: IBlogs[];
  categories: ICategory[];
}
