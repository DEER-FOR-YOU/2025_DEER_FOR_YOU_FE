import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 4rem);
  margin-top: 1.5rem;
`;

export const SearchOuter = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  height: fit-content;

  border-top: 2px solid ${(props) => props.theme.colors.basic.mid_dark_gray};
  border-left: 2px solid ${(props) => props.theme.colors.basic.mid_dark_gray};
  border-bottom: 2px solid ${(props) => props.theme.colors.basic.light_gray};
`;

export const Search = styled.input`
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

export const SearchIcon = styled.img`
  position: absolute;
  right: 3rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
