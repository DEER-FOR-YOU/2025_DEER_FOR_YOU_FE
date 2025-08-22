export interface TimeTableItem {
  timeTableId: number;
  title: string;
  timeDescription: string;
  place: string;
  timeTableDay: string;
  bookmarked: boolean;
}

export type TimeTableList = TimeTableItem[];
