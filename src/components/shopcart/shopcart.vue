<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo">
						<i class="icon-shopping_cart">
							
						</i>
					</div>
				</div>
				<div class="price">
					0元
				</div>
				<div class="desc">
					另需配送费￥{{deliveryPrice}}元
				</div>
			</div>
			<div class="content-right">
				<div class="pay">
					￥{{minPrice}}元起送
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			deliveryPrice:{
				type:Number,
				default:0
			},
			minPrice:{
				type:Number,
				default:0
			}
		}
	};
</script>

<style>
	.shopcart{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 50;
		width: 100%;
		height: 48px;
		
		
	}
	.shopcart .content{
		display: flex;
		background: #141d27;
		color: rgba(255,255,255,0.4);
	}
	.content .content-left{
		flex: 1;
		font-size: 0;
	}
	.content .content-left .logo-wrapper{
		display: inline-block;
		position: relative;
		top: -10px;
		margin: 0 12px;
		padding: 6px;
		width: 56px;
		height: 56px;
		box-sizing: border-box;   /*……………………………………………………*/
		vertical-align: top;
		border-radius: 50%;
		background: #141d27;
	

	}
	.logo-wrapper .logo{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #2b343c;
		text-align: center;
	}
	.logo-wrapper .logo .icon-shopping_cart{
		font-size: 24px;
		color: #80858a;
		line-height: 44px;
	}
	.content .content-left .price{
		display: inline-block;
		vertical-align: top;
		margin-top: 12px;
		line-height: 24px;
		padding-right: 12px;
		box-sizing: border-box;
		border-right: 1px solid rgba(255,255,255,0.1);
		font-size: 16px;
		font-weight: 700;
		
		
	}
	.content .content-left .desc{
		display: inline-block;
		vertical-align: top;
		line-height: 24px;
		margin: 12px 0 0 12px;
		
		font-size: 10px;	
	}
	.content .content-right{
		flex: 0 0 105px;
		width: 105px;
		
	}
	.content .content-right .pay{
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 12px;
		font-weight: 700;
		background: #2b333b;
		
	}
</style>