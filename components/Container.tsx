import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import metadata from "@/data/metadata";
import Head from "next/head";
const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
  };
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <Header />
      <main className="w-full px-3 pb-20">
        <div className="max-w-screen-md mx-auto">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Container;
