<template>
<div>
    <div class="dialog-wrap">
        <div class="dialog-cover" @click="closeMyself" v-if="isShown"></div>
        <transition name="drop">
            <div class="dialog-content" v-if="isShown">
                <p class="dialog-close" @click="closeMyself">x</p>
                <slot>Empty now.</slot>
            </div>
        </transition>
    </div>
</div>    
</template>

<script>
export default {
    props: {
        isShown: {
            type: Boolean,
            default: false,
        } 
    },
    methods: {
        closeMyself() {
            this.$emit('on-close')
        }
    }
}
</script>

<style scoped>

.dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
}

.dialog-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: #000;
    opacity: .3;
}

/* animation */

.drop-enter-active {
    transition: all .5s;
}

.drop-leave-active {
    transition: all .3s ease;
}

.drop-enter {
    transform: translateY(-500px);
}

.drop-leave-active {
    transform: translateY(-500px);
}

.dialog-content {
    position: fixed;
    top: 20%;
    left: 50%;
    overflow: auto;
    width: 50%;
    max-height: 50%;
    z-index: 10;
    margin-left: -25%;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
    background-color: #fff;
}

.dialog-close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
}

.dialog-close:hover {
    color: #4fc08d;
}

</style>
