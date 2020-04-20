class BugsnagPluginCustomError {
    constructor(customErrors) {
        this.customErrors = customErrors;
    }
    load(client) {
        client.addOnError((event) => {
            const customError = this.detectCustomError(event.errors[0]);
            if (customError) {
                // eslint-disable-next-line no-param-reassign
                event.errors[0].errorClass = customError;
            }
        });
    }
    detectCustomError(error) {
        return Object.keys(this.customErrors).find((key) => {
            return this.customErrors[key].some((rule) => {
                if (typeof rule === 'string') {
                    return error.errorMessage.includes(rule);
                }
                return rule(error);
            });
        });
    }
}
export { BugsnagPluginCustomError };
