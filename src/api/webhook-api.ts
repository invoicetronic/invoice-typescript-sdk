/* tslint:disable */
/* eslint-disable */
/**
 * Italian eInvoice API
 * The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. The API also provides advanced features as encryption at rest, invoice validation, multiple upload formats, webhooks, event logging, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { ProblemHttpResult } from '../../src/models';
// @ts-ignore
import type { WebHook } from '../../src/models';
// @ts-ignore
import type { WebHookHistory } from '../../src/models';
/**
 * WebhookApi - axios parameter creator
 * @export
 */
export const WebhookApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary List webhooks
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookGet: async (page?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invoice/v1/webhook`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Delete a webhook by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookIdDelete: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('invoiceV1WebhookIdDelete', 'id', id)
            const localVarPath = `/invoice/v1/webhook/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Get a webhook by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('invoiceV1WebhookIdGet', 'id', id)
            const localVarPath = `/invoice/v1/webhook/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Add a webhook
         * @param {WebHook} webHook 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookPost: async (webHook: WebHook, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webHook' is not null or undefined
            assertParamExists('invoiceV1WebhookPost', 'webHook', webHook)
            const localVarPath = `/invoice/v1/webhook`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webHook, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Update a webhook
         * @param {WebHook} webHook 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookPut: async (webHook: WebHook, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webHook' is not null or undefined
            assertParamExists('invoiceV1WebhookPut', 'webHook', webHook)
            const localVarPath = `/invoice/v1/webhook`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webHook, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List webhook history items
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookhistoryGet: async (page?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invoice/v1/webhookhistory`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a webhook history item by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookhistoryIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('invoiceV1WebhookhistoryIdGet', 'id', id)
            const localVarPath = `/invoice/v1/webhookhistory/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhookApi - functional programming interface
 * @export
 */
export const WebhookApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhookApiAxiosParamCreator(configuration)
    return {
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary List webhooks
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1WebhookGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WebHook>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1WebhookGet(page, pageSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.invoiceV1WebhookGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Delete a webhook by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1WebhookIdDelete(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebHook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1WebhookIdDelete(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.invoiceV1WebhookIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Get a webhook by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1WebhookIdGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebHook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1WebhookIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.invoiceV1WebhookIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Add a webhook
         * @param {WebHook} webHook 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1WebhookPost(webHook: WebHook, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebHook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1WebhookPost(webHook, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.invoiceV1WebhookPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Update a webhook
         * @param {WebHook} webHook 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1WebhookPut(webHook: WebHook, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebHook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1WebhookPut(webHook, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.invoiceV1WebhookPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary List webhook history items
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1WebhookhistoryGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WebHookHistory>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1WebhookhistoryGet(page, pageSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.invoiceV1WebhookhistoryGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get a webhook history item by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1WebhookhistoryIdGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebHookHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1WebhookhistoryIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.invoiceV1WebhookhistoryIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebhookApi - factory interface
 * @export
 */
export const WebhookApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhookApiFp(configuration)
    return {
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary List webhooks
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<WebHook>> {
            return localVarFp.invoiceV1WebhookGet(page, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Delete a webhook by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookIdDelete(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebHook> {
            return localVarFp.invoiceV1WebhookIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Get a webhook by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebHook> {
            return localVarFp.invoiceV1WebhookIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Add a webhook
         * @param {WebHook} webHook 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookPost(webHook: WebHook, options?: RawAxiosRequestConfig): AxiosPromise<WebHook> {
            return localVarFp.invoiceV1WebhookPost(webHook, options).then((request) => request(axios, basePath));
        },
        /**
         * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
         * @summary Update a webhook
         * @param {WebHook} webHook 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookPut(webHook: WebHook, options?: RawAxiosRequestConfig): AxiosPromise<WebHook> {
            return localVarFp.invoiceV1WebhookPut(webHook, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List webhook history items
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookhistoryGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<WebHookHistory>> {
            return localVarFp.invoiceV1WebhookhistoryGet(page, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a webhook history item by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1WebhookhistoryIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebHookHistory> {
            return localVarFp.invoiceV1WebhookhistoryIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhookApi - interface
 * @export
 * @interface WebhookApi
 */
export interface WebhookApiInterface {
    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary List webhooks
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     */
    invoiceV1WebhookGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<WebHook>>;

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Delete a webhook by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     */
    invoiceV1WebhookIdDelete(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebHook>;

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Get a webhook by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     */
    invoiceV1WebhookIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebHook>;

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Add a webhook
     * @param {WebHook} webHook 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     */
    invoiceV1WebhookPost(webHook: WebHook, options?: RawAxiosRequestConfig): AxiosPromise<WebHook>;

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Update a webhook
     * @param {WebHook} webHook 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     */
    invoiceV1WebhookPut(webHook: WebHook, options?: RawAxiosRequestConfig): AxiosPromise<WebHook>;

    /**
     * 
     * @summary List webhook history items
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     */
    invoiceV1WebhookhistoryGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<WebHookHistory>>;

    /**
     * 
     * @summary Get a webhook history item by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     */
    invoiceV1WebhookhistoryIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WebHookHistory>;

}

/**
 * WebhookApi - object-oriented interface
 * @export
 * @class WebhookApi
 * @extends {BaseAPI}
 */
export class WebhookApi extends BaseAPI implements WebhookApiInterface {
    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary List webhooks
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public invoiceV1WebhookGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).invoiceV1WebhookGet(page, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Delete a webhook by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public invoiceV1WebhookIdDelete(id: number, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).invoiceV1WebhookIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Get a webhook by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public invoiceV1WebhookIdGet(id: number, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).invoiceV1WebhookIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Add a webhook
     * @param {WebHook} webHook 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public invoiceV1WebhookPost(webHook: WebHook, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).invoiceV1WebhookPost(webHook, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.
     * @summary Update a webhook
     * @param {WebHook} webHook 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public invoiceV1WebhookPut(webHook: WebHook, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).invoiceV1WebhookPut(webHook, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List webhook history items
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public invoiceV1WebhookhistoryGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).invoiceV1WebhookhistoryGet(page, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a webhook history item by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public invoiceV1WebhookhistoryIdGet(id: number, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).invoiceV1WebhookhistoryIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}

