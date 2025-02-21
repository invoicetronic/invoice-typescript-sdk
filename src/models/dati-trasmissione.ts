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


// May contain unused imports in some cases
// @ts-ignore
import type { ContattiTrasmittente } from './contatti-trasmittente';
// May contain unused imports in some cases
// @ts-ignore
import type { IdTrasmittente } from './id-trasmittente';

/**
 * 
 * @export
 * @interface DatiTrasmissione
 */
export interface DatiTrasmissione {
    /**
     * 
     * @type {IdTrasmittente}
     * @memberof DatiTrasmissione
     */
    'id_trasmittente'?: IdTrasmittente;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasmissione
     */
    'progressivo_invio'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasmissione
     */
    'formato_trasmissione'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasmissione
     */
    'codice_destinatario'?: string | null;
    /**
     * 
     * @type {ContattiTrasmittente}
     * @memberof DatiTrasmissione
     */
    'contatti_trasmittente'?: ContattiTrasmittente;
    /**
     * 
     * @type {string}
     * @memberof DatiTrasmissione
     */
    'pec_destinatario'?: string | null;
}

