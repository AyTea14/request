import { Blob } from 'buffer';
import Dispatcher, { HttpMethod } from 'undici/types/dispatcher';

declare type UndiciOptions = Partial<{
    dispatcher?: Dispatcher;
} & Omit<Dispatcher.RequestOptions, "origin" | "path" | "method"> & Partial<Pick<Dispatcher.RequestOptions, "method">>>;
declare class Request {
    private url;
    private httpMethod;
    private data;
    private sendDataAs;
    private ua;
    private reqHeaders;
    private coreOptions;
    private timeoutDuration;
    private redirectCount;
    constructor(url: URL | string);
    query(a1: Record<string, any> | string, a2?: string): this;
    path(...relativePaths: string[]): this;
    body(data: Record<string, any> | string | URLSearchParams, sendAs?: string): this;
    header(a1: Record<string, any> | string, a2?: string): this;
    timeout(timeout: number): this;
    agent(...fragments: string[]): this;
    options<T extends keyof UndiciOptions>(a1: UndiciOptions | T, a2?: UndiciOptions[T]): this;
    auth(token: string, type?: string): this;
    follow(countOrBool: boolean | number): this;
    method(method: HttpMethod): this;
    get(): this;
    post(): this;
    patch(): this;
    put(): this;
    delete(): this;
    json<T = any>(): Promise<T>;
    raw(): Promise<Buffer>;
    text(): Promise<string>;
    blob(): Promise<Blob>;
    send(): Promise<Dispatcher.ResponseData>;
    then(...args: any[]): Promise<Dispatcher.ResponseData>;
    catch(...args: any[]): Promise<Dispatcher.ResponseData>;
}
declare function request(url: URL | string): Request;

export { Request, UndiciOptions, request as default, request };