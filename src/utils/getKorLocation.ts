export const getKorLocation = (location: string) => {
  switch (location) {
    case 'STUDENT_HALL':
      return '학생회관 앞';
    default:
      return '';
  }
};
