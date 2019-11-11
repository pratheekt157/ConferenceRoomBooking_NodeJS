const locationService = require("./locationService");
const validateLocation = require("../CommonUtils/ValidationObjects")
const controllerUtils = require("../CommonUtils/ContollerUtils");

/**
 * @function getLocation
 * @param {request} req 
 * @param {response} res 
 * 
 * List of Location
 */

let getLocation = async function(req,res){
    try {
        let location = await locationService.getLocation()
        return controllerUtils.response(res,200,"List of Location",location)
    } catch (error) {
        return controllerUtils.errorResponse(res,500,error);
    }
}

let postLocation = async function(request,response){
    try {
        const locationPayload = request.body;
        const validateoationPayload = await validateLocation.locationSchema.validateAsync(locationPayload);
        let postLocation = await locationService.postLocation(validateoationPayload)
        return controllerUtils.response(response,200,"Created",postLocation)
    } catch (error) {
        console.log(error);
        
        return controllerUtils.errorResponse(response,500,error);
    }
}

module.exports = {
    getLocation,
    postLocation
}