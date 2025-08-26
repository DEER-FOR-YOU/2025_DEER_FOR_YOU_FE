import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: calc(100vh - 8rem);
  align-items: center;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;

  width: calc(100% - 4rem);

  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.pretender_20};
  font-weight: 600;
  letter-spacing: -0.03rem;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_12};
  color: ${({ theme }) => theme.colors.basic.mid_dark_gray};
  font-weight: 500;
  letter-spacing: -0.03rem;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  margin-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.basic.mid_dark_gray};
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PageBarSection = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin-top: 2.4rem;
  margin-bottom: 8.8rem;
`;

export const CreateIcon = styled.img`
  position: absolute;
  z-index: 1000;

  right: 2rem;
  bottom: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  cursor: pointer;
`;

export const NoItemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto 0;
  width: 100%;
`;

export const NoItemIcon = styled.img`
  width: 2.9rem;
  height: 3.2rem;
  flex-shrink: 0;
  aspect-ratio: 29/32;
`;

export const NoItemTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_20};
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-weight: 600;
  letter-spacing: -0.03rem;
  margin-top: 2rem;
`;

export const NoItemSubTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.gray};
  font-weight: 400;
  letter-spacing: -0.03rem;
`;
