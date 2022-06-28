exports.seed = async function (knex) {
    await knex("Users").truncate();
    await knex("Passwords").truncate();
    await knex("Tasks").truncate();
    await knex("Projects").truncate();
    await knex("Groups").truncate();
};
