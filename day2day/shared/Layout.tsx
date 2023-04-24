import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import ChildCareIcon from "@mui/icons-material/ChildCare";

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ChildCareIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <h6>day2day</h6>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
}
