import {
  // Update the necessary imports for Department services here
  createDepartment,
  getAllDepartment,
  deleteOneDepartment,
  checkExistingDepartment,
  getOneDepartmentWithDetails,
  updateOneDepartment,
  checkExistingDepartmentReader 

} from "../services/departmentService.js";
import {
  getUser,
} from "../services/userService.js";
export const addDepartmentController = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Not authorized, you are not a  admin",
      });
    }

    const user = await getUser(req.body.readerId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role!='Commander-Officer') {
      return res.status(404).json({
        success: false,
        message: "Reader must be commander officer",
      });
    }

     const Exist = await checkExistingDepartment(req.body.name);
        if (Exist) {
          return res.status(400).json({
            success: false,
            message: "Department already exist",
          });
        }

        const ExistReader = await checkExistingDepartmentReader(req.body.readerId);
        if (ExistReader) {
          return res.status(400).json({
            success: false,
            message: "Leader already exist with other department",
          });
        }

    const newDepartment = await createDepartment(req.body);
    return res.status(201).json({
      success: true,
      message: "Department created successfully",
      Department: newDepartment,
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

export const DepartmentWithAllController = async (req, res) => {
  try {
    let data = await getAllDepartment();
    if (!data) {
      return res.status(404).json({
        message: "Department not found",
        data:[]
      });
    }
    return res.status(200).json({
      success: true,
      message: "Department retrieved successfully",
      data: data,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const deleteOneDepartmentController = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Not authorized, you are not superadmin",
      });
    }

    const deletedDepartment = await deleteOneDepartment(req.params.id);
    if (!deletedDepartment) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Department deleted successfully",
      Department: deletedDepartment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const updateOneDepartmentController = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Not authorized, you are not a  admin",
      });
    }

    

    const user = await getUser(req.body.readerId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role!='Commander-Officer') {
      return res.status(404).json({
        success: false,
        message: "Leader must be commander officer",
      });
    }

    const data = await getOneDepartmentWithDetails(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Department not found",
      });
    }

    

    if (data.name!=req.body.name) {
      const Exist = await checkExistingDepartment(req.body.name);
      if (Exist) {
        return res.status(400).json({
          success: false,
          message: "Department already exist",
        });
      }
    }

    if (data.readerId!=req.body.readerId) {
      const ExistReader = await checkExistingDepartmentReader(req.body.readerId);
      if (ExistReader) {
        return res.status(400).json({
          success: false,
          message: "Leader already exist with other department",
        });
      }
    }


    const updatedDepartment = await updateOneDepartment(req.params.id,req.body);
    if (!updatedDepartment) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Department updated successfully",
      Department: updatedDepartment,
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getOneDepartmentController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getOneDepartmentWithDetails(id);
    if (!data) {
      return res.status(404).json({
        message: "Department not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Department retrieved successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getMydepartment = async (req, res) => {
  try {
    let Did = req.user.departmentId;
    console.log(Did)
    const data = await getOneDepartmentWithDetails(Did);
    if (!data) {
      return res.status(404).json({
        message: "Department not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Department retrieved successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

