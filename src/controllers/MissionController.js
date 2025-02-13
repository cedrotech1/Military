// MissionController.js
import {
  createMission,
  getAllMissiones,
  deleteOneMission,
  checkExistingMission,
  getOneMissionWithDetails,
  updateOne,
  activate,
  deactivate,
  

} from "../services/MissionService.js";
import imageUploader from "../helpers/imageUplouder.js";


export const addMissionController = async (req, res) => {
  try {


    if (role === "user") {
        return res.status(400).json({
          success: false,
          message: "you are not allowed add user lather that Commander-Officer or persenel ",
        });
    }



   req.body.createdBY=req.user.id;
    req.body.name = req.body.name.toUpperCase();
    if (!req.body.name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const existingProfile = await checkExistingMission(req.body.name);
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: "Missions detail exists",
      });
    }
    req.body.status = "active";
    const newMission = await createMission(req.body);

    return res.status(201).json({
      success: true,
      message: "mission created successfully",
      mission: newMission,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const MissionWithAllController = async (req, res) => {
  try {
    const userID = req.user.id; // Get logged-in user's ID

    let data = await getAllMissiones();
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "No missions found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "missions details retrieved successfully",
      data,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getOneMissionController = async (req, res) => {


  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneMissionWithDetails(id,userID);
    if (!data) {
      return res.status(404).json({
        message: "mission detail not found",
        data:[],
      });
    }
    return res.status(200).json({
      success: true,
      message: "profile detail retrieved successfully",
      data,
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};





export const deleteOneMissionController = async (req, res) => {
  try {

    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneMissionWithDetails(id,userID);
    if (!data) {
      return res.status(404).json({
        message: "mission detail not found",
        data:[],
      });
    }

    if (userID!=data.createdBY) {
      return res.status(401).json({
        message: "you can not modify mission you dont create",
      });
    }
   
  

    const Mission = await deleteOneMission(req.params.id);
    if (!Mission) {
      return res.status(404).json({
        success: false,
        message: "Mission not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Mission deleted successfully",
      Mission,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};



export const updatemissionController = async (req, res) => {
 
  try {
    const { id } = req.params;
    req.body.userID=req.user.id;

    const mission = await getOneMissionWithDetails(id);
    if (!mission) {
      return res.status(404).json({
        message: "mission detail not found",
        data:[],
      });
    }
    if (userID!=mission.createdBY) {
      return res.status(401).json({
        message: "you can not modify mission you dont create",
      });
    }
   
     req.body.name = req.body.name.toUpperCase();
     if (!req.body.name) {
       return res.status(400).json({
         success: false,
         message: "Name is required",
       });
     }
 

  
     const updated = await updateOne(id, req.body);

     return res.status(201).json({
       success: true,
       message: "mission created successfully",
       updated: updated,
     });
   } catch (error) {
     console.error(error);
     return res.status(500).json({
       success: false,
       message: "Something went wrong",
       error: error.message,
     });
   }
};





export const activateMissionController = async (req, res) => {
  try {

    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneMissionWithDetails(id);
    if (!data) {
      return res.status(404).json({
        message: "mission detail not found",
        data:[],
      });
    }

    if (userID!=data.createdBY) {
      return res.status(401).json({
        message: "you can not modify mission you dont create",
      });
    }
   
   

    const mission = await activate(req.params.id);
    if (!mission) {
      return res.status(401).json({
        success: false,
        message: "mission not found",
        
      });
    }

    return res.status(200).json({
      success: true,
      message: "mission activated successfully",
      mission,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const deactivateMissionController = async (req, res) => {
  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneMissionWithDetails(id);
    if (!data) {
      return res.status(404).json({
        message: "mission detail not found",
        data:[],
      });
    }
    // console.log(data.createdBY);
    console.log(userID);

    if (userID!=data.createdBY) {
      return res.status(401).json({
        message: "you can not modify mission you dont create",
      });
    }
   

    const mission = await deactivate(req.params.id);
    if (!mission) {
      return res.status(404).json({
        success: false,
        message: "mission not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "mission deactivated successfully",
      mission,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};