import React from 'react';
import * as S from './EventModal.style';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ isOpen, onClose }: EventModalProps) {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>

        <S.Header>
          <S.Year>2025</S.Year>
          <S.Title>DEER FOR U : GIFT</S.Title>
        </S.Header>

        <S.Description>
          <S.DescriptionText>
            이번 상명대학교 2025 대동제 컨셉은 &apos;Gift&apos;로 레트로라는
            시간여행 테마 아래, 과거의 감성과 추억을 상기시켜 특별한 경험을
            선물하고자 합니다.
          </S.DescriptionText>
          <S.DescriptionText>
            80~90년대의 음악, 패션, 게임, 거리문화 등을 현대적으로 재해석해,
            세대를 아우르는 특별한 축제의 장을 펼치고자 합니다. 우리 모두가 지난
            시간에서부터 받은 &apos;선물&apos;을 서로 나누며 내일의 영감으로
            발전시킬 수 있는 장이 될 것입니다.
          </S.DescriptionText>
        </S.Description>

        <S.Divider />

        <S.EventImage src="/api/placeholder/400/400" alt="대동제 포스터" />

        <S.Divider />

        <S.EventDetails>
          <S.DetailRow>
            <S.DetailLabel>일시</S.DetailLabel>
            <S.DetailValue>2025년 9월 9일(화)~10일(수)</S.DetailValue>
          </S.DetailRow>

          <S.DetailRow>
            <S.DetailLabel>장소</S.DetailLabel>
            <S.DetailValue>상명대학교 노천극장 및 교내 전체</S.DetailValue>
          </S.DetailRow>

          <S.DetailRow>
            <S.DetailLabel>참여인원</S.DetailLabel>
            <S.DetailValue>상명대학교 재학생 전체 참여가능</S.DetailValue>
          </S.DetailRow>

          <S.DetailRow>
            <S.DetailLabel>주최 / 주관</S.DetailLabel>
            <S.DetailValue>
              상명대학교 제 40대 별하 총학생회/
              <br />
              학생처 학생복지팀
            </S.DetailValue>
          </S.DetailRow>

          <S.DetailRow>
            <S.DetailLabel>내용</S.DetailLabel>
            <S.DetailValue>
              본무대, 부스운영, 동아리 공연, 프로그램,
              <br />
              이벤트 등
            </S.DetailValue>
          </S.DetailRow>
        </S.EventDetails>

        <S.ConfirmButton onClick={onClose}>내용을 확인했어요</S.ConfirmButton>
      </S.ModalContent>
    </S.Overlay>
  );
}
