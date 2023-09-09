import './App.css';

function Header() {
  return (
    <header class="page-header">
      <nav class="page-header-navigation">
        <app-header class="header">
          123
        </app-header>
      </nav>
    </header>
  );
}

function Body() {
  return (
    <div class="page-scroll-desktop">
      <div class="page-container-desktop" >

        <aside class="page-aside">
             <ul class="menu-aside-list">
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
            </ul>
        </aside>

        <div class="page-scroll-mobile">
          <main class="page-container-mobile">
            <app-group-page class="group-page">
              <div class="group-page-container">
                <ul class="menu-aside-list">
                  <li>123</li>
                  <li>123</li>

                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                </ul>
              </div>
              <aside class="group-page-aside"><ul class="menu-aside-list">
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>

                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>

                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>

                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>

              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>

              <li>123</li>
              <li>123</li>
              <li>123</li>
              <li>123</li>


                  <li>123</li>
                  <li>123</li>
                </ul></aside>
            </app-group-page>
          </main>
        </div>

        <footer class="page-footer">
          <app-footer class="footer">
            <div class="footer-box">
              <ul class="menu-aside-list">
              <li>123</li>
 
              <li>123</li>
              </ul>
            </div>
          </app-footer>
        </footer>


      </div>
    </div>
  );
}

function App() {
  return (
    <div class="page" >
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
