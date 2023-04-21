import type { Event, Plugin, Client } from '@bugsnag/js'

export type EventError = Event['errors'][number]
export type CustomErrorRule = string | ((error: EventError) => boolean)
export type CustomErrors = { [key: string]: CustomErrorRule[] }

class BugsnagPluginCustomError implements Plugin {
  constructor(private customErrors: CustomErrors) {}

  load(client: Client): void {
    client.addOnError((event: Event) => {
      const customError = this.detectCustomError(event.errors[0])
      if (customError) {
        // eslint-disable-next-line no-param-reassign
        event.errors[0].errorClass = customError
      }
    })
  }

  private detectCustomError(error: EventError): string | undefined {
    return Object.keys(this.customErrors).find((key) => {
      return this.customErrors[key].some((rule) => {
        if (typeof rule === 'string') {
          return error.errorMessage.includes(rule)
        }

        return rule(error)
      })
    })
  }
}

export { BugsnagPluginCustomError }
