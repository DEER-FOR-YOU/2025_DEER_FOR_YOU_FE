import styled from '@emotion/styled';

export const ItemListContainer = styled.div`
  width: 100%;
  padding: 0 22px;
`;

export const MainItemSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  gap: 42px;
`;

export const MainItemContainer = styled.div`
  padding: 14px 14px 20px 14px;
  flex-grow: 1;

  border: 1px solid #d2d9df;
  background: #fff;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.08);
`;

export const MainItemImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
`;

export const MainItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainItemImage2 = styled.img``;

export const MainTextContainer = styled.div`
  margin-bottom: 12px;
`;

export const GoodsName = styled.p`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_18}
`;

export const GoodsPrice = styled.p`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_16}
  color:#464B50
`;

export const ThumbnailSection = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const ThumbnailItem = styled.div<{ src: string }>`
  width: 28%;
  margin-right: -20px;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #d2d9df;
  position: relative;
  z-index: 0; /* 부모를 위로 */

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: cover;
    filter: blur(20px); /* 너무 크면 잘려서 보이지 않음 */
    z-index: -1; /* 부모 바로 밑 */
    opacity: 0.5;
  }

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  /* height: 100%; */
  /* object-fit: cover; */
  aspect-ratio: 1/1;
`;

export const ButtonImg = styled.img`
  padding: 5px 9px;
  cursor: pointer;
`;
