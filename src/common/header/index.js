// @ts-nocheck
import React from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Addition,
  NavSearch,
  Button
} from "./style.js";

function Header() {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载app</NavItem>
        <NavSearch></NavSearch>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">Aa</NavItem>
      </Nav>
      <Addition>
        <Button className="reg">注册</Button>
        <Button className="wirtring">写文章</Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return;
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
