import { getTypeKor } from './getTypeKor';

export const getBoothTypeText = (
  boothType: string | null,
  boothAffiliation: string,
) => {
  if (boothType === null) {
    switch (boothAffiliation) {
      case 'FOOD_TRUCK':
        return '[푸드트럭]';
      case 'COUNCIL':
        return '[이벤트]';
      default:
        return '[기타]';
    }
  }
  return `[${getTypeKor(boothType)}]`;
};
