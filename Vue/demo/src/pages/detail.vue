<template>
    <div class="detail-wrap">
        <div class="detail-left">
            <div class="product-board">
                <img :src="productIcon">
                <ul>
                    <!-- <li v-for="item in products" :key="item.name">{{item.name}}</li> -->
                    <router-link tag='li' v-for="item in products" :key="item.name" 
                    :to='{path: item.path}' active-class='active'>
                        {{item.name}}
                    </router-link>
                </ul>  
            </div>    
        </div>        
        <div class="detail-right">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>    
        </div>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: '数据统计',
                    path: 'count',
                    icon: require('../assets/img/1.png'),
                    active: false
                },
                {
                    name: '数据预测',
                    path: 'forecast',
                    active: false
                },
                {
                    name: '流量分析',
                    path: 'analysis',
                    active: false
                },
                {
                    name: '广告发布',
                    path: 'publish',
                    active: false
                }
            ],
            imgMap: {
                '/detail/count': require('../assets/img/1.png'),
                '/detail/forecast': require('../assets/img/2.png'),
                '/detail/analysis': require('../assets/img/3.png'),
                '/detail/publish': require('../assets/img/4.png')
            }
        }
    },
    computed: {
        productIcon() {
            return this.imgMap[this.$route.path]
        }
    }
}
</script>

<style>

.detail-wrap {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    overflow: hidden;
}

.detail-left {
    float: left;
    width: 200px;
    text-align: center;
}

.detail-right {
    float: right;
    width: 980px;
    margin-left: 20px;
}

.product-board {
    padding: 20px 0;
    background: #fff;
}

.product-board ul {
    margin-top: 20px;
}

.product-board li {
    padding: 10px 15px;
    text-align: left;
    cursor: pointer;
}

.product-board li.active,
.product-board li:hover {
    background: #4fc08d;
    color: #fff;
}

.product-board li a {
    display: block;
}

.sales-board {
    background: #fff;
}

.sales-board-intro h2 {
    padding: 20px;
    font-size: 20px;
}

.sales-board-intro p {
    padding: 10px 20px;
    background: #f7fcff;
    color: #999;
    line-height: 1.8;
}

.sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
}

.sales-board-line {
    clear: both;
    padding-bottom: 20px;
}

.sales-board-line-left {
    display: inline-block;
    width: 100px;
}

.sales-board-line-right {
    display: inline-block;
    width: 75%;
}

.sales-board-des {
    padding: 15px 20px;
    border-top: 20px solid #f0f2f5;
}

.sales-board-des p {
    line-height: 1.6;
}

.sales-board-des h2 {
    padding-bottom: 15px;
    font-size: 20px;
}

.sales-board-des h3 {
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
}

.sales-board-des li {
    padding: 5px 0;
}

.sales-board-table {
    width: 100%;
    margin-top: 20px;
}

.sales-board-table th {
    background: #4fc08d;
    color: #fff;
}

.sales-board-table td {
    padding: 15px;
    border: 1px solid #f0f2f5;
}

</style>
