// 맵 이미지들을 동적으로 로드하여 관리

// 맵 이미지를 가져오는 함수
export const getMapImage = async (locationDetail: string): Promise<string> => {
  try {
    if (
      locationDetail?.startsWith('A 1-') ||
      locationDetail?.startsWith('A 2-')
    ) {
      const number = locationDetail.split(' ')[1]; // '1-1', '2-1' 등의 형태
      const imageModule = await import(`./${number}.svg`);
      return imageModule.default;
    }

    if (locationDetail === 'FOOD_TRUCK') {
      const imageModule = await import('./food_truck.svg');
      return imageModule.default;
    }

    // 기본 이미지 (student_hall)
    const imageModule = await import('./student_hall.svg');
    return imageModule.default;
  } catch (error) {
    console.error('맵 이미지 로드 실패:', error);
    // 에러 발생 시 기본 이미지 반환
    const fallbackModule = await import('./student_hall.svg');
    return fallbackModule.default;
  }
};

// 개별 이미지가 필요한 경우를 위한 함수들
export const getStudentHallImage = async (): Promise<string> => {
  const imageModule = await import('./student_hall.svg');
  return imageModule.default;
};

export const getSongbaekHallImage = async (): Promise<string> => {
  const imageModule = await import('./songbaek_hall.svg');
  return imageModule.default;
};

export const getFoodTruckImage = async (): Promise<string> => {
  const imageModule = await import('./food_truck.svg');
  return imageModule.default;
};
