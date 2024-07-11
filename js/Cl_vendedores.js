export default class Cl_vendedores {
    constructor(nombre, monto_venta) {
        this.nombre = nombre;
        this.monto_venta = monto_venta;   
    }

set nombre(nombre) {
    this._nombre = nombre;
}
get nombre() {
    return this._nombre;
}
set monto_venta(monto_venta) {
    this._monto_venta = monto_venta;
}
get monto_venta() {
    return this._monto_venta;
} 

}



    