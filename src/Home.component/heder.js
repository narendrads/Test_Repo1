import './herder.css';

export function Header(){
    return(
        <header className="header">
      <div className="logo">Your Shopping Site</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/checkout">Checkout</a></li>
        </ul>
      </nav>
      <div className="input-group mb-3 custom-search-bar">
      <input type="text" className="form-control" placeholder="Search for Products and brand and more" aria-label="Search" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></span>
      </div>
    </div>
      <div className='icons'>
        <span className='bi bi-person'></span>
        <span className='bi bi-cart'></span>
        <span className='bi bi-heart'></span>
        
      </div>
    </header>
    )
}