import React, { useState } from 'react'
import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {

    const [searhText, setSearchText] = useState('')
    // console.log(coins)
    return (
        <div>
            <div>
                <h1>Search Crypto</h1>
                <form>
                    <input onChange={(event) => {
                        setSearchText(event.target.value)
                    }} type='text' placeholder='Seach a coin' />
                </form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24th</th>
                        <th>24th Volume</th>
                        <th>Mkt</th>
                        <th>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.filter((value) => {
                        if (searhText === '') {
                            return value
                        } else if (
                            value.name.toLowerCase().includes(searhText.toLowerCase())
                        ) {
                            return value
                        }
                    }).map((coin) => (
                        <CoinItem key={coin.id} coin={coin} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CoinSearch