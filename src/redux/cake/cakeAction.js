import { BUY_CAKE } from "./cakeType";
export function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    payLoad: number,
  };
}
