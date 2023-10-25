import Btc from "../images/hero/bitcoin.png";
import Eth from "../images/hero/ethereum.png";

function Join() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="container">
          <div className="join-content">
            <img src={Btc} alt="coin_img" className="join-content__btc" />
            <img src={Eth} alt="coin_img" className="join-content__eth" />
            <div className="join-content__text">
              <h2>
                Join us via <br /> <span>discord</span>
              </h2>
              <p>Invest and manage all your crypto at one place.</p>
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                Join via Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
