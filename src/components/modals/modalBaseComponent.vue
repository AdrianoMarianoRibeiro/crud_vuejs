<template>
  <v-row justify="center">
    <v-dialog v-model="dialogValue" scrollable max-width="526">
      <v-card>
        <v-card-title
          style="
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: flex-start;
          "
        >
          <slot name="title"></slot>
          <span
            style="font-size: 1.2em; color: #b31500"
            class="material-symbols-outlined cursor-pointer noselect"
            @click="dialogValue = false"
            >close</span
          >
        </v-card-title>
        <v-card-text style="font-size: 1em; color: #15181b">
          <slot name="content"></slot>
        </v-card-text>
        <v-card-actions style="margin-bottom: 1.2em">
          <v-btn
            style="width: 100%"
            class="color-text-button"
            color="primary"
            @click="onClickButton()"
          >
            <span
              style="font-size: 1.4em; margin-right: 0.2em"
              class="material-symbols-outlined"
              >close</span
            >
            <span style="font-size: 0.85em"> Fechar </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ModalBaseComponent',

  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    setDialog: {
      type: Function,
      required: true,
      default: undefined,
    },
    onClick: {
      type: Function,
      required: false,
      default: undefined,
    },
    onClose: {
      type: Function,
      required: false,
      default: undefined,
    },
  },

  computed: {
    dialogValue: {
      get() {
        return this.dialog;
      },
      set(value) {
        if (!value && this.onClose) {
          this.onClose();
        }
        this.setDialog(value);
      },
    },
  },

  methods: {
    onClickButton() {
      if (this.onClick) {
        this.onClick();
      }
      this.dialogValue = false;
    },
  },
});
</script>

<style scoped></style>
