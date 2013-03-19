// Document ready
$(document).ready(function() {
	// Initialise my plugin on my collection of objects
	$('div.example-object').pluginName();
	
	// Access the plugin for a specific object
	var myPluginReference = $('#example-object-1').data('pluginName');
	
	// Run a method in the plugin for that object
	myPluginReference.publicMethod(); 
	
	// Example showing how private methods can't be accessed 
	try
	{
		myPluginReference.privateMethod(); 
	}
	catch(err)
	{	
		$("#console").append('Attempted to call private method of <span>'+$('#example-object-1').attr('id') +'</span> but failed! <br />');
	}
});


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
				$("#console").append('<span>'+ obj.attr('id') + '</span>: public method called! <br>');
		};

		// Private method - can only be called from within this object
		var privateMethod = function()
		{
				$("#console").append('<span>'+ obj.attr('id') + '</span>: private method called! <br>');
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



