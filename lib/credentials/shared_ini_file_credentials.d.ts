import {Credentials} from '../credentials';
import {HTTPOptions} from '../config';
export class SharedIniFileCredentials extends Credentials {
    /**
     * Creates a new SharedIniFileCredentials object.
     */
    constructor(options?: SharedIniFileCredentialsOptions);
}

interface SharedIniFileCredentialsOptions {
    profile?: string
    filename?: string
    disableAssumeRole?: boolean
    tokenCodeFn?: (mfaSerial: string, callback: (err?: Error, token?: string) => void) => void
    httpOptions?: HTTPOptions
    roleSessionName?: string
    callback?: (err?: Error) => void
}
