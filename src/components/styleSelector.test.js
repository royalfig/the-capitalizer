import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import StyleSelector from "./styleSelector.vue";

describe("styleSelector", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("defaults to AP and shows its full name", () => {
    const wrapper = mount(StyleSelector);
    expect(wrapper.find(".current-style").text()).toBe("Associated Press");
    expect(wrapper.find('input[value="AP"]').element.checked).toBe(true);
  });

  it("emits selected-style and persists the choice when a radio is picked", async () => {
    const wrapper = mount(StyleSelector);
    await wrapper.find('input[value="NYT"]').setValue(true);

    expect(wrapper.emitted("selected-style")).toBeTruthy();
    expect(wrapper.emitted("selected-style").at(-1)).toEqual([
      { style: "NYT" }
    ]);
    expect(wrapper.find(".current-style").text()).toBe("New York Times");
    expect(localStorage.style).toBe("NYT");
  });

  it("restores a style saved in localStorage on mount and emits it", async () => {
    localStorage.style = "MLA";
    const wrapper = mount(StyleSelector);
    await wrapper.vm.$nextTick();

    expect(wrapper.find('input[value="MLA"]').element.checked).toBe(true);
    expect(wrapper.emitted("selected-style")[0]).toEqual([{ style: "MLA" }]);
  });
});
