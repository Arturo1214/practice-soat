import {PurchaseType} from './purchase.type';
import {User} from './user';
import {TypeVehicle} from './type.vehicle';
import {City} from './city';
import {TypeUse} from './type.use';

export class Soat {
  public id: any;
  public email: string;
  public nameOrSocialReason: string;
  public nitCustomer: string;
  public licensePlate: string;
  public year: number;
  public totalAmount: number;
  public purchaseType: PurchaseType;
  public city: City;
  public typeUse: TypeUse;
  public typeVehicle: TypeVehicle;
  public user: User;

  constructor(
    id?: any,
    email?: string,
    nameOrSocialReason?: string,
    nitCustomer?: string,
    licensePlate?: string,
    year?: number,
    totalAmount?: number,
    purchaseType?: PurchaseType,
    city?: City,
    typeUse?: TypeUse,
    typeVehicle?: TypeVehicle,
    user?: User
  ) {
    this.id = id ? id : null;
    this.email = email ? email : null;
    this.nameOrSocialReason = nameOrSocialReason ? nameOrSocialReason : null;
    this.nitCustomer = nitCustomer ? nitCustomer : null;
    this.licensePlate = licensePlate ? licensePlate : null;
    this.year = year ? year : 2018;
    this.totalAmount = totalAmount ? totalAmount : null;
    this.purchaseType = purchaseType ? purchaseType : new PurchaseType();
    this.city = city ? city : new City();
    this.typeUse = typeUse ? typeUse : new TypeUse();
    this.typeVehicle = typeVehicle ? typeVehicle : new TypeVehicle();
    this.user = user ? user : new User();
  }
}
