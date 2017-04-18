<template>
	<div class="shopcart">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{'highlight':totalCount>0}">
						<i class="icon-shopping_cart" :class="{'highlight':totalCount>0}">
							
						</i>
						<div class="num">{{totalCount}}</div>
					</div>
				</div>
				<div class="price" :class="{'highlight':totalCount>0}">
					￥{{totalPrice}}
				</div>
				<div class="desc">
					另需配送费￥{{deliveryPrice}}元
				</div>
			</div>
			<div class="content-right">
				<div class="pay" :class="{'ready':totalPrice>=minPrice}">
					{{payDesc}}
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			selectFoods:{
				type:Array,
				default(){
					return [{
						price:22,
						count:1
					}];
				}
			},
			deliveryPrice:{
				type:Number,
				default:0
			},
			minPrice:{
				type:Number,
				default:0
			}
		},
		computed:{
			totalPrice(){
			   let total=0;
			   this.selectFoods.forEach((food)=>{
			   	  total+=food.price*food.count;
			   });
			   return total;
			   
			},
			totalCount(){
				let count=0;
				this.selectFoods.forEach((food)=>{
					count+=food.count;
				})
				return count;
			},
			payDesc(){
				if(this.totalPrice===0){
					return '￥'+this.minPrice+'元起送';
				}else if(this.totalPrice<this.minPrice){
					return '还差'+(this.minPrice-this.totalPrice)+'元起送';
				}else{
					return '结算';
				}
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
	.logo-wrapper .logo.highlight{
		background: rgb(0,160,220);
	}
	.logo-wrapper .logo .icon-shopping_cart{
		font-size: 24px;
		color: #80858a;
		line-height: 44px;
	}
	.logo-wrapper .logo .icon-shopping_cart.highlight{
		color: #fff;
	}
	.logo-wrapper .num{
		position: absolute;
		top: 0;
		right: 0;
		width: 24px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		border-radius: 16px;
		font-size: 9px;
		font-weight: 700;
		color: #fff;
		background: rgb(240,20,20);
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
		
		
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
	.content .content-left .price.highlight{
		color: #fff;
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
	.content .content-right .pay.ready{
		background: #00b43c;
		color: #fff;
		font-size: 15px;
	}
</style>