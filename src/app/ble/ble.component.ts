import { Component, OnInit, NgZone } from '@angular/core';

import { Injectable } from '@angular/core';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-ble',
  templateUrl: './ble.component.html',
  styleUrls: ['./ble.component.css'],
  // providers: [ BatteryLevelService, BluetoothCore ]
})
export class BleComponent implements OnInit {

  constructor(public readonly ble: BluetoothCore) {}

  getDevice() {
    // call this method to get the connected device
    console.log("Obtener dispositivos.");
    return this.ble.getDevice$();
  }

  stream() {
    // call this method to get a stream of values emitted by the device for a given characteristic
    return this.ble.streamValues$().pipe(
      map((value: DataView) => value.getInt8(0))
    );
  }

  disconnectDevice() {
    // call this method to disconnect from the device. This method will also stop clear all subscribed notifications
    this.ble.disconnectDevice();
  }

  value() {
    console.log('Getting Battery level...');

    return this.ble
      .value$({
        service: 'battery_service',
        characteristic: 'battery_level'
      });
  }

  saludo() {
    return "Adiós";
  }

  ngOnInit(): void {
    console.log(this.saludo());
    this.getDevice();
  }
}
