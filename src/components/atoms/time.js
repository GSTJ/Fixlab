import styled from 'styled-components';

export default styled.div`
    margin-bottom: 20px;
    font-family: Roboto;
    font-size: 100px;
    font-weight: 400;
    display: flex;
    > div {
        margin:  0 0 27px 5px;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;
        font-size: 35px;
        font-weight: bolder;
        border: 7px solid #000;
        border-radius: 50px;
    }
    > span {
        font-size: 40px;
    }
`;
