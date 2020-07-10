<!--
 * @Author: your name
 * @Date: 2020-04-09 18:37:11
 * @LastEditTime: 2020-04-15 17:03:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\App.vue
 -->
<script>
	export default {
		onLaunch: function() {
		    this.$store.dispatch('initData')
		},
		onShow: function() {
			
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
    @import "colorui/main.css";
    @import "colorui/icon.css";
	/*每个页面公共css */
    @import "src/common/style/basicsComponentsStyle.scss";
    @import "src/common/style/myStyle.scss";

    body,html{
        font-size: 16px !important;
    }

</style>
