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
import type { Anagrafica } from './anagrafica';
// May contain unused imports in some cases
// @ts-ignore
import type { IdFiscaleIVA } from './id-fiscale-iva';

/**
 * 
 * @export
 * @interface DatiAnagrafici
 */
export interface DatiAnagrafici {
    /**
     * 
     * @type {IdFiscaleIVA}
     * @memberof DatiAnagrafici
     */
    'id_fiscale_iva'?: IdFiscaleIVA;
    /**
     * 
     * @type {string}
     * @memberof DatiAnagrafici
     */
    'codice_fiscale'?: string | null;
    /**
     * 
     * @type {Anagrafica}
     * @memberof DatiAnagrafici
     */
    'anagrafica'?: Anagrafica;
}

