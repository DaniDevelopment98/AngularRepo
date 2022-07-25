export class ModeloTabla {
	columnas: ModeloColumna[]= new Array<ModeloColumna>();
	datos: any[]= new Array<any>();
	
	public constructor(init?: Partial<ModeloTabla>) {
		Object.assign(this, init);
	}
}

export class ModeloColumna{
	campo: string='';
	columna: string='';
	display: string="";

	public constructor(init?: Partial<ModeloColumna>) {
		Object.assign(this, init);
	}
}