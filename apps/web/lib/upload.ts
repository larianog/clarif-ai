import { UIMessage } from "./app/ui-message.interface";
import { BACKEND_URL } from "./constants";

export async function uploadFile(file: File): Promise<UIMessage[]> {
  if (!file) throw new Error('No file selected.');

  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${BACKEND_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Upload failed: ${res.status} - ${errorText}`);
  }

  const data = await res.json()
  return data;
}
