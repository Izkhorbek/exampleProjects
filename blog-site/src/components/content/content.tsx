import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import { format } from "date-fns";
import { IContentProps } from "./content.props";
import { IBlogs } from "@/src/interfaces/blogs.interface";
import calcReadingTime from "@/src/lib/calcReadingTime";
import { useRouter } from "next/router";
const Content = ({ blogs }: IContentProps) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "70%" },
      }}
    >
      {blogs.map((item: IBlogs) => (
        <Box
          key={item.id}
          onClick={() => router.push(`/blog/${item.slug}`)}
          width={"100%"}
          sx={{
            marginBottom: "20px",
            backgroundColor: grey[800],
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 10px 10px -4px rgb(255,255,255, .5)",
            cursor: "pointer",
          }}
        >
          <Box position={"relative"} sx={{ width: "100%", minHeight: "40vh" }}>
            <Image
              src={item.image.url}
              alt={item.title}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Typography variant="h4" sx={{ mt: "20px" }}>
            {item.title}
          </Typography>
          <Typography variant="h5" color="grey" mb={"10px"}>
            {item.excerpt}
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", gap: "10px", pt: "10px" }}>
            <Avatar
              alt={item.author.name}
              src={item.author.avatar.url}
              sx={{ width: 40, height: 40 }}
              imgProps={{
                style: { width: "40px", height: "40px", objectFit: "cover" },
              }}
            />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box>
                {format(new Date(item.createdAt), "dd MMM yyyy")} &#x2022;&nbsp;
                {calcReadingTime(item.description.text)}min read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
