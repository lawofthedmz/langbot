// src/components/Header.js
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
	return (
		<HeaderContainer>
			<Logo to="/">LangBot</Logo>
			<Nav>
				<StyledLink to="/how-it-works">How it works</StyledLink>
				<StyledLink to="/languages">Languages</StyledLink>
				<StyledLink to="/courses">Courses</StyledLink>
				<StyledLink to="/more">More</StyledLink>
			</Nav>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
`

const Logo = styled(Link)`
  font-size: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`
const Nav = styled.nav`
  display: flex;
  gap: 20px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4a4a4a;
  font-weight: bold;
`
export default Header
