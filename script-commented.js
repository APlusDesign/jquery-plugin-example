// The best way to write a jquery plugin
(function($){
	//
	var PluginName = function(element, options)
	{
		var
			obj = element,		// obj is just a short reference for the jQuery argument object
			$this = this;		// $this is a reference to this, saves scope for use in binds etc

		// this.settings, or $this.settings
		$this.settings = $.extend({
			aSetting: 'aValue'
		}, options || {});

		// Reference to the original object
		$this.originalObject = obj;

		// Public method - can be called from anywhere once you have the objects plugin reference
		$this.publicMethod = function()
		{
			$("#console").append('<span>'+ obj.attr('id') + '</span>: public method called! <br><br>');
		};

		// Private method - can only be called from within this object during execution
		var privateMethod = function()
		{
			$("#console").append('<span>'+ obj.attr('id') + '</span>: private method called! <br><br>');
		};

		/*
			You don't need a function for init(), you can add run code here after all your methods are defined.

			privateMethod(); // Will work just fine
		*/
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



