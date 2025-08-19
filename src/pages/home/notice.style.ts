import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 36px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const NoticeHeader = styled.div`
  ${({ theme }) => theme.fonts.pretender_20};
  font-weight: 600;
`;

export const NoticeContainer = styled.div`
  padding: 20px;
`;
