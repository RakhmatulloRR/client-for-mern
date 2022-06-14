import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 160px;
  background-color: black;
  color: white;
`;
const SignIn = styled.div`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;
const Add = styled.div`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;
const Filter = styled.div`
  border-top: 1px solid orange;
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 120px);
  input,
  select {
    height: 80%;
    padding: 5px 10px;
    margin: 0 10px;
    outline: none;
    border-radius: 5px;
  }
`;

// export const HeadingBox = styled.div`

//   div:first-child {

//   }
//   div:last-child {

//   }
// `;

export { Container, SignIn, Add, Filter };
