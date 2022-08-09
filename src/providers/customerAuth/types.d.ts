interface CustomerInventory {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

export interface CustomerInventoryData {
  customerInventory: CustomerInventory[];
}
