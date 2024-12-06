/* tslint:disable */
/* eslint-disable */
/**
 * Italian eInvoice API
 * The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while still providing complete control over the invoice send/receive process. The API also provides advanced features and a rich toolchain, such as invoice validation, multiple upload methods, webhooks, event logs, CORS support, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DocumentData } from './document-data';

/**
 * 
 * @export
 * @interface Send
 */
export interface Send {
    /**
     * Unique identifier. Leave it at 0 for new records as it will be set automatically.
     * @type {number}
     * @memberof Send
     */
    'id'?: number;
    /**
     * Creation date. It is set automatically.
     * @type {string}
     * @memberof Send
     */
    'created'?: string;
    /**
     * Row version, for optimistic concurrency. It is set automatically.
     * @type {number}
     * @memberof Send
     */
    'version'?: number;
    /**
     * User id.
     * @type {number}
     * @memberof Send
     */
    'user_id'?: number;
    /**
     * Company id. On send, this is the sender and must be set in advance. On receive, it will be  automatically set based on the recipient\'s VAT number. If a matching company is not found, the invoice will be rejected until the company is created.
     * @type {number}
     * @memberof Send
     */
    'company_id'?: number;
    /**
     * VAT number of the Cessionario/Committente (customer). This is automatically set based on the recipient\'s VAT number.
     * @type {string}
     * @memberof Send
     */
    'committente'?: string | null;
    /**
     * VAT number of the Cedente/Prestatore (vendor). This is automatically set based on the sender\'s VAT number.
     * @type {string}
     * @memberof Send
     */
    'prestatore'?: string | null;
    /**
     * SDI identifier. This is set by the SDI and is guaranted to be unique within the SDI system.
     * @type {string}
     * @memberof Send
     */
    'identifier'?: string | null;
    /**
     * Xml file name.
     * @type {string}
     * @memberof Send
     */
    'file_name'?: string | null;
    /**
     * SDI format (FPA12, FPR12, FSM10, ...)
     * @type {string}
     * @memberof Send
     */
    'format'?: string | null;
    /**
     * Xml payloaad. This is the actual xml content, as string. On send, it can be base64 encoded. If it\'s not, it will be encoded before sending. It is guaranteed to be cyphered at rest.
     * @type {string}
     * @memberof Send
     */
    'payload'?: string | null;
    /**
     * Last update from SDI.
     * @type {string}
     * @memberof Send
     */
    'last_update'?: string | null;
    /**
     * When the invoice was sent to SDI.
     * @type {string}
     * @memberof Send
     */
    'date_sent'?: string | null;
    /**
     * The invoices included in the payload. This is set by the system, based on the xml content.
     * @type {Array<DocumentData>}
     * @memberof Send
     */
    'documents'?: Array<DocumentData> | null;
    /**
     * Optional metadata, as json.
     * @type {{ [key: string]: string; }}
     * @memberof Send
     */
    'meta_data'?: { [key: string]: string; } | null;
}

