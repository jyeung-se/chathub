const express = require("express");
const cors = require("cors");
const {default: axios} = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "a290d006-4000-44ea-905b-54da90eefa0b" }}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
        return res.status(e.response.status).json(e.response.data);
  }

// This line is for testing if post goes through with the fake user login data
//   return res.json({ username: username, secret: "SHA256..." });
});

app.listen(5000);