import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;

  padding: 3.6rem 0 8rem 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;

  width: calc(100% - 4rem);
  align-items: center;
  justify-content: space-between;
`;

export const BasicRowBlackText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16}
  font-weight: 600;
`;

export const BasicRowGrayText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16}
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-weight: 600;
`;

export const BasicRowSubText = styled.div`
  ${({ theme }) => theme.fonts.pretender_14}
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-size: 1.3rem;
  font-weight: 600;
`;

export const BasicRowSmallText = styled.div`
  width: calc(100% - 4rem);
  ${({ theme }) => theme.fonts.pretender_12}
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-weight: 500;
  word-break: keep-all;
  margin: 1px 0;
`;

export const BasicHorizonLine = styled.div`
  width: calc(100% - 4rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.basic.mid_gray};
  margin: 1rem 0;
`;

export const CustomMargin = styled.div<{
  topSize?: number;
  bottomSize?: number;
}>`
  margin: ${({ topSize, bottomSize }) =>
    `${topSize ?? 0}rem 0 ${bottomSize ?? 0}rem 0`};
`;

export const Title = styled.div`
  width: calc(100% - 4rem);
  ${({ theme }) => theme.fonts.pretender_22}
  font-weight: 600;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  object-fit: fill;
  background: linear-gradient(180deg, #010089 0%, rgba(1, 0, 137, 0) 100%);
`;

export const SmallTitle = styled.div`
  width: calc(100% - 4rem);
  ${({ theme }) => theme.fonts.pretender_14}
  color: ${({ theme }) => theme.colors.basic.light_black};
  font-size: 13px;
  font-weight: 600;
`;

export const EventSubText = styled.div`
  ${({ theme }) => theme.fonts.pretender_18}
  font-weight: 600;
`;

export const EventText = styled.div`
  ${({ theme }) => theme.fonts.pretender_24}
  font-weight: 600;
`;

export const EventItemSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 33.3%;
  height: 21vh;

  gap: 0.3rem;
`;

export const EventItemImage = styled.img`
  width: 100%;
  height: auto;

  object-fit: fill;
  aspect-ratio: 1 / 1;
`;

export const EventItemName = styled.div`
  max-width: 11.2rem;
  ${({ theme }) => theme.fonts.pretender_14}
  font-weight: 600;
  margin-top: 0.8rem;
  text-align: center;
`;
