import { TicketStatus } from "./ticket-status.enum";

export interface Ticket {
    id?: number,
    buyer: number,
    purchasedForUser?: number,
    buyerName: string,
    buyerLastName: string,
    seat: number,
    price: number,
    purchaseDate: Date,
    isPreorder: boolean,
    expectedDepartureDate: Date,
    ticketStatus: TicketStatus,
}
