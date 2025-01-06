import status from "http-status";

const errorHandler = (err, req, res, next) => {
  const { code, message } = err;
  res.status(code || status.INTERNAL_SERVER_ERROR).send({ message });
};

export default errorHandler;
