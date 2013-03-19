
// The best way to write a jquery plugin
(function($){
   var PluginName = function(element, options)
   {
       	var 
       		obj = element,				
       		$this = this,				
       		settings = $.extend({		
	           	aSetting: 'aValue'
	       	}, options || {});
       
       	this.publicMethod = function()
       	{
           	$("#console").append('<span>'+ obj.attr('id') + '</span>: public method called! <br>');
       	};

       	var privateMethod = function()
       	{
           	$("#console").append('<span>'+ obj.attr('id') + '</span>: private method called! <br>');
       	};
   };

   $.fn.pluginName = function(options)
   {
       return this.each(function()
       {
           	var obj = $(this);
           	if (obj.data('pluginName')) return;
           	var pluginName = new PluginName(obj, options);
           	obj.data('pluginName', pluginName);
       });
   };
})(jQuery);



