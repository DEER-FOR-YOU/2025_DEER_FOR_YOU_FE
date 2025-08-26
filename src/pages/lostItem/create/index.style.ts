import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  width: calc(100% - 4rem);

  margin: 3.9rem 0;
  ${({ theme }) => theme.fonts.pretender_20};
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 4rem);
  gap: 2.8rem;
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  margin-top: 4.8rem;
  margin-bottom: 2.4rem;
`;

export const ImageSectionTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.dark_gray};
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 1.6rem;
  padding-top: 1.2rem;

  overflow-x: auto;
  overflow-y: visible;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageSlot = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 10rem;
  height: 10rem;
  border: 1px solid #e6e6e6;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  background: #fff;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  aspect-ratio: 1/1;
`;

export const AddSlot = styled.button`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
  background: transparent;

  border: none;
  cursor: pointer;

  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const RemoveButton = styled.img`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: -6px;
  right: -6px;
  cursor: pointer;
  z-index: 40;
`;

export const SubmitButton = styled.button`
  width: calc(100% - 4rem);
  padding: 1.8rem 0;
  margin-top: 2.4rem;
  margin-bottom: 8rem;
  ${({ theme }) => theme.fonts.pretender_16};
  background: ${({ theme }) => theme.colors.blue.blue40};
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.colors.basic.gray};
    cursor: not-allowed;
  }
`;
