export interface IActionWithPayload<ActionType, PayloadType> {
  type: ActionType & string;
  data: PayloadType;
}

export interface IAction<ActionType> {
  type: ActionType & string;
}
