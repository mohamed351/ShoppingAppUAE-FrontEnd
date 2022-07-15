
export interface SubSerial {
      mainSerial: string;
      serial: string;
}

  export interface ProductSerial {
      productId: number;
      serial: string;
      serialStatus: number;
      subSerial: SubSerial[];
  }


