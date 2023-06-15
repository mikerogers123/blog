import React from "react";
import { Helmet } from "react-helmet";

export default function Head({ title }: {title:string}) {
  return (
    <>
      <Helmet
        defaultTitle="Blog | Mike Rogers"
        title={title}
        titleTemplate="%s | Mike Rogers"
      />
    </>
  );
};
