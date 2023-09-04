export interface Body {
  Uid: string;
  CommentsPage: number;
}
/**
 * @interface deleteParamProps
 */
export interface deleteParamProps {
  // 댓글 PK
  ReplyIDX: string;
  // 로그인 ID
  KTShopID: string;
}

interface ParamPropsBase {
  // 내용
  Content: string;

  // 비밀글여부, Y : 비밀글
  Secret: 'Y' | 'N';

  // 로그인 ID
  KTShopID: string;
}

/**
 * @interface modifyParamProps
 */
export interface modifyParamProps extends ParamPropsBase {
  ReplyIDX: string;
}

/**
 * @interface WriteParamProps
 */

export interface WriteParamProps extends ParamPropsBase {
  // 이벤트 코드값
  EventIDX: string;

  // 댓글의 부모 ID값(ReplyIDX), 신규입력일때는 공백
  ReplyParentIDX: string;
}

/**
 * @interface Comment
 */
export interface Comment {
  /** 댓글 pk */
  IDX: number;

  /** 댓글 내용 pk */
  ReplyIDX: number;

  /** 답변 Depth ( 바로 아래 답변은 한글자, 댓댓글은 두글자) */
  ReplyDepth: string;

  /** 비밀글여부 */
  Option: string;

  /** 입력날자 */
  WriteDate: string;

  /** 내용 */
  Content: string;

  /** 로그인 ID*/
  UserID: string;

  /** 사용자이름*/
  UserNm: string;

  /** 차단여부*/
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
