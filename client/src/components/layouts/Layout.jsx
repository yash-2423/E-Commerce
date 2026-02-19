import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Layout = ({ title, description, keywords, author }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />

      <main style={{ flex: 1 }}>
        <Toaster />
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "yash",
};

export default Layout;
