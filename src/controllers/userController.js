import Email from "../utils/mailer.js";
import bcrypt from "bcrypt";
import {
  createUser,
  getUserByEmail,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  activateUser,
  deactivateUser,
  GetUserPassword,
  getallUsers,
  getUserByPhone,
  getUserByCode,
  updateUserCode,
  getUsers1
} from "../services/userService.js";
import {
  createNotification,
} from "../services/NotificationService";

import {

  checkExistingDepartmentReader 

} from "../services/departmentService.js";
import imageUploader from "../helpers/imageUplouder.js";

const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

export const processAddUsers = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded.' });
  }

  const fileExtension = path.extname(req.file.originalname);
  if (!['.xlsx', '.xls'].includes(fileExtension)) {
    return res.status(400).json({ success: false, message: 'Invalid file format. Please upload an Excel file.' });
  }

  const excelFilePath = req.file.path;
  const results = [];
  const duplicateUsers = [];

  try {
    const workbook = xlsx.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    const data = xlsx.utils.sheet_to_json(sheet);

    for (const row of data) {
      if (!row.FIRSTNAME || !row.LASTNAME || !row.EMAIL || !row.PHONE || !row.ROLE) {
        continue; // Skip incomplete entries
      }

      const email = row.EMAIL.trim().toLowerCase();
      const phone = row.PHONE;
      const role = row.ROLE;


  

      // Check for duplicate users
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        duplicateUsers.push(email);
        continue;
      }

      const phoneExist = await getUserByPhone(phone.toString());
      if (phoneExist) {
        duplicateUsers.push(phone);
        continue;
      }

      // Generate a secure password
      const password = `D${Math.random().toString(36).slice(-8)}`;
      const hashedPassword = await bcrypt.hash(password, 10);

      const userData = {
        firstname: row.FIRSTNAME,
        lastname: row.LASTNAME,
        phone,
        email,
        role,
        password: hashedPassword,
        status: 'active',
      };

      const newUser = await createUser(userData);
      newUser.password = password; // Temporary plain password for email notification

      // Send email
      await new Email(newUser).sendAccountAdded();

      // Create notification
      await createNotification({
        userID: newUser.id,
        title: "Account created for you",
        message: "Your account has been successfully created.",
        type: 'account',
        isRead: false,
      });

      results.push({
        id: newUser.id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        role: newUser.role,
      });
    }

    // Remove the uploaded file after processing
    fs.unlinkSync(excelFilePath);

    return res.json({
      success: true,
      message: 'Users processed successfully.',
      createdUsers: results,
      duplicateUsers: duplicateUsers.length > 0 ? `Duplicate users skipped: ${duplicateUsers.join(', ')}` : 'No duplicates found',
    });

  } catch (error) {
    console.error('Error processing the Excel file:', error.message);
    return res.status(500).json({ success: false, message: 'Error processing the Excel file.', error: error.message });
  }
};

export const changePassword = async (req, res) => {
  console.log(req.user.id)
  const { oldPassword, newPassword, confirmPassword } = req.body;
  if ( !oldPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Please provide userId, oldPassword, newPassword, and confirmPassword",
    });
  }

  try {
    const user = await GetUserPassword(req.user.id);
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid user",
      });
    }

    console.log("Retrieved user from database:", user);

    const storedPassword = user || null;

    if (!storedPassword) {
      return res.status(500).json({
        success: false,
        message: "User password not found in the database",
      });
    }

    const validPassword = await bcrypt.compare(oldPassword, storedPassword);

    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid old password",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New password and confirm password do not match",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await updateUser(req.user.id, { password: hashedPassword });

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const addUser = async (req, res) => {
  let role = req.user.role;

  if (!req.body.role || req.body.role === "") {
    return res.status(400).json({
      success: false,
      message: "Please provide role",
    });
  }

  if (!req.body.firstname || req.body.firstname === "") {
    return res.status(400).json({
      success: false,
      message: "Please provide firstname",
    });
  }
  if (!req.body.lastname || req.body.lastname === "") {
    return res.status(400).json({
      success: false,
      message: "Please provide lastname",
    });
  }
  if (!req.body.email || req.body.email === "") {
    return res.status(400).json({
      success: false,
      message: "Please provide email",
    });
  }
  if (!req.body.phone || req.body.phone === "") {
    return res.status(400).json({
      success: false,
      message: "Please provide phone",
    });
  }
  if (role === "user") {
      return res.status(400).json({
        success: false,
        message: "you are not allowed to add any user",
      });
    
  }

  if (role === "admin") {
    if (!req.body.role === "Commander-Officer" || !req.body.role === "user") {
      return res.status(400).json({
        success: false,
        message: "you are not allowed add user lather that Commander-Officer or persenel",
      });
    }

  }

  try {
    const userExist = await getUserByEmail(req.body.email);
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "email already exist",
      });
    }

    const phoneExist = await getUserByPhone(req.body.phone);
    if (phoneExist) {
      return res.status(400).json({
        success: false,
        message: "phone number has been used",
      });
    }

    // generate password
    const password = `D${Math.random().toString(36).slice(-8)}`;

    // create user with generated password and set status to active
    req.body.password = password;
    req.body.status = "active";
    console.log(req.body);

    const newUser = await createUser(req.body);
    newUser.password = password;

    // send email
    await new Email(newUser).sendAccountAdded();

    const notification = await createNotification({ userID:newUser.id,title:"Account created for you", message:"your account has been created successfull", type:'account', isRead: false });
    

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser.id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        role: newUser.role, 
        departmentId: newUser.departmentId,
        rank: newUser.rank,
        armyid: newUser.armyid,
        joindate: newUser.joindate,

      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try { 
    let filteredusers=[];
    let users = await getUsers();
    if (req.user.role === "admin") {
      filteredusers = users.filter(user => user.id != req.user.id);
    } 
    else if (req.user.role === "Commander-Officer") {
      filteredusers = users.filter(user => user.role === "user" || user.id != req.user.id && user.role != "admin");
    } 
    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      users:filteredusers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};


