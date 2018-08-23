<template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>         
                <div v-for="product in productList" :key='product.title'>
                    <h3>{{product.title}}</h3>
                    <ul>
                        <li v-for="item in product.list" :key="item.name">
                            <a :href="item.url">{{item.name}}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div class="hr" v-if="!product.last"></div>
                </div>
            </div>
            <div class="index-left-block latest-news">
                <h2>最新消息</h2>             
                <div v-for="product in productList" :key='product.title'>
                    <h3>{{product.title}}</h3>
                    <ul>
                        <li v-for="item in product.list" :key="item.name">
                            <a :href="item.url">{{item.name}}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>                    
                        </li>
                    </ul>
                    <div class="hr" v-if="!product.last"></div>
                </div>
            </div>
        </div>
        <div class="index-right">
            <slide-show :slides='slides' :inv='slideSpeed' @onchange='doSthOnSliderChange'></slide-show>
            <div class="index-board-list">
                <div class="index-board-item" v-for="(item, index) in boardList" :key="item.title"
                    :class="[{'line-last': index % 2 !==0 }, 'index-board-' + item.id]">
                    <div class="index-board-item-inner">
                        <h2>{{item.title}}</h2>
                        <p>{{item.description}}</p>
                        <div class="index-board-button">
                            <a href="" class="button">立即购买</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>
<script>
import slideShow from '../components/slideShow'
export default {
    components: {
        slideShow
    },
    data() {
        return {
            slideSpeed: 2000,
            slides: [
                {src: require('../assets/slideShow/pic1.jpg'), title: 'pic1', href: 'detail/analysis'},
                {src: require('../assets/slideShow/pic2.jpg'), title: 'pic2', href: 'detail/count'},
                {src: require('../assets/slideShow/pic3.jpg'), title: 'pic3', href: 'http://www.baidu.com'},
                {src: require('../assets/slideShow/pic4.jpg'), title: 'pic4', href: 'detail/forecast'},
            ],
            productList: {
                pc: {
                    title: 'PC产品',
                    last: false,
                    list: [
                        {name: '数据统计', url: 'http://www.baidu.com'}, 
                        {name: '数据预测', url: 'http://www.baidu.com'},
                        {name: '流量分析', url: 'http://www.baidu.com',hot: true},
                        {name: '广告发布', url: 'http://www.baidu.com'}
                    ]
                },
                app: {
                    title: '手机应用类',
                    last: true,
                    list: [
                        {name: '91助手', url: 'http://www.baidu.com'},
                        {name: '产品助手', url: 'http://www.baidu.com'},
                        {name: '智能地图', url: 'http://www.baidu.com'},
                        {name: '团队语音', url: 'http://www.baidu.com'}
                    ]
                },             
            },
            boardList: [
                {title: '开放产品', description:'开放产品是一款开放产品', saleout: false, id: 'earth'},
                {title: '品牌营销', description:'品牌营销帮助你的产品更好地找到定位', saleout: false, id: 'car'},
                {title: '使命必达', description:'使命必达快速迭代保持最前端的速度', saleout: true , id: 'speaker'},
                {title: '勇攀高峰', description:'帮你勇闯高峰，到达事业的顶峰', saleout: false , id: 'moutain'},
            ]
        }
    },
    methods: {
        doSthOnSliderChange() {
            // console.log('done')
        }
    }
}
</script>

<style scoped>

.index-wrap {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.index-left {
    float: left;
    width: 30%;
}

.index-right {
    float: right;
    width: 70%;
}

/* index-left */

.index-left-block {
    margin: 0 15px 15px 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    border-radius: 10px;
}

.index-left-block h2 {
    margin-bottom: 20px;
    padding: 10px 15px;
    background: #4fc08d;
    color: #fff;
}

.index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
}

.index-left-block ul {
    padding: 10px 15px;
}

.index-left-block li {
    padding: 5px;
}

.hot-tag {
    padding: 0 5px;
    background: #c04fb1;
    color: #fff;
    font-size: 12px;  
}

.index-left-block .hr {
    margin-bottom: 20px;
}

/* index-right */

.index-board-list {
    overflow: hidden;
}

.index-board-item {
    float: left;
    width: 43%;
    margin-right: 2%;
    margin-bottom: 20px;
    padding: 3%;
    background-color: #fff;
    box-shadow: 0 0 1px #ddd;
    border-radius: 0 0 10px 10px;
}

.index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
    line-height: 1.6;
}

.index-board-earth .index-board-item-inner {
    background: url(../assets/img/1.png) no-repeat;
}

.index-board-car .index-board-item-inner {
    background: url(../assets/img/2.png) no-repeat;
}

.index-board-speaker .index-board-item-inner {
    background: url(../assets/img/3.png) no-repeat;
}

.index-board-moutain .index-board-item-inner {
    background: url(../assets/img/4.png) no-repeat;
}

.index-board-item-inner h2 {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
    color: #000;
}

.line-last {
    margin-right: 0;
}







</style>

