import styled, { keyframes, css } from 'styled-components'

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
    border: 1px solid ${props => (props.error ? '#ff0000' : '#ddd')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
}
`;

// Criando animação do botão
const animate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`


export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
background: #0d2636;
border: 0;
border-radius: 4px;
padding: 0 15px;
display: flex;
justify-content: center;
align-items: center;

&[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
}

${props => props.loading &&
        css`
        svg{
            animation: ${animate} 2s linear infinite;
        }
    `}
`;

export const List = styled.ul`
list-style: none;

li{
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    & + li{
        border-top: 1px solid #eee;
    }

    a{
        color: #0d2636;
        text-decoration: nome;
    }

    span{
        display: flex;
        flex-direction: row;
        column-gap: 7px;
    }
}

`;

export const DeletButton = styled.button.attrs({
    type:'button'
})`
    background: transparent;
    color: #0d2636;
    border: 0;
    outline: 0;
    border-radius: 4px;

`;