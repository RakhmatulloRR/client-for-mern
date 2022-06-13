import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../generic/Button";
import { COUNTRIES } from "../../mocks/Countries";
import { AddUserBox } from "../Add/style";
export default function EditUser() {
  const [customer, setCustomer] = useState([]);

  const params = useParams();
  const id = params.id;
  const getData = (id) => {
    fetch(`http://localhost:5000/api/customers/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((json) => setCustomer(json));
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const updateCustomer = () => {
    const inputs = document.querySelectorAll('input')
    const select = document.querySelector('select')
    const updatedCustomer = {
      first_name: inputs[0].value,
      last_name: inputs[1].value,
      date_of_birth: inputs[2].value,
      email: inputs[3].value,
      job: inputs[4].value,
      country: select.value
    }
    fetch(`http://localhost:5000/api/customers/${id}`, {
  method: 'PUT',
  body: JSON.stringify(updatedCustomer),
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
})
  };
  return (
    <AddUserBox>
      <div>
        <h1 className="Brand">CRUDapp</h1>
      </div>
      <div>
        <h2>Editing Page</h2>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            defaultValue={customer[0]?.first_name}
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            defaultValue={customer[0]?.last_name}
          />
          <label htmlFor="age">Date of birth</label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Your age.."
            defaultValue={customer[0]?.date_of_birth}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            defaultValue={customer[0]?.email}
          />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            id="job"
            name="job"
            placeholder="Your job.."
            defaultValue={customer[0]?.job}
          />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value={customer[0]?.country} key="0">
              {customer[0]?.country}
            </option>
            {COUNTRIES.map((ctr, i) => {
              return ctr.name === customer[0]?.country ? null : (
                <option value={ctr.name} key={i+1}>
                  {ctr.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <Link to="/">
            <Button onClick={updateCustomer}>submit</Button>
          </Link>
          <Link to="/">
            <Button>cancel</Button>
          </Link>
        </div>
      </div>
    </AddUserBox>
  );
}
