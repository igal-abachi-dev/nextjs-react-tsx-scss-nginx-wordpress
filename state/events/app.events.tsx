import { Events } from './events.base';


class AppEvents extends Events {
  constructor() {
    super();

    window.addEventListener('load', () => {
      let eventArgs = {};
      super.fireEvent('page-loaded', eventArgs);
    });
  }

  public onPageLoaded(callback: any, ctx: any = null): void {
    super.subscribeEvent('page-loaded', callback, ctx);
  }
}

export const appEvents: AppEvents = new AppEvents();
