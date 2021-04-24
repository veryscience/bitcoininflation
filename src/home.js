import React, { Component } from 'react'
import axios from 'axios'
import QRCode from "react-qr-code";
import logo from "./bitcoinLogo.png"
import moneroLogo from "./monero.png"
import dogeLogo from "./Dogecoin_logo.png"
import Button from '@material-ui/core/Button';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            circulation: 100000000,
            price: 0,
            marketCap: 0,
            rank: 1,
            reward: 3,
            moneroInflation: 3,
            dogeInflation: 3
        }
    }

    async componentDidMount() {

        //bitcoin info
        let result = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")
        let blockInfo = await axios.get("https://blockchain.info/q/bcperblock")

        let lastReward = blockInfo.data
        lastReward *= 52560
        lastReward = lastReward.toFixed(2)

        let data = result.data.market_data

        //moneor info
        let moneroResult = await axios.get("https://api.coingecko.com/api/v3/coins/monero?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")
        let moneroBlockInfo = await axios.get("https://localmonero.co/blocks/api/get_stats")

        let moneroLastReward = moneroBlockInfo.data.last_reward
        moneroLastReward = moneroLastReward.toString()
        moneroLastReward = '0.' + moneroLastReward
        moneroLastReward = Number(moneroLastReward)
        moneroLastReward *= 262800
        moneroLastReward = moneroLastReward.toFixed(3)

        let moneroData = moneroResult.data.market_data

        let moneroInflation = moneroLastReward / moneroData.circulating_supply
        moneroInflation = 100 * moneroInflation

        //doge info
        let dogeResult = await axios.get("https://api.coingecko.com/api/v3/coins/dogecoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")
        let dogeData = dogeResult.data.market_data

        let dogeInflation = dogeData.circulating_supply / 5000000000
        dogeInflation = 100 / dogeInflation

        this.setState({
            circulation: data.circulating_supply,
            price: data.current_price.usd,
            marketCap: data.market_cap.usd,
            rank: data.market_cap_rank,
            reward: lastReward,
            moneroInflation: moneroInflation,
            dogeInflation: dogeInflation
        })
    }

    render() {
        let inflation = this.state.reward / this.state.circulation
        inflation = 100 * inflation

        return (
            <div align="center" >
                <div>
                    <img src={logo} height="30%" width="30%" />
                </div>
                <div id="textInfo">
                    <h2>Price : ${this.state.price
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </h2>
                    <h2>Inflation Rate: {inflation.toFixed(2)}%</h2>
                    <h3>
                        Market Cap: ${this.state.marketCap
                            .toFixed(2)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </h3>
                    <h2>market Cap Rank: {this.state.rank}</h2>
                    <br />
                    <div align="center">
                        <h2>Tips Appreciated :)</h2>
                        <h2>All Through Lightning!</h2>
                        <h3>Lightning Adress: VeryScience@zbd.gg</h3>
                        <QRCode value="VeryScience@zbd.gg" size="128" />
                        <br></br>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigator.clipboard.writeText('VeryScience@zbd.gg')}
                        >
                            Copy
                        </Button>
                        <h6>Just copy Lightning Adress into Invoice or Lightning Adress tab</h6>
                        <h6>on any Lightning Wallet App</h6>
                    </div>
                </div>
                <br />
                <br />
                <h3>Other Coins</h3>
                <div id="monero">
                    <a href="https://veryscience.github.io/moneroinflation/" >
                        <img src={moneroLogo} height="9%" width="9%" />
                        <br />
                        <p>Inflation: {this.state.moneroInflation.toFixed(2)}%</p>
                    </a>
                </div>
                <br />
                <div id="doge">
                    <a href="https://veryscience.github.io/dogeinflation/" >
                        <img src={dogeLogo} height="14%" width="14%" />
                        <br />
                        <p>Inflation: {this.state.dogeInflation.toFixed(2)}%</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default Home
