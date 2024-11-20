import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import { format } from "date-fns";
import { IContentProps } from "./content.props";
import { IBlogs } from "@/src/interfaces/blogs.interface";
const Content = ({ blogs }: IContentProps) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "70%" },
      }}
    >
      {blogs.map((item: IBlogs) => (
        <Box
          key={item.title}
          width={"100%"}
          sx={{
            marginBottom: "20px",
            backgroundColor: grey[800],
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 10px 10px -4px rgb(255,255,255, .7)",
          }}
        >
          <Box position={"relative"} sx={{ width: "100%", height: "40vh" }}>
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
            <Avatar alt={item.author.name} src={item.author.avatar.url} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box>
                {format(new Date(item.createdAt), "dd MMM yyyy")} &#x2022; 10min
                read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
