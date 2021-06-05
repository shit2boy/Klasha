import React, { useState } from "react";
import styles from "./style.module.css";
import Searchinput from "../SearchInput/Searchinput";
import FormInput from "../Form-input/form-input.component";
import PayoutButton from "../CustomButton/CustomButton";

const MainBoard = () => {
  let currentDate = new Date("2021-06-05T10:12:50.5000z").toDateString();
  const [data, setData] = useState({});

  const onChangeHandler = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const payoutData = [
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
    {
      Payout_ID: "KLA12578DHQ",

      Source: "Vel pellentesque ornare",

      Date: "25th November, 2020",
      Amount: "$1,200",
    },
  ];

  return (
    <>
      <aside className={styles.main_board}>
        <div className={styles.main_container}>
          <div className={styles.header}>
            <div>
              {" "}
              <h3 style={{ color: "#2A2A2A" }}>Balances</h3>
              <span>Today, {currentDate}</span>
            </div>
            <div className={styles.header_items}>
              <div className={styles.notification_holder}>
                <img
                  src="./klashaAssets/Notification.svg"
                  alt="notification icon"
                  width="10px"
                />
              </div>
              <div className={styles.image}>
                <img
                  src="./klashaAssets/avatar.svg"
                  alt="user avatar"
                  width="30px"
                />
              </div>
            </div>
          </div>
          <div className={styles.userBoard_checker}>
            <div style={{ width: "60%", padding: "0 10px" }}>
              <div className={styles.total}>
                <p style={{ color: "#2C665D" }}>Total account balance</p>

                <select className={styles.select} style={{ width: "auto" }}>
                  <option style={{ marginTop: "12px" }} value="USD">
                    USD
                  </option>
                  <option value="KES">KES</option>
                  <option value="NGN">NGN</option>
                  <option value="GHC">GHC</option>
                </select>
              </div>
              <div className={styles.contentt}>
                <div>
                  <p>$5,332.18</p>
                  <p style={{ color: "#A6ABB2" }}>1 USD = 381.97 NGN</p>
                </div>
              </div>
            </div>
            <div className={styles.showboard}>
              <p className={styles.title}>Funds on hold</p>
              <div className={styles.contenstt}>
                <p className={styles.amounts}>$5,332.18</p>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className={styles.filterSearch}>
            <p>Payout Table</p>
            <div className={styles.filter_component}>
              <Searchinput />

              <div>
                <div className={styles.inputContainer}>
                  {/* <i class="far fa-envelope icon">&#8358; </i> */}
                  <FormInput
                    type="text"
                    name="nextDate"
                    // min="2021-05-29"
                    minDate={new Date(2021, 1, 1)}
                    maxDate={new Date(2022, 1, 29)}
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    onBlur={(e) => (e.currentTarget.type = "text")}
                    placeholder="March,2021 &#xf073;"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div>
                <PayoutButton>Payout</PayoutButton>
              </div>
            </div>
          </div>
          <div>
            <table className={styles.payout_table}>
              <tr>
                <th>Payout ID</th>
                <th>Source</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              {payoutData?.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.Payout_ID}</td>
                  <td>{transaction.Source}</td>
                  <td>{transaction.Date}</td>
                  <td>{transaction.Amount}</td>
                </tr>
              ))}
            </table>
          </div>
          <div style={{ marginButtom: "50px" }}>
            <PayoutButton
              style={{
                width: "100%",
                background: "inherit",
                color: "#3D8F83",
              }}
            >
              See more ..
            </PayoutButton>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MainBoard;
