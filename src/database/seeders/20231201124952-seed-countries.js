"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const countries = [
        {
          common_name: "Rwanda",
          official_name: "Republic of Rwanda",
          code: "RWA",
          region: "Africa",
          subregion: "Eastern Africa",
          languages: JSON.stringify({ eng: "English", kin: "Kinyarwanda", fra: "French" }),
          currencies: JSON.stringify({ RWF: { name: "Rwandan franc", symbol: "FRw" } }),
          capital: "Kigali",
          flag_url: "https://flagcdn.com/w320/rw.png",
          google_map_url: "https://goo.gl/maps/jnZTCi2rPQP2",
          openstreet_map_url: "https://www.openstreetmap.org/relation/171496",
          timezone: "Central Africa Time (CAT)",
          continent: "Africa",
          latitude: -1.9403,
          longitude: 29.8739,
          population: 13000000,
          landlocked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          common_name: "Kenya",
          official_name: "Republic of Kenya",
          code: "KEN",
          region: "Africa",
          subregion: "Eastern Africa",
          languages: JSON.stringify({ eng: "English", swa: "Swahili" }),
          currencies: JSON.stringify({ KES: { name: "Kenyan shilling", symbol: "KSh" } }),
          capital: "Nairobi",
          flag_url: "https://flagcdn.com/w320/ke.png",
          google_map_url: "https://goo.gl/maps/Ni9M7wcCxf8",
          openstreet_map_url: "https://www.openstreetmap.org/relation/192798",
          timezone: "East Africa Time (EAT)",
          continent: "Africa",
          latitude: -1.286389,
          longitude: 36.817223,
          population: 53771296,
          landlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      await queryInterface.bulkInsert("countries", countries);
    } catch (error) {
      console.error("Error seeding countries:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("countries", {
      code: { [Sequelize.Op.in]: ["RWA", "KEN"] },
    });
  },
};
