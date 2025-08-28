import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const Card = styled.div`
  width: 420px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 16px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  label {
    font-size: 14px;
    color: #333;
    margin-right: 8px;
  }

  select {
    padding: 6px 8px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background: #fff;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #f7f7f7;
  cursor: pointer;
`;

export const Count = styled.div`
  min-width: 40px;
  text-align: center;
  font-weight: 600;
`;

export const NumberInput = styled.input`
  width: 100px;
  padding: 6px 8px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  background: #2563eb;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
