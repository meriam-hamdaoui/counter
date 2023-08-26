interface INCREMENT {
  type: "INCREMENT";
  payload: number;
}
interface DECREMENT {
  type: "DECREMENT";
  payload: number;
}
interface RESET {
  type: "RESET";
}

export type Actions = INCREMENT | DECREMENT | RESET;
