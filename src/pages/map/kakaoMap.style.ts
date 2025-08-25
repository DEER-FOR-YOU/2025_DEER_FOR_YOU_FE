import styled from '@emotion/styled';

export const MapContainer = styled.div`
  width: 100%;
  height: calc(100% - 168px);
  overflow: hidden;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const MapInfo = styled.div`
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
`;

export const InfoText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.5;
`;

// 로딩 상태 스타일
export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f8f9fa;
  border-radius: 12px;
  /* border: 2px dashed #dee2e6; */
`;

export const LoadingText = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin: 0;
`;

// 반응형 디자인
export const ResponsiveMap = styled.div`
  @media (max-width: 768px) {
    ${MapWrapper} {
      height: 300px;
    }

    ${MapInfo} {
      padding: 12px;
    }

    ${InfoTitle} {
      font-size: 16px;
    }

    ${InfoText} {
      font-size: 13px;
    }
  }
`;
