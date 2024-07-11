export default class Cl_Ventas {
    constructor() {
        this.ventas = 0
        this.vntMenores = 0;
        this.vntMayores = 0;
        this.ventatotal = 0;
      
    }
  procesar(vendedor) {
    this.ventas++;

    if (vendedor.monto_venta <= 100) {
        this.vntMenores++;
    } else {
        this.vntMayores++;
    }

    this.ventatotal += vendedor.monto_venta;
}


}
