export interface LostItemModifyRequest {
  lostItemId: number;
  title: string;
  description: string;
  lostPlace: string;
  lostPlaceDetail: string;
  itemType: string;
  lostDate: string;
}

export interface LostItemCreateRequest {
  title: string;
  description: string;
  lostPlace: string;
  lostPlaceDetail: string;
  itemType: string;
  lostDate: string;
}

export interface LostItemResponseItem {
  lostItemId: number;
  lostPlace: string;
  lostPlaceDetail: string;
  title: string;
  description: string;
  createdAt: string;
  images: ImageResponse[];
}

export interface ImageResponse {
  imageId?: number;
  imageUrl?: string;
}

export interface LostItemResponse {
  content: LostItemResponseItem[];
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface LostItemDetailResponse {
  id: number;
  itemType: string;
  lostPlace: string;
  lostPlaceDetail: string;
  title: string;
  description: string;
  lostDate: string;
  images: ImageResponse[];
}
