<template>
  <div class="preview-window">
    <div class="preview-window__container">
      <div class="form">
        <div class="form-fieldset">
          <div class="form-field" v-if="elements.name">
            <div class="form-field-elements">
              <label class="form-field__label" for="fields-name"> Name </label>

              <div class="form-field__input">
                <input
                  type="text"
                  autocomplete="off"
                  class="input"
                  placeholder="Enter a name"
                  id="fields-name"
                  name="fields.name"
                />
              </div>
            </div>
          </div>

          <div class="form-field" v-if="elements.description">
            <div class="form-field-elements">
              <label class="form-field__label" for="field-description">
                Description
              </label>

              <div class="form-field__input">
                <textarea
                  autocomplete="off"
                  rows="4"
                  class="textarea"
                  placeholder="Enter a description"
                  id="field-description"
                  name="fields.description"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="form-field" v-if="elements.save">
            <button type="button" class="button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Preview",
  props: {
    elements: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.preview-window {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 36rem;
  margin: 0 auto;
  height: 24rem;

  @media (min-width: 1024px) {
    max-width: none;
  }

  &__container {
    grid-column: 1 / -1;
    background-color: #ffffff;
    color: #1f2937;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 320px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 16px;
  }
  .form {
    padding: 24px 0;

    .form-fieldset {
      margin-left: auto;
      margin-right: auto;
      margin-top: 0px;
      margin-bottom: 0px;
      display: grid;
      width: 100%;
      max-width: 72rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;

      .form-field {
        width: 100%;
        max-width: 360px;
        margin: 0 auto;
        grid-column: 1 / -1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        &__label {
          width: 100%;
          display: block;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 500;
          color: #334155;
          margin-bottom: 4px;
        }

        &__input {
          width: 100%;
          position: relative;
          border-radius: 0.375rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

          .input,
          .textarea {
            resize: none;
            -webkit-text-size-adjust: 100%;
            tab-size: 4;
            box-sizing: border-box;
            border-style: solid;
            font-family: inherit;
            color: inherit;
            margin: 0;
            appearance: none;
            background-color: #fff;
            padding: 0.5rem 0.75rem;
            display: block;
            width: 100%;
            -webkit-border-radius: 0.375rem;
            border-radius: 0.375rem;
            border-width: 1px;
            border-color: #cbd5e1;
            transition-property: color, background-color, border-color,
              text-decoration-color, fill, stroke, opacity, box-shadow,
              transform, filter, backdrop-filter, -webkit-text-decoration-color,
              -webkit-backdrop-filter;
            transition-duration: 100ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 0.875rem;
            line-height: 1.25rem;
            display: block;
            transition-property: background-color, border-color, color, fill,
              stroke, opacity, box-shadow, transform;
            transition-duration: 100ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            outline: 2px solid transparent;
            outline-offset: 2px;

            &:focus {
              outline: 0px solid #374151;
              outline-offset: -2px;
              border-color: transparent;
              box-shadow: 0 0 0 2px #374151;
            }

            @media (min-width: 640px) {
              font-size: 0.875rem;
              line-height: 1.25rem;
            }
          }
        }

        .button {
          -webkit-text-size-adjust: 100%;
          -webkit-appearance: button;
          tab-size: 4;
          box-sizing: border-box;
          border: 0px solid #e5e7eb;
          font-family: inherit;
          margin: 0;
          text-transform: none;
          cursor: pointer;
          background-image: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          column-gap: 0.5rem;
          border-radius: 0.25rem;
          background-color: #374151;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #fff;
          transition-property: all;
          transition-duration: 100ms;
          transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

          &:focus {
            outline: 2px solid #374151;
            outline-offset: 2px;
          }

          &:hover {
            background-color: #2b323f;
          }
        }

        .form-field-elements {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 0.25rem;
        }
      }
    }
  }
}
</style>
