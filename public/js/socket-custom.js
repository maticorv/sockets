var socket = io();
// escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('usuario desconectado');

});
// enviar informacion
socket.emit('EnviarMensaje', {
    usuario: 'Matias corvalan',
    mensaje: 'Hola mundo'
}, function(arg) {
    console.log(arg);
});
socket.on('EnviarMensaje', function(arg) {
    console.log(arg);
});