export interface PostNoticeRequest {
  title: string;
  content: string;
}

export type NoticeList = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}[];

export interface Member {
  memberId: number;
  role: string;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface UpdateNoticeRequest {
  announcementId: number;
  title: string;
  content: string;
}
