import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../generic/Button";
import { COUNTRIES } from "../../mocks/Countries";
import { AddUserBox } from "../Add/style";
export default function EditUser() {
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
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label htmlFor="dob">Date of birth</label>
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
            <Button but="submit">submit</Button>
          </Link>
          <Link to="/">
            <Button but="cancel">cancel</Button>
          </Link>
        </div>
      </div>
    </AddUserBox>
  );
}
