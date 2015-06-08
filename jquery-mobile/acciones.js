// JavaScript Document
$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('perro','audio/perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('pollo','audio/pollo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('vaca','audio/vaca.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cotorro','audio/cotorro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mono','audio/mono.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oso','audio/oso.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/tigre.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/leon.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('aguila','audio/aguila.mp3',function(){},function(e){alert('Error '+e);});
		
		//REPRODUCIR LAS NOTAS
		
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend', function(){$(this).removeClass('tocada');});
	},false);//deviceready
});//ready