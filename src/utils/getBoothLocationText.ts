export const getBoothLocationText = (locationDetail: string) => {
  if (locationDetail === 'FOOD_TRUCK') {
    return '학생회관 앞';
  }
  return locationDetail;
};
