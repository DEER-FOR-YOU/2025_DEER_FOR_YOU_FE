import React from 'react';
import * as S from './boothCard.style';
import heart from '../../assets/heart.svg';
import time from '../../assets/when.svg';
import place from '../../assets/where.svg';
import { getKorLocation } from '../../utils/getKorLocation';
import { getBoothTypeText } from '../../utils/getBoothTypeText';
import { useNavigate } from 'react-router-dom';
// import basic_booth from '../../assets/basic_booth.png';
import { useApiMutation } from '../../apis/config/builder/ApiBuilder';
import { putBoothItem } from '../../apis/booth';
import heart_active from '../../assets/heart_active.svg';
import { useQueryClient } from '@tanstack/react-query';
import { useToastContext } from '../../components/toast/Toast';
import { getMember } from '../../apis/notice';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';

export default function BoothCard({ booth }: { booth: any }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { show } = useToastContext();
  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });
  const putBoothItemMutation = useApiMutation(putBoothItem(booth.id), {
    onSuccess: () => {
      !booth.isBookmarked
        ? show('북마크 추가에 성공했습니다.', 'info', true)
        : show('북마크 제거에 성공했습니다.', 'info', true);
      queryClient.invalidateQueries();
    },
    onError: () => {
      memberData
        ? show('북마크 추가에 실패했습니다.', 'error', true)
        : show('로그인 후 이용해주세요', 'error', true);
    },
  });

  const handleClick = () => {
    if (booth.boothAffiliation === 'COUNCIL') {
      navigate(`/events?name=${booth.boothName}`);
    } else {
      navigate(`/booths/${booth.id}`);
    }
  };

  const handleBookmarkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation(); // 이벤트 버블링 방지
    putBoothItemMutation.mutate();
  };

  return (
    <S.BoothCardContainer onClick={handleClick}>
      <S.BoothCardImage
        src={booth.image.imageUrl}
        alt={booth.name}
        fullSize={booth.boothAffiliation === 'COUNCIL' ? true : false}
        style={{
          backgroundColor: !booth.image.imageUrl ? '#BEC6CD' : 'transparent',
        }}
      />
      <S.TextContainer>
        <S.TextFitstRow>
          <S.FirstRowLeft>
            <S.BoothName>{booth.boothName}</S.BoothName>
            <S.BoothType>
              {getBoothTypeText(booth.boothType, booth.boothAffiliation)}
            </S.BoothType>
          </S.FirstRowLeft>
          <S.HeartIcon
            src={booth.isBookmarked ? heart_active : heart}
            alt="heart"
            onClick={handleBookmarkClick}
          />
        </S.TextFitstRow>
        <S.TextSecondRow>
          <S.TimeContainer>
            <S.TimeIcon src={time} alt="time" />
            <S.TimeText>{booth.operationTime}</S.TimeText>
          </S.TimeContainer>
          <S.PlaceContainer>
            <S.PlaceIcon src={place} alt="place" />
            <S.TimeText>
              {getKorLocation(booth.boothLocation)}{' '}
              {booth.locationDetail === 'FOOD_TRUCK'
                ? ''
                : booth.locationDetail}
            </S.TimeText>
          </S.PlaceContainer>
        </S.TextSecondRow>
      </S.TextContainer>
    </S.BoothCardContainer>
  );
}
