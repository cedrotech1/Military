// ProfileDetailsController.js
import {
  createProfileDetails,
  getAllProfileDetailses,
  deleteOneProfileDetails,
  checkExistingProfileDetails,
  getOneProfileDetailsWithDetails,
  updateOne,
  activate,
  deactivate,
  

} from "../services/ProfileDetailsService.js";
import imageUploader from "../helpers/imageUplouder.js";


import {
  getOneCategoryWithDetails
} from "../services/categoriesService.js";

export const addProfileDetailsController = async (req, res) => {
  try {
   req.body.userID=req.user.id;
    req.body.name = req.body.name.toUpperCase();
    if (!req.body.name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const data = await getOneCategoryWithDetails(req.body.categoryID);
    if (!data) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    let image; 
    if (req.files && req.files.image) {
      try {
        image = await imageUploader(req);
        if (!image || !image.url) {
          throw new Error('Upload failed or image URL missing');
        }
        req.body.image = image.url;
        console.log(req.body.image)
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error appropriately
      }
    }

    
       

    const existingProfile = await checkExistingProfileDetails(req.body.name);
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: "profile detail exists",
      });
    }
    req.body.status = "active";
    const newProfile = await createProfileDetails(req.body);

    return res.status(201).json({
      success: true,
      message: "Profile created successfully",
      profile: newProfile,
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


export const ProfileDetailsWithAllController = async (req, res) => {
  try {
    const userID = req.user.id; // Get logged-in user's ID

    let data = await getAllProfileDetailses(userID);
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "No profile details found for the logged-in user",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile details retrieved successfully",
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

export const getOneProfileDetailsController = async (req, res) => {


  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneProfileDetailsWithDetails(id,userID);
    if (!data) {
      return res.status(404).json({
        message: "profile detail not found",
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





export const deleteOneProfileDetailsController = async (req, res) => {
  try {

    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneProfileDetailsWithDetails(id,userID);
    if (!data) {
      return res.status(404).json({
        message: "profile detail not found",
        data:[],
      });
    }
  

    const ProfileDetails = await deleteOneProfileDetails(req.params.id);
    if (!ProfileDetails) {
      return res.status(404).json({
        success: false,
        message: "ProfileDetails not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "ProfileDetails deleted successfully",
      ProfileDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};



export const updateprofile = async (req, res) => {
 
  try {
    const { id } = req.params;
    req.body.userID=req.user.id;

    const profile = await getOneProfileDetailsWithDetails(id,req.user.id);
    if (!profile) {
      return res.status(404).json({
        message: "profile detail not found",
        data:[],
      });
    }
     req.body.name = req.body.name.toUpperCase();
     if (!req.body.name) {
       return res.status(400).json({
         success: false,
         message: "Name is required",
       });
     }
 
     const data = await getOneCategoryWithDetails(req.body.categoryID);
     if (!data) {
       return res.status(404).json({
         message: "Category not found",
       });
     }
     let image; 
     if (req.files && req.files.image) {
       try {
         image = await imageUploader(req);
         if (!image || !image.url) {
           throw new Error('Upload failed or image URL missing');
         }
         req.body.image = image.url;
         console.log(req.body.image)
       } catch (error) {
         console.error('Error uploading image:', error);
         // Handle error appropriately
       }
     }
 
     const updated = await updateOne(id, req.body);

     return res.status(201).json({
       success: true,
       message: "Profile created successfully",
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





export const activateProfileDetailsController = async (req, res) => {
  try {

    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneProfileDetailsWithDetails(id,userID);
    if (!data) {
      return res.status(404).json({
        message: "profile detail not found",
        data:[],
      });
    }
   

    const profile = await activate(req.params.id);
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "profile not found",
        
      });
    }

    return res.status(200).json({
      success: true,
      message: "profile activated successfully",
      profile,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const deactivateProfileDetailsController = async (req, res) => {
  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneProfileDetailsWithDetails(id,userID);
    if (!data) {
      return res.status(404).json({
        message: "profile detail not found",
        data:[],
      });
    }
   

    const profile = await deactivate(req.params.id);
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "profile deactivated successfully",
      restaurant,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};