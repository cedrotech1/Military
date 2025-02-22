import { name } from "ejs";
import { Router } from "express";
import { serve, setup } from "swagger-ui-express";

const docrouter = Router();

const options = {
  openapi: "3.0.1",
  info: {
    title: "Military system APIs documentation",
    version: "1.0.0",
    description: "Military system APIs documentation",
  },
  basePath: "/api",
  security: [
    {
      bearerAuth: [],
    },
  ],
  tags: [
    { name: "System Authontication", description: "" },
    { name: "Users", description: "Users" },
    { name: "profile", description: "profile" },
    { name: "categories", description: "categories" },
    { name: "mission", description: "mission" },
    { name: "appoitment", description: "appoitment" },
    { name: "notification", description: "notification" },
    { name: "statistics", description: "statistics" },
    { name: "department", description: "department" },

  ],
  paths: {
    "/api/v1/auth/login": {
      post: {
        tags: ["System Authontication"],
        summary: "Login a user",
        description: "Login a user",
        operationId: "loginUser",
        security: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                email: "admin@gmail.com",
                password: "admin",
              },
            },
            required: true,
          },
        },
        responses: {
          200: {
            description: "User logged in successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/addUser": {
      post: {
        tags: ["Users"],
        summary: "Add a user",
        description: "Add a user",
        operationId: "addOneUser",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                firstname: "John",
                lastname: "Doe",
                email: "test@example.com",
                phone: "08012345678",
                role: "Commander-Officer   /user",
                gender: "Male",
                address: "Gatsata",
                departmentId:"1",
             
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },



    "/api/v1/users": {
      get: {
        tags: ["Users"],
        summary: "Get all users",
        description: "Get all users",
        operationId: "getAllUsers",
        responses: {
          200: {
            description: "User deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/users/com": {
      get: {
        tags: ["Users"],
        summary: "Get all officers users",
        description: "Get all officers users",
        operationId: "getAllUsersofficers",
        responses: {
          200: {
            description: "User officers deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/users/formission": {
      get: {
        tags: ["Users"],
        summary: "Get all users for mission",
        description: "Get all users",
        operationId: "getAllUsersForMission",
        responses: {
          200: {
            description: "User retrieved successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/{id}": {
      get: {
        tags: ["Users"],
        summary: "Get a user",
        description: "Get a user",
        operationId: "getOneUser",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/update/{id}": {
      put: {
        tags: ["Users"],
        summary: "Update a user",
        description: "Update a user",
        operationId: "updateOneUser",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                firstname: "John",
                lastname: "Doe",
                email: "test@example.com",
                phone: "08012345678",
              },
            },
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "User deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/changePassword": {
      put: {
        tags: ["Users"],
        summary: "change  user password",
        description: "change  user password  for current loged in user !! ",
        operationId: "change-passwordr",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                oldPassword: "oldp",
                newPassword: "newp",
                confirmPassword: "cpass",
               
              },
            },
          },
        },
        responses: {
          200: {
            description: "User password updated  successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/check": {
      post: {
        tags: ["Users"],
        summary: "Get  users user by email by email and send code",
        description: "Get all users",
        operationId: "getAllUserscheck",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                email: "cedrickhakuzimana.com",                    
              },
            },
            required: true,
          },
        },
        responses: {
          200: {
            description: "User retrived successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/code/{email}": {
      post: {
        tags: ["Users"],
        summary: "check code !",
        description: "checking code send thrugth email",
        operationId: "code",
        parameters: [
          {
            name: "email",
            in: "path",
            description: "User's email",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                code: "10000",                    
              },
            },
            required: true,
          },
        },
        responses: {
          200: {
            description: "User retrived successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/resetPassword/{email}": {
      put: {
        tags: ["Users"],
        summary: "reset  user password",
        description: "reset  user password  !! ",
        operationId: "reset-passwordr",
        parameters: [
          {
            name: "email",
            in: "path",
            description: "User's email",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                newPassword: "newp",
                confirmPassword: "cpass",
               
              },
            },
          },
        },
        responses: {
          200: {
            description: "User password updated  successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },



    "/api/v1/users/delete/{id}": {
      delete: {
        tags: ["Users"],
        summary: "Delete a user",
        description: "Delete a user",
        operationId: "deleteOneUser",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/users/activate/{id}": {
      put: {
        tags: ["Users"],
        summary: "Activate a user",
        description: "Activate a user",
        operationId: "activateOneUser",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User activated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/users/deactivate/{id}": {
      put: {
        tags: ["Users"],
        summary: "Deactivate a user",
        description: "Deactivate a user",
        operationId: "deactivateOneUser",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User deactivated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
   






    "/api/v1/profile/add": {
      post: {
        tags: ["profile"],
        summary: "Add a profile",
        description: "Add a profile",
        operationId: "addprofile",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Profile",
              },
              example: {
                categoryID: "1",
                name: "huye/ngoma",
                description: "descri.......",
               
              },
            },
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/Profile",
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "profile created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/profile/add/{id}": {
      post: {
        tags: ["profile"],
        summary: "Add a profile for others",
        description: "Add a profile",
        operationId: "addotherprofile",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "profile's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Profile",
              },
              example: {
                categoryID: "1",
                name: "huye/ngoma",
                description: "descri.......",
               
              },
            },
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/Profile",
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "profile created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/profile/": {
      get: {
        tags: ["profile"],
        summary: "Get a profile",
        description: "Get a profile",
        operationId: "getOneprofile",
    
        responses: {
          200: {
            description: "User deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/profile/delete/{id}": {
      delete: {
        tags: ["profile"],
        summary: "delete a profile",
        description: "delete a profile",
        operationId: "deleteOneprofile",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "profile's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "profile deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
 
    "/api/v1/profile/update/{id}": {
      put: {
        tags: ["profile"],
        summary: "Add a profile",
        description: "Add a profile",
        operationId: "updateprofile",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "profile's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Profile",
              },
              example: {
                categoryID: "1",
                name: "huye/ngoma",
                description: "descri.......",
               
              },
            },
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/Profile",
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "profile created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/profile/one/{id}": {
      get: {
        tags: ["profile"],
        summary: "Get a profile",
        description: "Get a profile",
        operationId: "getOneprofile",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "profile's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "profile deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/profile/activate/{id}": {
      put: {
        tags: ["profile"],
        summary: "activate a profile",
        description: "activate a profile",
        operationId: "activateOneprofile",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "profile's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],

        responses: {
          200: {
            description: "profile activated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/profile/disactivate/{id}": {
      put: {
        tags: ["profile"],
        summary: "disactivate a profile",
        description: "disactivate a profile",
        operationId: "disactivateprofile",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "profile's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],

        responses: {
          200: {
            description: "profile disactivated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

















    
    "/api/v1/mission/add": {
      post: {
        tags: ["mission"],
        summary: "Add a mission",
        description: "Add a mission",
        operationId: "addmission",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Mission",
              },
              example: {
              
                name: "huye/ngoma",
                description: "descri.......",
                CountryID:"1",
                location:"saoud arabia",
                start_date: "2025-05-20",
                end_date: "2025-07-20",
               
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "mission created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/mission/": {
      get: {
        tags: ["mission"],
        summary: "Get a mission",
        description: "Get a mission",
        operationId: "getOnemission",
    
        responses: {
          200: {
            description: "mission deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/mission/countries": {
      get: {
        tags: ["mission"],
        summary: "Get a  countries",
        description: "Get a  countries",
        operationId: "countries",
    
        responses: {
          200: {
            description: "countries deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/mission/countries/all": {
      get: {
        tags: ["mission"],
        summary: "Get a  all countries",
        description: "Get a  all countries",
        operationId: "allcountries",
    
        responses: {
          200: {
            description: "countries deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/mission/delete/{id}": {
      delete: {
        tags: ["mission"],
        summary: "delete a mission",
        description: "delete a mission",
        operationId: "deleteOnemission",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "mission's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "mission deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
 
    "/api/v1/mission/update/{id}": {
      put: {
        tags: ["mission"],
        summary: "Add a mission",
        description: "Add a mission",
        operationId: "updatemission",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "mission's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Mission",
              },
              example: {
                name: "huye/ngoma",
                description: "descri.......",
                location:"saoud arabia",
                start_date: "2025-05-20",
                end_date: "2025-07-20",
               
              },
            },
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/Mission",
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "Mission created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/mission/one/{id}": {
      get: {
        tags: ["mission"],
        summary: "Get a mission",
        description: "Get a mission",
        operationId: "getOnemission",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "mission's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "mission deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/mission/activate/{id}": {
      put: {
        tags: ["mission"],
        summary: "activate a mission",
        description: "activate a mission",
        operationId: "activateOnemission",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "mission's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],

        responses: {
          200: {
            description: "mission activated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/mission/disactivate/{id}": {
      put: {
        tags: ["mission"],
        summary: "disactivate a mission",
        description: "disactivate a mission",
        operationId: "disactivatemission",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "mission's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],

        responses: {
          200: {
            description: "mission disactivated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },





      
    "/api/v1/appoitment/add": {
      post: {
        tags: ["appoitment"],
        summary: "Add aappoitment",
        description: "Add a appoitment",
        operationId: "addappoitment",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appoitment",
              },
              example: {
                userID: 1,
                missionID:1,
                status:"active",
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "appoitment created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/appoitment/": {
      get: {
        tags: ["appoitment"],
        summary: "Get a appoitment",
        description: "Get a appoitment",
        operationId: "getOneappoitment",
    
        responses: {
          200: {
            description: "appoitment deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/appoitment/delete/{id}": {
      delete: {
        tags: ["appoitment"],
        summary: "delete a appoitment",
        description: "delete a appoitment",
        operationId: "deleteOneappoitment",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "appoitment's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "appoitment deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/appoitment/one/{id}": {
      get: {
        tags: ["appoitment"],
        summary: "Get a appoitment",
        description: "Get a appoitment",
        operationId: "getOneAppoitment",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "appoitment's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "appoitment deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/appoitment/user": {
      get: {
        tags: ["appoitment"],
        summary: "Get a myappoitments",
        description: "Get a myappoitments",
        operationId: "myappoitments",

        responses: {
          200: {
            description: "appoitment retrieved successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/appoitment/change/{id}": {
      put: {
        tags: ["appoitment"],
        summary: "activate a appoitment",
        description: "activate a appoitment",
        operationId: "activateOneAppoitment",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "appoitment's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Appoitment",
              },
              example: {
                status:"active/inactive/ongoing/closed",
              },
            },
            required: true,
          },
        },

        responses: {
          200: {
            description: "appoitment changed successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    


    "/api/v1/notification/": {
      get: {
        tags: ["notification"],
        summary: "Get a notification",
        description: "Get a notification",
        operationId: "getOneNotification",
    
        responses: {
          200: {
            description: " notifications retrieved successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/notification/read-all": {
      put: {
        tags: ["notification"],
        summary: "mark read a notification",
        description: "read notification",
        operationId: "getreadNotification",
  
        responses: {
          200: {
            description: " notifications marhed as read successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/notification/read/{id}": {
      put: {
        tags: ["notification"],
        summary: "mark one read a notification",
        description: "read one notification",
        operationId: "onereadNotification",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "notification's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
  
        responses: {
          200: {
            description: "notifications marhed as read successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/notification/read/{id}": {
      put: {
        tags: ["notification"],
        summary: "read all a notification",
        description: "read all notification",
        operationId: "read_all_notification",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "notification's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],

  
        responses: {
          200: {
            description: "notifications marhed as read successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/notification/delete/{id}": {
      delete: {
        tags: ["notification"],
        summary: "delete a notification",
        description: "delete a notification",
        operationId: "deleteOnenotification",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "notification's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],

       
        responses: {
          200: {
            description: "notification deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/notification/delete-all": {
      delete: {
        tags: ["notification"],
        summary: "delete all notification",
        description: "delete all notification",
        operationId: "deleteALLnotification",
        responses: {
          200: {
            description: "notification deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },





    "/api/v1/categories/add": {
      post: {
        tags: ["categories"],
        summary: "Add a department",
        description: "Add a department",
        operationId: "adddepartment",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/categories",
              },
              // example: {
              //   name: "obina",
              //   address: "huye/ngoma",
              //   description: "restourent descri.......",
               
              // },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/categories/": {
      get: {
        tags: ["categories"],
        summary: "Get a categories",
        description: "Get a categories",
        operationId: "getOnecategory",
    
        responses: {
          200: {
            description: "categories deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/categories/delete/{id}": {
      delete: {
        tags: ["categories"],
        summary: "delete a categories",
        description: "delete a categories",
        operationId: "deleteOnecategories",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Restaurent's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/categories/{id}": {
      put: {
        tags: ["categories"],
        summary: "Update a categories",
        description: "Update a categories",
        operationId: "updateOnecategories",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "categories's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/categories",
              },
              // example: {
              //   firstname: "John",
              //   lastname: "Doe",
              //   email: "test@example.com",
              //   phone: "08012345678",
              // },
            },
          },
        },
        responses: {
          200: {
            description: "categories updated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/categories/one/{id}": {
      get: {
        tags: ["categories"],
        summary: "Get a categories",
        description: "Get a categories",
        operationId: "getOnecategories",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "categories's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "categories deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/categories/activate/{id}": {
      put: {
        tags: ["categories"],
        summary: "Activate a categories",
        description: "Activate a categories",
        operationId: "activatecategories",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "categories's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "categories activated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/categories/diactivate/{id}": {
      put: {
        tags: ["categories"],
        summary: "DisActivate a categories",
        description: "DisActivate a categories",
        operationId: "disactivatecategories",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "categories's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "categories disactivated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },



    "/api/v1/department/add": {
      post: {
        tags: ["department"],
        summary: "Add a department",
        description: "Add a department",
        operationId: "adddepartment",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Department",
              },
              example: {
                name: "obina",
                description: ".......",
                readerId:"1"
               
              },
            },
            required: true,
          },
        },
        responses: {
          201: {
            description: "department created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/department/": {
      get: {
        tags: ["department"],
        summary: "Get a department",
        description: "Get a department",
        operationId: "getOnedepartment",
    
        responses: {
          200: {
            description: "department deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/department/delete/{id}": {
      delete: {
        tags: ["department"],
        summary: "delete a department",
        description: "delete a department",
        operationId: "deleteOnedepartment",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "department's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "department deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/department/{id}": {
      put: {
        tags: ["department"],
        summary: "Update a department",
        description: "Update a department",
        operationId: "updateOnedepartment",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "department's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Department",
              },
              example: {
                name: "obina",
                description: ".......",
                readerId:"1"
               
              },
            },
          },
        },
        responses: {
          200: {
            description: "department updated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/department/one/{id}": {
      get: {
        tags: ["department"],
        summary: "Get a department",
        description: "Get a department",
        operationId: "getOne1department",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "department's id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "department deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/department/user": {
      get: {
        tags: ["department"],
        summary: "Get a department",
        description: "Get a department",
        operationId: "getOneuserdepartment",

        responses: {
          200: {
            description: "department retrieved successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    "/api/v1/statistics/": {
      get: {
        tags: ["statistics"],
        summary: "Get a statistics",
        description: "Get a statistics",
        operationId: "getOnestatistics",
    
        responses: {
          200: {
            description: "statistics deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "User not found",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },

    




  },

  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          firstname: {
            type: "string",
            description: "User's firstname",
          },
          lastname: {
            type: "string",
            description: "User's lastname",
          },
          username: {
            type: "string",
            description: "User's names",
          },
          gender: {
            type: "string",
            description: "User's gender",
          },
          dob: {
            type: "string",
            description: "User's date of birth",
          },
          address: {
            type: "string",
            description: "User's address",
          },
          phone: {
            type: "string",
            description: "User's phone number",
          },
          role: {
            type: "string",
            description: "User's role",
          },
          image: {
            type: "string",
            description: "User's profile image",
            format: "binary",
          },
          email: {
            type: "string",
            description: "User's email",
          },
          password: {
            type: "string",
            description: "User's password",
          },
          confirm_password: {
            type: "string",
            description: "User's confirm password",
          },
        },
      },
      Profile: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Profile name",
          },
          categoryID: {
            type: "integer",
            description: "category integer",
          },
          description: {
            type: "string",
            description: "profile's description",
          },
          image: {
            type: "string",
            description: "profile image",
            format: "binary",
          },

        },
      },
      Mission: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "mission name",
          },
          location: {
            type: "integer",
            description: "location ",
          },
          start_date: {
            type: "string",
            description: "start date",
          },
          end_date: {
            type: "string",
            description: "end date",
          },
          description: {
            type: "string",
            description: "description...",
          },
          status: {
            type: "string",
            description: "status...",
          },
         

        },
      },
      Appoitment: {
        type: "object",
        properties: {
          missionID: {
            type: "integer",
            description: "mission id",
          },
          userID: {
            type: "integer",
            description: "location ",
          },
          status: {
            type: "string",
            description: "status",
          },

        },
      },
      Department: {
        type: "object",
        properties: {
          
          name: {
            type: "string",
            description: "name",
          },
          description: {
            type: "string",
            description: "description",
          },
          readerId: {
            type: "integer",
            description: "readerId",
          },

        },
      },
 
      categories: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "name address",
          },
         
        },
      },

    
    },

    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

docrouter.use("/", serve, setup(options));

export default docrouter;
