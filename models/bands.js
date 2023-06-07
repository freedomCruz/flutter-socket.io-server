const Band = require("./band");


class Bands {

    constructor() {
        this.bands = [];
    }

    // Crear una nueva banda
    addBand( band = new Band() ) {
        this.bands.push( band );
    }

    // Ontener banda
    getBands() {
        return this.bands;
    }

    // Borrar la banda
    deleteBand( id = '' ) {
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    //Icrementar el voto.
    voteBand( id = '' ) {
        this.bands = this.bands.map( band => {
            if ( band.id === id ) {
                band.votes++;
                return band;
            }else {
                return band;
            }
        });
    
    }


}

module.exports = Bands;