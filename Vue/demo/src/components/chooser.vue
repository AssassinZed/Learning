<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(item, index) in selections" :key="item.value" @click="chosenSelection(index)" 
            :title='item.label' :class="{'active': index === nowIndex}">
                {{item.label}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowIndex: 0
        }
    },
    props: {
        selections: {
            type: Array,
            default: [{
                label: 'text',
                value: 0
            }]
        }
    },
    methods: {
        chosenSelection(index) {
            this.nowIndex = index;
            this.$emit('on-change', this.selections[index])
        }
    }
}
</script>

<style scoped>

.chooser-component {
    position: relative;
    display: inline-block;
}

.chooser-list li {
    display: inline-block;
    height: 25px;
    margin-right: 5px;
    padding: 0 8px;
    border: 1px solid #e3e3e3;
    line-height: 25px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
}

.chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}

</style>
