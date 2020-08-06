import EventEmitter from 'eventemitter3';

export abstract class Events {
    private readonly EE: EventEmitter;

    constructor() {
      // extras.isolateGlobalState();

      this.EE = new EventEmitter();
    }

    public fireEvent(eventName: string, eventArgs: any) {
      if (eventName) { this.EE.emit(eventName, eventArgs); }
    }


    public subscribeEvent(eventName: string, callback: any, ctx: any = null): void {
      if (eventName == null || callback == null) { return; }
      this.EE.on(eventName, callback, ctx || this);
    }
}
