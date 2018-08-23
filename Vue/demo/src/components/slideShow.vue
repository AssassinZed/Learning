<template>
<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
		<a href="slides[nowIndex].href">
			<transition name="slide-trans">
				<img v-if="isShow" :src="slides[nowIndex].src">
			</transition>
			<transition name="slide-trans-old">
				<img v-if="!isShow" :src="slides[nowIndex].src">
			</transition>	
		</a>
	</div>
	<h2>{{ slides[nowIndex].title }}</h2>
	<ul class="slide-pages">
		<li @click="goto(prevIndex)">&lt;</li>
		<li v-for="(item, index) in slides" :key="index" @click="goto(index)">
			<a :class="{'on': index === nowIndex}">{{ index + 1 }}</a>
		</li>
		<li @click="goto(nextIndex)">&gt;</li>
	</ul>
</div>
</template>

<script>
export default {
	props: {
		slides: {
			type: Array,
			default: []
		},
		inv: {
			type: Number,
			default: 1000
		}
	},
	data() {
		return {
			nowIndex: 0,
			isShow: true,
		}
	},
	computed: {
		prevIndex() {
			if(this.nowIndex === 0) {
				return this.slides.length - 1
			} else {
				return this.nowIndex - 1
			}
		},
		nextIndex() {
			if(this.nowIndex === this.slides.length - 1) {
				return 0
			} else {
				return this.nowIndex + 1
			}
		}
	},
	methods: {
		goto(index) {
			this.isShow = false;
			setTimeout(() => {
				this.isShow = true;
				this.nowIndex = index;
				this.$emit('onchange', index)
			}, 10)	
		},
		runInv() {
			this.invId = setInterval(() => {
				this.goto(this.nextIndex)
			}, this.inv)
		},
		clearInv() {
			clearInterval(this.invId)
		}
	},
	mounted() {
		this.runInv()
	},
}
</script>

<style scoped>

.slide-trans-enter-active {
	transition: all .5s;
}

.slide-trans-enter {
	transform: translateX(900px);
}

.slide-trans-old-leave-active {
	transition: all .5s;
	transform: translateX(-900px);
}

.slide-show {
	position: relative;
	margin: 15px 15px 15px 0;
	width: 900px;
	height: 350px;
	overflow: hidden;
}

.slide-show h2 {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30px;
	line-height: 30px;
	padding-left: 15px;
	color: #fff;
	background: #000;
	opacity: .5;
	text-align: left;
}

.slide-img {
	width: 100%;
}

.slide-img img {
	position: absolute;
	top: 0;
	width: 100%;
}

.slide-pages {
	position: absolute;
	bottom: 10px;
	right: 80px;
}

.slide-pages li {
  	display: inline-block;
  	padding: 0 10px;
  	cursor: pointer;
  	color: #fff;
	/* disable user selection */
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.slide-pages li .on {
  	text-decoration: underline;
}

</style>

