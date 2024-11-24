import { Avatar, Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { format } from "date-fns";
import { IHeroProps } from "./hero.props";
import { IBlogs } from "@/src/interfaces/blogs.interface";
import calcReadingTime from "@/src/lib/calcReadingTime";
const Hero = ({ blogs }: IHeroProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        position: "relative",
      }}
    >
      <Carousel responsive={responsive} infinite={true}>
        {blogs.map((item: IBlogs) => (
          <Box key={item.id}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={item.image.url}
                alt={item.title}
                fill
                style={{ objectFit: "contain" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(0,0,0,.1)",
                }}
              >
                <Box
                  width={{ xs: "70%" }}
                  position={"relative"}
                  color={"white"}
                  sx={{
                    top: "20%",
                    left: "10%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "24px",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "30px",
                      },
                    }}
                  >
                    {item.excerpt}
                  </Typography>
                  <Box sx={{ display: "flex", gap: "10px", pt: "10px" }}>
                    <Avatar
                      alt={item.author.name}
                      src={item.author.avatar.url}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box>
                      <Typography>{item.author.name}</Typography>
                      <Box>
                        {format(new Date(), "dd MMM yyyy")} &#x2022; &nbsp;{" "}
                        {calcReadingTime(item.description.text)}min read
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
