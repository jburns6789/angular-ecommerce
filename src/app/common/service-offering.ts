export class ServiceOffering {

    constructor(public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageUrl: string,
                public active: boolean,
                public unitsInStock: string,
                public dateCreated: Date,
                public lastUpdated: Date,
                public appointmentTime: Date
        ) {}
}
