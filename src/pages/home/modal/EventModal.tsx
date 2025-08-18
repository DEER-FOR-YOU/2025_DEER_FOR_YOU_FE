import React from 'react';
import * as S from './EventModal.style';
import Button from '../../../components/button';
import closeIcon from '../../../assets/close.svg';
import poster from '../../../assets/poster.svg';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ isOpen, onClose }: EventModalProps) {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <S.HeaderContainer>
          <S.HeaderTitle>2025</S.HeaderTitle>
          <Button>
            <S.CloseIcon src={closeIcon} onClick={onClose} />
          </Button>
        </S.HeaderContainer>
        <S.HeaderTitle>
          DEER FOR U : <S.Span>GIFT</S.Span>
        </S.HeaderTitle>
        <S.ContentWrapper>
          <S.FirstContent>
            이번 상명대학교 2025 대동제 컨셉은 <S.SpanBlue>‘Gift’</S.SpanBlue>로
            <S.SpanBlue> 레트로</S.SpanBlue>라는 시간여행 테마 아래, 과거의
            감성과 추억을 상기시켜 특별한 경험을 선물하고자 합니다.
          </S.FirstContent>
          <S.FirstContent>
            80~90년대의 음악, 패션, 게임, 거리문화 등을 현대적으로 재해석해,
            세대를 아우르는 특별한 축제의 장을 펼치고자 합니다. 우리 모두가 지난
            시간에서부터 받은 ‘선물’을 서로 나누며 내일의 영감으로 발전시킬 수
            있는 장이 될 것입니다.
          </S.FirstContent>
        </S.ContentWrapper>
        <S.Border />
        <S.Poster src={poster} />
        <S.Border />
        <S.DetailContainer>
          <S.DetailWrapper>
            <S.DetailTitle>일시</S.DetailTitle>
            <S.DetailContent>2025년 9월 9일(화)~10일(수)</S.DetailContent>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.DetailTitle>장소</S.DetailTitle>
            <S.DetailContent>상명대학교 노천극장 및 교내 전체</S.DetailContent>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.DetailTitle>참여인원</S.DetailTitle>
            <S.DetailContent>상명대학교 재학생 전체 참여가능</S.DetailContent>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.DetailTitle>주최/주관</S.DetailTitle>
            <S.DetailContent>
              상명대학교 제 40대 별하 총학생회/
              <br />
              학생처 학생복지팀
            </S.DetailContent>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.DetailTitle>내용</S.DetailTitle>
            <S.DetailContent>
              본무대, 부스운영, 동아리 공연, 프로그램,
              <br />
              이벤트 등
            </S.DetailContent>
          </S.DetailWrapper>
        </S.DetailContainer>
        <S.ConfirmButton onClick={onClose}>내용을 확인했어요</S.ConfirmButton>
      </S.ModalContent>
    </S.Overlay>
  );
}
