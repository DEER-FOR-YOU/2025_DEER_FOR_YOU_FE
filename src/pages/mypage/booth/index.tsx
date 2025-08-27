import React, { useEffect } from 'react';
import * as S from './index.style';
import { useNavigate } from 'react-router-dom';
import { useApiQuery } from '../../../apis/config/builder/ApiBuilder';
import { getMember } from '../../../apis/notice';
import { useToastContext } from '../../../components/toast/Toast';
import Header from '../../../components/header';
import { getBookmarkBooth } from '../../../apis/booth';
import BoothCard from '../components/boothItem/BoothCard';
import Heart from '../assets/grayHeart.svg';

const MyBooth = () => {
  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });
  const { data: boothData } = useApiQuery(getBookmarkBooth(), [
    'bookMarkBooth',
  ]);
  const { show } = useToastContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!memberData) {
      show('로그인 후 이용해주세요.', 'error', true);
      navigate('/my-page');
    }
  }, [memberData]);

  return (
    <>
      <Header title="좋아요" />
      <S.Container>
        {boothData?.length === 0 ? (
          <S.NoItemSection>
            <S.NoItemIcon src={Heart} alt="No Item" />
            <S.NoItemTitle>좋아요 없음</S.NoItemTitle>
            <S.NoItemSubTitle>
              아직 좋아요를 누른 콘텐츠가 없습니다.
            </S.NoItemSubTitle>
          </S.NoItemSection>
        ) : (
          <S.BoothsListContainer>
            {boothData?.map((item) => (
              <BoothCard key={item.id} booth={item} />
            ))}
          </S.BoothsListContainer>
        )}
      </S.Container>
    </>
  );
};

export default MyBooth;
