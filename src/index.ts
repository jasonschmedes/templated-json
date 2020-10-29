import { environment } from './environments/environment'

export class TemplatedJSON {
  hello(): string {
    let env = 'production';
    if ( ! environment.production) {
      env = 'development'
    }
    return `Hello ${env}!`
  }
}

export const templatedJSON = {
  TemplatedJSON
}
