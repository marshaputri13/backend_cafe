const express = require(`express`)
const app = express()
const cors = require(`cors`)
app.use(cors())

/** define port for the server */
const PORT = 8080

// /** load a route of meja */
// const mejaRoute = require(`./routes/meja.route`)

// /** load a route of menu */
// const menuRoute = require(`./routes/menu.route`)

// /** load a route of user */
// const userRoute = require(`./routes/user.route`)

// /** load a route of transaksi */
// const transaksiRoute = require(`./routes/transaksi.route`)

// /** load a route of route */
// const authRoute = require(`./routes/auth.route`)

// /** register route of meja */
// app.use(mejaRoute)

// /** register route of menu */
// app.use(menuRoute)

// /** register route of user */
// app.use(userRoute)

// /** register route of transaksi */
// app.use(transaksiRoute)

// /** register route of auth */
// app.use(authRoute)



app.use(express.static(__dirname))
let routes = [
    { prefix: `/user`, route: require(`./routes/user.route.js`) },
    { prefix: `/menu`, route: require(`./routes/menu.route.js`) },
    { prefix: `/meja`, route: require(`./routes/meja.route.js`) },
    { prefix: `/transaksi`, route: require(`./routes/transaksi.route.js `) },
  ];
  for (let i = 0; i < routes.length; i++) {
    app.use(routes[i].prefix, routes[i].route);
  }

/** run teh server */
app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`)
})