export interface TicketItem {
  id: number;
  bgClassName: string;
  code: string;
  title: string;
  date: string;
  seatLabel: string;
  selectedSeat: string;
  selectedTicketId: string;
}

export interface SelectedTicket {
  title: string;
  seat: string;
  ticketId: string;
}
