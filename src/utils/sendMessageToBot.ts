import axios from 'axios';
import { TelegramResponse } from '../types/telegramResponse';

export const botToken = process.env.REACT_APP_BOT_API_TOKEN;
export const botChatId = process.env.REACT_APP_BOT_API_CHATID;

export const sendMessage = async (
  formData: string
): Promise<TelegramResponse> => {
  const options = {
    method: 'POST',
    url: `https://api.telegram.org/bot${botToken}/sendMessage`,
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    data: {
      text: formData,
      parse_mode: 'html',
      disable_web_page_preview: false,
      disable_notification: false,
      reply_to_message_id: null,
      chat_id: botChatId,
    },
  };

  try {
    const response = await axios.request<TelegramResponse>(options);
    return response.data;
  } catch (error: unknown) {
    return { ok: false };
  }
};
