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
import type { Company } from '../../src/models';
// @ts-ignore
import type { ProblemHttpResult } from '../../src/models';
/**
 * CompanyApi - axios parameter creator
 * @export
 */
export const CompanyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary List companies
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyGet: async (page?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invoice/v1/company`;
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
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Delete a company
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyIdDelete: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('invoiceV1CompanyIdDelete', 'id', id)
            const localVarPath = `/invoice/v1/company/{id}`
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
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Get a company by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('invoiceV1CompanyIdGet', 'id', id)
            const localVarPath = `/invoice/v1/company/{id}`
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
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Add a company
         * @param {Company} company 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyPost: async (company: Company, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'company' is not null or undefined
            assertParamExists('invoiceV1CompanyPost', 'company', company)
            const localVarPath = `/invoice/v1/company`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(company, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Update a company
         * @param {Company} company 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyPut: async (company: Company, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'company' is not null or undefined
            assertParamExists('invoiceV1CompanyPut', 'company', company)
            const localVarPath = `/invoice/v1/company`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(company, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompanyApi - functional programming interface
 * @export
 */
export const CompanyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompanyApiAxiosParamCreator(configuration)
    return {
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary List companies
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1CompanyGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Company>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1CompanyGet(page, pageSize, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompanyApi.invoiceV1CompanyGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Delete a company
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1CompanyIdDelete(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1CompanyIdDelete(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompanyApi.invoiceV1CompanyIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Get a company by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1CompanyIdGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1CompanyIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompanyApi.invoiceV1CompanyIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Add a company
         * @param {Company} company 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1CompanyPost(company: Company, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1CompanyPost(company, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompanyApi.invoiceV1CompanyPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Update a company
         * @param {Company} company 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceV1CompanyPut(company: Company, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Company>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceV1CompanyPut(company, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompanyApi.invoiceV1CompanyPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CompanyApi - factory interface
 * @export
 */
export const CompanyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompanyApiFp(configuration)
    return {
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary List companies
         * @param {number} [page] Page number. Defaults to 1.
         * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Company>> {
            return localVarFp.invoiceV1CompanyGet(page, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Delete a company
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyIdDelete(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Company> {
            return localVarFp.invoiceV1CompanyIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Get a company by id
         * @param {number} id Item id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Company> {
            return localVarFp.invoiceV1CompanyIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Add a company
         * @param {Company} company 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyPost(company: Company, options?: RawAxiosRequestConfig): AxiosPromise<Company> {
            return localVarFp.invoiceV1CompanyPost(company, options).then((request) => request(axios, basePath));
        },
        /**
         * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
         * @summary Update a company
         * @param {Company} company 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceV1CompanyPut(company: Company, options?: RawAxiosRequestConfig): AxiosPromise<Company> {
            return localVarFp.invoiceV1CompanyPut(company, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CompanyApi - interface
 * @export
 * @interface CompanyApi
 */
export interface CompanyApiInterface {
    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary List companies
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApiInterface
     */
    invoiceV1CompanyGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Company>>;

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Delete a company
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApiInterface
     */
    invoiceV1CompanyIdDelete(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Company>;

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Get a company by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApiInterface
     */
    invoiceV1CompanyIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Company>;

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Add a company
     * @param {Company} company 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApiInterface
     */
    invoiceV1CompanyPost(company: Company, options?: RawAxiosRequestConfig): AxiosPromise<Company>;

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Update a company
     * @param {Company} company 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApiInterface
     */
    invoiceV1CompanyPut(company: Company, options?: RawAxiosRequestConfig): AxiosPromise<Company>;

}

/**
 * CompanyApi - object-oriented interface
 * @export
 * @class CompanyApi
 * @extends {BaseAPI}
 */
export class CompanyApi extends BaseAPI implements CompanyApiInterface {
    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary List companies
     * @param {number} [page] Page number. Defaults to 1.
     * @param {number} [pageSize] Items per page. Defaults to 50. Cannot be greater than 200.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public invoiceV1CompanyGet(page?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return CompanyApiFp(this.configuration).invoiceV1CompanyGet(page, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Delete a company
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public invoiceV1CompanyIdDelete(id: number, options?: RawAxiosRequestConfig) {
        return CompanyApiFp(this.configuration).invoiceV1CompanyIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Get a company by id
     * @param {number} id Item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public invoiceV1CompanyIdGet(id: number, options?: RawAxiosRequestConfig) {
        return CompanyApiFp(this.configuration).invoiceV1CompanyIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Add a company
     * @param {Company} company 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public invoiceV1CompanyPost(company: Company, options?: RawAxiosRequestConfig) {
        return CompanyApiFp(this.configuration).invoiceV1CompanyPost(company, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.
     * @summary Update a company
     * @param {Company} company 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public invoiceV1CompanyPut(company: Company, options?: RawAxiosRequestConfig) {
        return CompanyApiFp(this.configuration).invoiceV1CompanyPut(company, options).then((request) => request(this.axios, this.basePath));
    }
}

