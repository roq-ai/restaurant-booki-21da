import { MenuInterface } from 'interfaces/menu';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  menu?: MenuInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  table?: TableInterface[];
  user?: UserInterface;
  _count?: {
    menu?: number;
    order?: number;
    reservation?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
