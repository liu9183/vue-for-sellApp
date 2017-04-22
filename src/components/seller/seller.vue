<template>
	<div class="seller">
	    <div class="seller-content">
	    	<div class="overview">
	    		<h1 class="title">{{seller.name}}</h1>
	    		<div class="desc">
	    			<star :size="36" :score="seller.score"></star>
	    			<span class="text">({{seller.ratingCount}})</span>
	    			<span class="text">月售{{seller.sellCount}}单</span>
	    		</div>
	    		<ul class="remark">
	    			<li class="block">
	    				<h2>起送价</h2>
	    				<div class="content">
	    					<span class="stress">{{seller.minPrice}}</span>元
	    				</div>
	    			</li>
	    			<li class="block">
	    				<h2>商家配送</h2>
	    				<div class="content">
	    					<span class="stress">{{seller.deliveryPrice}}</span>元
	    				</div>
	    			</li>
	    			<li class="block">
	    				<h2>平均配送时间</h2>
	    				<div class="content">
	    					<span class="stress">{{seller.deliveryTime}}</span>分钟
	    				</div>
	    			</li>
	    		</ul>
	    		
	    	</div>
	        <split></split>
	        <div class="bulletin">
	        	<h1 class="title">公告与活动</h1>
	        </div>
	    </div>
	</div>
</template>

<script>
	import star from '../star/star.vue';
	import split from '../split/split.vue'
	export default{
		props:{
			seller:{
			    type:Object
			}
		},
		components:{
			star,
			split
		}
	};
</script>

<style>
	.seller{
		position: absolute;
		top: 174px;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	.seller .overview{
		padding: 18px;
		
	}
	.seller .overview .title{
		margin-bottom: 8px;
		line-height: 14px;
		color: rgb(7,17,27);
		font-size: 14px;
	}
	.seller .overview .desc{
		padding-bottom: 18px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.desc .star{
		display: inline-block;
		margin-right: 8px;
		vertical-align: top;
	}
	.desc .text{
		display: inline-block;
		margin-right: 12px;
		line-height: 18px;
		vertical-align: top;
		font-size: 10px;
		color: rgb(77,85,93);
	}
	.seller .overview .remark{
		display: flex;
		padding-top: 18px;
	}
	.remark .block{
		flex: 1;
		text-align: center;
		border-right: 1px solid rgba(7,17,27,0.1);
	}
	.block:last-child{
		border: 0;
	}
	.block h2{
		margin-bottom: 4px;
		line-height: 10px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.block .content{
		line-height: 24px;
		font-size: 10px;
		color: rgb(7,17,27);
	
	}
	.block .content .stress{
		font-size: 24px;
	}
</style>