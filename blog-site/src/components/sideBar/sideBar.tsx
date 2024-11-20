import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "next/image";
import { blue } from "@mui/material/colors";
import { format } from "date-fns";
import { ISideBarProps } from "./sideBar.props";
import { IBlogs } from "@/src/interfaces/blogs.interface";
import { ICategory } from "@/src/interfaces/category.interface";
const SideBar = ({ latestBlogs, categories }: ISideBarProps) => {
  return (
    <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
      <Box position={"sticky"} top={"10vh"} sx={{ transition: "all .3s ease" }}>
        <Box
          sx={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <Typography variant="h5">Latest Blogs</Typography>
          <Box mt={"10px"}>
            {latestBlogs.map((item: IBlogs) => (
              <Fragment key={item.image.url}>
                <Box
                  sx={{
                    display: "flex",
                    mt: "20px",

                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Image
                    src={item.image.url}
                    alt={item.excerpt}
                    width={80}
                    height={80}
                  />
                  <Box color={"white"}>
                    <Button
                      sx={{
                        textAlign: "left",
                        color: "whitesmoke",
                      }}
                    >
                      <Typography fontSize={{ xs: "14px", md: "18px" }}>
                        {item.title}
                      </Typography>
                    </Button>
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        gap: "10px",
                        pt: "10px",
                      }}
                    >
                      <Avatar
                        alt={item.author.name}
                        src={item.author.avatar.url}
                      />
                      <Box>
                        <Typography>{item.author.name}</Typography>
                        <Box>
                          {format(new Date(item.createdAt), "dd MMM yyyy")}{" "}
                          &#x2022; 10min read
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "20px",
            marginTop: "20px",
            minHeight: "200px",
          }}
        >
          <Typography variant="h5">Category</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {categories.map((item: ICategory) => (
              <Fragment key={item.slug}>
                <Box sx={{ width: "100%" }}>
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      color: blue[300],
                    }}
                  >
                    {item.label}
                  </Button>
                  <Divider />
                </Box>
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
