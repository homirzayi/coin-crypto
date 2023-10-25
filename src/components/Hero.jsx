import { useEffect, useState } from "react";
import Btc from "../images/hero/bitcoin.png";
import Eth from "../images/hero/ethereum.png";
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Hero() {
  const [data, setData] = useState([]);
  const [coinsLoad, setCoinsLoad] = useState(true);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false";

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            throw new Error("Error!!");
          }
          const fetchedData = await res.json();
          setData(fetchedData);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    },
    [url]
  );

  console.log(data);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <img src={Btc} alt="floating-el" className="btc-float" />
              <h1>
                Track and Trade
                <br />
                <span>Crypto currencies</span>
              </h1>
              <img src={Eth} alt="floating-el" className="eth-float" />
            </div>

            {/* mobile btn */}
            <a href="#market" className="mobile-btn-hero">
              See Prices <IconChevronDown />
            </a>

            <div className="coin-slider" onLoad={() => setCoinsLoad(false)}>
              {coinsLoad && <span className="loader"></span>}
              {data.map((item) => (
                <Link
                  to={`/coin/${item.id}`}
                  key={item.id}
                  className="slider-coin"
                >
                  <img src={item?.image} alt={item?.name} />
                  <p className="slider-coin__name">
                    {item?.name}
                    <span
                      className={
                        "slider-coin__price " +
                        (item?.price_change_percentage_24h <= 0
                          ? "red-text"
                          : "green-text")
                      }
                    >
                      {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                    </span>
                  </p>
                  <p className="slider-coin__price">
                    {"$ " + numberWithCommas(item?.current_price?.toFixed(2))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
