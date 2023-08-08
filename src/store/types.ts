export interface ActionWithPayload<PayloadType> {
  (payload: PayloadType): { type: string; data: PayloadType };
}

export interface ActionWithoutPayload {
  (): { type: string };
}
