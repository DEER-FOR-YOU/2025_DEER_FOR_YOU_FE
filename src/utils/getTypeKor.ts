export const getTypeKor = (type: string) => {
  switch (type) {
    case 'DIY':
      return 'DIY';
    case 'ACTIVITY':
      return '체험';
    case 'FOOD':
      return '먹거리';
    default:
      return type;
  }
};
