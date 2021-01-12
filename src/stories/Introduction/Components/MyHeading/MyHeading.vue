<template>
  <h1 :style="styles">{{ text }}</h1>
</template>

<script>
export default {
    name: 'MyHeading',
    props: {
        text: {
            type: String,
            default: 'Heading'
        },
        bordered: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        styles() {
            return {
                border: this.bordered ? '1px solid black' : 'none'
            }
        }
    }
}
</script>

<style>

</style>
