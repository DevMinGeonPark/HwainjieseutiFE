import client from './client';

interface PopupModal {
  GongSubject: string;
  GongContent: GongContent[];
  GongImg: string;
}

interface GongContent {
  GongLinkUrl: string;
  GongImgUrl: string;
}

export async function popupModal(): Promise<PopupModal> {
  const res = await client.post('pushgonggi.php', {});

  return res.data;
}
