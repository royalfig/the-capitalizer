import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import UserInput from "./userInput.vue";
import { useToast } from "../composables/useToast";

const { toasts } = useToast();

function execCommandStub() {
  if (!document.execCommand) {
    document.execCommand = vi.fn();
  } else {
    vi.spyOn(document, "execCommand").mockImplementation(() => true);
  }
}

describe("userInput", () => {
  beforeEach(() => {
    toasts.value = [];
  });

  it("renders capitalized results for the chosen style as the user types", async () => {
    const wrapper = mount(UserInput, {
      props: { styleValue: { style: "AP" } }
    });

    await wrapper.find("#title-text").setValue("the lord of the rings");

    const results = wrapper.findAll(".result-title").map(r => r.text());
    expect(results).toEqual(["The Lord of the Rings"]);
    expect(wrapper.find(".title-num").text()).toBe("1");
  });

  it("re-capitalizes existing text when the style prop changes", async () => {
    const wrapper = mount(UserInput, {
      props: { styleValue: { style: "AP" } }
    });
    await wrapper.find("#title-text").setValue("homo sapiens are people");

    await wrapper.setProps({ styleValue: { style: "CMS" } });

    expect(wrapper.find(".result-title").text()).toBe(
      "Homo sapiens Are People"
    );
  });

  it("clearIt() resets the textarea and shows a toast, but only clears non-empty input", async () => {
    const wrapper = mount(UserInput, {
      props: { styleValue: { style: "AP" } }
    });
    await wrapper.find("#title-text").setValue("some title");

    wrapper.vm.clearIt();
    await wrapper.vm.$nextTick();

    expect(wrapper.find("#title-text").element.value).toBe("");
    expect(toasts.value.at(-1)).toMatchObject({
      message: "Titles Cleared",
      type: "success"
    });

    toasts.value = [];
    wrapper.vm.clearIt();
    expect(toasts.value.at(-1)).toMatchObject({
      message: "Enter a title first",
      type: "info"
    });
  });

  it("copyIt() copies the capitalized titles and reports the right count", async () => {
    execCommandStub();
    const wrapper = mount(UserInput, {
      props: { styleValue: { style: "AP" } }
    });
    await wrapper.find("#title-text").setValue("one title\nanother title");

    wrapper.vm.copyIt();

    expect(document.execCommand).toHaveBeenCalledWith("copy");
    expect(toasts.value.at(-1)).toMatchObject({
      message: "2 Titles Copied",
      type: "success"
    });
  });
});
