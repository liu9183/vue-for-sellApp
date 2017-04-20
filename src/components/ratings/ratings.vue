<template>
	<div class="ratings">
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
		</div>
	    <split></split>
	    <ratingselect :select-type="selectType" :only-content="onlyContent" :ratings="ratings"></ratingselect>
	    <div class="ratings-wrapper">
	    	<ul>
	    		<li v-for="rating in ratings" class="rating-item">
	    			<div class="avatar">
	    				<img :src="rating.avatar"/>
	    			</div>
	    			<div class="content">
	    				<h1 class="name">{{rating.username}}</h1>
	    				<div class="star-wrapper">
	    					<star :size="24" :score="rating.score"></star>
	    				    <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
	    				</div>
	    				<p class="text">{{rating.text}}</p>
	    				<div class="">
	    					
	    				</div>
	    			</div>
	    		</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
	import star from '../star/star.vue';
	import split from '../split/split.vue';
	import ratingselect from '../ratingselect/ratingselect.vue';
	
	const ALL=2;
	const ERR_OK=0;
	
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		data(){
			return{
				ratings:[],
				selectType:ALL,
				onlyContent:true
			};
		},
		created(){   //……………………………………………………………………
			this.$http.get('/api/ratings').then((response) => {
				response=response.body;
				if(response.errno===ERR_OK){
					this.ratings=response.data;
				}
				
			})
		},
		components:{
			star,
			split,
			ratingselect
		}
	};
</script>

<style>
	.ratings{
		position: absolute;
		top: 174px;
		bottom: 0;
		width: 100%;
		overflow: auto;
	}
	.ratings .overview{
		display: flex;
		padding: 18px 0;
	}
	.overview .overview-left{
		flex: 0 0 137px;
		padding: 6px 0;
		width: 137px;
		border-right: 1px solid rgba(7,17,27,0.1);
		text-align: center;
		
	}
	.overview-left .score{
		margin-bottom: 6px;
		line-height: 28px;
		font-size: 24px;
		color: rgb(255,153,0);
	}
	.overview-left .title{
		margin-bottom: 8px;
		line-height: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.overview-left .rank{
		
		line-height: 10px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.overview .overview-right{
		flex: 1;
		padding:6px 0 6px 24px;
	}
	.overview-right .score-wrapper{
		 margin-bottom: 8px;
	}
	.overview-right .title{
		margin-right: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
		line-height: 18px;
	}
	.score-wrapper .star{
		display: inline-block;
		margin-right: 12px;
		
	}
	.score-wrapper .score{
		font-size: 12px;
		color: rgb(255,153,0);
		line-height: 18px;
	}
	.overview-right .delivery-wrapper .delivery{
		font-size: 12px;
		color: rgb(147,153,159);
		line-height: 18px;
	}
</style>