@use "../../styles/_variables";


.footer {
  background-color: variables.$blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 0 !important;
    justify-content: center;
    height: 100%; 
  }
}
.contact-info {
  color: aliceblue;
  margin:  0 auto;

}

.copy-rights{
  P{
    font-size: 1.3rem;
  }
}

.social-media {
  display: flex;
  align-items: center;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .icon {
    width: 2.5rem;
    height: 2.5rem;
    color: variables.$white;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}


