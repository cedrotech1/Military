'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Get the first user (admin) to assign as the creator of the missions
    const adminUser = await queryInterface.rawSelect('Users', {
      where: { role: 'admin' },
      limit: 1,
    }, ['id']);

    // Get the first country to reference (assuming countries table has data)
    const country = await queryInterface.rawSelect('countries', {
      limit: 1,
    }, ['id']);

    return queryInterface.bulkInsert('Missions', [
      {
        name: 'Peacekeeping Mission in Eastern Rwanda',
        location: 'Kigali, Rwanda',
        start_date: new Date('2021-01-15'),
        end_date: new Date('2021-12-15'),
        description: 'A peacekeeping mission to support local governance and provide humanitarian assistance.',
        status: 'Completed',
        CountryID: country.id,
        createdBY: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Training Mission for New Recruits',
        location: 'Huye, Rwanda',
        start_date: new Date('2022-05-01'),
        end_date: new Date('2022-11-01'),
        description: 'Training mission focused on equipping new recruits with essential skills and knowledge.',
        status: 'In Progress',
        CountryID: country.id,
        createdBY: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Emergency Relief Mission',
        location: 'Nyungwe Forest, Rwanda',
        start_date: new Date('2023-07-10'),
        end_date: new Date('2023-08-01'),
        description: 'Emergency relief mission following natural disaster in Nyungwe Forest region.',
        status: 'Ongoing',
        CountryID: country.id,
        createdBY: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Missions', null, {});
  }
};
