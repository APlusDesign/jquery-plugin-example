
/**
 * @author Simon Ilett @ APlusDesign
 * @version 1.0
 * @date 19/03/2013
 */
(function($){
	
	 // 
	 var PluginName = function(element, options)
	 {
		var 
			obj = element,				  // obj is just a short reference for the jQuery object
			$this = this,				    // $this is a reference to this, saves scope for use in binds etc
			settings = $.extend({		// this.settings, or $this.settings
					aSetting: 'aValue'
			}, options || {});
	 
		// Public method - can be called from anywhere once you have the objects plugin reference
		this.publicMethod = function()
		{
				$("#console").append('public method called! <br>');
		};

		// Private method - can only be called from within this object
		var privateMethod = function()
		{
				$("#console").append('private method called!');
		};
	 };
	 
	 // Your actual plugin name
	 $.fn.pluginName = function(options)
	 {
		return this.each(function()
		{
			// obj becomes a jQuery dom object
				var obj = $(this);
			
				// Return if obj already has this plugin instance attached
				if (obj.data('pluginName')) return;

				// Pass obj & options to plugin constructor
				var pluginName = new PluginName(obj, options);

				// Store plugin object in jQuery dom obj's data
				obj.data('pluginName', pluginName);
		});
	 };
})(jQuery);



