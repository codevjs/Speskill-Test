import React from "react";
import useFetch from "../../hooks/fetch";

const Shop = () => {

    const [isLoading, dataSource, total, onChange] = useFetch();

    return (
        <div className={"container"}>
            <div className={"title-section"}>
                <h1>SPE Frontend Shop</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                {
                    dataSource.map((item, index) => (
                        <tr key={index} >
                            <td>
                                <span>
                                    <img src={item.product.media_url} alt={item.product.name} />
                                </span>
                                <span className={"description"}>
                                    <p className={"code"}>{item.product.code}</p>
                                    <p className={"name"}>{item.product.name}</p>
                                    <h3 className={"price"}>IDR. {item.product.price?.toLocaleString()}</h3>
                                    <p className={"stock"}>{item.product.stock} in stock</p>
                                </span>
                            </td>
                            <td>
                                {/*<p className={"qty"}>{item.quantity}</p>*/}
                                <input
                                    onChange={ e => {
                                        onChange(e.target.value, index);
                                    }}
                                    type={"text"}
                                    value={item.quantity}
                                />
                            </td>
                            <td>
                                <p className={"subtotal"}>
                                    IDR {(item.quantity * item.product.price).toLocaleString()}
                                </p>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>TOTAL</th>
                        <th>IDR. {total.toLocaleString()} </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Shop;