import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
  margin-top: 40px;
`;

export const CreatorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CreatorTitle = styled.div`
  font-family: 'Pretendard';
  color: #000;
  font-size: 2rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const CreatorMore = styled.div`
  font-family: 'Pretendard';
  color: #bec6cd;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.3px;
  text-decoration: underline;

  cursor: pointer;
  align-self: flex-end;
`;

export const CreatorList = styled.div`
  display: flex;
  gap: 12px;
`;

export const CreatorItem = styled.div`
  flex: 1;
  border: 1px solid #bec6cd;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  aspect-ratio: 108/132;
`;

export const CreatorItemTextDesign = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;
`;

export const CreatorItemTextSoftware = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.4px;
`;

export const CreatorItemImage = styled.img``;

export const CreatorItemOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

export const CreatorDetailText = styled.div`
  color: #fff;

  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;

  position: absolute;
  bottom: 10px;
  left: 6px;
`;
