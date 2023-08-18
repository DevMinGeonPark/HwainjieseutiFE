export interface Body {
  Uid: string;
  CommentsPage: number;
}

export interface Comment {
  Option: string;
  Content: string;
  UserID: string;
  UserNm: string;
  WriteDate: string;
  Blinder: string;
}

export interface EventData {
  LogIn: string;
  ImgSrc: string;
  Subject: string;
  WriteDate: string;
  HitCount: string;
  CommentsCount: number;
  Comments: Comment[];
}
