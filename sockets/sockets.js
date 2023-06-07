const {io} = require('../index');
const Bands = require('../models/bands')
const Band = require('../models/band')

const bands = new Bands();

bands.addBand(new Band('Queen'))
bands.addBand(new Band('Bon Jovi'))
bands.addBand(new Band('Nirvana'))
bands.addBand(new Band('AerosSmit'))
bands.addBand(new Band('The Cure'))

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.emit('Active-Bands', bands.getBands());

    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);

        io.emit('mensaje', {admin: 'Estamos en mantenimiento de nuestros servidores'});
    })
    
    client.on('vote-band', (payload) => {
        bands.voteBand(payload.id);
        io.emit('Active-Bands', bands.getBands());
    });

    client.on('add-band', (payload) => {
        const newBand = new Band(payload.name);
        bands.addBand(newBand);
        io.emit('Active-Bands', bands.getBands());
    });

    client.on('delete-band', (payload) => {
        
        bands.deleteBand(payload.id)
        io.emit('Active-Bands', bands.getBands());
    });

    // client.on('emitir-mensaje', (payload) => {
    //     console.log(payload);
    //     // io.emit('nuevo-mensaje', payload); //emite a todo el mundo
    //    client.broadcast.emit('nuevo-mensaje', payload); //emite a todos menos al que lo emitió.
    // })
});