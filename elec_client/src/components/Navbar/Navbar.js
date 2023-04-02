import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">Electronic Gadgets</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/addproduct">Add Product</a>
              </li>
            </ul>
          </div>
          <a class="nav-link" href="/cartitems" Style="color:black"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
</a>
        </div>
      </nav>
    </>
  )
}


export default Navbar
