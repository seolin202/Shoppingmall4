// express loading
const express = require('express');
// express안에 있는 모듈 중 router를 쓴다
const router = express.Router();

// (req = require, res = response)
// 오더와 관련된 api, 즉 order CRUD는 여기서 진행한다
router.get('/', (req, res) => {
    res.json({
        msg: 'orders data get'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: "orders posting"
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: "orders updated"
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: "orders deleted"
    });
});

// router를 모듈화하고 out
module.exports = router;