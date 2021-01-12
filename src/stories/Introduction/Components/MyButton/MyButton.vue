<template>
  <button :class="classes" :style="style" :disabled="disabled" @click="onClick">{{ label }}</button>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        type: {
            type: String,
            requried: true,
            default: 'primary'
        },
        label: {
            type: String,
            required: true,
            default: 'Button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        backgroundColor: {
            type: String
        }
    },
    computed: {
        classes() {
            return {
                'button-primary': this.type === 'primary',
                'button-success': this.type === 'success',
                'button-danger': this.type === 'danger'
            }
        },
        styles() {
            return {
                color: this.backgroundColor
            }
        }
    },
    methods: {
        onClick(event) {
            this.$emit('onClick', event);
        }
    }
}
</script>

<style>
button {
    color: white;
}

.button-primary {
    background: blue;
}
.button-success {
    background: green;
}
.button-danger {
    background: red;
}
</style>
