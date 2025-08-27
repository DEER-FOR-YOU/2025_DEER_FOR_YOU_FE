import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 164px;
`;
export const BoothsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  margin-top: 24px;
`;

export const SearchBarContainer = styled.div`
  padding: 0 20px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  text-align: center;

  p {
    color: #7f8992;
    text-align: center;
    font-family: 'Pretendard';
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
    letter-spacing: -0.5px;

    margin-top: 22px;
  }

  span {
    color: #bec6cd;
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.4px;
  }
`;
