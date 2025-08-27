import React, { useState } from 'react';
import * as S from './index.styles';
import Header from './components/Header';
import { useSearchParams } from 'react-router-dom';

const Event = () => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const currentName = searchParams.get('name') || '';

  return (
    <>
      <Header currentName={currentName} open={open} setOpen={setOpen} />
      {open && <S.Background onClick={() => setOpen(false)} />}
    </>
  );
};

export default Event;
