export function typeIventoryOperation(type:string): string {
    switch(type) {
        case 'create':
            return 'creación del registro';
        case 'add':
            return 'adición';
        case 'subtract':
            return 'sustracción'
    }
    return '';
};