import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  position: relative;

  display: flex;
  width: 100%;

  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.basic.mid_gray};
`;

export const ActionButtons = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: stretch;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 3;
`;

export const EditButton = styled.div`
  width: 13.3rem;
  height: 100%;
  flex-shrink: 0;
  background-color: #0ea5e6;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const EditIcon = styled.img``;

export const DeleteButton = styled.div`
  width: 13.3rem;
  height: 100%;
  background-color: #f00;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const DeleteIcon = styled.img``;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 13.7rem;
  padding: 2rem;
`;

export const ItemImage = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  aspect-ratio: 1/1;
  object-fit: fill;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin-left: 1.2rem;
`;

export const ItemTitleSection = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ItemTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_18};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.basic.mid_black};
`;

export const ItemCreatedAt = styled.div`
  ${({ theme }) => theme.fonts.pretender_12};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic.light_black};
`;

export const ItemDescription = styled.div`
  ${({ theme }) => theme.fonts.pretender_14};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.basic.mid_dark_gray};
  margin-bottom: auto;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const ItemPlace = styled.div`
  ${({ theme }) => theme.fonts.pretender_12};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue.blue10};
`;
