import { Avatar, Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { format } from "date-fns";
const Hero = () => {
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
        mt: "8vh",
        height: "70vh",
        backgroundColor: "red",
        position: "relative",
      }}
    >
      <Carousel responsive={responsive} infinite={true}>
        {carouselData.map((item) => (
          <Box key={item.image}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image src={item.image} alt={item.title} fill />
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
                  <Typography>{item.title}</Typography>
                  <Typography variant="h5">{item.expert}</Typography>
                  <Box sx={{ display: "flex", gap: "10px", pt: "10px" }}>
                    <Avatar alt={item.author.image} src={item.author.image} />
                    <Box>
                      <Typography>{item.author.name}</Typography>
                      <Box>
                        {format(new Date(), "dd MMM yyyy")} &#x2022; 10min read
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

const carouselData = [
  {
    image: "https://free-images.com/lg/c1df/lilac_blossom_bloom_spring.jpg",
    title: "Technical SEO with Hygraph",
    expert:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Izhorbek Tursunov",
      image: "https://free-images.com/lg/aa2a/oregon_beach_sand_rocks.jpg",
    },
  },
  {
    image: "https://free-images.com/lg/8aea/oregon_coast_beach.jpg",
    title: "Union Types and Sortable Relations with Hygraph",
    expert: "Learn more about Polymorphic and Sortable Relations with Hygraph",
    author: {
      name: "Izhorbek Tursunov",
      image: "https://free-images.com/lg/e8da/oregon_coast_usa_shoreline.jpg",
    },
  },
];
