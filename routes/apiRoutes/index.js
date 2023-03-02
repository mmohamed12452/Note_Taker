const router = require("express").Router();

const notesRouter = require("./noteRouter");
router.use(notesRouter);
module.exports = router;
