import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../generic/Button';
import { Add, Container, Filter, SignIn } from './HeadingStyle';

export default function Heading({ users, setCount, count }) {
  return (
    <>
      <Container>
        <SignIn>
          <h1 className='Brand'>CRUDapp</h1>

          <Link to='/Add'>
            <Button but='signin'>Sign In</Button>
          </Link>
        </SignIn>
        <Add>
          <div className='counter'>
            <button onClick={() => setCount(count - 1)}>➖</button>
            <button>{count}</button>
            <button onClick={() => setCount(count + 1)}>➕</button>
            <input defaultValue={' => Counter For Checking Memo'} disabled />
          </div>
          <Link to={'/Add'}>
            <Button>Add</Button>
          </Link>
        </Add>
        <Filter>
          <label>Async Search:</label>
          <input type='text' placeholder='search...' />
          <select>
            <option value='first_name' key='1'>
              firstname
            </option>
            <option value='last_name' key='2'>
              lastname
            </option>
            <option value='date_of_birth' key='3'>
              date of birth
            </option>
            <option value='email' key='4'>
              email
            </option>
          </select>
        </Filter>
      </Container>
    </>
  );
}
