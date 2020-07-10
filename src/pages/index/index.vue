<template>
	<div class="home">
		<el-container>
			<el-header>
				<eu-header>
				</eu-header>
			</el-header>
			<el-container>
				<el-aside width="25%">
								<LeftComponents></LeftComponents>
				</el-aside>
				<el-main style="position: relative">
					<!-- <eu-edit-tool-left></eu-edit-tool-left> -->
					<!-- <eu-edit-tool-right></eu-edit-tool-right> -->
					<template v-if="pattern==='component' || checkFile.isCanDrag === true">
						<PhoneFrame></PhoneFrame>
					</template>
				</el-main>
				<el-aside width="25%" style="padding-top: 10px">
					<RightComponents></RightComponents>
				</el-aside>
			</el-container>
		</el-container>
	</div>
</template>

<script>
    import PhoneFrame from '@/src/components/PhoneFrame/PhoneFrame'
    import LeftComponents from '@/src/components/LeftComponents/LeftComponents'
    import EuHeader from '@/src/components/frameComponents/EuHeader'
	import RightComponents from '@/src/components/RightComponents/RightComponents'

    export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		computed:{
			pattern() {
				return this.$store.state.pattern
			},
            checkFile(){
                if (this.$store.state.project.checkFile){
                    return this.$store.state.project.checkFile
                }
                return {}
			},
            name(){
                return this.$store.state.iflexGroup
			},
		},
		mounted() {
		},
		components:{
				PhoneFrame,
				LeftComponents,
				EuHeader,
				RightComponents
		}
	}
</script>

<style lang="scss">
	.el-header, .el-footer {
		background-color: white;
		color: #333;
		text-align: center;
		// line-height: 60px;
		border-bottom: #c8c7cc solid 1px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		z-index: 100;
	}

	.el-aside {
		background-color: white;
		color: #333;
		text-align: center;
		height: calc(100vh - 60px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		z-index: 99;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		height: calc(100vh - 60px);
		width: 50%;
		background-image: linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0),linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0);
		background-size: 20px 20px;
		background-position: 0 0,10px 10px;
	}

	body > .el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
	}

	.el-container:nth-child(7) .el-aside {
	}

</style>
