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
  position: relative;
`;

export const NoticeList = styled.div<{ src: string; thumb: string }>`
  /* display: flex; */
  /* flex-direction: column; */
  height: 250px;
  overflow-y: scroll;
  scrollbar-gutter: stable;

  /* 스크롤바 항상 표시 */
  &::-webkit-scrollbar {
    width: 28px;
  }

  &::-webkit-scrollbar-track {
    background: url(${({ src }) => src}) no-repeat center;
    background-size: 28px 250px;
    width: 28px;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: url(${({ thumb }) => thumb}) no-repeat center;
    background-size: 28px auto;
    width: 28px;
    height: auto;

    background-size: cover;
    /* background-size: contain; */
    background-repeat: no-repeat;
    background-position: center;
  }

  &::-webkit-scrollbar-button {
    background-color: transparent;
  }

  /* 위쪽 버튼 */
  /* &::-webkit-scrollbar-button:start {
    background: linear-gradient(to bottom, #4a90e2, #357abd);
  }

  /* 아래쪽 버튼 */
  /* &::-webkit-scrollbar-button:end {
    background: linear-gradient(to bottom, #e74c3c, #c0392b);
  } */
`;

export const NoticeItem = styled.div`
  padding: 16px 14px 16px 12px;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.35px;

  white-space: nowrap; /* 줄바꿈 하지 않음 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  text-overflow: ellipsis; /* ... 으로 표시 */
`;

export const ScrollUpButtonWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 22px;
`;

export const ScrollDownButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 22px;
`;

export const ScrollButtonImg = styled.img`
  padding: 6px 4px;
`;
