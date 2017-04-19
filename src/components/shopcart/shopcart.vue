<template>
	<div>
		<div class="shopcart">
			<div class="content" @click="toggleList">
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
				<div class="content-right" @click.stop="pay">
					<div class="pay" :class="{'ready':totalPrice>=minPrice}">
						{{payDesc}}
					</div>
				</div>

			</div>
			<transition name="fold">
				<div class="shopcart-list" v-show="listShow">
					<div class="list-header">
						<h1 class="title">购物车</h1>
						<span class="empty" @click="empty">清空</span>
					</div>
					<div class="list-content" ref="listContent">
						<ul>
							<li class="food" v-for="food in selectFoods">
								<span class="name">{{food.name}}</span>
								<div class="price">
									<span>￥{{food.price*food.count}}</span>
								</div>
								<div class="cartcontrol-wrapper">
									<cartcontrol :food="food"></cartcontrol>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</transition>

		</div>
		<transition name="fade">
			<div class="list-mask" v-show="listShow"   @click="hideList">

		    </div>
		</transition>
		
	</div>

</template>

<script>
	import cartcontrol from '../cartcontrol/cartcontrol.vue';
	import BScroll from 'better-scroll';
	export default {
		props: {
			selectFoods: {
				type: Array,
				default() {
					return [];
				}
			},
			deliveryPrice: {
				type: Number,
				default: 0
			},
			minPrice: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				fold: true
			}
		},
		computed: {
			totalPrice() {
				let total = 0;
				this.selectFoods.forEach((food) => {
					total += food.price * food.count;
				});
				return total;

			},
			totalCount() {
				let count = 0;
				this.selectFoods.forEach((food) => {
					count += food.count;
				})
				return count;
			},
			payDesc() {
				if(this.totalPrice === 0) {
					return '￥' + this.minPrice + '元起送';
				} else if(this.totalPrice < this.minPrice) {
					return '还差' + (this.minPrice - this.totalPrice) + '元起送';
				} else {
					return '结算';
				}
			},
			listShow() {
				if(!this.totalCount) {
					this.fold = true;
					return false;
				}
				let show = !this.fold;
				if(show) {
					this.$nextTick(() => {
						if(!this.scroll) {
							this.scroll = new BScroll(this.$refs.listContent, {
								click: true
							})
						} else {
							this.scroll.refresh();
						}

					})
				}
				return show;
			}
		},
		methods: {
			toggleList() {
				if(!this.totalCount) {
					return;
				}
				this.fold = !this.fold;
			},
			empty() {
				this.selectFoods.forEach((food) => {
					food.count = 0;
				})
			},
			hideList(){
				this.fold=true;
			},
			pay(){
				if(this.totalPrice<this.minPrice){
					return;
				}
				//window.alert('支付吧');
				
			}

		},
		components: {
			cartcontrol
		}
	};
</script>

<style>
	.shopcart {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 50;
		width: 100%;
		height: 48px;
	}
	
	.shopcart .content {
		display: flex;
		background: #141d27;
		color: rgba(255, 255, 255, 0.4);
	}
	
	.content .content-left {
		flex: 1;
		font-size: 0;
	}
	
	.content .content-left .logo-wrapper {
		display: inline-block;
		position: relative;
		top: -10px;
		margin: 0 12px;
		padding: 6px;
		width: 56px;
		height: 56px;
		box-sizing: border-box;
		/*……………………………………………………*/
		vertical-align: top;
		border-radius: 50%;
		background: #141d27;
	}
	
	.logo-wrapper .logo {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #2b343c;
		text-align: center;
	}
	
	.logo-wrapper .logo.highlight {
		background: rgb(0, 160, 220);
	}
	
	.logo-wrapper .logo .icon-shopping_cart {
		font-size: 24px;
		color: #80858a;
		line-height: 44px;
	}
	
	.logo-wrapper .logo .icon-shopping_cart.highlight {
		color: #fff;
	}
	
	.logo-wrapper .num {
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
		background: rgb(240, 20, 20);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
	}
	
	.content .content-left .price {
		display: inline-block;
		vertical-align: top;
		margin-top: 12px;
		line-height: 24px;
		padding-right: 12px;
		box-sizing: border-box;
		border-right: 1px solid rgba(255, 255, 255, 0.1);
		font-size: 16px;
		font-weight: 700;
	}
	
	.content .content-left .price.highlight {
		color: #fff;
	}
	
	.content .content-left .desc {
		display: inline-block;
		vertical-align: top;
		line-height: 24px;
		margin: 12px 0 0 12px;
		font-size: 10px;
	}
	
	.content .content-right {
		flex: 0 0 105px;
		width: 105px;
	}
	
	.content .content-right .pay {
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 12px;
		font-weight: 700;
		background: #2b333b;
	}
	
	.content .content-right .pay.ready {
		background: #00b43c;
		color: #fff;
		font-size: 15px;
	}
	
	.shopcart-list {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		width: 100%;
		transform: translate3d(0, -100%, 0);
	}
	
	.fold-enter {
		transform: translate3d(0, 0, 0);
	}
	
	.fold-enter-active {
		transition: all 1s;
	}
	
	.fold-leave-active {
		transform: translate3d(0, 0, 0);
		transition: all .5s;
	}
	
	.shopcart-list .list-header {
		height: 40px;
		line-height: 40px;
		padding: 0 18px;
		background: #F3F5F7;
		border-bottom: 2px solid rgba(7, 17, 27, 0.1);
	}
	
	.shopcart-list .list-header .title {
		float: left;
		font-size: 14px;
		color: rgb(7, 17, 27);
	}
	
	.shopcart-list .list-header .empty {
		float: right;
		font-size: 12px;
		color: rgb(0, 160, 220);
	}
	
	.shopcart-list .list-content {
		padding: 0 18px;
		max-height: 217px;
		background: #fff;
		overflow: hidden;
	}
	
	.shopcart-list .list-content .food {
		position: relative;
		padding: 12px 0;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	
	.list-content .food .name {
		line-height: 24px;
		font-size: 14px;
		color: rgb(7, 17, 27);
	}
	
	.list-content .food .price {
		position: absolute;
		right: 90px;
		bottom: 12px;
		line-height: 24px;
		font-size: 14px;
		font-weight: 700;
		color: rgb(240, 20, 20);
	}
	
	.list-content .food .cartcontrol-wrapper {
		position: absolute;
		right: 0;
		bottom: 6px;
	}
	
	.list-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 40;
		background: rgba(7,17,27,0.6);
		opacity: 1;
		
	}
	.fade-enter{
		opacity: 0;
	}
	.fade-enter-active,.fade-leave-active{
		transition: all .5s ease; 
	}
	.fade-leave-active{
		opacity: 0;
		
	}
</style>