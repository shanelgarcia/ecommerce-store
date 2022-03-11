function pageHeader(logoSrc) {
    const template = `
    <!-- TODO: Convert header to JS so it shows in every pages-->
    <header>
      <div class="page-header-main">
        <div class="header-main-branding">
          <img class="page-logo" src="${logoSrc}" alt="sun logo" />
          <h1><a class="page-title" href="./index.html">Sunny Coastal Village</a></h1>
        </div>
        <div class="header-main-nav"> 
          <nav>
            <ul>
              <li><a href="">Shop</a></li>
              <li><a href="">Food</a></li>
              <li><a href="">Login</a></li>
              <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
            </ul>
          </nav>        
        </div>
      </div>
      <div class="page-header-sub">
        <div class="header-sub-social-media">
          <nav>
            <ul>
              <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href=""><i class="fa-brands fa-instagram-square"></i></a></li>
              <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
            </ul>
          </nav>
        </div>
        <div class="header-sub-mall-hours">
          <!-- TODO: Mall hours should be put in variable -->
          <p>Hours: 10:00am to 12:00am</p>
        </div>
      </div>
    </header>
    `
    const element = document.createRange().createContextualFragment(template).children[0]

    return element;
}

export {pageHeader}