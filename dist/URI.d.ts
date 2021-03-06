/*!
 * URI
 * Date: 2017/09/08
 * https://github.com/nuintun/uri
 *
 * This is licensed under the MIT License (MIT).
 * For details, see: https://github.com/nuintun/uri/blob/master/LICENSE
 */
/**
 * URI
 *
 * @class
 */
export default class URI {
    protocol: string;
    username: string;
    password: string;
    hostname: string;
    port: string;
    pathname: string;
    param: object;
    anchor: object;
    /**
     * @constructor
     * @param URI
     */
    constructor(URI: string);
    readonly search: string;
    readonly hash: string;
    /**
     * toURI
     *
     * @method
     */
    toURI(): string;
    /**
     * toString
     *
     * @method
     */
    toString(): string;
}
