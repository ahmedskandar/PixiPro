import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
