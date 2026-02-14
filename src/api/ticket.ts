import { ENDPOINTS } from './endpoints';
import { type TicketResponse } from '../components/MyPage/types/ticket';
import axios from 'axios';

export const getMyTickets = async (): Promise<TicketResponse[]> => {
  const token = localStorage.getItem('accessToken');
  if (!token) throw new Error('로그인 필요');
  

  const res = await axios.get(ENDPOINTS.TICKET_INFO, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("data", res)
  return res.data.data;
};

export const getCheckinToken = async (ticketId: string) => {
  const token = localStorage.getItem('accessToken');
  if (!token) throw new Error('로그인 필요');

  const res = await axios.get(`${ENDPOINTS.TICKET_TOKEN}/${ticketId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.data; // { ticketToken: "..." }
};

