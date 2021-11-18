const router = require("express").Router;

router.get(`/`,(req,res) => {
    res.json({sucess:true})
})
module.exports = router;