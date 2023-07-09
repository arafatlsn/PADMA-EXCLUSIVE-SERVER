const express = require("express");
const {getDestination, getDestinations} = require("./destination.controller")

const routerDestination = express.Router();
routerDestination.get("/get-all-destinations", getDestinations);
routerDestination.get("/get-destination", getDestination)

module.exports = routerDestination;
