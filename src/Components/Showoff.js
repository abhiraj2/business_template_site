import "./Stylesheets/Showoff.css"


function ShowOff(){
    return(
        <div className="showoff">
          <div className="itemholder">
            <div className="title">
              99.95%
            </div>
            <div className="subtitle">
              Accuracy Rate
            </div>
            <div className="subsubtitle">
              in fulfilling orders
            </div>
          </div>
          <div className="itemholder">
            <div className="title">
              5,000+
            </div>
            <div className="subtitle">
              Ecommerce businesses
            </div>
            <div className="subsubtitle">
              partner with Opus
            </div>
          </div>
          <div className="itemholder">
            <div className="title">
              99.96%
            </div>
            <div className="subtitle">
              Of orders ship on time
            </div>
            <div className="subsubtitle">
              within SLA
            </div>
          </div>
          <div className="itemholder">
            <div className="title">
              <span id="greyhash">#</span>1
            </div>
            <div className="subtitle">
              Best Fulfillment Technology
            </div>
            <div className="subsubtitle">
              by AdWeek's Retail Awards
            </div>
          </div>
        </div>
    );
  }

  export default ShowOff