import Footer from "./Footer";

const Body = () => {
    return (
        <>
            <div class="page-scroll-desktop">
                <div class="page-container-desktop" >

                    <aside class="page-aside">
                        <ul class="menu-aside-list">
                            <li>Tab</li>
                            <li>Tab</li>
                            <li>Tab</li>


                        </ul>
                    </aside>

                    <div class="page-scroll-mobile">
                        <main class="page-container-mobile">
                            <app-group-page class="group-page">
                                <div class="group-page-container">
                                    <ul class="menu-aside-list">
                                        <li>Main content</li>
                                        <li>Main content</li>
                                        <li>Main content</li>
                                        <li>Main content</li>
                                        <li>Main content</li>
                                    </ul>
                                </div>
                                <aside class="group-page-aside"><ul class="menu-aside-list">
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    <li>Side content</li>
                                    


                                </ul></aside>
                            </app-group-page>
                        </main>
                    </div>

                    <Footer />

                </div>
            </div>
        </>
    );
}

export default Body;