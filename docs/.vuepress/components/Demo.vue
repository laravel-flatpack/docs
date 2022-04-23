<template>
  <section class="demo">
    <div class="demo-title">
      <h2>Create your own<br /><span>admin panel</span> in no time</h2>
      <p>
        Assemble pre-built components with simple and declarative Yaml files.
      </p>
    </div>
    <div class="windows-wrapper">
      <div class="editor-window-wrapper">
        <div class="editor-window">
          <div class="editor-window__container">
            <div class="editor-window__frame">
              <div class="editor-window__top-bar">
                <div class="editor-window__top-bar__items">
                  <div class="button"></div>
                  <div class="button"></div>
                  <div class="button"></div>
                </div>
              </div>
              <div class="editor-window__contents">
                <div class="editor-window__code-wrapper">
                  <div class="editor-window__code">
                    <pre ref="code" id="code"></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="preview-window-wrapper">
        <Preview :elements="visibleElements" />
      </div>
    </div>
    <div class="replay-wrapper">
      <button v-if="completed" v-on:click="restart" class="button-replay">
        <svg
          height="20px"
          version="1.1"
          viewBox="0 0 16 20"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
            <g fill="#ffffff" transform="translate(-2.000000, -127.000000)">
              <g transform="translate(2.000000, 127.000000)">
                <path
                  d="M8,4 L8,0 L3,5 L8,10 L8,6 C11.3,6 14,8.7 14,12 C14,15.3 11.3,18 8,18 C4.7,18 2,15.3 2,12 L0,12 C0,16.4 3.6,20 8,20 C12.4,20 16,16.4 16,12 C16,7.6 12.4,4 8,4 L8,4 Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  </section>
</template>
<script>
import Typewriter from "typewriter-effect/dist/core";
import Prism from "prismjs/components/prism-core.js";
import "prismjs/components/prism-yaml.js";

