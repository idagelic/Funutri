import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        home
      </a>

      <a className="menu-item" href="/about-us">
      about us
      </a>

      <a className="menu-item" href="/faq">
      faq
      </a>

      <a className="menu-item" href="/blog">
      blog
      </a>
    </Menu>
  );
};
