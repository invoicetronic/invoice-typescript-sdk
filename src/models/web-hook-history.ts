/* tslint:disable */
/* eslint-disable */
/**
 * Italian eInvoice API v1
 * The [Italian eInvoice API][2] is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. The API also provides advanced features as encryption at rest, invoice validation, multiple upload formats, webhooks, event logging, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1
 * Contact: support@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Webhook history.
 * @export
 * @interface WebHookHistory
 */
export interface WebHookHistory {
    /**
     * Unique identifier. Leave it at 0 for new records as it will be set automatically.
     * @type {number}
     * @memberof WebHookHistory
     */
    'id'?: number;
    /**
     * Creation date. It is set automatically.
     * @type {string}
     * @memberof WebHookHistory
     */
    'created'?: string;
    /**
     * Row version, for optimistic concurrency. It is set automatically.
     * @type {number}
     * @memberof WebHookHistory
     */
    'version'?: number;
    /**
     * Webhook id.
     * @type {number}
     * @memberof WebHookHistory
     */
    'web_hook_id'?: number;
    /**
     * User id.
     * @type {number}
     * @memberof WebHookHistory
     */
    'user_id'?: number;
    /**
     * Event name.
     * @type {string}
     * @memberof WebHookHistory
     */
    'event'?: string | null;
    /**
     * Status code.
     * @type {number}
     * @memberof WebHookHistory
     */
    'status_code'?: number;
    /**
     * Date and time of the request.
     * @type {string}
     * @memberof WebHookHistory
     */
    'date_time'?: string;
    /**
     * Wether the request was successful.
     * @type {boolean}
     * @memberof WebHookHistory
     */
    'success'?: boolean;
}

