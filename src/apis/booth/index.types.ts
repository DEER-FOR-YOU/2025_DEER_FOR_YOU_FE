export interface BoothImage {
  imageId: number | null;
  imageUrl: string | null;
}

export interface Booth {
  id: number;
  boothName: string;
  operationTime: string;
  locationDetail: string;
  boothNotice: string | null;
  boothLocation: string;
  boothAffiliation: string;
  boothType: string;
  isBookmarked: boolean;
  image: BoothImage;
}

// 배열 타입
export type BoothList = Booth[];
