const router = require("express").Router({ mergeParams: true });
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");
router.get("/add", async (req, res) => {
  cube = await cubeService.getOne(req.params.cubeId);
  accessories = await accessoryService.getAllWithout(cube.accessories.map( x=> x._id));
  res.render("accessory/attachAccessory", { cube, accessories });
});


router.post('/add', async (req, res) =>{
  let cube =  await cubeService.attachAccessory(req.params.cubeId, req.body.accessory );
    res.redirect(`/cube/${req.params.cubeId}`)
})
module.exports = router;
