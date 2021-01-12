<template>
  <input :style="styles" :disabled="disabled" @input="onInput" />
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        disabled: {
            type: Boolean,
            default: false,
            requried: true,
        },
        color: {
            type: String,
        }
    },
    computed: {
        styles() {
            return {
                color: this.color
            }
        }
    },
    methods: {
        onInput(event) {
            this.$emit('onInput', event);
        }
    }
}
</script>

<style>

</style>
