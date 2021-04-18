

const express = require('express')

const router = express.Router()

const {getdata,postdata}=require("../controller/data")

router.route('/')
.get(getdata)
  .post(postdata)


module.exports=router