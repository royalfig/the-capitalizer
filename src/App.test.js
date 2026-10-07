import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "./App.vue";

describe("App", () => {
  it("wires the style selector to the input, and clear/copy buttons to the input's exposed methods", async () => {
    const wrapper = mount(App);

    await wrapper.find("#title-text").setValue("the lord of the rings");
    await wrapper.find('input[value="CMS"]').setValue(true);
    expect(wrapper.find(".result-title").text()).toBe(
      "The Lord of the Rings"
    );

    const clearButton = wrapper
      .findAll("button")
      .find(btn => btn.text() === "Clear");
    await clearButton.trigger("click");
    expect(wrapper.find("#title-text").element.value).toBe("");
  });
});
