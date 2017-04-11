<template>
	<div class="header">
		<div class="content_wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar"/>
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
		</div>
		<div class="bulletin-wrapper">
			
		</div>
	</div>
</template>

<script>
	export default{
	   props:{
	   	seller:{
	   		type:Object
	   	}
	   }
	}
</script>

<style>
	.header{
		background: #000;
		color: #fff;
	}
	.header>.content_wrapper{
		
		padding: 24px 12px 18px 24px;
	}
	.header>.content_wrapper>.avatar{
		
		display: inline-block;
		vertical-align: top;
		
		
	}
	.avatar>img{
		border-radius: 2px;
	}
	.header>.content_wrapper>.content{
		display: inline-block;
		
		margin-left: 16px;
	}
	.content>.title{
		margin: 2px 0 8px 0;
	}
	.content>.title>.brand{
		width: 30px;
		height: 18px;
		display: inline-block;
		vertical-align: top;
		background: url(brand@2x.png);
		background-size: 30px 18px;
	}
	.content>.title>.name{
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
	}
	.content>.description{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.content>.support>.icon{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
	}
	.icon>.decrease{
		background-image: url(decrease_1@2x.png);
	}
	.icon>.discount{
		background-image: url(discount_1@2x.png);
	}
	.icon>.guarantee{
		background-image: url(guarantee_1@2x.png);
	}
	.icon>.invoice{
		background-image: url(invoice_1@2x.png);
	}
	.icon>.special{
		background-image: url(special_1@2x.png);
	}
</style>