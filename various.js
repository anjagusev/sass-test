
<script type="text/javascript">
$(document).ready(function() {
	$(".various").fancybox({
        type: 'iframe',
        autoSize : true,
        scrolling:'auto',
        autoCenter:true,
        fitToView:false,
        autoDimensions:true,
         beforeShow: function(){
  // added 50px to avoid scrollbars inside fancybox
   this.width = '100%';
   this.height = '80%';
  }
    });
});
</script>

