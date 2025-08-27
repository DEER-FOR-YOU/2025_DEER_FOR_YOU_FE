import React, { useState, useEffect, useRef } from 'react';
import * as S from './header.style';
import arrow from '../../assets/arrow_back.svg';
import { useNavigate } from 'react-router-dom';
import dropdownDown from '../../assets/dropdown_down.svg';
import dropdownUp from '../../assets/dropdown_up.svg';
import { getHeaderTitle } from '../../utils/getHeaderTitle';
interface HeaderProps {
  title: string | null;
  onLocationChange?: (location: string) => void;
}

export default function Header({ title, onLocationChange }: HeaderProps) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locations = [
    { id: 1, name: '전체지도', englishName: 'map' },
    { id: 2, name: '학생회관', englishName: 'STUDENT_HALL' },
    { id: 3, name: '송백관', englishName: 'SONG_BAEK_HALL' },
  ];

  const handleTitleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationSelect = (location: string) => {
    if (onLocationChange) {
      onLocationChange(location);
    }
    setIsDropdownOpen(false);
  };

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Arrow src={arrow} alt="arrow" onClick={() => navigate(-1)} />
        <S.TitleContainer onClick={handleTitleClick}>
          <S.Title>{getHeaderTitle(title || '')}</S.Title>
          <S.DropdownIcon
            src={isDropdownOpen ? dropdownUp : dropdownDown}
            alt="dropdown"
          />
        </S.TitleContainer>
      </S.HeaderContent>

      {isDropdownOpen && (
        <>
          <S.Overlay />
          {/* <S.DropdownMenu ref={dropdownRef}>
            {locations.map((location) => (
              <S.DropdownItem
                key={location.id}
                onClick={() => handleLocationSelect(location.name)}
                isSelected={location.name === title}
              >
                {location.name}
              </S.DropdownItem>
            ))}
          </S.DropdownMenu> */}
          <S.DropdownMenu ref={dropdownRef}>
            <S.FirstRowLine>
              <S.DropDownItemWrapper>
                <S.DropdownItem
                  isSelected={
                    locations[0].name === title ||
                    title === null ||
                    title === ''
                  }
                  onClick={() => {
                    handleLocationSelect(locations[0].name);
                    navigate('/map');
                  }}
                >
                  {locations[0].name}
                </S.DropdownItem>
              </S.DropDownItemWrapper>
              <S.DropDownItemWrapper>
                <S.DropdownItem
                  isSelected={locations[1].englishName === title}
                  onClick={() => {
                    handleLocationSelect(locations[1].name);
                    navigate('/booths?location=STUDENT_HALL');
                  }}
                >
                  {locations[1].name}
                </S.DropdownItem>
              </S.DropDownItemWrapper>
            </S.FirstRowLine>
            <S.FirstRowLine>
              <S.DropDownItemWrapper>
                <S.DropdownItem
                  isSelected={locations[2].englishName === title}
                  onClick={() => {
                    handleLocationSelect(locations[2].name);
                    navigate('/booths?location=SONG_BAEK_HALL');
                  }}
                >
                  {locations[2].name}
                </S.DropdownItem>
              </S.DropDownItemWrapper>
            </S.FirstRowLine>
          </S.DropdownMenu>
        </>
      )}
    </S.HeaderContainer>
  );
}
