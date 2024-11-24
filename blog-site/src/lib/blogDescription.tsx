import React from "react";
// import DOMPurify from "dompurify";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
interface BlogDescriptionProps {
  htmlContent: string;
}

const BlogDescription: React.FC<BlogDescriptionProps> = ({ htmlContent }) => {
  // Sanitize the HTML content
  //   const sanitizedContent = DOMPurify.sanitize(htmlContent);

  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "50px",
        opacity: ".8",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Blog Description
      </Typography>
      {/* Render sanitized HTML */}
      <Box
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        sx={{
          "& ul": {
            pl: "50px",
          },
          "& p": {
            margin: "10px 0", // Style paragraphs
          },
          "& strong": {
            fontWeight: "bold", // Style bold text
          },
          "& u": {
            textDecoration: "underline", // Style underlined text
          },
          "& em": {
            fontStyle: "italic", // Style italicized text
          },
          "& code": {
            padding: "2px 4px",
            borderRadius: "4px",
            fontFamily: "monospace",
            backgroundColor: blue[400],
            width: "100%",
          },
        }}
      />
    </Box>
  );
};

export default BlogDescription;
