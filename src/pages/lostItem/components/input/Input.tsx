import React, { useEffect, useRef, useState } from 'react';
import * as S from './Input.style';
import whenIcon from '../../../../assets/when.svg';

interface InputProps {
  type?: 'text' | 'datetime-local' | 'picker';
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

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

const Input = ({
  type = 'text',
  label,
  value: propValue,
  onChange,
}: InputProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(propValue ?? '');
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let v = propValue ?? '';
    if (label === '카테고리 분류' && v) {
      const idx = (CATEGORY_ENUM as readonly string[]).indexOf(v);
      if (idx !== -1) v = String(CATEGORY_OPTIONS[idx]);
    } else if (label === '분실 위치' && v) {
      const idx = (LOCATION_ENUM as readonly string[]).indexOf(v);
      if (idx !== -1) v = String(LOCATION_OPTIONS[idx]);
    }
    setValue(v);
  }, [propValue, label]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setValue(val);
    setOpen(false);

    let out = val;
    if (label === '카테고리 분류') {
      const idx = (CATEGORY_OPTIONS as readonly string[]).indexOf(val);
      if (idx !== -1) out = String(CATEGORY_ENUM[idx]);
    } else if (label === '분실 위치') {
      const idx = (LOCATION_OPTIONS as readonly string[]).indexOf(val);
      if (idx !== -1) out = String(LOCATION_ENUM[idx]);
    }

    if (onChange) onChange(out);
  };

  const renderPicker = () => {
    const options =
      label === '카테고리 분류' ? CATEGORY_OPTIONS : LOCATION_OPTIONS;

    return (
      <S.PickerWrapper ref={wrapperRef}>
        <S.PickerInput onClick={() => setOpen((s) => !s)} role="button">
          {value || '입력하기'}
        </S.PickerInput>
        {open && (
          <S.Dropdown>
            {options.map((opt) => (
              <S.DropdownItem
                key={opt}
                onClick={() => handleSelect(opt)}
                selected={opt === value}
              >
                {opt}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        )}
      </S.PickerWrapper>
    );
  };

  const formatDateDisplay = (iso?: string) => {
    if (!iso) return '';
    try {
      const d = new Date(iso);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      return `${y}. ${m}. ${day}. ${hh}:${mm}`;
    } catch (e) {
      return iso;
    }
  };

  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const renderDateInput = () => {
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <S.DateRow
          onClick={() =>
            dateInputRef.current &&
            dateInputRef.current.showPicker &&
            dateInputRef.current.showPicker()
          }
        >
          {value ? (
            <S.DateText>{formatDateDisplay(value)}</S.DateText>
          ) : (
            <S.DatePlaceholder>연도. 월. 일. -- --:--</S.DatePlaceholder>
          )}
          <S.DateIcon src={whenIcon} alt="calendar" />
        </S.DateRow>
        <S.HiddenInput
          ref={dateInputRef}
          type="datetime-local"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange && onChange(e.target.value);
          }}
        />
      </div>
    );
  };

  return (
    <>
      <S.Container>
        <S.Title>{label}</S.Title>
        {type === 'datetime-local' ? (
          renderDateInput()
        ) : type === 'picker' ||
          label === '카테고리 분류' ||
          label === '분실 위치' ? (
          renderPicker()
        ) : (
          <S.Input
            type={type}
            value={value}
            onChange={(e) => {
              setValue((e.target as HTMLInputElement).value);
              onChange && onChange((e.target as HTMLInputElement).value);
            }}
            placeholder="입력하기"
          />
        )}
      </S.Container>
    </>
  );
};

export default Input;
