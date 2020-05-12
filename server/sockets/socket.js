const { io } = require('../server');
io.on('connection', function(client) {
    console.log(client);
    client.emit('EnviarMensaje', { usuario: 'Servidor', mensaje: 'Bienvenido a la aplicacion' });
    client.on('disconnect', function() {
        console.log('cliente desconectado');
    });
    // escuchar cliente
    client.on('EnviarMensaje', (data, callback) => {
        client.broadcast.emit('EnviarMensaje', data);
        console.log(data);
        // if (mensaje.usuario) {
        //     callback({
        //         ok: true
        //     });
        // }
        // callback({
        //     ok: false
        // });
    });

});