export default {
  name: "Demo",
  data() {
    return {
      blocks: [
        {
          code: `name:\n    label: Name\n    placeholder: Enter a name\n    type: text`,
          element: "name",
          delay: 6,
        },
        {
          code: `description:\n    label: Description\n    placeholder: Enter a description\n    type: textarea`,
          element: "description",
          delay: 14,
        },
        {
          code: `save:\n    type: button\n    label: Save\n    action: save`,
          element: "save",
          delay: 19,
        },
      ],
      visibleElements: {
        name: false,
        description: false,
        save: false,
      },
      typewriter: null,
      observer: null,
      playing: false,
      completed: false,
    };
  },
  mounted() {
    const editor = this.$refs.code;

    this.observer = new IntersectionObserver((entry, observer) => {
      if (entry?.[0]?.isIntersecting) {
        this.handle();
      }
    });

    this.observer.observe(editor);
  },
  methods: {
    showElement(element) {
      this.visibleElements[element] = true;
    },

    restart() {
      this.playing = false;
      this.completed = false;
      this.visibleElements = {
        name: false,
        description: false,
        save: false,
      };
      this.handle();
    },

    handle() {
      if (this.playing || this.completed) {
        return;
      }

      this.typewriter = new Typewriter(this.$refs.code, {
        loop: false,
        delay: 30,
        typeSpeed: 150,
      });

      this.playing = true;
      this.completed = false;

      this.typewriter
        .typeString(Prism.highlight("fields:\n", Prism.languages.yaml))
        .pauseFor(100);

      this.blocks.map(({ element, code }, index) => {
        this.typewriter
          .typeString("\n  ")
          .typeString(Prism.highlight(code, Prism.languages.yaml))
          .start()
          .callFunction(() => this.showElement(element))
          .typeString("\n")
          .pauseFor(1000)
          .callFunction(() => {
            this.completed = index === this.blocks.length - 1;
          });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.demo {
  background: url("/images/bg.jpg") no-repeat center center fixed;
  background-color: #202736;
  margin: 0 auto;
  padding: 20px 8px;
  max-width: 100vw;
  overflow: hidden;

  .demo-title {
    max-width: 1024px;
    margin: 80px auto 40px;
    color: #fff;
    padding: 0 16px;

    h2 {
      margin: 0 0 20px;
      border: 0;
      font-size: 36px;
      text-align: left;
      color: #fff;
      font-weight: 900;

      @media (min-width: 640px) {
        font-size: 48px;
      }

      span {
        position: relative;
        font-weight: 500;
        font-family: var(--font-family-code);
        font-style: italic;
        background: rgba(#010101, 0.4);
        border-radius: 0.5rem;
        padding: 0 10px 2px;
      }
    }
    p {
      font-size: 20px;
      text-align: left;
      color: #fff;
      font-weight: 400;
    }
  }

  .windows-wrapper {
    width: 100%;
    padding: 1rem;
    margin: 5rem auto;
    max-width: 1280px;

    @media (min-width: 640px) {
      padding-left: 24px;
      padding-right: 24px;
      margin-top: 96px;
    }

    @media (min-width: 768px) {
      padding-left: 32px;
      padding-right: 32px;
    }

    @media (min-width: 1024px) {
      margin-top: 128px;
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 32px;
      align-items: center;
    }

    .editor-window-wrapper {
      position: relative;
      grid-column: span 7 / span 7;
      grid-column-start: 6;
      grid-row-start: 1;

      @media (min-width: 1280px) {
        grid-column: span 6 / span 6;
        grid-column-start: 7;
      }
    }

    .preview-window-wrapper {
      position: relative;
      grid-column: span 5 / span 5;
      grid-column-start: 1;
      grid-row-start: 1;
      margin-top: -40px;

      @media (min-width: 1280px) {
        grid-column: span 6 / span 6;
      }
    }
  }

  .editor-window {
    margin-left: -1rem;
    margin-right: -1rem;

    @media (min-width: 640px) {
      margin-left: 0;
      margin-right: 0;
    }

    &__container {
      display: flex;
      overflow: hidden;
      position: relative;
      display: flex;
      border-radius: 0.75rem;
      background-color: #1e293b;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
      height: 30rem;
      max-height: 60vh;

      @media (min-width: 640px) {
        max-height: none;
      }
      @media (min-width: 1024px) {
        min-width: 600px;
      }
    }
    &__frame {
      display: flex;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    &__top-bar {
      flex: none;
      border-bottom-width: 1px;
      border-color: rgb(100 116 139 / 0.3);

      &__items {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        margin-left: 0.375rem;
        margin-right: 0.375rem;
        display: flex;
        align-items: center;
        gap: 4px;
        height: 2rem;

        .button {
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 9999px;
          background-color: #475569;
        }
      }
    }
    &__contents {
      display: flex;
      position: relative;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
    }
    &__code-wrapper {
      display: flex;
      overflow: auto;
      flex: 1 1 auto;
      width: 100%;
      min-height: 0;
    }
    &__code {
      position: relative;
      color: #fef3c7;
      flex: 1 1 auto;
      width: 100%;

      pre {
        margin: 0;
        font-family: var(--font-family-code);
      }
    }
  }
  .replay-wrapper {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 2rem;
    text-align: center;

    .button-replay {
      width: 60px;
      height: 60px;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -webkit-appearance: button;
      tab-size: 4;
      box-sizing: border-box;
      border: 2px solid #fff;
      font-family: inherit;
      margin: 0;
      text-transform: uppercase;
      cursor: pointer;
      background-image: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      border-radius: 9999px;
      background-color: transparent;
      padding: 1.2rem;
      letter-spacing: 2px;
      font-size: 0.85rem;
      font-weight: 500;
      line-height: 1.5rem;
      color: #fff;
      transition-property: all;
      transition-duration: 100ms;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

      &:hover {
        opacity: 0.8;
        background-color: #1e293b;
        color: #fff;
      }

      .button-icon {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
