import "../index.css";
import { Link } from "react-router-dom";

function Chat() {
  return(
      <>
        <div>
          <HeaderChat/>
        </div>
        <div>
          <MenuChat/>
        </div>
        <div>
          <MainChat/>
        </div>
        <div>
          <div className="position-absolute" style={{ right: "0", marginTop: '45%'}}>
            <ButtonMenu icon="bi bi-plus-circle-fill fs-2 px-1" backgroundColor="#228B22" onClick={() => {}}/>
          </div>
          <FooterChat/>
        </div>
      </>  
  )
}

function HeaderChat() {
  return(
    <div className="navbar border-bottom position-fixed top-0 w-100 z-1 bg-light">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold fs-1">Chat</span>
      </div>
    </div>
  )
}

function MenuChat() {
  return(
    <div className="mx-3 my-3 margintop">
      <span className="fw-bold fs-3">Pilihan fitur</span>
      <div className="d-flex my-3">
        <ButtonMenu icon="bi bi-envelope-fill fs-2 px-1" backgroundColor="#FF4500" text="Inbox" onClick={() => {}}/>
        <ButtonMenu icon="bi bi-chat-square-fill fs-2 px-1" backgroundColor="#98FB98" text="Bantuan" onClick={() => {}}/>
      </div>
    </div>
  )
}

function MainChat(){
  return(
    <div className="marginbottom mx-3 my-3">
      <span className="fw-bold fs-3">Chat kamu</span>
      <div className="my-3 align-items-center">
        <div className="d-flex">
          <Button icon="bi bi-circle-fill" onClick={() => {}}/>
          <div className="text-nowrap overflow-hidden mx-2" style={{ textOverflow: "ellipsis" }}>
            <h4 className="fw-bold">Jeklin</h4>
            <p>Pesan Jeklin ini cuma buat kamu yang terpilih ya...</p>
          </div>
          <p>04/05/23</p>
        </div>
      </div>
    </div>
  )
}

function FooterChat(){
  return(
    <div className="card position-fixed bottom-0 w-100 z-1">
      <div className="card-body d-flex justify-content-around">
      <Link to='/' className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
        <Button icon="bi bi-house-door-fill" onClick={() => {}}/>
        <h6>Beranda</h6>
      </Link>
      <Link to="/Promo" className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
        <Button icon="bi bi-circle-fill" onClick={() => {}}/>
        <h6>Promo</h6>
      </Link>
      <Link to='/Pesanan' className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
        <Button icon="bi bi-clipboard-data-fill" onClick={() => {}}/>
        <h6>Pesanan</h6>  
      </Link>
      <Link to='/Chat' className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
        <Button icon="bi bi-chat-square-text-fill" onClick={() => {}}/>
        <h6>Chat</h6>
      </Link>
      </div>
    </div>
  )
}

function ButtonMenu(props){
  return(
    <div>
      <div className="card rounded-circle mx-2" style={{backgroundColor: props.backgroundColor}} onClick={props.onClick}>
        <div className="card-body">
          <i className={props.icon}/>
        </div>
      </div>
      <h6 className="text-center">{props.text}</h6>
    </div>
  )
}

function Button(props){
  return(
    <div className="fs-1" onClick={props.onClick}>
      <i className={props.icon}/>
    </div>
  )
}

export default Chat;
