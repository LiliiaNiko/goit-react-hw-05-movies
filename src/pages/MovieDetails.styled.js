import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InfoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #ececec;
`;

export const MovieInfoWrap = styled.div`
  display: flex;
  border-bottom: 3px solid #ececec;
`;

export const MovieInfo = styled.div`
  margin-right: 24px;
`;
