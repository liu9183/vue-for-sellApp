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
					<span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count">
				<span class="count">
					{{seller.supports.length}}个
				</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title">
				
			</span>
			<span class="bulletin-text">
				{{seller.bulletin}}
			</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
	</div>
</template>

<script>
	export default{
	   props:{
	   	seller:{
	   		type:Object
	   	}
	   },
	   created(){
	   	  this.classMap=['decrease','discount','guarantee','invoice','special']
	   }
	};
</script>

<style>
	@import url("../../common/stylus/style.css");
	.header{
		background: #999;
		color: #fff;
	}
	.header>.content_wrapper{
		
		padding: 24px 12px 18px 24px;
		position: relative;
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
		vertical-align: bottom;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
	}
	.icon.decrease{
		background-image: url(decrease_1@2x.png);
	}
	.icon.discount{
		background-image: url(discount_1@2x.png);
	}
	.icon.guarantee{
		background-image: url(guarantee_1@2x.png);
	}
	.icon.invoice{
		background-image: url(invoice_1@2x.png);
	}
	.icon.special{
		background-image: url(special_1@2x.png);
	}
	.content>.support>.text{
		line-height: 12px;
		font-size: 12px;
		padding: 0;
	}
	.header>.content_wrapper>.support-count{
		position: absolute;
		right: 12px;
		bottom: 14px;
		padding: 0 8px;
		height: 24px;
		line-height: 20px;
		border-radius: 14px;
		background: rgba(0,0,0,0.2);
		text-align: center;
		
	}
	.support-count>.count{
		font-size: 10px;
	}
	.support-count>.icon-keyboard_arrow_right{
		font-size: 10px;
		line-height: 24px;
		margin-left: 2px;
	}
	.header>.bulletin-wrapper{
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>