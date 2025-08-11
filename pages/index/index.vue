<template>
	<view class="container">
		<view class="header">
			<image src="@/static/banner.png" mode="widthFix" class="banner"></image>
			<text class="title">活动报名小程序</text>
		</view>
		<view class="activity-list">
			<view v-for="item in activities" :key="item.id" class="activity-card">
				<image :src="item.cover_image" mode="aspectFill" class="cover"></image>
				<view class="info">
					<text class="activity-title">{{ item.title }}</text>
					<text class="activity-time">时间：{{ item.time }}</text>
					<text class="activity-location">地点：{{ item.location }}</text>
				</view>
				<button class="signup-btn" @click="goDetail(item.id)">查看详情</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { formatDateTime } from '@/utils/data.js'
	import { getActivityList } from '@/api/activity/index.js'
	export default {
		data() {
			return {
				activities: []
			}
		},
		onLoad() {
			this.loadActivities()
		},
		methods: {
			loadActivities() {
				getActivityList().then(res => {
					if (res.status === 200) {
						this.activities = res.data
						const activityList = this.activities.map(item => ({
							...item,
							time: formatDateTime(item.time)
						}))
						this.activities = activityList
					}
				})
			},
			goDetail(id) {
				uni.navigateTo({
					// url: '/pages/activity/detail?id=' + id
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 20rpx;
	}

	.header {
		text-align: center;
		margin-bottom: 30rpx;
	}

	.banner {
		width: 100%;
		height: 200rpx;
	}

	.title {
		font-size: 40rpx;
		font-weight: bold;
		margin-top: 20rpx;
	}

	.activity-list {}

	.activity-card {
		background: #fff;
		margin-bottom: 20rpx;
		border-radius: 16rpx;
		overflow: hidden;
		box-shadow: 0 2rpx 8rpx #eee;
	}

	.cover {
		width: 100%;
		height: 180rpx;
	}

	.info {
		padding: 20rpx;
	}

	.activity-title {
		font-size: 32rpx;
		font-weight: bold;
	}

	.activity-time,
	.activity-location {
		display: block;
		color: #888;
		margin-top: 8rpx;
	}

	.signup-btn {
		margin: 20rpx;
		background: #2979ff;
		color: #fff;
		border-radius: 8rpx;
	}
</style>