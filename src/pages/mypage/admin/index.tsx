import React, { useEffect, useRef, useState } from 'react';
import * as S from './index.style';
import { useNavigate } from 'react-router-dom';
import {
  useApiMutation,
  useApiQuery,
} from '../../../apis/config/builder/ApiBuilder';
import { getMember } from '../../../apis/notice';
import { useToastContext } from '../../../components/toast/Toast';
import Header from '../../../components/header';
import { getCount, updateGoodsCount } from '../../../apis/goods';
import { queryClient } from '../../../QueryClient';

const itemList = [
  {
    id: 1,
    name: '축제 유니폼',
  },
  {
    id: 2,
    name: '축구 유니폼',
  },
  {
    id: 3,
    name: '수뭉이 키링',
  },
  {
    id: 4,
    name: '상명대 슬로건',
  },
  {
    id: 5,
    name: '타투스티커',
  },
];

const MyAdmin = () => {
  const shownRef = useRef(false);
  const [count, setCount] = useState<number>(1);
  const [itemIndex, setItemIndex] = useState<number>(1);

  const { data: memberData, isLoading } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });

  const { data: goodsData } = useApiQuery(getCount(itemIndex), [
    'goods',
    itemIndex,
  ]);

  const putTimeLinesMutation = useApiMutation(
    updateGoodsCount(itemIndex, count),
    {
      onSuccess: () => {
        show('굿즈 수량 변경에 성공했습니다.', 'info', true);
        queryClient.invalidateQueries();
      },
      onError: () => {
        show('굿즈 수량 변경에 실패했습니다.', 'error', true);
      },
    },
  );

  const { show } = useToastContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (goodsData) {
      setCount(goodsData);
    }
  }, [goodsData]);

  useEffect(() => {
    const hasToken = !!sessionStorage.getItem('accessToken');
    if (shownRef.current) return;

    if (!hasToken) {
      show('로그인 후 이용해주세요.', 'error', true);
      shownRef.current = true;
      navigate('/my-page');
    }

    if (memberData?.role !== 'ROLE_ADMIN') {
      show('관리자만 접근할 수 있습니다.', 'error', true);
      shownRef.current = true;
      navigate('/my-page');
    }
  }, [memberData, isLoading, navigate, show]);

  const handleSave = () => {
    putTimeLinesMutation.mutate({ goodId: itemIndex, count });
  };

  return (
    <>
      <Header title="관리자 페이지" />
      <S.Container>
        <S.Card>
          <S.Row>
            <label>항목</label>
            <select
              value={itemIndex}
              onChange={(e) => setItemIndex(Number(e.target.value))}
            >
              {itemList.map((it) => (
                <option key={it.id} value={it.id}>
                  {it.name}
                </option>
              ))}
            </select>
          </S.Row>

          <S.Row>
            <label>수량</label>
            <S.Counter>
              <S.NumberInput
                type="number"
                min={0}
                value={count ?? 0}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const v = Number(e.target.value);
                  setCount(Number.isNaN(v) ? 0 : Math.max(0, Math.floor(v)));
                }}
              />
            </S.Counter>
          </S.Row>

          <S.Actions>
            <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
          </S.Actions>
        </S.Card>
      </S.Container>
    </>
  );
};

export default MyAdmin;
