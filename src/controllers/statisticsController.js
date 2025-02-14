import { getStatistics } from "../services/statisticsService.js";

export const getStatisticsController = async (req, res) => {
  try {
    const stats = await getStatistics();
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch statistics", error: error.message });
  }
};
