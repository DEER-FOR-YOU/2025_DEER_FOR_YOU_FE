export const getHeaderTitle = (location: string) => {
  switch (location) {
    case 'STUDENT_HALL':
      return '학생회관';
    case 'SONG_BAEK_HALL':
      return '송백관';
    default:
      return '전체지도';
  }
};
