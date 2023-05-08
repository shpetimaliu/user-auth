const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");
const cookieSession = require("cookie-session");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["shp3t1m"],
  })
);

app.get("/signup", (req, res) => {
  res.send(`
     <div>
       Your id is: ${req.session.userId}
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirm" placeholder="password confirm" />
            <button>Sign Up</button>
        </form>
     </div>
  `);
});

app.post("/signup", async (req, res) => {
  const { email, password, passwordConfirm } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send("Email in use");
  }

  if (password !== passwordConfirm) {
    return res.send("Passwords do not match");
  }

  const user = await usersRepo.create({ email, password });
  req.session.userId = user.id;

  res.send("Account created successfully");
});

app.get("/signout", (req, res) => {
  req.session = null;
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.send(`
  <div>
   <form method="POST">
       <input name="email" placeholder="email" />
       <input name="password" placeholder="password" />
       <button>Sign in</button>
   </form>
  </div>
  `);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await usersRepo.getOneBy({ email });
  if (!user) {
    return res.send(
      `Your email not found, if you don't have an account just register on <a href="/signup">this link</a>`
    );
  }

  const validPass = await usersRepo.comparePass(user.password, password);

  if (!validPass) {
    return res.send("Invalid password");
  }
  req.session.userId = user.id;

  res.send("You are signed in");
});

app.listen(3000, () => {
  console.log("Listening");
});
