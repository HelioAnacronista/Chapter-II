import styled from "styled-components";

export const Container = styled.div`
   //pq sao do msm tamanho
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   margin-top: -10rem;

   div {
      background: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-title);

      header {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }

      //o strong vem como padrao (display inline)
      strong {
         display: block;
         margin-top: 1rem;
         font-size: 2rem;
         line-height: 3rem;
      }

      &.heightlight-background {
         background-color: var(--green);
         color: #FFF;
      }
   }
`;