import React from "react";

export const useFetch = () => {

    const [dataSource, setDataSource] = React.useState([]);
    const [total, setTotal]           = React.useState(0);
    const [isLoading, setLoading]     = React.useState(false);

    const totalCount = React.useCallback((data) => {

        let result = data.map(item => {
            return item.quantity * item.product.price
        }).reduce((a, b) => a + b, 0);

        setTotal(result);

    }, []);

    const onChange = React.useCallback((data, index) => {

        const newData = dataSource;

        newData[index].quantity = data;

        totalCount([...newData]);

        setDataSource([...newData]);

    }, [dataSource, totalCount]);

    const readData = React.useCallback(async (abortController = null) => {
        try {

            setLoading(true);

            let url       = "https://spe-academy.spesolution.net/api/recruitment";
            let headers   = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y");

            let response = await fetch( url, {
                method   : "GET",
                headers  : headers,
                redirect : 'follow',
                signal   : abortController
            })

            let result = await response.json();

            totalCount(result);

            setDataSource(result);

        } catch (e) {

            alert(e.message);
        } finally {

            setLoading(false);
        }
    }, [totalCount]);

    React.useEffect(() => {

        let abortController = new AbortController();
        let signal          = abortController.signal;

        readData(signal)

        return () => {

            return abortController.abort();
        }
    }, [readData])


    return [ isLoading, dataSource, total, onChange ];
};

export default useFetch