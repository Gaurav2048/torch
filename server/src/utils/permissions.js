const USER_ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
};

const ROLES = {
  BOARD_ACCESS: [USER_ROLES.ADMIN, USER_ROLES.USER],
  BOARD_CREATE: [USER_ROLES.ADMIN],
  BOARD_DELETE: [USER_ROLES.ADMIN],
};

module.exports = {
  USER_ROLES,
  ROLES,
};
