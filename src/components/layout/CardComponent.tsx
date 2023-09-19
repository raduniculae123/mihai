import React from "react";

function CardComponent({children}: { children: React.ReactNode }) {
    return (<>
            <style>{`
.card {
  width: 100%;
  min-height: 250px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
}

.card-content {
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;
  min-height: 250px;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;  
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
}
            `}</style>

            <div className="card">
                <div className="card-content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default CardComponent;