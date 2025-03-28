import bcrypt from "bcryptjs";
import db from "../database/models/index.js";
const users = db["Users"];
const Soldiers = db["Soldiers"];
const ProfileDetails = db["ProfileDetails"];
const Notifications = db["Notifications"];
const ProfileCategories = db["ProfileCategories"];
const Missions = db["Missions"];
const Appointments = db["Appointments"];
const Department = db["Departments"];
import { Op } from 'sequelize';

import Sequelize, { where } from "sequelize";

  export const getUsers = async () => {
    try {
      const allUsers = await users.findAll(
        {
        attributes: { exclude: ["password"] },
        include: [
          // {
          //   model: ProfileDetails,
          //   as: "ProfileDetails",  
          //   include: [
          //     {
          //       model: ProfileCategories,
          //       as: "category", 
          //     },
          //   ],

          // },
          {
            model: Missions,
            as: "missions",
          },
          {
            model: Appointments,
            as: "appointments",
          },
        
          {
            model: Notifications,
            as: "notifications",
          },
          {
            model: Department,
            as: "department",
            include: [
              {
                model: users,
                as: "reader",
                attributes: { exclude: ["password"] }, // Exclude password
              },
            ],
          },
          
        ],
      });

      return allUsers;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  };



export const getSordier= async () => {
  try {
    const allUsers = await users.findAll({
      where: {
        role: {
          [Op.in]: ['user', 'Commander-Officer'], // Fetch users where role is either 'admin' or 'officer'
        },
      },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Missions,
          as: "missions",
        },
        {
          model: Appointments,
          as: "appointments",
        },
        {
          model: Notifications,
          as: "notifications",
        },
        {
          model: Department,
          as: "department",
          include: [
            {
              model: users,
              as: "reader",
              attributes: { exclude: ["password"] }, // Exclude password
            },
          ],
        },
      ],
    });

    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

  export const getUserssor = async () => {
    try {
      const allUsers = await users.findAll(
        {
        where: { role: 'admin' },
        attributes: { exclude: ["password"] },
        include: [
          // {
          //   model: ProfileDetails,
          //   as: "ProfileDetails",  
          //   include: [
          //     {
          //       model: ProfileCategories,
          //       as: "category", 
          //     },
          //   ],

          // },
          {
            model: Missions,
            as: "missions",
          },
          {
            model: Appointments,
            as: "appointments",
          },
        
          {
            model: Notifications,
            as: "notifications",
          },
          {
            model: Department,
            as: "department",
            include: [
              {
                model: users,
                as: "reader",
                attributes: { exclude: ["password"] }, // Exclude password
              },
            ],
          },
          
        ],
      });

      return allUsers;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  };


export const getUsers1 = async () => {
  try {
    const allUsers = await users.findAll();
    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};




export const updateUserWithRestaurant = async (userId, restaurantId) => {
  try {
    const userToUpdate = await users.findOne({
      where: { id: userId },
      attributes: { exclude: ["password"] },
    });

    if (userToUpdate) {
      await userToUpdate.update({ restaurents: restaurantId });
      const updatedUser = await users.findByPk(userId, {
        attributes: { exclude: ["password"] },
      });

      return updatedUser;
    }
    

    return null;
  } catch (error) {
    console.error("Error updating user with restaurant:", error);
    throw error;
  }
};
export const createUser = async (user) => {
  // hashing password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const newUser = await users.create(user);
  return newUser;
};


export const createUserS = async (user) => {
  // hashing password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const newUser = await Soldiers.create(user);
  return newUser;
};



export const createUserCustomer = async (user) => {
  // hashing password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const newUser = await users.create(user);
  return newUser;
};

export const getUser = async (id) => {
  const user = await users.findByPk(id, {
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Missions,
        as: "missions",
      },
      {
        model: Appointments,
        as: "appointments",
      },
    
      {
        model: Notifications,
        as: "notifications",
      },
      {
        model: Department,
        as: "department",
        include: [
          {
            model: users,
            as: "reader",
          },
        ],
      },
      
    ],
  });
  return user;
};
export const GetUserPassword = async (id) => {
  const user = await users.findByPk(id, {
    attributes: ['password'],
  });
  return user ? user.password : null;
};


export const getUserByEmail = async (email) => {
  try {
    const user = await users.findOne({
      where: { email },
    });

    return user;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching user:", error);
    throw error;
  }
};





export const getUserByPhone = async (phone) => {
  try {
    const user = await users.findOne({
      where: { phone }

    });

    return user;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const getUserByAID = async (armyid) => {
  try {
    const user = await users.findOne({
      where: { armyid }

    });

    return user;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching user:", error);
    throw error;
  }
};



export const getallUsers = async () => {
  const allUsers = await users.findAll({
    // where: { restaurents },
    attributes: { exclude: ["password"] },
  });
  return allUsers;
};



export const updateUser = async (id, user) => {
  const userToUpdate = await users.findOne(
    { where: { id } },
    { attributes: { exclude: ["password"] } }
  );
  if (userToUpdate) {
    await users.update(user, { where: { id } });
    return user;
  }
  return null;
};

export const deleteUser = async (id) => {
  const userToDelete = await users.findOne({ where: { id } });
  if (userToDelete) {
    await users.destroy({ where: { id } });
    return userToDelete;
  }
  return null;
};

export const activateUser = async (id) => {
  const userToActivate = await users.findOne(
    { where: { id } },
    { attributes: { exclude: ["password"] } }
  );
  if (userToActivate) {
    await users.update({ status: "active" }, { where: { id } });
    return userToActivate;
  }
  return null;
};

export const deactivateUser = async (id) => {
  const userToDeactivate = await users.findOne(
    { where: { id } },
    { attributes: { exclude: ["password"] } }
  );
  if (userToDeactivate) {
    await users.update({ status: "inactive" }, { where: { id } });
    return userToDeactivate;
  }
  return null;
};


export const updateUserCode = async (email, user) => {
  const userToUpdate = await users.findOne(
    { where: { email } },
    { attributes: { exclude: ["password"] } }
  );
  if (userToUpdate) {
    await users.update(user, { where: { email } });
    return user;
  }
  return null;
};
export const getUserByCode = async (email,code) => {
  try {
    const user = await users.findOne(
      {
        where: { code: code ,email:email},
      }
    );

    return user;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching user:", error);
    throw error;
  }
};