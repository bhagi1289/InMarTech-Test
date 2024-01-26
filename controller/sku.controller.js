const SKUData = require("../model/skudata.model");


const searchSKU = async(req, res, next)=>{
    try {
        const { location, department, category, subcategory } = req.query;
    
        const skuResults = await SKUData.find({
          LOCATION: location,
          DEPARTMENT: department,
          CATEGORY: category,
          SUBCATEGORY: subcategory
        });
    
        res.status(200).json(skuResults);
      } catch (error) {
        next(error);
      }
}


module.exports = {
    searchSKU
}