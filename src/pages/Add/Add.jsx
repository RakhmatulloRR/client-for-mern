import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../generic/Button";
import { COUNTRIES } from "../../mocks/Countries";
import { AddUserBox } from "./style";
export default function AddUser() {
  return (
    <AddUserBox>
      <div>
        <h1 className="Brand">CRUDapp</h1>
      </div>
      <div>
        <h2>Adding Page</h2>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label htmlFor="dob">Age</label>
          <input
            type="date"
            id="dob"
            name="dob"
            placeholder="Date of birth.."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />
          <label htmlFor="job">Job</label>
          <input type="text" id="job" name="job" placeholder="Your job.." />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            {COUNTRIES.map((country, i) => {
              return (
                <option value={country.name} key={i}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <Link to="/">
            <Button onClick={createCustomer}>submit</Button>
          </Link>
          <Link to="/">
            <Button>cancel</Button>
          </Link>
        </div>
      </div>
    </AddUserBox>
  );

  function createCustomer() {
    const inputs = document.querySelectorAll("input");
    const select = document.querySelector("select");
    const newCustomer = {
      first_name: inputs[0].value,
      last_name: inputs[1].value,
      date_of_birth: format(new Date(inputs[2].value), "dd/MM/yyyy"),
      email: inputs[3].value,
      job: inputs[4].value,
      country: select.value,
    };
    fetch("http://localhost:5000/api/customers", {
      method: "POST",
      body: JSON.stringify(newCustomer),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }
}
