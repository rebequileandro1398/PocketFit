const { Router } = require('express');
const router = Router();
const { getShiftofUser, weekCreate, createBulk,getAllShiftsPlus, newShift, getAllShifts,getShiftByWeekNum, updateShift, deleteShift, getShiftById, deleteUserShift } = require('../Controllers/Shift')


router.post("/create", newShift);

//Trae todos los shifts desde el dia que mandas x body en adelante
router.get("/all", getAllShifts);

//Trae TODOS los shift
router.get("/allPlus", getAllShiftsPlus);

router.get('/:id', getShiftById)

router.get('/user/:id', getShiftofUser)

router.get('/week/:week', getShiftByWeekNum)

router.put("/update", updateShift);

router.delete("/:id", deleteShift);

router.post('/bulk', createBulk);

router.post('/weekcreate', weekCreate);

router.delete("/deleteusershift", deleteUserShift)

module.exports = router;
