import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

  return (
    <>
    <h1>Landing page</h1>
    <button onClick={()=>navigate('./create/656b61cfc696a856ed5b5b66')}>Create Portfolio</button>
    </>
  )
}

export default LandingPage;