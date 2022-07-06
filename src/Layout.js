import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Main>
      <Title>내 일주일은 어땠을까 :-)</Title>
      <Box>
        <Outlet />
      </Box>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #eee;
  color: #334E57;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 1em;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  min-height: 320px;
  padding: 20px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 12px rgba(221, 221, 221, 0.8); 
`;
