
const { v4: uuidV4 } = require('uuid');

class Band {
    constructor (name = 'no-name') {
     this.id = uuidV4();
     this.name = name;
     this.votes = 0;   
    }
}

// Para poder exportar la clase
module.exports = Band;