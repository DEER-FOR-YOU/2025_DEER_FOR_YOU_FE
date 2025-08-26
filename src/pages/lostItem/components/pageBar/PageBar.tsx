import React from 'react';
import * as S from './PageBar.style';
import ArrowBack from '../../assets/left.svg';
import ArrowFront from '../../assets/right.svg';

interface PageBarProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const PageBar = ({ page, totalPages, onChange }: PageBarProps) => {
  const pagesToShow = 5;
  const half = Math.floor(pagesToShow / 2);

  const start = Math.max(1, page - half);
  const end = Math.min(totalPages, start + pagesToShow - 1);

  if (end - start < pagesToShow - 1) {
    const correctedStart = Math.max(1, end - pagesToShow + 1);
    const pages = [] as number[];
    for (let i = correctedStart; i <= end; i++) pages.push(i);

    return (
      <S.Container>
        <S.Arrow
          src={ArrowBack}
          alt="prev"
          onClick={() => onChange(Math.max(1, page - 1))}
        />
        {pages.map((p) => (
          <S.PageButton
            key={p}
            isActive={p === page}
            onClick={() => onChange(p)}
          >
            {p}
          </S.PageButton>
        ))}
        <S.Arrow
          src={ArrowFront}
          alt="next"
          onClick={() => onChange(Math.min(totalPages, page + 1))}
        />
      </S.Container>
    );
  }

  const pages = [] as number[];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <S.Container>
      <S.Arrow
        src={ArrowBack}
        alt="prev"
        onClick={() => onChange(Math.max(1, page - 1))}
      />
      {pages.map((p) => (
        <S.PageButton key={p} isActive={p === page} onClick={() => onChange(p)}>
          {p}
        </S.PageButton>
      ))}
      <S.Arrow
        src={ArrowFront}
        alt="next"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
      />
    </S.Container>
  );
};

export default PageBar;
