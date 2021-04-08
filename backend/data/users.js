import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("potato", 10),
    isAdmin: true,
  },
  {
    name: "Michelle Shum",
    email: "michelle@example.com",
    password: bcrypt.hashSync("potato", 10),
  },
  {
    name: "Nick Danisz",
    email: "nick@example.com",
    password: bcrypt.hashSync("potato", 10),
  },
  {
    name: "Alex Danisz",
    email: "alex@example.com",
    password: bcrypt.hashSync("potato", 10),
  },
];

export default users;
