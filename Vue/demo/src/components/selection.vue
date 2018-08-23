<template>
    <div class="selection-component">
        <div class="selection-show" @click="toggleDrop">
            <span>{{selections[nowIndex].label}}</span>
            <div class="arrow"></div>
        </div>
        <div class="selection-list" v-if="isDrop">
            <ul>
                <li v-for="(item, index) in selections" :key="item.value" @click="chooseSelection(index)">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selections: {
            type: Array,
            default: [{
                label: 'test',
                value: 0
            }]
        }
    },
    data() {
        return {
            nowIndex: 0,
            isDrop: false
        }
    },
    methods: {
        toggleDrop() {
            this.isDrop = !this.isDrop
        },
        chooseSelection(index) {
            this.nowIndex = index;
            this.isDrop = false;
            this.$emit('on-change', this.nowIndex);
        }
    }
}
</script>

<style scoped>

.selection-component {
    position: relative;
    display: inline-block;
}

.selection-show {
    position: relative;
    display: inline-block;
    height: 25px;
    padding: 0 20px 0 10px;
    border: 1px solid #e3e3e3;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
    cursor: pointer;
}

.selection-show .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    margin: -1px -14px 0 6px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    vertical-align: middle;
}

.selection-list {
    position: absolute;
    z-index: 5;
    left: 0;
    top: 25px;
    display: inline-block;
    width: 100%;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    background: #fff;
}

.selection-list li {
    overflow: hidden;
    padding: 5px 15px 5px 10px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    background: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}

.selection-list li:hover {
    background: #e3e3e3;
}

</style>
