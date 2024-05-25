import client from './client';

interface PopupModal {
  GongSubject: string;
  GongContent: string;
  GongImg: string;
}

export async function popupModal(): Promise<PopupModal> {
  const res = await client.post('pushgonggi.php', {});

  return res.data;
}
