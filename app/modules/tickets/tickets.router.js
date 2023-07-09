const express = require("express");
const getAllTickets = require("./tickets.controller");
const getSingleTicket = require("./singleticket.controller");
const ticketsRouter = express.Router();

ticketsRouter.get("/get-ticket", getSingleTicket);
ticketsRouter.get("/get-all-tickets", getAllTickets);

module.exports = ticketsRouter;
