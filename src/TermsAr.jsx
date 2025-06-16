import React from "react";
import "./assets/style.css";

function App() {
  return (
    <div className="page">
      <div className="d-flex align-items-center">
        <img
          src="https://scontent.fcai20-3.fna.fbcdn.net/v/t1.6435-9/78826883_1587724644701070_9121586126597914624_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tntbv2BstzYQ7kNvwHsj34P&_nc_oc=AdlceZECZz--pski7EHn9QqvHr3TES00s2R6r-McXrQw4rsWjITs0sgZYKYz2Mastjs&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=67SLe_moVebtof3fnQ_qQQ&oh=00_AfNpA-wrZDhAOJrtDtyJ8_XwKxY8-K9m9MAEZVUhTvTZ6w&oe=687766F4"
          alt="logo"
          className="ms-2"
          style={{ width: "60px", height: "60px" }}
        />
        <h1 className="m-2">الشروط والأحكام</h1>
      </div>
      <h4 className="text-danger p-2">
        مرحبًا بيك في موقعنا. باستخدامك للموقع، انت موافق على الشروط دي:
      </h4>
      <ul className="list-unstyled p-2">
        <li className="h6 p-2">أ</li>
        <li className="h6 p-2">ب</li>
        <li className="h6 p-2">ج</li>
        <li className="h6 p-2">د</li>
        <li className="h6 p-2">أ</li>
        <li className="h6 p-2">ب</li>
        <li className="h6 p-2">ج</li>
        <li className="h6 p-2">د</li>
        <li className="h6 p-2">أ</li>
        <li className="h6 p-2">ب</li>
        <li className="h6 p-2">ج</li>
        <li className="h6 p-2">د</li>
      </ul>
    </div>
  );
}

export default App;
