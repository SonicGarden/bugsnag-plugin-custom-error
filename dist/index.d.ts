import type { Event, Plugin, Client } from '@bugsnag/js';
export type EventError = Event['errors'][number];
export type CustomErrorRule = string | ((error: EventError) => boolean);
export type CustomErrors = {
    [key: string]: CustomErrorRule[];
};
declare class BugsnagPluginCustomError implements Plugin {
    private customErrors;
    constructor(customErrors: CustomErrors);
    load(client: Client): void;
    private detectCustomError;
}
export { BugsnagPluginCustomError };
