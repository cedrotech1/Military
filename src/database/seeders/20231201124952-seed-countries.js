"use strict";
const axios = require("axios");

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countries = response.data.map((country) => ({
        common_name: country.name.common,
        official_name: country.name.official || null,
        code: country.cca3,
        region: country.region || null,
        subregion: country.subregion || null,
        languages: JSON.stringify(country.languages || {}),
        currencies: JSON.stringify(country.currencies || {}),
        capital: country.capital ? country.capital[0] : null,
        flag_url: country.flags?.png || null,
        google_map_url: country.maps?.googleMaps || null,
        openstreet_map_url: country.maps?.openStreetMaps || null,
        timezone: country.timezones ? country.timezones[0] : null,
        continent: country.continents ? country.continents[0] : null,
        latitude: country.latlng ? country.latlng[0] : null,
        longitude: country.latlng ? country.latlng[1] : null,
        population: country.population || null,
        landlocked: country.landlocked || false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

      await queryInterface.bulkInsert("countries", countries);
    } catch (error) {
      console.error("Error seeding countries:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
