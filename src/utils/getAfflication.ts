export const getAfflication = (afflication: string) => {
  switch (afflication) {
    case 'FOOD_TRUCK':
      return '푸드트럭';
    case 'CLUB':
      return '동아리';
    case 'DESIGN':
      return '디자인';
    case 'ART':
      return '예술';
    case 'ENGINEERING':
      return '공과';
    case 'CONVERGENCE':
      return '융합기술';
    case 'EXTERNAL':
      return '외부부스';
    case 'COUNCIL':
      return '총학생회';
    default:
      return '전체';
  }
};
