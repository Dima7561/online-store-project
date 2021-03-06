import { POSTFIXES } from "../../constants/actionPostfixes";

const { REQUEST_POSTFIX } = POSTFIXES;

const createActionWithPostfix = (actionType, payload, postfix) => {
  return {
    type:
      actionType.slice(0, actionType.length - REQUEST_POSTFIX.length) + postfix,
    payload,
  };
};
export default createActionWithPostfix;
