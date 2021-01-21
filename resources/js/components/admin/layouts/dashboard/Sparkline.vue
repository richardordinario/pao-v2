<template>
    <section>
        <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        stroke-linecap="round"
        smooth
        padding="16"
        label-size="4"
      ></v-sparkline>

    </section>
</template>

<script>

    export default {
        data: () => ({

            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8 ],


        })
    }
</script>

