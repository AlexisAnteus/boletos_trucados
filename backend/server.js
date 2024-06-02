const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
"sk_test_51PMKRtHfUgXPY5AOzc2bElT6wTZXfxpG2xLmmZkZ11qJq31BtQ6Fr3OW2gWpwJtUywNLrfh5peX3woe88iiOTVhn00EgV6jkb8"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let arrayItems = [];
  items.forEach((item) => {
    arrayItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: arrayItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
