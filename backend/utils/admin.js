const bcrypt = require("bcryptjs");
const admins = [
  // {
  //   name: {
  //     en: "Dorothy R. Brown",
  //   },
  //   image: "https://i.ibb.co/d294W8Y/team-4.jpg",
  //   email: "dorothy@gmail.com",
  //   password: bcrypt.hashSync("12345678"),
  //   phone: "708-628-3122",
  //   role: "Security Guard",
  //   joiningData: new Date(),
  // },
  // {
  //   name: {
  //     en: "Alice B. Porter",
  //   },
  //   image: "https://i.ibb.co/m5B0hK4/team-8.jpg",
  //   email: "alice@gmail.com",
  //   password: bcrypt.hashSync("12345678"),
  //   phone: "708-488-9728",
  //   role: "Driver",
  //   joiningData: new Date(),
  // },
  // {
  //   name: {
  //     en: "Corrie H. Cates",
  //   },
  //   image: "https://i.ibb.co/SNN7JCX/team-6.jpg",
  //   email: "corrie@gmail.com",
  //   password: bcrypt.hashSync("12345678"),
  //   phone: "914-623-6873",
  //   role: "Accountant",
  //   joiningData: new Date(),
  // },
  // {
  //   name: {
  //     en: "Shawn E. Palmer",
  //   },
  //   image: "https://i.ibb.co/GWVWYNn/team-7.jpg",
  //   email: "shawn@gmail.com",
  //   password: bcrypt.hashSync("12345678"),
  //   phone: "949-202-2913",
  //   role: "Manager",
  //   joiningData: new Date(),
  // },
  // {
  //   name: {
  //     en: "Stacey J. Meikle",
  //   },
  //   image: "https://i.ibb.co/XjwBLcK/team-2.jpg",
  //   email: "stacey@gmail.com",
  //   password: bcrypt.hashSync("12345678"),
  //   phone: "616-738-0407",
  //   role: "CEO",
  //   joiningData: new Date(),
  // },
  // {
  //   name: {
  //     en: "Marion V. Parker",
  //   },
  //   image: "https://i.ibb.co/3zs3H7z/team-5.jpg",
  //   email: "marion@gmail.com",
  //   password: bcrypt.hashSync("12345678"),
  //   phone: "713-675-8813",
  //   role: "Admin",
  //   joiningData: new Date(),
  // },
  {
    name: {
      en: "Admin",
    },
    image: "https://i.ibb.co/WpM5yZZ/9.png",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "360-943-7332",
    role: "Admin",
    joiningData: new Date(),
  },
  {
    status: "Active",
    password: bcrypt.hashSync("12345678"),
    permissions: ["Dashboard", "Catalog", "Customers", "Orders"],
    role: "Manager",
    name: {
      en: "amin",
    },
    email: "ybrahmi66@gmail.com",
    phone: "222",
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    code: "code1",
  },
  {
    status: "Active",
    password: bcrypt.hashSync("12345678"),
    permissions: ["Dashboard", "Catalog", "Customers", "Orders"],
    role: "Manager",
    name: {
      en: "ahmed",
    },
    email: "ybrahmi07@gmail.com",
    phone: "222",
    image: "https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg",
    code: "code2",
  },
];

module.exports = admins;
