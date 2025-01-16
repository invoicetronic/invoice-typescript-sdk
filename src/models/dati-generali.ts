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


// May contain unused imports in some cases
// @ts-ignore
import type { DatiContratto } from './dati-contratto';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiConvenzione } from './dati-convenzione';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiDDT } from './dati-ddt';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiFattureCollegate } from './dati-fatture-collegate';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiGeneraliDocumento } from './dati-generali-documento';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiOrdineAcquisto } from './dati-ordine-acquisto';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiRicezione } from './dati-ricezione';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiSAL } from './dati-sal';
// May contain unused imports in some cases
// @ts-ignore
import type { DatiTrasporto } from './dati-trasporto';
// May contain unused imports in some cases
// @ts-ignore
import type { FatturaPrincipale } from './fattura-principale';

/**
 * 
 * @export
 * @interface DatiGenerali
 */
export interface DatiGenerali {
    /**
     * 
     * @type {DatiGeneraliDocumento}
     * @memberof DatiGenerali
     */
    'dati_generali_documento'?: DatiGeneraliDocumento;
    /**
     * 
     * @type {Array<DatiOrdineAcquisto>}
     * @memberof DatiGenerali
     */
    'dati_ordine_acquisto'?: Array<DatiOrdineAcquisto> | null;
    /**
     * 
     * @type {Array<DatiContratto>}
     * @memberof DatiGenerali
     */
    'dati_contratto'?: Array<DatiContratto> | null;
    /**
     * 
     * @type {Array<DatiConvenzione>}
     * @memberof DatiGenerali
     */
    'dati_convenzione'?: Array<DatiConvenzione> | null;
    /**
     * 
     * @type {Array<DatiRicezione>}
     * @memberof DatiGenerali
     */
    'dati_ricezione'?: Array<DatiRicezione> | null;
    /**
     * 
     * @type {Array<DatiFattureCollegate>}
     * @memberof DatiGenerali
     */
    'dati_fatture_collegate'?: Array<DatiFattureCollegate> | null;
    /**
     * 
     * @type {Array<DatiSAL>}
     * @memberof DatiGenerali
     */
    'dati_sal'?: Array<DatiSAL> | null;
    /**
     * 
     * @type {Array<DatiDDT>}
     * @memberof DatiGenerali
     */
    'dati_ddt'?: Array<DatiDDT> | null;
    /**
     * 
     * @type {DatiTrasporto}
     * @memberof DatiGenerali
     */
    'dati_trasporto'?: DatiTrasporto;
    /**
     * 
     * @type {FatturaPrincipale}
     * @memberof DatiGenerali
     */
    'fattura_principale'?: FatturaPrincipale;
}

