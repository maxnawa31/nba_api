const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM teams;');
    return res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
});

router.get('/teams/stats', async (req, res, next) => {
  const { category, year } = req.query;

  table_name = `team_stats_${category}_${year}`;
  const result = await db.query(
    `SELECT * from team_stats_${category}_${year} AS stats JOIN teams ON stats.team_id=teams.id;`
  );

  return res.json(result.rows);
});

router.get('/teams/:id/:year', async (req, res, next) => {
  try {
    const {
      params: { id, year },
    } = req;
    const result = await db.query(
      `SELECT * from player_stats_per_game_${year} AS stats JOIN players ON stats.player_id = players.id JOIN teams ON teams.id=stats.team_id WHERE team_id=${id}`
    );
    return res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
