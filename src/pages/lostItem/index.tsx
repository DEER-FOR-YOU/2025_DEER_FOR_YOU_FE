import React, { useEffect, useState } from 'react';
import * as S from './index.style';
import Header from '../../components/header';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getLostItem, getLostItems } from '../../apis/lostItem';
import { getMember } from '../../apis/notice';
import Search from './components/search/Search';
import ButtonList from './components/buttonList/ButtonList';
import CreateIcon from './assets/createIcon.svg';
import NoItem from './assets/noItem.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import Item from './components/item/Item';
import PageBar from './components/pageBar/PageBar';
import Modal from './components/modal/Modal';

const LostItemPage = () => {
  const [page, setPage] = useState(1);
  const [inputKeyword, setInputKeyword] = useState<string | undefined>(
    undefined,
  );
  const [keyword, setKeyword] = useState<string | undefined>(undefined);
  const [itemType, setItemType] = useState<string | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const { data: lostItemsData } = useApiQuery(
    getLostItems({ page, keyword, itemType }),
    ['lostItems', page, keyword, itemType],
  );
  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });
  const { data: lostItemDetail } = useApiQuery(
    getLostItem(selectedItem),
    ['lostItemDetail', selectedItem],
    {
      queryKey: ['lostItemDetail', selectedItem],
      enabled: !!selectedItem,
    },
  );

  const navigate = useNavigate();
  const search = useLocation().search;
  const number = new URLSearchParams(search).get('number');

  useEffect(() => {
    if (number) {
      setSelectedItem(Number(number));
      setIsSelected(true);
    }
  }, [number]);

  const handleSearch = (e?: React.KeyboardEvent<HTMLInputElement> | string) => {
    if (typeof e === 'string') {
      setKeyword(e);
      setPage(1);
      return;
    }

    if (e && 'key' in e && e.key === 'Enter') {
      const value = (e.target as HTMLInputElement).value;
      setKeyword(value);
      setPage(1);
    }
  };

  const handleFilter = (type: string | null) => {
    setItemType(type);
    setPage(1);
  };

  const openModal = (lostItemId: number) => {
    setSelectedItem(lostItemId);
    setIsSelected(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsSelected(false);
  };

  return (
    <>
      {isSelected && (
        <Modal onClose={closeModal} lostItemDetail={lostItemDetail} />
      )}
      <S.Container>
        <Header title="분실물" />
        <Search
          keyword={inputKeyword}
          setKeyword={setInputKeyword}
          handleSearch={handleSearch}
        />
        <S.FilterSection>
          <ButtonList selectedButton={itemType} onClick={handleFilter} />
        </S.FilterSection>
        <S.TitleSection>
          <S.Title>분실물 목록</S.Title>
          <S.SubTitle onClick={() => navigate('/map')}>
            분실물 센터 위치보기
          </S.SubTitle>
        </S.TitleSection>
        <S.HorizontalLine />
        {lostItemsData?.content.length === 0 ? (
          <S.NoItemSection>
            <S.NoItemIcon src={NoItem} alt="No Item" />
            <S.NoItemTitle>분실물 없음</S.NoItemTitle>
            <S.NoItemSubTitle>아직 신고된 분실물이 없습니다.</S.NoItemSubTitle>
          </S.NoItemSection>
        ) : null}
        <S.ItemList>
          {lostItemsData?.content.map((item) => (
            <Item
              key={item.lostItemId}
              item={item}
              isAdmin={memberData?.role === 'ROLE_ADMIN'}
              openModal={openModal}
            />
          ))}
          <S.PageBarSection>
            <PageBar
              page={page}
              totalPages={lostItemsData?.totalPages ?? 1}
              onChange={(p: number) => setPage(p)}
            />
          </S.PageBarSection>
        </S.ItemList>
        {memberData?.role === 'ROLE_ADMIN' && (
          <S.CreateIcon
            src={CreateIcon}
            alt="Create Icon"
            onClick={() => navigate('/lost-item/create')}
          />
        )}
      </S.Container>
    </>
  );
};

export default LostItemPage;
