const express = require('express');
const locationController = require("../controller/locations.controller");

const router = express.Router();


//Get Subcategory records based on locationID, departmentID, CategoryID and SubCategoryId
router.get('/:locationId/department/:departmentId/category/:categoryId/subcategory/:subCategoryId', locationController.getRecordBySubCategoryLocDeptCategory);

//Get subcategory records based locationID, departmentID and CategoryID
router.get('/:locationId/department/:departmentId/category/:categoryId/subcategory', locationController.getSubcatByLocDeptAndCategory);

//Get Category records by locationId and Departments
router.get('/:locationId/department/:departmentId/category', locationController.getCategoriesByLocationAndDept);

//Get Department records by LocationId
router.get('/:locationId/department', locationController.getDepartmentsByLocation)

//Creates a record in Metadata
router.post('/', locationController.createMetaDataRecord)

//Update a reocrd in metadata
router.put('/:id',locationController.updateMetadataRecordById);

//Delete a reocrd
router.delete('/:id', locationController.deleteMetadataRecordById);

//Get ALL Locations
router.get('/', locationController.getAllLocationObjects)

module.exports = router;
