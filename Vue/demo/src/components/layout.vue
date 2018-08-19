<template>
<div>
    <div class="app-header">header</div>
    <div class="app-content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <div class="app-footer">footer</div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
    p {
        font-size: 16px;
    }
</style>

