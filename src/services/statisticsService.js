import db from "../database/models/index.js";

const Users = db.Users;
const Appointments = db.Appointments;
const Missions = db.Missions;

/**
 * Fetch general statistics for users, missions, and appointments.
 */
export const getStatistics = async () => {
  try {
    const totalUsers = await Users.count();

    const activeUsers = await Users.count({
      include: [
        {
          model: Appointments,
          as: "appointments",
          where: { status: "active" },
          required: true,
        },
      ],
    });

    const totalMissions = await Missions.count();
    const activeMissions = await Missions.count({ where: { status: "active" } });

    const totalAppointments = await Appointments.count();
    const activeAppointments = await Appointments.count({ where: { status: "active" } });
    const ongoingAppointments = await Appointments.count({ where: { status: "ongoing" } });
    const closedAppointments = await Appointments.count({ where: { status: "closed" } });

    return {
      totalUsers,
      activeUsers,
      totalMissions,
      activeMissions,
      totalAppointments,
      activeAppointments,
      ongoingAppointments,
      closedAppointments,
    };
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
};
