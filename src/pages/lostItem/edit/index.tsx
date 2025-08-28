import React, { useEffect, useRef, useState } from 'react';
import * as S from './index.style';
import Header from '../../../components/header';
import Input from '../components/input/Input';
import DeleteButton from '../assets/close.svg';
import AddImage from '../assets/addImage.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useToastContext } from '../../../components/toast/Toast';
import { getLostItem, updateLostItem } from '../../../apis/lostItem';
import { useApiQuery } from '../../../apis/config/builder/ApiBuilder';
import { getMember } from '../../../apis/notice';
import type { ImageResponse } from '../../../apis/lostItem/index.types';
import { queryClient } from '../../../QueryClient';

type ImageItem = { file?: File | null; url?: string; imageId?: number | null };

const CATEGORY_ENUM = [
  'WALLET',
  'DEVICE',
  'ACCESSORY',
  'BAG',
  'METAL',
  'CLOTHING',
  'ETC',
] as const;
const CATEGORY_OPTIONS = [
  '지갑',
  '전자기기',
  '액세서리',
  '가방',
  '귀금속',
  '옷',
  '기타',
] as const;

const LOCATION_ENUM = [
  'GYEDANG',
  'SONGBAEK',
  'DESIGN',
  'ART',
  'HANNURI',
  'NOCHEON',
  'STUDENT_CENTER',
  'CHEONGROK',
  'PLANT_SCIENCE',
  'MAIN',
  'LIBRARY',
  'SPORT',
  'DORMITORY',
] as const;
const LOCATION_OPTIONS = [
  '계당관 (혹은 계당관 근처)',
  '송백관 (혹은 송백관 근처)',
  '디자인대학 (혹은 디자인대학 근처)',
  '예술대학 (혹은 예술대학 근처)',
  '한누리관 (혹은 한누리관 근처)',
  '노천극장 (혹은 노천극장 근처)',
  '학생회관 (혹은 학생회관 근처)',
  '청록관 (혹은 청록관 근처)',
  '식물과학관 (혹은 식물과학관 근처)',
  '본관 (혹은 본관 근처)',
  '도서관 (혹은 도서관 근처)',
  '체육관 (혹은 체육관 근처)',
  '기숙사 (혹은 기숙사 근처)',
] as const;

