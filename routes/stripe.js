const router = require("express").router();
const stripe = require("strip")(process.env.STRIPE_KEY);

router.post("/payement", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "eur",
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    }
  );
});

module.exports = router;