import { Realmtype } from "./realmtype.enum";
import { TicketStatus } from "./ticket-status.enum";

export interface Report {
    id?: number,
    ticketId: number,
    buyerName: string,
    recipientName: string,
    realmType: Realmtype,
    section: string, 
    seatNumber: string,
    price: number,
    isPreorder: boolean,  
    ticketStatus: TicketStatus,
    reportDate: Date

}
