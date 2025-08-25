import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretender_16}
  margin-bottom: 0.8rem;

  align-items: center;

  span {
    ${({ theme }) => theme.fonts.neo_dunggeunmo_14}
    color : ${({ theme }) => theme.colors.blue.blue40};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  gap: 0.6rem;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 6rem;
    box-sizing: border-box;
  }
`;

export const InputOuter = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  height: fit-content;

  border-top: 2px solid ${(props) => props.theme.colors.basic.mid_dark_gray};
  border-left: 2px solid ${(props) => props.theme.colors.basic.mid_dark_gray};
  border-bottom: 2px solid ${(props) => props.theme.colors.basic.light_gray};
`;

export const Input = styled.input`
  width: 100%;
  height: 6rem;
  box-sizing: border-box;

  ${({ theme }) => theme.fonts.neo_dunggeunmo_14}

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
