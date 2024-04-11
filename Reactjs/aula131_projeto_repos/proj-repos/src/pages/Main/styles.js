import styled from 'styled-components'

export const Container = styled.div`
max-width: 700px;
background: #fff;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
padding: 30px;
margin: 80px auto;

row-gap: 30px;
display: flex;
flex-direction: column;

h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 10px;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: row;
column-gap: 10px;

input {
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
}
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
background: #0d2636;
border: 0;
border-radius: 4px;
padding: 0 15px;
display: flex;
justify-content: center;
align-items: center;
`;