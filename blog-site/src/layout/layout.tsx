import { Box } from "@mui/material";
import { Footer, Navbar } from "../components";
import { ILayoutProps } from "./layout.props";

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </>
  );
};
export default Layout;