const LostItemEditPage = () => {
  const { id } = useParams();
  const itemId = id ? Number(id) : null;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lostPlace, setLostPlace] = useState('');
  const [lostPlaceDetail, setLostPlaceDetail] = useState('');
  const [itemType, setItemType] = useState('');
  const [lostDate, setLostDate] = useState('');

  const [images, setImages] = useState<ImageItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [currentSlot, setCurrentSlot] = useState<number | null>(null);

  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });

  const { data: detailData } = useApiQuery(
    getLostItem(itemId),
    ['lostItem', itemId],
    {
      queryKey: ['lostItem', itemId],
      enabled: itemId !== null,
    },
  );

  const { show } = useToastContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (memberData?.role !== 'ROLE_ADMIN') {
      show('이용할 수 없는 기능입니다.', 'error', true);
      navigate('/lost-item');
    }
  }, [memberData]);

  useEffect(() => {
    if (!detailData) return;

    setTitle(detailData.title || '');
    setDescription(detailData.description || '');

    let lp = detailData.lostPlace || '';
    if (lp) {
      const idx = (LOCATION_OPTIONS as readonly string[]).indexOf(lp);
      if (idx !== -1) lp = String(LOCATION_ENUM[idx]);
    }
    setLostPlace(lp);

    setLostPlaceDetail(detailData.lostPlaceDetail || '');

    let it = detailData.itemType || '';
    if (it) {
      const idx = (CATEGORY_OPTIONS as readonly string[]).indexOf(it);
      if (idx !== -1) it = String(CATEGORY_ENUM[idx]);
    }
    setItemType(it);

    setLostDate(detailData.lostDate || '');

    const createdObjectUrls: string[] = [];
    const loadImages = async () => {
      const arr = detailData.images || [];
      const promises = arr.map(async (it: ImageResponse, idx: number) => {
        if (!it.imageUrl) {
          return {
            file: null,
            url: it.imageUrl,
            imageId: it.imageId ?? null,
          } as ImageItem;
        }
        const file = await urlToFile(it.imageUrl, `existing-${idx}`);
        if (file) {
          const objUrl = URL.createObjectURL(file);
          createdObjectUrls.push(objUrl);
          return {
            file,
            url: objUrl,
            imageId: it.imageId ?? null,
          } as ImageItem;
        }
        return {
          file: null,
          url: it.imageUrl,
          imageId: it.imageId ?? null,
        } as ImageItem;
      });

      const imgs: ImageItem[] = await Promise.all(promises);
      setImages(imgs);
    };

    loadImages();

    return () => {
      createdObjectUrls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [detailData, show]);

  const isAvailableSubmit =
    title !== '' &&
    description !== '' &&
    lostPlace !== '' &&
    lostPlaceDetail !== '' &&
    itemType !== '' &&
    lostDate !== '' &&
    images.length > 0;

  const handleAddClick = (slotIndex: number) => {
    setCurrentSlot(slotIndex);
    fileInputRef.current?.click();
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setImages((prev) => {
      const newItem: ImageItem = {
        file,
        url: URL.createObjectURL(file),
        imageId: null,
      };
      const next = [...prev];
      if (currentSlot !== null && currentSlot >= 0) {
        if (currentSlot < next.length) next[currentSlot] = newItem;
        else next.push(newItem);
      } else {
        next.push(newItem);
      }
      return next;
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
    setCurrentSlot(null);
  };

  const handleRemove = (index: number) => {
    setImages((prev) => {
      const next = [...prev];
      const item = next[index];
      if (item && item.url && item.file) {
        URL.revokeObjectURL(item.url);
      }
      next.splice(index, 1);
      return next;
    });
  };

  const urlToFile = async (url: string, filename?: string) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      let name = filename || url.split('/').pop() || `image-${Date.now()}`;

      if (name && name.indexOf('.') === -1) {
        const mime = blob.type || 'image/jpeg';
        const mimeMap: Record<string, string> = {
          'image/jpeg': '.jpg',
          'image/jpg': '.jpg',
          'image/png': '.png',
          'image/webp': '.webp',
          'image/svg+xml': '.svg',
          'image/gif': '.gif',
        };
        const ext =
          mimeMap[mime] ||
          (mime.split('/')[1] ? `.${mime.split('/')[1]}` : '.jpg');
        name = `${name}${ext}`;
      }

      return new File([blob], name, { type: blob.type || 'image/jpeg' });
    } catch (err) {
      return null;
    }
  };

  console.log(images);

  const handleUpdate = async () => {
    if (itemId === null) return;

    const request = {
      lostItemId: itemId,
      title,
      description,
      lostPlace,
      lostPlaceDetail,
      itemType,
      lostDate,
    };

    const filePromises = images.map(async (it, idx) => {
      if (it.file) return it.file;
      if (it.url) {
        const f = await urlToFile(it.url, `existing-${idx}`);
        return f;
      }
      return null;
    });

    const maybeFiles = await Promise.all(filePromises);
    const files = (maybeFiles.filter(Boolean) as File[]).slice();

    updateLostItem(request, files)
      .execute()
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ['lostItemDetail', itemId] });
        queryClient.invalidateQueries({
          queryKey: ['lostItems'],
        });
        show('분실물 수정이 완료되었습니다.', 'info', true);
        navigate('/lost-item');
      })
      .catch(() => {
        show('분실물 수정에 실패했습니다.', 'error', true);
      });
  };

  return (
    <>
      <Header title="분실물" />
      <S.Container>
        <S.Title>분실 정보 수정</S.Title>
        <S.InputWrapper>
          <Input
            label="분실물 이름"
            type="text"
            value={title}
            onChange={(v: string) => setTitle(v)}
          />
          <Input
            label="카테고리 분류"
            type="picker"
            value={itemType}
            onChange={(v: string) => setItemType(v)}
          />
          <Input
            label="분실 위치"
            type="picker"
            value={lostPlace}
            onChange={(v: string) => setLostPlace(v)}
          />
          <Input
            label="분실 위치 상세"
            type="text"
            value={lostPlaceDetail}
            onChange={(v: string) => setLostPlaceDetail(v)}
          />
          <Input
            label="분실 추정 시간"
            type="datetime-local"
            value={lostDate}
            onChange={(v: string) => setLostDate(v)}
          />
          <Input
            label="상세정보 입력하기"
            type="text"
            value={description}
            onChange={(v: string) => setDescription(v)}
          />
        </S.InputWrapper>
        <S.ImageSection>
          <S.ImageSectionTitle>사진 첨부</S.ImageSectionTitle>
          <S.ImageGrid>
            {(() => {
              const slotsCount = images.length + 1;
              return Array.from({ length: slotsCount }).map((_, i) => {
                const item = images[i];
                return (
                  <S.ImageSlot key={i}>
                    {item && item.url ? (
                      <>
                        <S.Thumb src={item.url} alt={`preview-${i}`} />
                        <S.RemoveButton
                          src={DeleteButton}
                          onClick={() => handleRemove(i)}
                        />
                      </>
                    ) : (
                      <S.AddSlot onClick={() => handleAddClick(i)}>
                        <img src={AddImage} alt="add" />
                      </S.AddSlot>
                    )}
                  </S.ImageSlot>
                );
              });
            })()}
          </S.ImageGrid>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </S.ImageSection>
        <S.SubmitButton onClick={handleUpdate} disabled={!isAvailableSubmit}>
          수정하기
        </S.SubmitButton>
      </S.Container>
    </>
  );
};

export default LostItemEditPage;
