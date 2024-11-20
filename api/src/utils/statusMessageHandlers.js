import { STATUS_CODE_CONSTANT, STATUS_MESSAGE_CONSTANT } from "../core/constants/statusConstants/statusConstant.js";

//2XX
const sucessMessage = (res, statusMessage) => {
  res.status(STATUS_CODE_CONSTANT.SUCCESS).json({
    statusMessage: STATUS_MESSAGE_CONSTANT.SUCCESS,
    status: statusMessage
  });
};

const getSucessMessage = (res, dataMessage, statusMessage) => {
  res.status(STATUS_CODE_CONSTANT.SUCCESS).json({
    data: dataMessage,
    statusMessaged: statusMessage
  });
};

const createSucessMessage = (res, statusMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.CREATED) {
    res.status(STATUS_CODE_CONSTANT.CREATED).json({
      statusMessage: statusMessage,
    });
  }
};

const acceptedMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.ACCEPTED) {
    res.status(STATUS_CODE_CONSTANT.ACCEPTED).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.ACCEPTED,
      error: errMessage
    });
  }
};

const nonAuthoritiaveMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.NON_AUTHORITATIVE_INFO) {
    res.status(STATUS_CODE_CONSTANT.NON_AUTHORITATIVE_INFO).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.NON_AUTHORITATIVE_INFO,
      error: errMessage
    });
  }
};

const noContentMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.NO_CONTENT) {
    res.status(STATUS_CODE_CONSTANT.NO_CONTENT).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.NO_CONTENT,
      error: errMessage
    });
  }
};

const resetContentMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.RESET_CONTENT) {
    res.status(STATUS_CODE_CONSTANT.RESET_CONTENT).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.RESET_CONTENT,
      error: errMessage
    });
  }
};

const paritialContentMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.PARTIAL_CONTENT) {
    res.status(STATUS_CODE_CONSTANT.PARTIAL_CONTENT).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.PARTIAL_CONTENT,
      error: errMessage
    });
  }
};


//4XX
const badRequestMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.BAD_REQUEST) {
    res.status(STATUS_CODE_CONSTANT.BAD_REQUEST).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.BAD_REQUEST,
      error: errMessage
    });
  }
};

const unauthorMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.UNAUTHORIZED) {
    res.status(STATUS_CODE_CONSTANT.UNAUTHORIZED).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.UNAUTHORIZED,
      error: errMessage
    });
  }
};

const forbidenMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.FORBIDDEN) {
    res.status(STATUS_CODE_CONSTANT.FORBIDDEN).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.FORBIDDEN,
      error: errMessage
    });
  }
};


const notFoundMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.NOT_FOUND) {
    res.status(STATUS_CODE_CONSTANT.NOT_FOUND).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.NOT_FOUND,
      error: errMessage
    });
  }
};

const methodNotAllowedMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.METHOD_NOT_ALLOWED) {
    res.status(STATUS_CODE_CONSTANT.METHOD_NOT_ALLOWED).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.METHOD_NOT_ALLOWED,
      error: errMessage
    });
  }
};

/*......*/

//5XX

const serverErrorMessage = (res, statusMessage, errMessage) => {
  if (statusMessage === STATUS_MESSAGE_CONSTANT.SERVER_ERROR) {
    res.status(STATUS_CODE_CONSTANT.SERVER_ERROR).json({
      statusMessage: STATUS_MESSAGE_CONSTANT.SERVER_ERROR,
      error: errMessage
    });
  }
};
const messageHandlersConstants = {
  /*..2XX */
  sucessMessage,
  getSucessMessage,
  createSucessMessage,
  acceptedMessage,
  nonAuthoritiaveMessage,
  noContentMessage,
  resetContentMessage,
  paritialContentMessage,

  /**..4XX */
  badRequestMessage,
  unauthorMessage,
  forbidenMessage,
  notFoundMessage,
  methodNotAllowedMessage,

  /*..5XX. */
  serverErrorMessage
};

export default messageHandlersConstants