export const getUsersWithoutAppointments = async (req, res) => {
  try {
    // Fetch all users with their appointments
    let users = await getUsers1();

    // Get the current date
    const currentDate = new Date();

    // Filter users who joined more than 3 years ago
    const threeYearsAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 3));

    const usersJoinedMoreThan3YearsAgo = users.filter(user => new Date(user.joindate) < threeYearsAgo && user.appointments.length === 0);

    if (usersJoinedMoreThan3YearsAgo.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found who joined more than 3 years ago",
        users: []
      });
    }


    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      users: usersJoinedMoreThan3YearsAgo
    });
  } catch (error) {
    console.error("Error fetching users who joined more than 3 years ago:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



export const getOneUser = async (req, res) => {

  try {
    const user = await getUser(req.params.id);

       if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const updateOneUser = async (req, res) => {
  try {
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
    console.log(req.body.image)
    const user = await updateUser(req.params.id, req.body);
    if(req.params.id!=req.user.id){
      const notification = await createNotification({ userID:req.params.id,title:"your  account has been updated", message:"your account has been edited by admin", type:'account', isRead: false });
    
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const deleteOneUser = async (req, res) => {
  try {
    const existingUser = await getUser(req.params.id);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (req.user.role === "customer" && req.user.role !== "restaurentadmin") {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }
  
    const user = await deleteUser(req.params.id);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const activateOneUser = async (req, res) => {
  
  try {

    // let role = req.user.role;
    // if (role === "restaurentadmin") {
    //   if (req.body.role === "superadmin" || req.body.role === "restaurentadmin") {
    //     return res.status(400).json({
    //       success: false,
    //       message: "you are not allowed to add superadmin or restaurentadmin ",
    //     });
    //   }}


    const existingUser = await getUser(req.params.id);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
 


    const user = await activateUser(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User activated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const deactivateOneUser = async (req, res) => {
  try {
    const existingUser = await getUser(req.params.id);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
 
    const user = await deactivateUser(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User deactivated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};


export const checkEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Please provide your Email",
    });
  }

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "There is no account associated with that email",
      });
    }

    // Generate a random 6-digit code including time string
    const timestamp = Date.now().toString().slice(-3); // Get the last 3 digits of the timestamp
    const randomPart = Math.floor(100 + Math.random() * 900).toString(); // Get a 3-digit random number
    const code = timestamp + randomPart; // Combine both parts to form a 6-digit code


    await new Email(user, null, code).sendResetPasswordCode();
    const user1 = await updateUserCode(email, {code:code});

    return res.status(200).json({
      success: true,
      message: "Code sent to your email successfully",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const checkCode = async (req, res) => {
  const { code } = req.body;
  if (!req.params.email) {
    return res.status(400).json({
      success: false,
      message: "Please provide your Email",
    });
  }

  try {
    const user = await getUserByCode(req.params.email,code);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "invalid code",
      });
    }

    return res.status(200).json({
      success: true,
      message: "now you can reset your password",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const ResetPassword = async (req, res) => {

  const user = await getUserByEmail(req.params.email);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "There is no account associated with that email",
    });
  }
  if (!user.code) {
    return res.status(400).json({
      success: false,
      message: "No Reset Code",
    });
  }
  const { newPassword, confirmPassword } = req.body;
  if ( !newPassword || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Please provide newPassword, and confirmPassword",
    });
  }

  try {

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New password and confirm password do not match",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await updateUser(user.id, { password: hashedPassword,code:'' });

    return res.status(200).json({
      success: true,
      message: "Password changed successfully, Login",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// export const getAllUsers11 = async (req, res) => {
//   try {
//     let filteredUsers = [];
//     let users = await getUsers();

//     // Filter users for 'Commander-Officer' role, excluding current user and admin
//     filteredUsers = users.filter(user => 
//       (user.role === "Commander-Officer" && user.id !== req.user.id) && user.role !== "admin"
//     );

//     return res.status(200).json({
//       success: true,
//       message: "Users retrieved successfully",
//       users: filteredUsers,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Something went wrong",
//       error,
//     });
//   }
// };


export const getAllUsers11 = async (req, res) => {
  try {
    let filteredUsers = [];
    let users = await getUsers();
    
    // Loop through the users and check if the user is assigned as a leader in any department
    for (let user of users) {
      const existReader = await checkExistingDepartmentReader(user.id);
      // Only include users who are either 'Commander-Officer' and are not assigned to any department
      if (user.role === "Commander-Officer" && !existReader && user.id !== req.user.id && user.role !== "admin") {
        filteredUsers.push(user);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      users: filteredUsers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};



