<template>
    <div>
        <div>My blog navigation bar here</div>
        <Nuxt />
    </div>
</template>

<script>
export default {
    head() {
        return {
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: "Blog - Daniel | Building awesome apps",
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>