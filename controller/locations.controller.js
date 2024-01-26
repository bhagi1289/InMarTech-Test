const MetaData = require('../model/metadata.model');


const getAllLocationObjects = async(req, res, next)=>{
    try {
        const result = await MetaData.find();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const createMetaDataRecord = async(req, res, next)=>{
    try {
        const metadata = new MetaData(req.body);
        await metadata.save();
        res.status(201).json({"message": "record created"})
    } catch (error) {
        next(error)
    }
}

const getDepartmentsByLocation = async(req, res, next)=>{
    try {
        const location = req.params.locationId;
        const result = await MetaData.find({Location: location});

        res.status(200).json(result);

    } catch (error) {
        next(error);
    }
}

const getCategoriesByLocationAndDept = async(req, res, next)=>{
    try {
        const location = req.params.locationId;
        const department = req.params.departmentId;

        const result = await MetaData.find({Location: location, Department: department});

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getSubcatByLocDeptAndCategory = async(req, res, next)=>{
    try {
        
        const location = req.params.locationId;
        const department = req.params.departmentId;
        const category = req.params.categoryId;

        const result = await MetaData.find({Location: location, Department: department, Category: category});

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}


const getRecordBySubCategoryLocDeptCategory = async(req, res, next) =>{

    try {
                
        const location = req.params.locationId;
        const department = req.params.departmentId;
        const category = req.params.categoryId;
        const subcategory = req.params.subCategoryId;

        const result = await MetaData.find({Location: location, Department: department, Category: category, SubCategory:subcategory });

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}


const updateMetadataRecordById = async(req, res, next)=>{
    try {
        const id = req.params.id;
        const result = await MetaData.findOneAndUpdate({_id:id}, {$set:req.body}, {new:true, runValidators:true});

        res.status(200).json(result);
        
    } catch (error) {
        next(error);
    }
}

const deleteMetadataRecordById = async(req, res, next)=>{

    try {
        const id = req.params.id;
        const result = await MetaData.findOneAndDelete({_id: id});


        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Record deleted successfully', data: result });

    } catch (error) {
       next(error); 
    }
}
module.exports = {
    getAllLocationObjects,
    createMetaDataRecord,
    getDepartmentsByLocation,
    getCategoriesByLocationAndDept,
    getSubcatByLocDeptAndCategory,
    getRecordBySubCategoryLocDeptCategory,
    updateMetadataRecordById,
    deleteMetadataRecordById
}