import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 350px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #7f8992;
  border: 1px solid #000;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: #6a737a;
  }
`;

export const Header = styled.div`
  padding: 40px 20px 20px;
  text-align: left;
`;

export const Year = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
  line-height: 42px;
  letter-spacing: -0.8px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  line-height: 42px;
  letter-spacing: -0.8px;
`;

export const Description = styled.div`
  padding: 0 20px 20px;
  text-align: left;
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: #000;
  margin: 0 0 16px 0;
  letter-spacing: -0.35px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #d2d9df;
  margin: 0 20px;
`;

export const EventImage = styled.img`
  width: 314px;
  height: 384px;
  margin: 20px;
  border-radius: 4px;
  object-fit: cover;
`;

export const EventDetails = styled.div`
  padding: 20px;
`;

export const DetailRow = styled.div`
  display: flex;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DetailLabel = styled.div`
  width: 72px;
  font-size: 13px;
  font-weight: 600;
  color: #000;
  line-height: 20px;
  letter-spacing: -0.325px;
  flex-shrink: 0;
`;

export const DetailValue = styled.div`
  flex: 1;
  font-size: 13px;
  font-weight: 400;
  color: #000;
  line-height: 18px;
  letter-spacing: -0.325px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #eceff0;
  border: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: -0.45px;

  &:hover {
    background-color: #dde2e4;
  }
`;
