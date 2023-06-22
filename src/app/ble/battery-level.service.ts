// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// // import BluetoothCore and types 
// import {
//   BluetoothCore,
//   BluetoothRemoteGATTServer,
//   BluetoothRemoteGATTService,
//   BluetoothRemoteGATTCharacteristic,
//   DataView
// } from '@manekinekko/angular-web-bluetooth';
// @Injectable()
// export class BatteryLevelService {
//   // define your services and characteristics
//   static GATT_CHARACTERISTIC_BATTERY_LEVEL = 'battery_level';
//   static GATT_PRIMARY_SERVICE = 'battery_service';
//   constructor(
//     // inject the BluetoothCore
//     public ble: BluetoothCore
//   ) {}
//   getDevice() {
//     // you can get ask for the device observable in order to be notified when the device has (dis)connected
//     return this.ble.getDevice$();
//   }
//   streamValues() {
//     // for realtime values, you can call this method and subscribe in order to receive the stream of realtime values
//     return this.ble.streamValues$()
//       .map( (value: DataView) => value.getUint8(0));
//   }
//   getBatteryLevel(): Observable<number> {
//     return this.ble 
        
//         // 1) call this method to run the discovery process
//         .discover$({
//           optionalServices:[
//             BatteryLevelService.GATT_PRIMARY_SERVICE
//           ]
//         })
        
//         // 2) you'll get the GATT server
//         .mergeMap( (gatt: BluetoothRemoteGATTServer)  => {
//           // 3) get the primary service of that GATT server
//           return this.ble.getPrimaryService$(
//             gatt, 
//             BatteryLevelService.GATT_PRIMARY_SERVICE
//           );
//         })
//         .mergeMap( (primaryService: BluetoothRemoteGATTService) => { 
          
//           // 4) get a specific characteristic 
//           return this.ble.getCharacteristic$(
//             primaryService,
//             BatteryLevelService
//                .GATT_CHARACTERISTIC_BATTERY_LEVEL
//           ); 
//         })
//         .mergeMap( 
//           (characteristic: BluetoothRemoteGATTCharacteristic) =>  {
            
//             // 5) read the provided value (as DataView)
//             return this.ble.readValue$(characteristic);
//           }
//         )
//         // 6) get the right value from the DataView
//         .map( (value: DataView) => value.getUint8(0) );
//   }
// }