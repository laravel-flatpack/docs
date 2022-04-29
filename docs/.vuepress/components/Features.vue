<template>
  <section class="features-section">
    <div class="container">
      <div class="contents">
        <div class="content" ref="feature-1">
          <h3>🪄 As simple as it is.</h3>
          <p>
            Create beautiful interfaces with just few lines. Declare your UI in
            tiny <em>yaml</em> files and enjoy the simplicity.
          </p>
        </div>
        <div class="content" ref="feature-2">
          <h3>🙌 Just what you need.</h3>
          <p>
            Data tables, text inputs, rich text editors, date pickers, tag
            pickers, searchable select menus, image upload, toggles and more.
          </p>
        </div>

        <div class="content" ref="feature-3">
          <h3>⚡️ Lightning fast to develop.</h3>
          <p>
            Made for everyone. No need to learn a new framework. Ready in
            seconds.<br />No coding skills required.
          </p>
        </div>
      </div>
      <div class="locker">
        <div class="locker__frame">
          <div class="locker__content">
            <div class="window">
              <div class="window__container">
                <div class="window__frame">
                  <div class="window__top-bar">
                    <div class="window__top-bar__items">
                      <div class="button" style="background: #ed695e"></div>
                      <div class="button" style="background: #f4bd4f"></div>
                      <div class="button" style="background: #61c354"></div>
                    </div>
                    <div class="window__top-bar__search"></div>
                    <div class="window__top-bar__span"></div>
                  </div>
                  <div class="window__contents">
                    <img
                      v-if="current === 'feature-1'"
                      src="/images/feature-1.png"
                      alt="List of records in a paginated table"
                    />
                    <img
                      v-if="current === 'feature-2'"
                      src="/images/feature-2.png"
                      alt="Form fields with input validation"
                    />
                    <img
                      v-if="current === 'feature-3'"
                      src="/images/feature-3.png"
                      alt="Advanced form fields and WYSIWYG editors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Features",
  data() {
    return {
      current: "feature-1",
    };
  },
  mounted() {
    this.handle("feature-1");
    this.handle("feature-2");
    this.handle("feature-3");
  },
  methods: {
    handle(ref) {
      const block = this.$refs?.[ref];

      this.observer = new IntersectionObserver(
        (entry, observer) => {
          if (entry?.[0]?.isIntersecting) {
            this.current = ref;
          }
        },
        { threshold: 1.0, rootMargin: "-200px 0px -200px 0px" }
      );

      this.observer.observe(block);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  height: auto;

  .locker {
    position: relative;
    padding: 8rem 1rem 4rem;
    margin: 0 0;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }

    &__frame {
      position: sticky;
      position: -webkit-sticky;
      top: 34%;
      height: 34vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__content {
      width: 360px;
      height: 34vh;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 340px;
        border-radius: 0.325rem;
      }

      @media (min-width: 960px) {
        width: 460px;

        img {
          max-width: 440px;
        }
      }
    }
  }

  .contents {
    max-width: 420px;

    .content {
      margin: 8rem auto;

      h3 {
        font-size: 28px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
.window {
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
    border-radius: 0.35rem;
    background-color: #31353b;

    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

    @media (min-width: 640px) {
      max-height: none;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: rgb(100 116 139 / 0.3);

    &__search {
      background: #434343;
      height: 14px;
      width: 40%;
      border-radius: 4px;
      letter-spacing: 0.01rem;
    }

    &__span {
      width: 60px;
    }

    &__items {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      margin-left: 0rem;
      margin-right: 0.75rem;
      display: flex;
      align-items: center;
      gap: 4px;
      height: 2rem;

      .button {
        width: 0.325rem;
        height: 0.325rem;
        border-radius: 9999px;
        background-color: #475569;
      }
    }
  }
  &__contents {
    display: flex;
    position: relative;
    flex-direction: column;
    min-height: 0;
    padding: 1px;
    overflow: hidden;
    min-width: 340px;
    height: 177px;
    background: rgba(0, 0, 0, 0.2);

    @media (min-width: 960px) {
      min-width: 440px;
      height: 229px;
    }
  }
}
</style>
