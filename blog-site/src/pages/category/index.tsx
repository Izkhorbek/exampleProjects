import { ICategory } from "@/src/interfaces/category.interface";
import Layout from "@/src/layout/layout";
import { BlogsService } from "@/src/services/blog.service";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const CategoryPage = ({ categories }: CategoryPageProps) => {
  const router = useRouter();
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", md: "70%" },
          justifyContent: "center",
          marginX: "auto",
          mt: "10vh",
          minHeight: { xs: "30vh", md: "50vh" },
          gap: "30px",
        }}
      >
        <Typography variant="h3" fontFamily={"cursive"}>
          All Categories
        </Typography>
        <ButtonGroup
          orientation={"vertical"}
          aria-label="Vertical button group"
          variant="contained"
          sx={{ width: "40%" }}
        >
          {categories.map((item: ICategory) => (
            <Button
              key={item.id}
              sx={{ justifyContent: "left" }}
              onClick={() => router.push(`/category/${item.slug}`)}
            >
              #{item.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Layout>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async () => {
  const categories = await BlogsService.getCategories();
  return {
    props: { categories },
  };
};

interface CategoryPageProps {
  categories: ICategory[];
}