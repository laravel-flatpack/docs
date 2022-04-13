<template>
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center"
  >
    <div
      class="relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6"
    >
      <div class="-mx-4 sm:mx-0">
        <div
          class="relative overflow-hidden shadow-xl flex bg-slate-800 lg:min-w-[600px] h-[30rem] max-h-[60vh] sm:max-h-[none] rounded-xl lg:h-[30rem] xl:h-[30rem]"
        >
          <div class="relative w-full flex flex-col">
            <div class="flex-none border-b border-slate-500/30">
              <div class="flex items-center h-8 space-x-1.5 px-3">
                <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
              </div>
            </div>
            <div class="relative min-h-0 flex-auto flex flex-col">
              <div class="w-full flex-auto flex min-h-0 overflow-auto">
                <div class="w-full relative flex-auto text-yellow-100">
                  <pre ref="code" id="code"></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative row-start-1 col-start-1 col-span-5 xl:col-span-6 -mt-10"
    >
      <div
        class="max-w-xl mx-auto lg:max-w-none flex items-center justify-center"
        style="height: 24.25rem"
      >
        <div
          class="flex flex-col w-full bg-white rounded-lg shadow-lg col-span-full"
          style="min-height: 336px"
        >
          <div ref="preview" id="preview"></div>
        </div>
      </div>
    </div>
    <button style="margin-top: 100px" v-on:click="handle">Run</button>
  </div>
</template>
<script>
import Typewriter from "typewriter-effect/dist/core";
import Prism from "prismjs/components/prism-core.js";
import "prismjs/components/prism-yaml.js";

export default {
  name: "DemoForm",
  data() {
    return {
      blocks: [
        {
          code: `  title:
    label: Title
    placeholder: Enter a title
    type: text`,
          html: `<div class="mt-4">
  <div class="flex justify-between mb-1">
    <label class="block text-sm font-medium text-secondary-700">Title</label>
  </div>
  <div class="relative rounded-md  shadow-sm ">
    <input type="text" autocomplete="off" class="placeholder-secondary-400 border border-secondary-300 focus:ring-primary-500 focus:border-primary-500 form-input block w-full sm:text-sm rounded-md transition ease-in-out duration-100 focus:outline-none shadow-sm" placeholder="Enter a title">
  </div>
</div>`,
          delay: 5,
        },
        {
          code: `  description:
    label: Description
    placeholder: Enter a description
    type: textarea`,
          html: `<div class="mt-4">
<div class="flex justify-between mb-1">
  <label class="block text-sm font-medium text-secondary-700" for="fields-description">
    Description
  </label>
</div>    
<div class="relative rounded-md shadow-sm">
  <textarea autocomplete="off" rows="4" class="placeholder-secondary-400 dark:bg-secondary-800 dark:text-secondary-400 dark:placeholder-secondary-500 border border-secondary-300 focus:ring-primary-500 focus:border-primary-500 form-input block w-full sm:text-sm rounded-md transition ease-in-out duration-100 focus:outline-none shadow-sm" placeholder="Enter a description" name="description"></textarea>
</div>
</div>`,
          delay: 13,
        },
        {
          code: `  save:
    type: button
    label: Save
    action: save`,
          html: `<div class="mt-4">
  <button type="button" class="focus:outline-none inline-flex justify-center items-center transition-all ease-in duration-100 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded gap-x-2 text-base px-4 py-2 ring-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:ring-primary-600">Save</button>
</div>`,
          delay: 18,
        },
      ],
      typewriter: null,
    };
  },
  mounted() {
    this.initTypewriter();
  },
  methods: {
    initTypewriter() {
      this.typewriter = new Typewriter(this.$refs.code, {
        loop: false,
        delay: 50,
        typeSpeed: 100,
      });
    },
    handle() {
      this.blocks.map((block, index) => {
        const highlightedText = Prism.highlight(
          block.code,
          Prism.languages.yaml
        );
        this.typewriter
          .typeString(index > 0 ? "\n" : "")
          .typeString(highlightedText)
          .start()
          .typeString("\n")
          .pauseFor(1000);
        setTimeout(() => {
          console.log("Typing...", block.code);
          this.$refs.preview.innerHTML =
            this.$refs.preview.innerHTML + block.html;
        }, block.delay * 1000);
      });
    },
  },
};
</script>
