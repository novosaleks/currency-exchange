export default class CurrencyApi {
    _url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    _getData = async () => {
        const req = await fetch(this._url);

        if (!req.ok) {
            throw new Error(`Request on ${req.url} failed with code: ${req.status}`);
        }

        return await req.json();
    };

    getParticularCurrency = async currency => {
        const data = await this._getData();

        const foundCurrency = data.find(item => {
            return item.cc === currency;
        });

        if (!foundCurrency) {
            throw new Error(`Invalid currency value: ${currency}`);
        }

        return foundCurrency;
    };

    getAllCurrencies = async () => {
        const data = await this._getData();

        return data.map(this._transformCurrency);
    }

    _transformCurrency = (cur, idx) => {
        return {
            id: cur.r030,
            abbr: cur.cc,
            text: cur.txt,
            rate: cur.rate,
            favorite: 0,
            idx,
        }
    }
}