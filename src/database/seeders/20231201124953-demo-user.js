'use strict';
import bcrypt from "bcrypt";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10; // Number of salt rounds for bcrypt

    const hashedPasswordAdmin = await bcrypt.hash("1234", saltRounds);
    const hashedPasswordOfficer = await bcrypt.hash("1234", saltRounds);
    const hashedPasswordpersonel = await bcrypt.hash("1234", saltRounds);

    return queryInterface.bulkInsert("Users", [
      {
        firstname: "admin",
        lastname: "cedro",
        email: "admin@gmail.com",
        phone: "0780000000",
        role: "admin",
        status: "active",
        password: hashedPasswordAdmin,
        gender: "Male",
        address: "huye/tumba",
        image: 'https://res.cloudinary.com/dzl8xve8s/image/upload/v1739974089/Card/tpfxwscg5hfek50yitjc.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "Uwase",
        lastname: "karara",
        email: "officer@gmail.com",
        phone: "0781234567",
        role: "Commander-Officer",
        status: "active",
        password: hashedPasswordOfficer,
        gender: "Male",
        address: "Kigali, Rwanda",
        image: 'http://res.cloudinary.com/dzl8xve8s/image/upload/v1724766686/Card/nrujel7xhcokiikabpyj.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "cedrick",
        lastname: "cedro",
        email: "user@gmail.com",
        phone: "0787654321",
        role: "user",
        status: "active",
        password: hashedPasswordpersonel,
        gender: "Male",
        address: "Kigali, Rwanda",
        image: 'http://res.cloudinary.com/dzl8xve8s/image/upload/v1724766686/Card/nrujel7xhcokiikabpyj.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
  
};

