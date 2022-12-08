import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
   
    
    h2 {
        padding-left: 1rem;
        width: ;
    }

    nav {
        width: 100%;
        ul {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        li {
            margin-left: 2rem;
            &:last-child {
                margin-right: 2rem
            }
        }
    }

`
export const Main = styled.main`
    margin-top: 4rem;
    width: 100%;
    height: 100%;
    display: flex;


`
export const ContainerLeft = styled.div`
    
    padding-left: 5rem;
    width: 70%;
    p {
        color: rgba(255, 102, 0);
        font-size: 1rem;
        margin-bottom: 1rem;
        
    }
    h1 {
        line-height: 1em;
        font-size: 3rem;
        
    }
    
    div {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        button {
            width: 4rem;
            height: 4rem;
            background-color: #553BF9;
            border-radius: 50%;
            font-size: 1.3rem;
            border: none;
            
        }
        p {
        margin-left: 1rem;
        color: white;
        width: 20rem;
        }
    }

`

export const ContainerRight = styled.div`
    width: 30%;
    padding: 1.5rem;
    padding-left: 3rem;

    li {
        
        font-weight: 600;
        list-style: circle;
        
    }

`