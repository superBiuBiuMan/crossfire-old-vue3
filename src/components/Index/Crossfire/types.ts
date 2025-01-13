import type { ApplicationCommonEmits } from "../types";
export type CrossfireEmits = ApplicationCommonEmits & {
  (e: "openReservation"): void;
};
