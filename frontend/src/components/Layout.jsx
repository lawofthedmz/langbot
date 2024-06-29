import React from 'react'
import styled from 'styled-components'
import Header from '../Header'

const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<Content>{children}</Content>
		</Container>
	)
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: 'Montserrat', sans-serif;
`

export default Layout
