export interface Product {
    'title': string;
    'variants': Variant[];
}

export interface Variant {
    'name': string;
    'sku': string;
    'price': number;
    'hex': string;
}