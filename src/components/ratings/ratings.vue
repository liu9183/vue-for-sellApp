<template>
	<div class="ratings" ref="ratings">

		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{seller.score}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<span class="title">服务态度</span>
						<star :size="36" :score="seller.serviceScore"></star>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class="title">商品评分</span>
						<star :size="36" :score="seller.foodScore"></star>
						<span class="score">{{seller.foodScore}}</span>
					</div>
					<div class="delivery-wrapper">
						<span class="title">送达时间</span>
						<span class="delivery">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>

			<split></split>
			<ratingselect :select-type="selectType" :only-content="onlyContent" :ratings="ratings" @select="select" @toggle="toggle"></ratingselect>
			<div class="ratings-wrapper">
				<ul>
					<li v-for="rating in ratings" v-show="needShow(rating.rateType,rating.text)" class="rating-item">
						<div class="avatar">
							<img width="28" height="28" :src="rating.avatar" />
						</div>
						<div class="content">
							<h1 class="name">{{rating.username}}</h1>
							<div class="star-wrapper">
								<star :size="24" :score="rating.score"></star>
								<span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
							</div>
							<p class="text">{{rating.text}}</p>
							<div class="recommend" v-show="rating.recommend && rating.recommend.length">
								<span class="icon-thumb_up"></span>
								<span v-for="item in rating.recommend" class="item">
	    						{{item}}
	    					    </span>
							</div>
							<div class="time">
								{{rating.rateTime | formatDate}}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { formatDate } from '../../common/js/date.js';
	import BScroll from 'better-scroll';
	import star from '../star/star.vue';
	import split from '../split/split.vue';
	import ratingselect from '../ratingselect/ratingselect.vue';

	const ALL = 2;
	const ERR_OK = 0;

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				ratings: [],
				selectType: ALL,
				onlyContent: true
			};
		},
		created() { //……………………………………………………………………
			this.$http.get('/api/ratings').then((response) => {
				response = response.body;
				if(response.errno === ERR_OK) {
					this.ratings = response.data;
					this.$nextTick(() => {
						this.scroll = new BScroll(this.$refs.ratings, { //………………………………用到子元素的
							click: true
						});
					})

				}

			})
		},
		methods: {
			needShow(type, text) {
				if(this.onlyContent && !text) {
					return false;
				}
				if(this.selectType === ALL) {
					return true;
				} else {
					return type === this.selectType;
				}
			},
			select(type){
				this.selectType = type;
				this.$nextTick(() => {
				
					this.scroll.refresh();
				});
			},
			toggle(){
				this.onlyContent = !this.onlyContent;
				this.$nextTick(() => {
					this.scroll.refresh();
				});
			}
		},
		filters: { //…………………………………………
			formatDate(time) {
				let date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd hh:mm');
			}
		},
		components: {
			star,
			split,
			ratingselect
		}
	};
</script>

<style>
	.ratings {
		position: absolute;
		top: 174px;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	
	.ratings .ratings-content .overview {
		display: flex;
		padding: 18px 0;
	}
	
	.overview .overview-left {
		flex: 0 0 137px;
		padding: 6px 0;
		width: 137px;
		border-right: 1px solid rgba(7, 17, 27, 0.1);
		text-align: center;
	}
	
	.overview-left .score {
		margin-bottom: 6px;
		line-height: 28px;
		font-size: 24px;
		color: rgb(255, 153, 0);
	}
	
	.overview-left .title {
		margin-bottom: 8px;
		line-height: 12px;
		font-size: 12px;
		color: rgb(7, 17, 27);
	}
	
	.overview-left .rank {
		line-height: 10px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
	
	.overview .overview-right {
		flex: 1;
		padding: 6px 0 6px 24px;
	}
	
	.overview-right .score-wrapper {
		margin-bottom: 8px;
	}
	
	.overview-right .title {
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7, 17, 27);
		line-height: 18px;
	}
	
	.score-wrapper .star {
		display: inline-block;
		margin-right: 12px;
	}
	
	.score-wrapper .score {
		font-size: 12px;
		color: rgb(255, 153, 0);
		line-height: 18px;
	}
	
	.overview-right .delivery-wrapper .delivery {
		font-size: 12px;
		color: rgb(147, 153, 159);
		line-height: 18px;
	}
	
	.ratings .ratings-content .ratings-wrapper {
		padding: 0 18px;
	}
	
	.ratings-wrapper .rating-item {
		position: relative;
		display: flex;
		padding: 18px 0;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	
	.ratings-wrapper .rating-item .avatar {
		flex: 0 0 28px;
		width: 28px;
		margin-right: 12px;
	}
	
	.rating-item .avatar img {
		border-radius: 50%;
	}
	
	.rating-item .content {
		position: relative;
		flex: 1;
	}
	
	.rating-item .content .name {
		margin-bottom: 4px;
		line-height: 12px;
		font-size: 10px;
		color: rgb(7, 17, 27);
	}
	
	.rating-item .content .star-wrapper {
		margin-bottom: 6px;
		font-size: 0;
	}
	
	.rating-item .content .star-wrapper .star {
		display: inline-block;
		margin-right: 6px;
		vertical-align: top;
	}
	
	.rating-item .content .star-wrapper .delivery {
		display: inline-block;
		vertical-align: top;
		line-height: 12px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
	
	.rating-item .content .text {
		margin-bottom: 8px;
		line-height: 18px;
		color: rgb(7, 17, 27);
		font-size: 12px;
	}
	
	.rating-item .content .recommend {
		line-height: 16px;
		font-size: 0;
	}
	
	.rating-item .content .recommend .icon-thumb_up,
	.item {
		display: inline-block;
		margin: 0 8px 4px 0;
		font-size: 9px;
	}
	
	.recommend .icon-thumb_up {
		color: rgb(0, 160, 220);
	}
	
	.recommend .item {
		padding: 0 6px;
		border: 1px solid rgba(7, 17, 27, 0.1);
		border-radius: 1px;
		color: rgb(147, 153, 159);
		background: #fff;
	}
	
	.rating-item .content .time {
		position: absolute;
		top: 0;
		right: 0;
		line-height: 12px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
</style>