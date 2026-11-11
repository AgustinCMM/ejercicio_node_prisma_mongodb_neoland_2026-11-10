import express from 'express'
import 'dotenv/config'
import productRoutes from './src/routes/products.routes.js'
import serviceRoutes from './src/routes/services.routes.js'

const port = process.env.PORT || 3001

const app = express()
app.use(express.json())

app.use('/products', productRoutes)
app.use('/services', serviceRoutes)

app.get("", (request, response) => {
    response.send("todo ok")
})

app.listen(port, () => {
    console.log("http://localhost:" + port)
})