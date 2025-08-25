import React from 'react';
import Button from '../../components/button/Button';
import * as S from './buttonList.style';

export default function ButtonList() {
  return (
    <S.ButtonListContainer>
      <Button css={S.Button}>전체</Button>
      <Button css={S.Button}>푸드트럭</Button>
      <Button css={S.Button}>동아리</Button>
      <Button css={S.Button}>디자인</Button>
      <Button css={S.Button}>예술</Button>
      <Button css={S.Button}>공과</Button>
      <Button css={S.Button}>융합기술</Button>
    </S.ButtonListContainer>
  );
}
