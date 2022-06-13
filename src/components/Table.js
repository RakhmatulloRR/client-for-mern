import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Button } from '../generic/Button';
import { TableBox } from './TableStyle';
export default function Table(props) {
  //! useQuery
  const getData = () => {
    return fetch('http://localhost:5000/api/customers').then((res) =>
      res.json()
    );
  };
  const queryObj = useQuery(['getCustomers'], getData, {
    refetchOnWindowFocus: false,
  });
  const { data: customers } = queryObj;

  //! useMutation
  const mutation = useMutation((id) => {
    // console.log(id);
    return fetch(`http://localhost:5000/api/customers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  });
  const { filterText, key } = props.props;
  const filteredCustomers = customers?.filter((c) =>
    c[key].toLowerCase().includes(filterText.toLowerCase().trim())
  );
  //
  const deleteCustomer = (id) => {
    mutation.mutate(id, {
      onSuccess: () => {
        queryObj.refetch();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  return (
    <TableBox>
      <table id='users'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>date of birth</th>
            <th>Email</th>
            <th>Job</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers?.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <p>{item.first_name}</p>
                </td>
                <td>
                  <p>{item.last_name}</p>
                </td>
                <td>
                  <p>{item.date_of_birth}</p>
                </td>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.job}</p>
                </td>
                <td>
                  <p>{item.country}</p>
                </td>
                <td>
                  <div>
                    <Link to={`/Edit/${item._id}`}>
                      <Button>edit</Button>
                    </Link>
                    <Button onClick={() => deleteCustomer(item._id)}>
                      delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>id1</td>
            <td>
              <p>firstname</p>
            </td>
            <td>
              <input type='text' defaultValue={'lastname1'} />
            </td>
            <td>
              <p>Age1</p>
            </td>
            <td>
              <p>email1@gmail.com</p>
            </td>
            <td>
              <p>address1</p>
            </td>
            <td>
              <p>сountry1</p>
            </td>
            <td>
              <div>
                <button>update</button>
                <button>delete</button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </TableBox>
  );
}
