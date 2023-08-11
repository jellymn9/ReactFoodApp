export interface IActionWithPayload<PayloadType> {
  (payload: PayloadType): { type: string; data: PayloadType };
}

export interface IActionWithoutPayload {
  (): { type: string };
}

// CURRENTLY NOT IN USE
