<template>
	<div class="btn">
		<navigator url="../freemarketPubPage/main" class="circle">
			+
		</navigator>
	</div>
</template>

<script>



export default {
  data () {
    return {
      
    }
  }
};
</script>

<style scoped>
	.btn{
		position: fixed;
		bottom: 50px;
		right: 5px;
	}
	.circle{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		font-size: 35px;
		color: #fff;
		line-height: 45px;
		text-align: center;
		background-color: rgb(166, 248, 179);
		box-shadow: 0 0 5px #c2c0c0;
	}
</style>