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
    req.body.assignedBY = req.user.id;
    req.body.status = "active";
    const userID = req.body.userID;
    const missionID = req.body.missionID;

    if (!userID) {
      return res.status(400).json({ success: false, message: "User is required" });
    }

    if (!missionID) {
      return res.status(400).json({ success: false, message: "Mission is required" });
    }

    // Fetch mission details
    const data = await getOneMissionWithDetails(missionID);
    if (!data) {
      return res.status(404).json({ message: "Mission detail not found" });
    }
    if (data.status === "inactive") {
      return res.status(404).json({ message: "Mission is not active" });
    }

    // Fetch user details
    const user = await getUser(userID);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if user is active
    if (user.status !== "active") {
      return res.status(400).json({ message: "User is not active" });
    }

    // Check if user is a soldier (assuming "user" role is for soldiers)
    if (user.role !== "user") {
      return res.status(400).json({ message: "User is not eligible (Not a soldier)" });
    }

    // Check if user has at least 3 years of service
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
    if (new Date(user.joindate) > threeYearsAgo) {
      return res.status(400).json({ message: "User is not eligible (Less than 3 years of service)" });
    }

    // Check if user already has an appointment
    const existingAppointment = await Appointments.findOne({ where: { userID, status: "Assigned" } });
    if (existingAppointment) {
      return res.status(400).json({ message: "User already has an assigned appointment" });
    }

    // Proceed with appointment creation
    let claim = {
      message: "You have been assigned to a new mission. Please go to the system to see more details now!",
      missionname: data.name,
      missionstartdate: data.start_date,
      missionlocation: data.location,
      missionenddate: data.end_date,
    };

    console.log("Creating appointment...");
    const newAppointment = await createAppoitment(req.body);

    console.log("Sending email notification...");
    await new Email(user, claim).sendNotification();

    console.log("Creating in-app notification...");
    await createNotification({
      userID: user.id,
      title: "New Appointment",
      message: "You have a new assigned mission appointment",
      type: "Alert",
      isRead: false,
    });

    console.log("Updating hasAppointment status...");
    await Users.update(
      { hasAppointment: "yes" },
      { where: { id: user.id } }
    );

    console.log("Appointment successfully created!");
    return res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      Appointment: newAppointment,
    });

  } catch (error) {
    console.error("Error creating appointment:", error);
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
        as: "department",
      },
    });

    if (!batarian) {
      console.log("Batarian not found");
      return res.status(404).json({ message: "Batarian not found" });
    }

    console.log("Fetching users in batarian:", batarianId);
    const users = await Users.findAll({
      where: { batarianId },
      include: [{ model: Appointments, as: "appointments" }],
    });

    console.log("Users in department:", users.length);
    if (!users.length) {
      return res.status(404).json({ message: "No users found in this batarian" });
    }

    const currentDate = new Date();
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(currentDate.getFullYear() - 3);

    console.log("Filtering users who joined more than 3 years ago");
    const usersEligible = [];
    const usersNotAssigned = [];

    for (const user of users) {
      if (new Date(user.joindate) < threeYearsAgo) {
        if (user.status !== "active") {
          usersNotAssigned.push({ id: user.id, hasappoitment: "Not active" });
        } else if (user.role !== "user") {  
          usersNotAssigned.push({ id: user.id, hasappoitment: "Not Soldier" });
        } else if (user.appointments && user.appointments.length > 0) {  
          // User already has an appointment, skip them
          usersNotAssigned.push({ id: user.id, hasappoitment: "Already appointed" });
        } else {
          usersEligible.push(user);
        }
      } else {
        usersNotAssigned.push({ id: user.id, hasappoitment: "Less than 3 years of service" });
      }
    }

    console.log("Users eligible for assignment:", usersEligible.length);
    if (usersEligible.length === 0) {
      for (const user of usersNotAssigned) {
        await Users.update(
          { hasappoitment: user.hasappoitment },
          { where: { id: user.id } }
        );
      }
      return res.status(404).json({
        success: false,
        message: "No eligible users found for assignment",
        usersNotAssigned,
      });
    }

    console.log("Creating appointment assignments...");
    const appointments = usersEligible.map(user => ({
      missionID: missionId,
      userID: user.id,
      status: "Assigned",
      assignedBY,
    }));

    console.log("Creating notifications...");
    const notifications = usersEligible.map(user => ({
      userID: user.id,
      title: "New Mission Assignment",
      message: `You have been assigned to a new mission (ID: ${missionId}).`,
      type: "mission",
    }));

    console.log("Saving appointments...");
    await Appointments.bulkCreate(appointments);

    console.log("Saving notifications...");
    await Notifications.bulkCreate(notifications);

    console.log("Updating hasappoitment status for assigned users...");
    await Users.update(
      { hasappoitment: "yes" },  
      { where: { id: usersEligible.map(user => user.id) } }
    );

    for (const user of usersNotAssigned) {
      await Users.update(
        { hasappoitment: user.hasappoitment },  
        { where: { id: user.id } }
      );
    }

    console.log("User status updated successfully!");
    console.log("Successfully assigned appointments!");
    res.status(201).json({
      message: "Appointments assigned successfully!",
      assignedUsers: usersEligible.length,
      usersNotAssigned,
    });
  } catch (error) {
    console.error("Error assigning appointments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


