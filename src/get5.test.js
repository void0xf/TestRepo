import get5 from "./get5";
import { describe, it, expect } from "vitest";

describe("get5", () => {
  it("returns 5", () => {
    expect(get5()).toBe(5);
  });
});
