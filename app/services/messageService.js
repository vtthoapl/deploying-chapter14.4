import { sql } from "../database/database.js";

const create = async (sender, message) => {
  await sql`INSERT INTO messages (sender, message)
    VALUES (${sender}, ${message})`;
};

const findAll = async () => {
  return await sql`SELECT * FROM messages ORDER BY id DESC LIMIT 5`;
};

const findBySenderOrMessageLike = async (senderOrmessage) => {
  const likePart = `%${senderOrmessage}%`;

  return await sql`SELECT * FROM messages
    WHERE sender ILIKE ${likePart} OR message ILIKE ${likePart}`;
};

const deleteById = async (id) => {
  try {
    await sql`DELETE FROM messages WHERE id = ${id}`;
  } catch (e) {
    console.log(e);
  }
};

export { create, findAll, findBySenderOrMessageLike,deleteById };





