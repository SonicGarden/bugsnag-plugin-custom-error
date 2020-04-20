import type { Event, Plugin, Client } from '@bugsnag/js';
declare type EventError = Event['errors'][number];
export declare type CustomErrorRule = string | ((error: EventError) => boolean);
export declare type CustomErrors = {
    [key: string]: CustomErrorRule[];
};
declare class BugsnagPluginCustomError implements Plugin {
    private customErrors;
    constructor(customErrors: CustomErrors);
    load(client: Client): void;
    private detectCustomError;
}
export { BugsnagPluginCustomError };
