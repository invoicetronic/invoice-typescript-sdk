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
import type { AltriDatiGestionali } from './altri-dati-gestionali';
// May contain unused imports in some cases
// @ts-ignore
import type { CodiceArticolo } from './codice-articolo';
// May contain unused imports in some cases
// @ts-ignore
import type { ScontoMaggiorazione } from './sconto-maggiorazione';

/**
 * 
 * @export
 * @interface DettaglioLinee
 */
export interface DettaglioLinee {
    /**
     * 
     * @type {number}
     * @memberof DettaglioLinee
     */
    'numero_linea'?: number;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'tipo_cessione_prestazione'?: string | null;
    /**
     * 
     * @type {Array<CodiceArticolo>}
     * @memberof DettaglioLinee
     */
    'codice_articolo'?: Array<CodiceArticolo> | null;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'descrizione'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DettaglioLinee
     */
    'quantita'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'unita_misura'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'data_inizio_periodo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'data_fine_periodo'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DettaglioLinee
     */
    'prezzo_unitario'?: number;
    /**
     * 
     * @type {Array<ScontoMaggiorazione>}
     * @memberof DettaglioLinee
     */
    'sconto_maggiorazione'?: Array<ScontoMaggiorazione> | null;
    /**
     * 
     * @type {number}
     * @memberof DettaglioLinee
     */
    'prezzo_totale'?: number;
    /**
     * 
     * @type {number}
     * @memberof DettaglioLinee
     */
    'aliquota_iva'?: number;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'ritenuta'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'natura'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DettaglioLinee
     */
    'riferimento_amministrazione'?: string | null;
    /**
     * 
     * @type {Array<AltriDatiGestionali>}
     * @memberof DettaglioLinee
     */
    'altri_dati_gestionali'?: Array<AltriDatiGestionali> | null;
}

