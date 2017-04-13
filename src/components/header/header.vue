<template>
	<div class="header">
		<div class="content_wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar" />
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
			<div v-if="seller.supports" class="support-count" @click="showDetail">
				<span class="count">
					{{seller.supports.length}}个
				</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title">
				
			</span>
			<span class="bulletin-text">
				{{seller.bulletin}}
			</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img v-bind:src="seller.avatar" width="100%" height="100%" />
		</div>
		<transition name="fade">
			<div v-show="detailShow" class="detail">
				<div class="detail-wrapper clearfix">
					<div class="detail-main">
						<h1 class="name">{{seller.name}}</h1>
						<div class="star-wrapper">
							<star :size="48" :score="seller.score"></star>
						</div>
						<div class="title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<ul v-if="seller.supports" class="supports">
							<li class="support-item" v-for="(item,index) in seller.supports">
								<span class="icon" :class="classMap[seller.supports[index].type]">
								
							</span>
								<span class="text">
								{{seller.supports[index].description}}
							</span>
							</li>
						</ul>
						<div class="title">
							<div class="line"></div>
							<div class="text">商家信息</div>
							<div class="line"></div>
						</div>
						<div class="bulletin">
							<p class="content">{{seller.bulletin}}</p>
						</div>
					</div>
				</div>
				<div class="detail-close" @click="hideDetail">
					<i class="icon-close"></i>
				</div>
			</div>
		</transition>

	</div>
</template>

<script>
	import star from '../star/star.vue';
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			}
		},
		methods: {
			showDetail() {
				this.detailShow = true
			},
			hideDetail() {
				this.detailShow = false
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
		},
		components: {
			star
		}
	};
</script>

<style>
	@import url("../../common/stylus/style.css");
	.header {
		background: rgba(7, 17, 27, 0.5);
		color: #fff;
		position: relative;
	}
	
	.header>.content_wrapper {
		padding: 24px 12px 18px 24px;
		position: relative;
	}
	
	.header>.content_wrapper>.avatar {
		display: inline-block;
		vertical-align: top;
	}
	
	.avatar>img {
		border-radius: 2px;
	}
	
	.header>.content_wrapper>.content {
		display: inline-block;
		margin-left: 16px;
	}
	
	.content>.title {
		margin: 2px 0 8px 0;
	}
	
	.content>.title>.brand {
		width: 30px;
		height: 18px;
		display: inline-block;
		vertical-align: top;
		background: url(brand@2x.png);
		background-size: 30px 18px;
	}
	
	.content>.title>.name {
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
	}
	
	.content>.description {
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	
	.content>.support>.icon {
		display: inline-block;
		vertical-align: bottom;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
	}
	
	.icon.decrease {
		background-image: url(decrease_1@2x.png);
	}
	
	.icon.discount {
		background-image: url(discount_1@2x.png);
	}
	
	.icon.guarantee {
		background-image: url(guarantee_1@2x.png);
	}
	
	.icon.invoice {
		background-image: url(invoice_1@2x.png);
	}
	
	.icon.special {
		background-image: url(special_1@2x.png);
	}
	
	.content>.support>.text {
		line-height: 12px;
		font-size: 12px;
		padding: 0;
	}
	
	.header>.content_wrapper>.support-count {
		position: absolute;
		right: 12px;
		bottom: 14px;
		padding: 0 8px;
		height: 24px;
		line-height: 20px;
		border-radius: 14px;
		background: rgba(0, 0, 0, 0.2);
		text-align: center;
	}
	
	.support-count>.count {
		font-size: 10px;
	}
	
	.support-count>.icon-keyboard_arrow_right {
		font-size: 10px;
		line-height: 24px;
		margin-left: 2px;
	}
	
	.header>.bulletin-wrapper {
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		position: relative;
		background-color: rgba(7, 17, 27, 0.2);
	}
	
	.bulletin-wrapper>.bulletin-title {
		display: inline-block;
		width: 22px;
		height: 12px;
		background-image: url(bulletin@2x.png);
		background-size: 22px 12px;
		background-repeat: no-repeat;
		vertical-align: baseline;
	}
	
	.bulletin-wrapper>.bulletin-text {
		font-size: 10px;
		margin: 0 4px;
		vertical-align: top;
	}
	
	.bulletin-wrapper>.icon-keyboard_arrow_right {
		position: absolute;
		font-size: 10px;
		right: 12px;
		top: 8px;
	}
	
	.header>.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
	}
	
	.header>.detail {
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: rgba(7,17,27,0.8);
		transition: all 0.3s ease;
		
		top: 0;
		left: 0;
	}
	
	.detail>.detail-wrapper {
		min-height: 100%;
		width: 100%;
	}
	
	.detail-wrapper>.detail-main {
		margin-top: 64px;
		padding-bottom: 64px;
	}
	
	.detail-main>.name {
		line-height: 16px;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
	}
	
	.detail-main>.star-wrapper {
		margin-top: 18px;
		padding: 2px 0;
		text-align: center;
	}
	
	.detail-main>.title {
		display: flex;
		width: 80%;
		margin: 28px auto 24px auto;
	}
	
	.detail-main>.title>.line {
		/*vue-loader中提供的postcss会在编译时自动添加浏览器兼容性代码*/
		flex: 1;
		position: relative;
		top: -6px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
	
	.detail-main>.title>.text {
		padding: 0 12px;
		font-size: 14px;
		font-weight: 700;
	}
	
	.detail-main>.supports {
		width: 80%;
		margin: 0 auto;
	}
	
	.detail-main>.supports>.support-item {
		padding: 0 12px;
		margin-bottom: 12px;
		font-size: 0;
	}
	
	.detail-main>.supports>.support-item:last-child {
		margin-bottom: 0;
	}
	
	.detail-main>.supports>.support-item>.icon {
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: top;
		margin-right: 6px;
		background-size: 16px 16px;
		background-repeat: no-repeat;
	}
	
	.icon.decrease {
		background-image: url(decrease_2@2x.png);
	}
	
	.icon.discount {
		background-image: url(discount_2@2x.png);
	}
	
	.icon.guarantee {
		background-image: url(guarantee_2@2x.png);
	}
	
	.icon.invoice {
		background-image: url(invoice_2@2x.png);
	}
	
	.icon.special {
		background-image: url(special_2@2x.png);
	}
	
	.detail-main>.supports>.support-item>.text {
		line-height: 16px;
		font-size: 12px;
	}
	
	.detail-main>.bulletin {
		width: 80%;
		margin: 0 auto;
	}
	
	.detail-main>.bulletin>.content {
		padding: 0 12px;
		line-height: 24px;
		font-size: 12px;
	}
	
	.detail>.detail-close {
		position: relative;
		width: 32px;
		height: 32px;
		margin: -64px auto 0 auto;
		clear: both;
		font-size: 32px;
	}
	.fade-enter{
		opacity: 0;
	}
	.fade-enter-active {
		transition: all 1s ease-in; 
	}
	.fade-leave-active{
		opacity: 0;
		transition: all 1s ease-out; 
	}
	

	
	
</style>