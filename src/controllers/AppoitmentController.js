// AppoitmentController.js
import {
  createAppoitment,
  getAllAppoitmentes,
  deleteOneAppoitment,
  getOneAppoitmentWithDetails,
  changeAppoitmentstatus,
  getmyappoitments
  

} from "../services/AppoitmentService.js";
import {
  getUser,
} from "../services/userService.js";
import {
  createNotification,
} from "../services/NotificationService";

// MissionController.js
import {
  getOneMissionWithDetails,
} from "../services/MissionService.js";
import Email from "../utils/mailer.js";

export const addAppoitmentController = async (req, res) => {
  try {
   req.body.assignedBY=req.user.id;
      req.body.status = "active";
   const userID = req.user.id; // Get logged-in user's ID
   let missionID=req.body.missionID;


    if (!req.body.userID) {
      return res.status(400).json({
        success: false,
        message: "User is required",
      });
    }

    if (!req.body.missionID) {
      return res.status(400).json({
        success: false,
        message: "Mission is required",
      });
    }

    const data = await getOneMissionWithDetails(missionID);
    if (!data) {
      return res.status(404).json({
        message: "mission detail not found",
      });
    }

    if (data.status=="inactive") {
      return res.status(404).json({
        message: "mission is not active",
      });
    }
    const user = await getUser(req.body.userID);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (user.status!="active") {
      return res.status(404).json({
        message: "user is not active",
      });
    }

 
    // console.log(data)
    let claim = {
      message: "",
      missionname: "",
      missionstartdate: "",
      missionlocation: "",
      missionenddate: ""
    };
    
    // Assign values to properties
    claim.message = "you have assigned to new mission please go to sytem to see more details now !";
    claim.missionname = data.name;
    claim.missionstartdate = data.start_date;
    claim.missionlocation = data.location;
    claim.missionenddate = data.end_date;
    
    const newAppoitment = await createAppoitment(req.body);
    await new Email(user,claim).sendNotification();
     const notification = await createNotification({ userID:user.id,title:"New appoitment", message:"you have new assigned mission appoitment", type:'Alert', isRead: false });
        

    return res.status(201).json({
      success: true,
      message: "Appoitment created successfully",
      Appoitment: newAppoitment,
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


export const AppoitmentWithAllController = async (req, res) => {
  try {
    const userID = req.user.id; // Get logged-in user's ID

    let data = await getAllAppoitmentes();
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "No Appoitments found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Appoitments details retrieved successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getOneAppoitmentController = async (req, res) => {


  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneAppoitmentWithDetails(id);
    if (!data) {
      return res.status(404).json({
        message: "Appoitment detail not found",
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

export const getMyAppoitment = async (req, res) => {


  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getmyappoitments(userID);
    if (!data) {
      return res.status(404).json({
        message: "Appoitment detail not found",
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


export const deleteOneAppoitmentController = async (req, res) => {
  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    const data = await getOneAppoitmentWithDetails(id);
    if (!data) {
      return res.status(404).json({
        message: "Appoitment detail not found",
        data:[],
      });
    }
    // console.log(data[0].id);

    // if (userID!=data[0].assignedBY) {
    //   return res.status(401).json({
    //     message: "you can not modify Appoitment you dont create",
    //   });
    // }


    const Missiondata = await getOneMissionWithDetails(data[0].missionID);
    if (!Missiondata) {
      return res.status(404).json({
        message: "mission detail not found",
      });
    }


    let claim = {
      message: "",
      missionname: "",
      missionstartdate: "",
      missionlocation: "",
      missionenddate: ""
    };
    
    // Assign values to properties
    claim.message = "Sorry  Mission Appoitment you have assigned has been deleted";
    claim.missionname = Missiondata.name;
    claim.missionstartdate = Missiondata.start_date;
    claim.missionlocation = Missiondata.location;
    claim.missionenddate = Missiondata.end_date;
  
    await new Email(data[0].user,claim).sendNotification();
     const notification = await createNotification({ userID:data[0].user.id, title:"Appoitment deleted",message:"Appoitment you have assigned has been deleted", type:'Alert', isRead: false });
        

    const Appoitment = await deleteOneAppoitment(req.params.id);
    if (!Appoitment) {
      return res.status(404).json({
        success: false,
        message: "Appoitment not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Appoitment deleted successfully",
      Appoitment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};


export const changeAppoitmentController = async (req, res) => {
  try {
    const { id } = req.params;
    const userID = req.user.id; // Get logged-in user's ID

    // Check if the status is provided
    if (!req.body.status || req.body.status === "") {
      return res.status(400).json({
        success: false,
        message: "Please provide a status",
      });
    }

    // Validate status to be one of the allowed values
    const validStatuses = ["active", "inactive", "ongoing", "closed"];
    if (!validStatuses.includes(req.body.status)) {
      return res.status(400).json({
        success: false,
        message: "Valid statuses are: active, inactive, ongoing, closed",
      });
    }

    // Fetch appointment details
    const data = await getOneAppoitmentWithDetails(id);
    if (!data) {
      return res.status(404).json({
        message: "Appointment detail not found",
        data: [],
      });
    }

    // Check if the logged-in user is the creator of the appointment
    if (userID !== data[0].assignedBY) {
      return res.status(401).json({
        message: "You cannot modify an appointment you didn't create",
      });
    }

    // Fetch mission details
    const Missiondata = await getOneMissionWithDetails(data[0].missionID);
    if (!Missiondata) {
      return res.status(404).json({
        message: "Mission detail not found",
      });
    }

    // Prepare the claim message
    let claim = {
      message: `Mission Appointment status has changed to ${req.body.status}`,
      missionname: Missiondata.name,
      missionstartdate: Missiondata.start_date,
      missionlocation: Missiondata.location,
      missionenddate: Missiondata.end_date,
    };

    // Send notification email
    await new Email(data[0].user, claim).sendNotification();
    req.body.title="Appointment status changed"
 
    // Create a new notification for the user
    const notification = await createNotification({
      userID: data[0].user.id,
      title: req.body.title,
      message: `Appointment status has changed to ${req.body.status}`,
      type: 'Alert',
      isRead: false,
    });

    // Update the appointment status
    const Appoitment = await changeAppoitmentstatus(req.params.id, req.body.status);
    if (!Appoitment) {
      return res.status(401).json({
        success: false,
        message: "Appointment not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment status updated successfully",
      Appoitment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};



import db from "../database/models/index.js";
const Users = db["Users"];
const Departments = db["Departments"];
const Notifications = db["Notifications"];
const Appointments = db["Appointments"];
const Batarians = db["Batarians"];


// const { Users, Departments, Appointments, Notifications } = require("../models");
const { Op } = require("sequelize");

// Helper function to check if the user joined more than three years ago
const hasServedMoreThanThreeYears = (joinDate) => {
  const threeYearsAgo = new Date();
  threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
  return new Date(joinDate) <= threeYearsAgo;
};

// export const assignAppointments = async (req, res) => {
//   try {
//     req.body.assignedBY = req.user.id;
//     const { missionId, batarianId, assignedBY } = req.body
//     if (!missionId || !batarianId || !assignedBY) {
//       return res.status(400).json({ error: "missionId, batarianId, and assignedBY are required" });
//     }

//      // Find the Batarian by its ID and include the department info
//      const batarian = await Batarians.findByPk(batarianId, {
//       include: {
//         model: Departments,
//         as: "department", // use the alias defined in the association
//       },
//     });

//     // Check if the Batarian exists
//     if (!batarian) {
//       return res.status(404).json({ message: "Batarian not found" });
//     }

//     // Get the departmentId of the Batarian
//     const departmentId = batarian.departmentId;

//     // Find all users associated with the same departmentId
//     const users = await Users.findAll({
//       where: {
//         departmentId: departmentId,
//       },
//     });

//     // If no users are found, return an empty list
//     if (!users.length) {
//       return res.status(404).json({ message: "No users found in this department" });
//     }



//     const currentDate = new Date();

//     // // Filter users who joined more than 3 years ago
//     const threeYearsAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 3));

//     const usersJoinedMoreThan3YearsAgo = users.filter(user => new Date(user.joindate) < threeYearsAgo && user.appointments.length === 0 && user.role == 'user');

//     if (usersJoinedMoreThan3YearsAgo.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "No users found who joined more than 3 years ago",
//         users: []
//       });
//     }








//     // Assign appointments and notify users
//     const appointments = usersJoinedMoreThan3YearsAgo.map((user) => ({
//       missionID: missionId,
//       userID: user.id,
//       status: "Assigned",
//       assignedBY,
//     }));

//     const notifications = usersJoinedMoreThan3YearsAgo.map((user) => ({
//       userID: user.id,
//       title: "New Mission Assignment",
//       message: `You have been assigned to a new mission (ID: ${missionId}).`,
//       type: "mission",
//     }));

//     await Appointments.bulkCreate(appointments);
//     await Notifications.bulkCreate(notifications);

//     res.status(201).json({ message: "Appointments assigned successfully!", assignedUsers: usersJoinedMoreThan3YearsAgo.length });
//   } catch (error) {
//     console.error("Error assigning appointments:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const assignAppointments = async (req, res) => {
  try {
    console.log("Received request:", req.body);

    req.body.assignedBY = req.user.id;
    const { missionId, batarianId, assignedBY } = req.body;

    if (!missionId || !batarianId || !assignedBY) {
      console.log("Missing required fields");
      return res.status(400).json({ error: "missionId, batarianId, and assignedBY are required" });
    }

    console.log("Fetching Batarian with ID:", batarianId);
    const batarian = await Batarians.findByPk(batarianId, {
      include: {
        model: Departments,
        as: "department", // Ensure alias matches your association
      },
    });

    if (!batarian) {
      console.log("Batarian not found");
      return res.status(404).json({ message: "Batarian not found" });
    }

    console.log("Batarian found:", batarian);

    const departmentId = batarian.department?.id;
    if (!departmentId) {
      console.log("Department not found for Batarian");
      return res.status(404).json({ message: "Department not found for this Batarian" });
    }

    console.log("Fetching users in department:", departmentId);
    const users = await Users.findAll({
      where: { departmentId },
      include: [{ model: Appointments, as: "appointments" }],
    });

    console.log("Users in department:", users.length);
    if (!users.length) {
      return res.status(404).json({ message: "No users found in this department" });
    }

    const currentDate = new Date();
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);

    console.log("Filtering users who joined more than 3 years ago...");
    const usersJoinedMoreThan3YearsAgo = users.filter(
      (user) =>
        new Date(user.joindate) < threeYearsAgo &&
        user.appointments?.length === 0 &&
        user.role === "user"
    );

    console.log("Users eligible for assignment:", usersJoinedMoreThan3YearsAgo.length);
    if (usersJoinedMoreThan3YearsAgo.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found who joined more than 3 years ago",
        users: [],
      });
    }

    console.log("Creating appointment assignments...");
    const appointments = usersJoinedMoreThan3YearsAgo.map((user) => ({
      missionID: missionId,
      userID: user.id,
      status: "Assigned",
      assignedBY,
    }));

    console.log("Creating notifications...");
    const notifications = usersJoinedMoreThan3YearsAgo.map((user) => ({
      userID: user.id,
      title: "New Mission Assignment",
      message: `You have been assigned to a new mission (ID: ${missionId}).`,
      type: "mission",
    }));

    console.log("Saving appointments...");
    await Appointments.bulkCreate(appointments);

    console.log("Saving notifications...");
    await Notifications.bulkCreate(notifications);

    console.log("Successfully assigned appointments!");
    res.status(201).json({
      message: "Appointments assigned successfully!",
      assignedUsers: usersJoinedMoreThan3YearsAgo.length,
    });

  } catch (error) {
    console.error("Error assigning appointments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
