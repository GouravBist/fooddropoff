const express = require("express");
const {
  processPayment,
  sendStripeAPIKey,
} = require("../controllers/paymentController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeAPIKey);
module.exports = router;
