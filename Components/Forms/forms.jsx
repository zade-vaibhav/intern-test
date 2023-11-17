import React from "react";
import styles from "./forms.module.css";
import Button from "@mui/material/Button";

const Forms = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>XYZ</h1>
        <h3>Welcome Onbord</h3>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Your Name" />
          <input className={styles.input} placeholder="Company Name" />
          <select className={styles.input} id="Select insustry">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="vw">VW</option>
            <option value="audi" selected>
              Audi
            </option>
          </select>
          <div className={styles.Employee}>
            <label>Select Number of Locations</label>
            <div>
              <Button sx={{ margin: 1 }} variant="contained" size="small">
                1-10
              </Button>
              <Button sx={{ margin: 1 }} variant="contained" size="small">
                10-50
              </Button>
              <Button sx={{ margin: 1 }} variant="contained" size="small">
                50-150
              </Button>
              <Button sx={{ margin: 1 }} variant="contained" size="small">
                150+
              </Button>
            </div>
          </div>
          <button className={styles.submit}>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
