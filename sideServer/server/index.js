const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dbconnect = require('./db/mongoose')
const app = express()
const env = require('dotenv').config()
const port = process.env.PORT
mongoose.set('strictQuery', true)
dbconnect()
app.use(express.json())
app.use(cors())
const userRouter = require('./routers/user')
app.use(userRouter)
const adminRouter = require('./routers/admin')
app.use(adminRouter)
const productsRouter = require('./routers/products')
app.use(productsRouter)
const blogRouter = require('./routers/blog')
app.use(blogRouter)
const productCategoryRouter = require('./routers/productCategory')
app.use(productCategoryRouter)
const blogCategoryRouter = require('./routers/blogCategory')
app.use(blogCategoryRouter)
const brandCategoryRouter = require('./routers/brandCategory')
app.use(brandCategoryRouter)
const orderRouter = require('./routers/order')
app.use(orderRouter)
const cartRouter = require('./routers/cart')
app.use(cartRouter)
app.listen(port, () => console.log(`server is running at port ${port}`))