import React from "react";
import { Link } from "react-router-dom";
import {
  StyledLink,
  StyledNavBar,
  StyledNavBrand,
  StyledNavItems,
} from "../styled/Navbar";
import { Accent } from "../styled/Random";

export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledNavBrand>
        <Link to="/">
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">HighScores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavBar>
  );
}
