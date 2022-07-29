<template lang="">
    <div>
        <h1>
            Blog coming soon
        </h1>

        <NuxtLink to="/#blog-segment-title" class="unstyled">
            Go back
        </NuxtLink>
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
<style scoped>
div {
    padding: 50px;
    text-align: center;
}

h1 {
    margin-bottom: 36px;
}
</style>