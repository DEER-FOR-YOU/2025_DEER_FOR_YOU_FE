import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16}
  margin-bottom: 0.8rem;
`;

export const InputOuter = styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.basic.mid_dark_gray};
  border-left: 2px solid ${(props) => props.theme.colors.basic.mid_dark_gray};
  border-bottom: 2px solid ${(props) => props.theme.colors.basic.light_gray};
`;

export const Input = styled.input`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_14}
  width: 100%;
  height: 6rem;

  aspect-ratio: 34 / 6;
  box-sizing: border-box;

  border-right: 2px solid ${(props) => props.theme.colors.basic.light_gray};
  border-bottom: 2px solid ${(props) => props.theme.colors.basic.mid_gray};
  background: ${(props) => props.theme.colors.basic.white};

  padding: 1.9rem 1.6rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.fonts.neo_dunggeunmo_16}
    color: ${(props) => props.theme.colors.basic.gray};
  }
`;
