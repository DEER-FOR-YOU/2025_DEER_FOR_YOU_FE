interface BoothImage {
  imageId: number;
  imageUrl: string;
}

export interface Booth {
  id: number;
  boothName: string;
  operationTime: string;
  locationDetail: string;
  boothNotice: string;
  boothLocation: string;
  boothAffiliation: string;
  boothType: string;
  isBookmarked: boolean;
  image: BoothImage;
}
