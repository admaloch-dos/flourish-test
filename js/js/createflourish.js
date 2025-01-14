//insert html for flourish to dom
const createFlourish = () => {
    const flourishContainer = document.querySelector('#flourish-widget-main')
    flourishContainer.innerHTML = `
    <div id="text_magnify"></div>
    <div id="ImageDescription_magnify"></div>
    <div id="tail"></div>
    <div class="reading-mask" id="top_mask"></div>
    <div class="reading-mask" id="bottom_mask"></div>

    <div class="mb-2" id="google_translate_element" title="Translate Florida Memory">
    </div>

    <div id="flourish-trigger-container">
        <div id="flourish-triggers" class="flourish-triggers item-delete-container-remove ">
            <a href="" class="d-none" data-info="Set link color for link-change in modal"></a>
            <div class=" d-flex flex-wrap flex-column " id="Flourish_trigger">
                <div id="toggle-flourish-list-container">
                    <img id="toggle-flourish-list" src="./flourish/img/toggle-off.svg"
                        alt="toggle active item container icon"
                        class="item-delete-container-remove toggle-item-icon hide-active-list flourish-popover-item"
                        data-trigger="hover" data-toggle="popover-main" data-placement="top"
                        data-content="View active items">

                </div>
                <div class="toggle-icon-container">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg alt="Accessibility button" id="flourish_icon" data-id="hide-img-hover" fill="#000000"
                        viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z" />
                    </svg>
                    <svg alt="Accessibility menu active icon" id="flourish_check_icon"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
            </div>
            <div id="item-delete-container" class="item-delete-container-remove">
                <ul id="widget-list" class="list-unstyled mt-2 mb-2"></ul>
                <div id="item-delete-footer" class="d-flex justify-content-center align-items-center">
                    <button id="reset-flourish" class="w-100 reset-flourish">Reset menu &nbsp<img
                            class="img-fluid flourish-reset-icon" src="./flourish/img/reset.png"
                            alt="Restore default settings icon" /></button>

                </div>
            </div>
        </div>
    </div>

    <!-- The Modal -->
    <div id="flourish_widget" class="flourish_modal_background" aria-labelledby="flourish_widget"
        aria-hidden="true">

        <!-- Modal content -->
        <main id="flourish-modal-content" class="modal_content">
<div class="flourish-modal-container d-flex justify-content-center flex-column align-items-center">
  <header class="modal_header">
                <img id="flourish-logo-icon" class="img-fluid flourish-icon-style mr-2"
                    src="./flourish/img/flourish-logo-square-sm-white-text.png" alt="Flourish logo icon" />
                <div class="row flourish-header-row">
                    <div id="flourish-header-title"
                        class="col-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">

                        <h1 class="nowrap text-center" id="main-modal-title">Accessibility Menu</h1>
                    </div>
                    <div id="default-btn-container"
                        class="col-12 col-md-6 d-flex flex-wrap justify-content-center justify-content-md-end align-items-md-center">
                        <button onclick="resetflourishModal()" type="button"
                            class="btn mr-md-4 d-flex justify-content-center align-items-center"
                            title="Reset Settings" aria-label="Reset Settings" id="flourish_reset">
                            <img class="img-fluid flourish-reset-icon" src="./flourish/img/reset.png"
                                alt="Restore default settings icon" />Restore default
                        </button>
                    </div>
                    <button id="close-flourish" type="button" class="btn btn-link flourish_close" aria-label="Close"
                        title="Close" role="button">
                        <img src="./flourish/img/x.svg" alt="close-flourish-icon" id="close-flourish-icon"
                            class="close-icon">
                    </button>
                </div>
            </header><!-- modal_header -->
            <div class="modal_body" id="accessibility">
                <div id="modal-container-item" class="container-fluid">
                    <section id="navigation-section" class="flourish-section-container">
                        <div class="flourish-section-header">
                            <h2 class="d-inline">Navigation and Links</h2>
                        </div>

                        <div id="navigation-selects"
                            class="row justify-content-between align-items-center menu-selects flourish-sub-section">
                            <div class="col-12 col-lg-6 d-flex flex-wrap justify-content-center align-items-center "
                                id=" SiteMap_option">
                                <form
                                    class="siteMap_form form-inline select-container  d-flex flex-wrap justify-content- flex-nowrap">
                                    <img class="img-fluid flourish-icon-style" src="./flourish/img/sitemap.png"
                                        alt="Site map icon" />
                                    <select class="form-control" id="select_page" onchange="location = this.value;">
                                        <option class="text-center site-nav-select-title" selected disabled>Website
                                            Navigation</option>
                                        <option value="https://www.floridamemory.com/" style="font-weight:bold;">
                                            Homepage</option>
                                        <optgroup label="Discover" id="discover_group">
                                            <option value="https://www.floridamemory.com/discover/">Discover
                                            </option>
                                            <option value="https://www.floridamemory.com/discover/photographs/">
                                                Photographs</option>
                                            <option
                                                value="https://www.floridamemory.com/discover/historical_records/">
                                                Historical
                                                Records
                                            </option>
                                            <option value="https://www.floridamemory.com/discover/maps/">Maps
                                            </option>
                                            <option value="https://www.floridamemory.com/discover/audio/">Audio
                                            </option>
                                            <option value="https://www.floridamemory.com/discover/video/">Video
                                            </option>
                                        </optgroup>
                                        <optgroup label="Learn" id="learn_group">
                                            <option value="https://www.floridamemory.com/learn/">Learn</option>
                                            <option value="https://www.floridamemory.com/learn/about/">About
                                                Florida Memory</option>
                                            <option value="https://www.floridamemory.com/learn/classroom/">
                                                Classroom</option>
                                            <option value="https://www.floridamemory.com/learn/floridiana/">
                                                Floridiana Articles
                                            </option>
                                            <option value="https://www.floridamemory.com/learn/exhibits/">Exhbits
                                            </option>
                                            <option value="https://www.floridamemory.com/learn/research-tools/">
                                                Research Tools</option>
                                        </optgroup>
                                        <optgroup label="Share" id="share_group">
                                            <option value="https://www.floridamemory.com/share/">Share</option>
                                            <option value="https://www.floridamemory.com/share/connect/">Connect
                                                With Us</option>
                                            <option value="https://www.floridamemory.com/share/donate/">Donate
                                                Records</option>
                                            <option
                                                value="https://www.floridamemory.com/share/order-info/index.php">
                                                Order</option>
                                        </optgroup>
                                        <optgroup label="Footer" id="footer_group">
                                        </optgroup>
                                    </select>
                                </form><!-- orientationAdjustments_form -->
                            </div><!-- col-12 col-lg-4 -->
                            <div id="flourish-keyboard-shortcuts"
                                class=" col-6 d-none d-lg-flex flex-wrap justify-content-center flex-nowrap align-items-center">
                                <img class="img-fluid flourish-icon-style " src="./flourish/img/keyboard.png"
                                    alt="Keyboard shortcuts icon" />
                                <button class="btn btn-link ml-2" type="button" data-toggle="modal"
                                    data-target="#keyboard_shortcuts" id="keyboard_shortcutsBtn">Keyboard Shortcuts
                                </button>
                                <div class="modal fade" id="keyboard_shortcuts" tabindex="-1"
                                    aria-labelledby="keyboard_shortcuts" aria-hidden="true">
                                    <div
                                        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                        <div class="modal-content">
                                            <div class="modal_header  ">
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <input class="form-control" id="myInput" type="text"
                                                    placeholder="Search..">
                                                <br>
                                                <div class="table-responsive">
                                                    <table class="table table-bordered">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th>Description</th>
                                                                <th>Windows</th>
                                                                <th>Mac OS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="myTable">
                                                            <tr class="table-secondary">
                                                                <td style="height:25px;"><strong>Toggle widget
                                                                        items</strong></td>
                                                                <td style="height:25px;"></td>
                                                                <td style="height:25px;"></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Open/Close Menu</td>
                                                                <td>Shift + A</td>
                                                                <td>Shift + A</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Reset menu</td>
                                                                <td>Shift + Q</td>
                                                                <td>Shift + Q</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Highlight links on Hover</td>
                                                                <td>Shift + 1</td>
                                                                <td>Shift + 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Highlight all links</td>
                                                                <td>Shift + 2</td>
                                                                <td>Shift + 2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Text magnifier</td>
                                                                <td>Shift + 3</td>
                                                                <td>Shift + 3</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Show image description</td>
                                                                <td>Shift + 4</td>
                                                                <td>Shift + 4</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Photosensitivity filter</td>
                                                                <td>Shift + 5</td>
                                                                <td>Shift + 5</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Reading Mask</td>
                                                                <td>Shift + 6</td>
                                                                <td>Shift + 6</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Reading Guide</td>
                                                                <td>Shift + 7</td>
                                                                <td>Shift + 7</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Reading Guide</td>
                                                                <td>Shift + 7</td>
                                                                <td>Shift + 7</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Text to speech</td>
                                                                <td>Shift + 8</td>
                                                                <td>Shift + 8</td>
                                                            </tr>
                                                            <tr class="table-secondary">
                                                                <td style="height:25px;"><strong>Navigation</strong>
                                                                </td>
                                                                <td style="height:25px;"></td>
                                                                <td style="height:25px;"></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Florida Memory homepage</td>
                                                                <td>Shift + H</td>
                                                                <td>Shift + H</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Scroll down a frame</td>
                                                                <td>Space or Page Down</td>
                                                                <td>Space or Fn + Down Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Scroll up a frame</td>
                                                                <td>Shift + Space or Page Up</td>
                                                                <td>Shift + Space or Fn + Up Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to bottom of the page</td>
                                                                <td>End</td>
                                                                <td>Cmd + Down Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to top of the page </td>
                                                                <td>Home</td>
                                                                <td>Cmd + Up Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go back</td>
                                                                <td>Alt + Left Arrow or Backspace</td>
                                                                <td>Cmd + Left Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go forward</td>
                                                                <td>Alt + Right Arrow or Shift + Backspace</td>
                                                                <td>Cmd + Right Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Refresh a webpage</td>
                                                                <td>F5</td>
                                                                <td>Cmd + R</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Refresh a webpage (no cache)</td>
                                                                <td>Ctrl + F5</td>
                                                                <td>Cmd + Shift + R</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Stop</td>
                                                                <td>Esc</td>
                                                                <td>Esc</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Toggle full-screen</td>
                                                                <td>F11</td>
                                                                <td>Cmd + Shift + F</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Zoom in</td>
                                                                <td>Ctrl + +</td>
                                                                <td>Cmd + +</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Zoom out</td>
                                                                <td>Ctrl + -</td>
                                                                <td>Cmd + -</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Zoom 100% (default)</td>
                                                                <td>Ctrl + 0</td>
                                                                <td>Cmd + 0</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Find text</td>
                                                                <td>Ctrl + F</td>
                                                                <td>Cmd + F </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr class="table-secondary">
                                                                <td style="height:25px;"><strong>Tab / Window
                                                                        Management</strong></td>
                                                                <td style="height:25px;"></td>
                                                                <td style="height:25px;"></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Open a new tab</td>
                                                                <td>Ctrl + T</td>
                                                                <td>Cmd + T</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Close current tab</td>
                                                                <td>Ctrl + W</td>
                                                                <td>Cmd + W</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Close all tabs</td>
                                                                <td>Ctrl + Shift + W</td>
                                                                <td>Cmd + Q</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Close all tabs except the current tab</td>
                                                                <td>Ctrl + Alt + F4 </td>
                                                                <td>Cmd + Opt + W</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to next tab</td>
                                                                <td>Ctrl + Tab</td>
                                                                <td>Control + Tab or Cmd + Shift + Right Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to previous tab </td>
                                                                <td>Ctrl + Shift + Tab</td>
                                                                <td>Shift + Control + Tab or Cmd + Shift + Left
                                                                    Arrow</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to a specific tab number </td>
                                                                <td>Ctrl + 1-8</td>
                                                                <td>Cmd + 1-8 </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to the last tab</td>
                                                                <td>Ctrl + 9</td>
                                                                <td>Cmd + 9</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Reopen the last closed tab</td>
                                                                <td>Ctrl + Shift + T</td>
                                                                <td>Cmd + Shift + T </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Open a new window</td>
                                                                <td>Ctrl + N</td>
                                                                <td>Cmd + N</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Close current window</td>
                                                                <td>Alt + F4</td>
                                                                <td>Cmd + W</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to next window</td>
                                                                <td>Alt + Tab</td>
                                                                <td>Cmd + Tab</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Go to previous window </td>
                                                                <td>Alt + Shift + Tab</td>
                                                                <td>Cmd + Shift + Tab</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Reopen the last closed window</td>
                                                                <td>Ctrl + Shift + N</td>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Open links in a new tab in the background</td>
                                                                <td>Ctrl + Click</td>
                                                                <td>Cmd + Click</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Open links in a new tab in the foreground</td>
                                                                <td>Ctrl + Shift + Click</td>
                                                                <td>Cmd + Shift + Click</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Print current webpage</td>
                                                                <td>Ctrl + P</td>
                                                                <td>Cmd + P</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Save current webpage</td>
                                                                <td>Ctrl + S</td>
                                                                <td>Cmd + S</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div><!--table-responsive-->
                                            </div><!-- modal body -->
                                        </div><!-- modal content -->
                                    </div><!-- modal dialog -->
                                </div><!--modal-->
                            </div><!-- col-12 col-lg-4 -->
                        </div><!-- row -->
                        <div id="link-emphasis" class="row flourish-sub-section">
                            <section id="HighlightHover_option"
                                class=" col-12 col-lg-6 d-none  d-lg-flex justify-content-center justify-content-lg-start ">
                                <div class="flourish_toggleContainer pb-0" id="HighlightHover">
                                    <div class="flourish_content">
                                        <div
                                            class="flourish-links-toggle-container justify-content-center justify-content-lg-start flex-wrap">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/highlight link.png"
                                                alt="Highlight on hover icon" />
                                            <h3
                                                class="type flourish_option_title text-wrap text-center text-sm-center text-lg-left ">
                                                Highlight
                                                on Hover
                                            </h3>
                                            <div class="flourish_toggle">
                                                <label class="switch" title="Toggle On/Off Highlight Hover">
                                                    <input type="checkbox" class="switch-input"
                                                        id="ToggleHighlightHover" name="HighlightHover">
                                                    <span class="switch-label" data-on="On" data-off="Off"></span>
                                                    <span class="switch-handle"></span>
                                                </label>
                                            </div><!-- flourish_toggle -->
                                        </div>
                                        <div class="flourish-p-container ">
                                            <p class="description">Adds visual emphasis to all hyperlinks when
                                                hovering</p>
                                        </div>
                                    </div><!-- flourish_content -->
                                </div><!-- class="flourish_toggleContainer" id="HighlightHover" -->
                            </section><!-- col-12 col-md-6 -->
                            <section id="HighlightLinks_option"
                                class=" col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-start ">
                                <div class="flourish_toggleContainer pb-0" id="HighlightLinks">
                                    <div class="flourish_content text-center">
                                        <div
                                            class="flourish-links-toggle-container flex-wrap justify-content-center justify-content-lg-start ">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/highlight all links.png"
                                                alt="Outline links icon" />
                                            <h3
                                                class="type flourish_option_title text-wrap text-center text-sm-center text-lg-left ">
                                                Outline All
                                                Links
                                            </h3>
                                            <div class="flourish_toggle">
                                                <label class="switch" title="Toggle On/Off Outline Links">
                                                    <input type="checkbox" class="switch-input"
                                                        id="ToggleHighlightLinks" name="HighlightLinks">
                                                    <span class="switch-label" data-on="On" data-off="Off"></span>
                                                    <span class="switch-handle"></span>
                                                </label>
                                            </div><!-- flourish_toggle -->
                                        </div>
                                        <div
                                            class="flourish-p-container d-flex flex-wrap justify-content-center justify-content-md-start">
                                            <p class="description text-center text-lg-left">Adds visual emphasis to
                                                all
                                                hyperlinks</p>
                                        </div>
                                    </div><!-- flourish_content -->
                                </div><!-- class="flourish_toggleContainer" id="HighlightLinks" -->
                            </section><!-- col-12 col-md-6 -->
                        </div><!-- row -->
                    </section>
                    <section id="site-appearance-section" class="flourish-section-container">
                        <div class="flourish-section-header">
                            <h2 class="d-inline">Website Appearance</h2>
                        </div>
                        <div id="photo-filter" class="row flourish-sub-section">
                            <section
                                class="flourish-toggle-container col-12 ml-lg-2 d-flex flex-wrap justify-content-center justify-content-lg-start "
                                id="photosens_option">
                                <div class="flourish_toggleContainer pb-0" id="PhotoSens">
                                    <div class="flourish_content">
                                        <div
                                            class="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/photo-sensitive.png"
                                                alt="Photosensitivity filter Icon" />
                                            <h3
                                                class="type flourish_option_title text-wrap text-center text-sm-center text-lg-left ">
                                                Photosensitivity Filter </h3>
                                            <div class=" flourish_toggle">
                                                <label class="switch" title="Toggle On/Off Photosensitivity Filter"
                                                    aria-label="Toggle On/Off Photosensitivity Filter">
                                                    <input type="checkbox" class="switch-input"
                                                        id="TogglePhotoFilter" name="PhotoSens">
                                                    <span class="switch-label" data-on="On" data-off="Off"></span>
                                                    <span class="switch-handle"></span>
                                                </label>
                                            </div><!-- flourish_toggle -->
                                        </div>
                                        <div
                                            class="flourish-p-container d-flex flex-wrap justify-content-center justify-content-lg-start">
                                            <p class="description text-center text-lg-left">Reduces color and
                                                removes flashes</p>
                                        </div>
                                    </div><!-- flourish_content -->
                                </div><!-- class="flourish_toggleContainer" id="PhotoSens" -->
                            </section><!-- col-12 col-lg-4 -->
                        </div>
                        <div id="color-schemes" class="row flourish-sub-section">
                            <div class="col-12 col-md-6  " id="color-scheme-presets">
                                <section class="bg_form " id="site-color-presets">
                                    <div
                                        class="section-title d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center ">
                                        <img class="img-fluid flourish-icon-style"
                                            src="./flourish/img/color-presets.png"
                                            alt="Website color presets icon" />
                                        <h3 class="flourish_option_title text-wrap text-center  ">Color
                                            Profiles

                                        </h3>
                                    </div>
                                    <div class="ml-lg-2 form-check  ">
                                        <ul
                                            class=" modal-btn-options w-100 d-flex flex-wrap justify-content-center justify-content-lg-start mb-0">
                                            <li id="DefaultBG_option" class="active">
                                                <a href="#!" id="defaultBackground"
                                                    class="backgroundOptions defaultBackground">
                                                    <div class="title">Default</div>
                                                </a>
                                            </li>
                                            <li id="DarkContrastBG_option" class="">
                                                <a href="#!" id="DarkContrastBackground"
                                                    class="backgroundOptions DarkContrastBackground">
                                                    <div class="title">Dark Contrast</div>
                                                </a>
                                            </li>
                                            <li id="DesaturateBG_option" class="">
                                                <a href="#!" id="DesaturateBackground"
                                                    class="backgroundOptions DesaturateBackground">
                                                    <div class="title">Desaturate</div>
                                                </a>
                                            </li>
                                            <br class="d-none d-md-block">
                                            <li id="InvertBG_option" class="">
                                                <a href="#!" id="InvertBackground"
                                                    class="backgroundOptions InvertBackground">
                                                    <div class="title">Invert</div>
                                                </a>
                                            </li>
                                            <li id="HighSaturationBG_option" class="">
                                                <a href="#!" id="HighSaturationBackground"
                                                    class="backgroundOptions HighSaturationBackground">
                                                    <div class="title">High Saturation</div>
                                                </a>
                                            </li>
                                            <li id="LowSaturationBG_option" class="">
                                                <a href="#!" id="LowSaturationBackground"
                                                    class="backgroundOptions LowSaturationBackground">
                                                    <div class="title">Low Saturation</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div><!-- form check -->
                                </section><!-- bg_form -->
                            </div><!-- col-12 col-lg-4 Change Background Color-->
                            <div class="col-12 col-md-6 d-flex flex-wrap flex-column" id="ColorAdjust_option">
                                <section class="color_picker_form text-center">
                                    <div id="adjust-colors-title"
                                        class="mt-sm-1  section-title adjust-color-title  d-flex flex-wrap justify-content-center flex-column flex-sm-row justify-content-lg-start align-items-center">
                                        <div class="d-flex mb-1 mb-sm-0 justify-content-center align-items-center">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/adjust-color.png" alt="Adjust colors icon" />
                                            <h3 class="flourish_option_title text-wrap text-center">Adjust Colors
                                            </h3>
                                        </div>
                                        <div class="color-settings-btns d-flex justify-content-center">
                                            <button id="preset-color-btn"
                                                class="color-section-btn active">Presets</button>
                                            <button id="custom-color-btn" class="color-section-btn ">Custom</button>
                                            <span class="hidden-span">Presets, Custom</span>
                                            <button data-container="#flourish_widget" data-trigger="hover"
                                                data-toggle="popover" data-placement="top"
                                                data-content="Reset colors" id="reset-color-picker"
                                                class="btn color-picker-btns  ml-2  justify-content-center align-items-center flourish-popover-item"
                                                role="
                        button" type="button"><img data-id="hide-img-hover" class="img-fluid"
                                                    src="./flourish/img/reset.png" alt="Reset img hover icon" />

                                            </button>
                                        </div>
                                    </div>
                                    <div id="custom-schemes" class="custom-color-schemes mt-2 mt-lg-3">
                                        <div id="custom-color-pickers"
                                            class=" d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-lg-start align-items-center mb-1 mb-lg-0">
                                            <div>
                                                <div class="form-group ">
                                                    <label class="flourish-setting-title " for="Background Color">
                                                        Background
                                                    </label>
                                                    <input type="color" class="color_swatch custom-color-input"
                                                        id="background_color" title="Choose Background Color"
                                                        value="#ffffff">
                                                    <p class="hexVal" id="bg_hexVal">#ffffff</p>
                                                </div>

                                            </div>
                                            <div class="ml-1 mr-1">
                                                <div class="form-group ">
                                                    <label class="flourish-setting-title " for="Text Color">
                                                        Text
                                                    </label>
                                                    <input type="color" class="color_swatch custom-color-input"
                                                        id="text_color" title="Choose Text Color" value="#000000">
                                                    <p class="hexVal" id="txt_hexVal">#000000</p>
                                                </div>

                                            </div>

                                            <div>
                                                <div class="form-group">
                                                    <label class="flourish-setting-title " for="Link Color">
                                                        Links
                                                    </label>
                                                    <input type="color" class="color_swatch custom-color-input"
                                                        id="link_color" title="Choose Link Color" value="#3863FF">
                                                    <p class="hexVal" id="link_hexVal">#3863FF</p>
                                                </div>

                                            </div>

                                        </div>
                                        <div class="contrast-section-container ">
                                            <div
                                                class="contrast-check-section d-flex flex-column align-items-center">
                                                <div class="contrast-checker mt- ">
                                                    <div id="link-text-text" class="contrast-text link-text-text">
                                                        <span id="both-text" class="both-text">Preview text color
                                                            and</span>&nbsp;<a id="both-link" class="both-link"
                                                            href="#">Link color</a>
                                                    </div>
                                                    &nbsp;
                                                    <button data-container="#flourish_widget" data-trigger="hover"
                                                        data-toggle="popover" data-placement="top" data-content="Both links and body text must have at least 4.5:1 contrast with the background (3:1 for
                        large
                        text) to meet WCAG 2 Level AA." type="button"
                                                        class=" flourish-popover-item btn color-picker-btns  wcag-modal-remove-selector d-flex justify-content-center align-items-cente"
                                                        id="OpenContrastModal" role="button"> <img
                                                            data-id="hide-img-hover" class="img-fluid"
                                                            src="./flourish/img/question.png"
                                                            alt="Check contrast icon"></button>

                                                </div>
                                                <div
                                                    class="contrast-checker  justify-content-start align-items-center">
                                                    <div class="contrast-text-info">Text to background</div>
                                                    &nbsp;
                                                    <div id="text-contrast" class="contrast-result">Pass</div>

                                                </div>
                                                <div class="contrast-checker ">
                                                    <div class="contrast-text-info">Link to background</div>
                                                    &nbsp;
                                                    <div id="link-contrast" class="contrast-result">Pass</div>
                                                </div>
                                                <div class="contrast-checker ">
                                                    <div class="contrast-text-info">Text to link</div>
                                                    &nbsp;
                                                    <div id="link-text-contrast" class="contrast-result">Pass</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div id="preset-schemes" class="manual-color-schemes">
                                        <div class=" d-flex flex-md-nowrap justify-content-center align-items-center mb-1 mb-lg-0"
                                            id="manual-color-schemes">
                                            <div id="color-scheme-presets-main"
                                                class="d-flex justify-content-center flex-column align-items-center">
                                                <div class="contrast-checker mt-1 mt-lg-0">
                                                    <div id="link-text-text" class="contrast-text link-text-text">
                                                        <span id="both-text" class="both-text">Preview text color
                                                            and</span>&nbsp;<a id="both-link" class="both-link"
                                                            href="#">Link color</a>
                                                    </div>
                                                </div>
                                                <div id="extra-links" class="extra-links">
                                                    <div
                                                        class="d-flex justify-content-center align-items-center flex-column">
                                                        <p id="change-link-text" class="mb-0">Change link Color</p>
                                                        <div id="alt-link-colors" class="alt-link-colors d-flex">
                                                            <div class="alt-link-color active" id="#3863FF"
                                                                style="background-color: rgb(56, 99, 255);"></div>
                                                            <div class="alt-link-color" id="#E60000"
                                                                style="background-color: rgb(230, 0, 0);"></div>
                                                            <div class="alt-link-color" id="#996900"
                                                                style="background-color: rgb(153, 105, 0);"></div>
                                                            <div class="alt-link-color" id="#727A00"
                                                                style="background-color: rgb(114, 122, 0);"></div>
                                                            <div class="alt-link-color" id="#278321"
                                                                style="background-color: rgb(39, 131, 33);"></div>
                                                            <div class="alt-link-color" id="#7C57E0"
                                                                style="background-color: rgb(124, 87, 224);"></div>
                                                            <div class="alt-link-color" id="#A648A8"
                                                                style="background-color: rgb(166, 72, 168);"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="preset-container d-flex flex-column align-items-center justify-content-center">
                                                    <div id="color-presets-container"
                                                        class="d-flex flex-wrap justify-content-center color-preset-container">
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-1" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-2" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-3" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-4" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-5" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-6" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-7" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-8" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-9" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-10" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-11" class="main-color-presets">
                                                            </div>
                                                        </div>
                                                        <div class="color-preset-wrapper col-2">
                                                            <div id="color-preset-12" class="main-color-presets">
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </section>

                                <div class="toast wcag-modal-remove-selector d-none" id="ContrastRatingModal">
                                    <div class="toast-header">
                                        <span aria-hidden="true">
                                            <img id="flourish-contrast-info-toggle"
                                                data-container="#ContrastRatingModal" data-trigger="hover"
                                                data-toggle="popover" data-placement="top" data-content="Both links and body text must have at least 4.5:1 contrast with the background (3:1 for
                        large
                        text) to meet WCAG 2 Level AA."
                                                class="img-fluid flourish-icon-style wcag-popup-info-remove-selector flourish-popover flourish-popover-item"
                                                src="./flourish/img/question.png" alt="Color picker icon" />
                                        </span>

                                        <div class="CloseContrastModal  " aria-label="Close Checker" role="button"
                                            type="button">
                                            <span aria-hidden="true"><svg
                                                    class="contrast-rating-modal close-flourish-icon"
                                                    xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                    fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                    <div class="toast-body">
                                        <div id="defaultContainer">
                                            <div class="pass">Text to background contrast: 21</div>
                                            <div class="pass">Link to background contrast: 4.77</div>
                                            <div class="pass">Link to text contrast: 4.39</div>
                                        </div><!--defaultContainer-->
                                        <div class="contrast_values">
                                            <div id="textBackRatioContainer"></div>
                                            <div id="linkBackRatioContainer"></div>
                                            <div id="linkTextRatioContainer"></div>
                                        </div><!--contrast-values-->
                                    </div><!-- toast-body -->
                                </div> <!-- toast -->
                            </div><!-- col-12 col-lg-5 -->
                        </div><!-- row -->
                    </section>
                    <section id="text-reflourishbility-section" class="flourish-section-container ">
                        <div class="flourish-section-header">
                            <h2 class="d-inline">Text and Readability</h2>
                        </div>
                        <section class="row d-flex flex-wrap flex-column align-items-center flourish-sub-section"
                            id="language-options">
                            <h3 class="flourish_option_title text-wrap text-center"> <img
                                    class="img-fluid flourish-icon-style " src="./flourish/img/translate.png"
                                    alt="Translate languages icon" />Translate Language:</h3>
                            <div id="flourish-translate-select"
                                class="flex-wrap justify-content-center align-items-center mb-4 d-none">

                            </div>

                            <div class="language-section-content flex-column align-items-center">
                                <div class="row d-flex flex-wrap justify-content-between align-items-center"
                                    id="curr-flourish-language">
                                    <div id="curr-flourish-language-btn"
                                        class="  d-flex justify-content-center align-items-center border">

                                        <span id="curr-language" class="mr-2">Current: </span>
                                        <img id="curr-language-icon" class=" language-icons"
                                            src="./flourish/img/language/eng-min.png"
                                            alt="English-English language icon">
                                        <span id="curr-language-text" class="translate-language-span notranslate">
                                            English</span>

                                    </div>
                                </div>

                                <div class="row d-flex flex-wrap justify-content-center align-items-center"
                                    id="flourish-language-presets">

                                    <div id="flourish-language-search" class=" col-6 col-sm-4 col-lg-3">
                                        <div
                                            class="flourish-search-language-btn row d-flex justify-content-start flex-row  align-items-center no-wrap">

                                            <div id="flourish-more-languages-search" class="">
                                                <form onsubmit="return false;">
                                                    <input type="text" placeholder="Search languages"
                                                        autocomplete="off" name="query" id="flourish-search-input"
                                                        onkeyup="langKeySearchHandler()"
                                                        name="flourish-search-input"><br>

                                                    <div class="search-list" id="search-list">

                                                    </div>

                                                </form>
                                            </div>
                                            <div id="flourish-more-languages-btn"
                                                class="flourish-popover d-flex justify-content-center align-items-center"
                                                data-toggle="modal" data-target="#all-languages-modal">
                                                <svg class="flourish-popover flourish-popover-item"
                                                    data-container="#flourish_widget" data-trigger="hover"
                                                    data-toggle="popover" data-placement="top"
                                                    data-content="View all languages" id="flourish-more-icon"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-three-dots"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="translate-failed-message">
                                <div class="failed-message-container ">

                                    <p class="text-center mb-0">Google translate isn't responding at the moment <br>
                                        Try checking your internet connection and refreshing
                                        the page.</p>
                                </div>

                            </div>

                            <div class="modal fade " id="all-languages-modal" tabindex="-1"
                                aria-labelledby="all-languages-modal" aria-hidden="true">
                                <div id="lang-modal-container"
                                    class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                    <div id="all-languages-modal-content" class="modal-content ">
                                        <div id="language-btn-modal-header" class="modal_header  ">
                                            <button id="close-language-modal" type="button" class="close "
                                                data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div
                                            class="row all-language-modal-header d-flex justify-content-center align-items-center mb-0">
                                            <h3>Choose Language</h3>

                                        </div>

                                        <div
                                            class="row all-language-modal-search d-flex justify-content-center align-items-center mt-3 mt-lg-3">
                                            <form onsubmit="return false;">
                                                <input type="text" placeholder="Search languages..."
                                                    autocomplete="off" name="query" id="search-lang-modal"
                                                    onkeyup="searchLangModalHandler()"><br>

                                            </form>
                                        </div>
                                        <div id="filter-lang-results"
                                            class="row d-flex  justify-content-center align-items-center mt-md-1 mb-md-4 mt-lg-3">
                                            <h4 class="mt-0 filter-header">Filter results:&nbsp</h4>
                                            <div class="filter-btn-container d-flex flex-row flex-sm-wrap">
                                                <div id="all-languages-filter" data-info="All"
                                                    class="lang-filter active d-flex justify-content-center align-items-center">
                                                    <img class="filter-icons"
                                                        src="./flourish/img/all-langauges-inverted.png"
                                                        alt="all languages icon">
                                                    <span class="ml-2">All</span>
                                                </div>

                                                <div data-info="ContinentAndRegion"
                                                    class="lang-filter d-flex justify-content-center align-items-center">
                                                    <img class="filter-icons"
                                                        src="./flourish/img/language-origin.png"
                                                        alt="all languages icon">
                                                    <span>Origin</span>

                                                </div>
                                                <div data-info="LanguageScriptAutonym"
                                                    class="lang-filter d-flex justify-content-center align-items-center">
                                                    <img class="filter-icons"
                                                        src="./flourish/img/translation-scripts.png"
                                                        alt="all languages icon">
                                                    <span class="ml-1">Script</span>

                                                </div>
                                            </div>

                                        </div>

                                        <div id="no-results-error">
                                            <div>No results for that search. Try something else.</div>
                                        </div>
                                        <div id="all-languages-modal-body" class="modal-body">

                                        </div>
                                    </div><!-- modal content -->
                                </div><!-- modal dialog -->
                            </div><!--modal-->

                        </section>
                        <div id="Magnify_options" class="row flourish-sub-section">
                            <section
                                class=" col-6 d-none d-md-flex justify-content-start justify-content-sm-center justify-content-lg-start "
                                id="TextMagnifier_option">
                                <div class="flourish_toggleContainer" id="TextMagnifier">
                                    <div class="text-magnify-container pb-0">
                                        <div class="flourish_content">
                                            <div
                                                class="flourish-links-toggle-container justify-content-center justify-content-lg-start flex-wrap">
                                                <img class="img-fluid flourish-icon-style"
                                                    src="./flourish/img/text-magnifier.png"
                                                    alt="Text magnify icon" />
                                                <h3
                                                    class="type flourish_option_title text-wrap text-center text-sm-center text-lg-left ">
                                                    Text
                                                    Magnify
                                                </h3>
                                                <div class="flourish_toggle">
                                                    <label class="switch" title="Toggle On/Off Text Magnifier">
                                                        <input type="checkbox" class="switch-input"
                                                            id="ToggleTextMagnifier" name="TextMagnifier">
                                                        <span class="switch-label" data-on="On"
                                                            data-off="Off"></span>
                                                        <span class="switch-handle"></span>
                                                    </label>
                                                </div><!-- flourish_toggle -->
                                                <button onclick="restoreDefaultTextMagSettings()"
                                                    id="reset-text-magnify-btn" class="flourish-reset-btn " role="
                            button" type="button" data-container="#flourish_widget" data-trigger="hover"
                                                    data-toggle="popover" data-placement="top"
                                                    data-content="Reset settings"><img data-id="hide-img-hover"
                                                        class="img-fluid flourish-reset-icon"
                                                        src="./flourish/img/reset.png"
                                                        alt="Reset text magnify icon" /></button>
                                            </div>
                                            <p class="description text-sm-center text-lg-left">Displays text larger
                                                and in high-contrast
                                            </p>
                                        </div><!-- flourish_content -->
                                        <div id="edit-text-magnify" class=" edit-text-magnify ">
                                            <div class="edit-text-magnify-color">
                                                <div class="text-magnify-color-title text-center">
                                                    <h4 class="mb-0 flourish-setting-title">Color Presets:</h4>
                                                </div>
                                                <div
                                                    class="d-flex flex-wrap justify-content-center text-mag-row1 text-presets">
                                                    <div id="text-mag-color-1"
                                                        class="active text-magnify-color-swatch magnify-color-presets light-text-background-default">
                                                    </div>
                                                    <div id="text-mag-color-2"
                                                        class="text-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                    <div id="text-mag-color-3"
                                                        class="text-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                </div>
                                                <div
                                                    class="d-flex flex-wrap justify-content-center text-mag-row2 text-presets">
                                                    <div id="text-mag-color-4"
                                                        class="text-magnify-color-swatch magnify-color-presets dark-text-background-default">
                                                    </div>
                                                    <div id="text-mag-color-5"
                                                        class="text-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                    <div id="text-mag-color-6"
                                                        class="text-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="edit-mask-size d-flex flex-wrap flex-column justify-content-center align-items-center">
                                                <div id="edit-text-magnify-size "
                                                    class=" d-flex flex-wrap flex-column justify-content-center align-items-center">
                                                    <label for="customRange"
                                                        class="form-label mb-0 flourish-setting-title">Size:</label>
                                                    <input type="range" class="form-range text-magnify-size-input"
                                                        step="1" value="22" min="22" max="35"
                                                        id="text-magnify-size-input">
                                                    <span id="text-magnify-opacity"></span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="text-mag-preview-container magnify-preview">
                                            <div id="text-magnifier-preview" class="text-magnifier-preview">
                                                <p class="flourish-description-preview">Preview</p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- class="flourish_toggleContainer" id="TextMagnifier" -->
                            </section><!-- col-12 col-md-6 -->
                            <section
                                class=" col-6 d-none d-md-flex justify-content-start justify-content-sm-center justify-content-lg-start "
                                id="ImageDescription_option">
                                <div class="flourish_toggleContainer pb-0" id="ImageDescription">
                                    <div class="flourish_content">
                                        <div
                                            class="flourish-links-toggle-container justify-content-center justify-content-lg-start flex-wrap">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/alt-text.png" alt="Image description icon" />
                                            <h3
                                                class="type flourish_option_title text-wrap text-center text-sm-center text-lg-left ">
                                                Image
                                                Description</h3>
                                            <div class="flourish_toggle" style="margin-left:6px;">
                                                <label class="switch" title="Toggle On/Off Image Description">
                                                    <input type="checkbox" class="switch-input"
                                                        id="ToggleImageDescription" name="ImageDescription">
                                                    <span class="switch-label" data-on="On" data-off="Off"></span>
                                                    <span class="switch-handle"></span>
                                                </label>
                                            </div><!-- flourish_toggle -->
                                            <button onclick="restoreDefaultImageSettings()"
                                                id="reset-img-magnify-btn" class="  flourish-reset-btn"
                                                role="button" type="button" data-container="#flourish_widget"
                                                data-trigger="hover" data-toggle="popover" data-placement="top"
                                                data-content="Reset settings">
                                                <img data-id="hide-img-hover" class="img-fluid flourish-reset-icon"
                                                    src="./flourish/img/reset.png" alt="Reset icon" /></button>
                                        </div>
                                        <p class="description text-sm-center text-lg-left">Displays image
                                            information (alt tag) larger
                                            and in high-contrast</p>
                                        <div id="edit-img-magnify" class=" edit-img-magnify ">
                                            <div class="edit-img-magnify-color">
                                                <div class="img-magnify-color-title text-center">
                                                    <h4 class="mb-0 flourish-setting-title">Color Presets:</h4>
                                                </div>
                                                <div
                                                    class="d-flex flex-wrap justify-content-center text-mag-row1 img-presets">
                                                    <div id="img-mag-color-1"
                                                        class="active img-magnify-color-swatch magnify-color-presets light-img-background-default">
                                                    </div>
                                                    <div id="img-mag-color-2"
                                                        class="img-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                    <div id="img-mag-color-3"
                                                        class="img-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                </div>
                                                <div
                                                    class="d-flex flex-wrap justify-content-center text-mag-row2 img-presets">
                                                    <div id="img-mag-color-4"
                                                        class="img-magnify-color-swatch magnify-color-presets dark-img-background-default">
                                                    </div>
                                                    <div id="img-mag-color-5"
                                                        class="img-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                    <div id="img-mag-color-6"
                                                        class="img-magnify-color-swatch magnify-color-presets ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="edit-mask-size d-flex flex-wrap flex-column justify-content-center align-items-center">
                                                <div id="edit-text-magnify-size "
                                                    class=" d-flex flex-wrap flex-column justify-content-center align-items-center">
                                                    <label for="customRange"
                                                        class="form-label mb-0 flourish-setting-title">Size:</label>
                                                    <input type="range" class="form-range img-magnify-size-input"
                                                        step="1" value="22" min="22" max="35"
                                                        id="img-magnify-size-input">
                                                    <span id="text-magnify-opacity"></span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="img-mag-preview-container magnify-preview">
                                            <div id="img-magnifier-preview" class="img-magnifier-preview">
                                                <p class="flourish-description-preview">Preview
                                                </p>
                                            </div>
                                        </div>
                                    </div><!-- flourish_content -->
                                </div><!-- class="flourish_toggleContainer" id="TextMagnifier" -->
                            </section><!-- col-12 col-lg-6 -->
                        </div><!-- row -->
                        <div class="row text-center flourish-sub-section" id="FontSize_option">
                            <section class="fontsize_form">
                                <div
                                    class="section-title  d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
                                    <img class="img-fluid flourish-icon-style" src="./flourish/img/font-sizet.png"
                                        alt="Change font size icon" />
                                    <h3 class="flourish_option_title text-wrap text-center text-center">Font
                                        Size</h3>
                                </div>
                                <div class="form-check">
                                    <ul class="modal-btn-options mb-0">
                                        <li id="FS_Default" class="active"><a href="#!"
                                                class="FontSizeOptions FontSizeDefault">
                                                <div class="title">Default</div>
                                            </a>
                                        </li>
                                        <li id="FS_Medium"><a href="#!" class="FontSizeOptions FontSizeMedium">
                                                <div class="title">Large</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div><!-- form check -->
                            </section>

                            <section id="FontFamily_option">
                                <div class="font_type_form">
                                    <div
                                        class="section-title d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
                                        <img class="img-fluid flourish-icon-style" src="./flourish/img/font.png"
                                            alt="Change font family icon" />
                                        <h3 class="flourish_option_title text-wrap text-center text-lg-left">
                                            Font</h3>
                                    </div>
                                    <div class="form-check">
                                        <ul class="modal-btn-options mb-0">
                                            <li id="FT_Default" class="active font-type-option"><a href="#!"
                                                    class="FontTypeOptions FontTypeDefault">
                                                    <div class="title">Muli</div>
                                                </a>
                                            </li>
                                            <li id="FT_Dyslexic" class="font-type-option"><a href="#!"
                                                    class="FontTypeOptions FontTypeDyslexic">
                                                    <div class="title">Open-Dyslexic</div>
                                                </a>
                                            </li>
                                            <li id="FT_Baskerville" class="font-type-option"><a href="#!"
                                                    class="FontTypeOptions FontTypeBaskerville">
                                                    <div class="title libre-font">Libre Baskerville</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div><!-- form check -->
                                </div>
                            </section><!--  col-lg-6 -->

                            <section class=" d-none d-lg-flex" id="Cursor_option">
                                <form class="cursorSwap_form">
                                    <div
                                        class="section-title d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
                                        <img class="img-fluid flourish-icon-style" src="./flourish/img/cursor.png"
                                            alt="Change cursor size icon" />
                                        <h3 class="flourish_option_title text-wrap text-center">Cursor Size
                                        </h3>
                                    </div>
                                    <div class="form-check">
                                        <ul class="modal-btn-options mb-0">
                                            <li id="Cur_Default" class="active"><a href="#!"
                                                    class="CursorOptions Cursor_Default">
                                                    <div class="title">Default</div>
                                                </a>
                                            </li>
                                            <li id="Cur_Enlarge"><a href="#!"
                                                    class="CursorOptions Cursor_Enlarge_option">
                                                    <div class="title">Large</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div><!-- form check -->
                                </form>
                            </section><!-- col-12 col-lg-3 -->
                        </div><!-- row -->
                        <div id="text-selects"
                            class="row flourish-sub-section pt-2 d-flex justify-content-around align-items-center pb-md-3">
                            <section class=" text-center col-12 col-md-4" id="LetterSpacing_option">

                                <div class="form-group  delete-select-icon">
                                    <div class="form-group-heading">
                                        <div
                                            class="section-title d-flex flex-nowrap justify-content-center align-items-center">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/letter-spacing.png"
                                                alt="Change letter spacing icon" />
                                            <h3 class="flourish_option_title " for="exampleFormControlSelect1">
                                                Letter
                                                Spacing </h3>
                                        </div>
                                    </div>
                                    <div
                                        class="input-container d-flex flex-wrap justify-content-center align-items-center">
                                        <svg class="letter-spacing-icon spacing-icon button-icon minus-icon"
                                            aria-labelledby="decrease letter spacing"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                        </svg>
                                        <select class="spacing-value " name="letter_spacing" id="letter_spacing">
                                            <option selected value="inherit">2</option>
                                            <option value="3px">3</option>
                                            <option value="4px">4</option>
                                            <option value="5px">5</option>
                                            <option value="6px">6</option>
                                            <option value="7px">7</option>
                                            <option value="8px">8</option>
                                            <option value="9px">9</option>

                                        </select>
                                        <svg class="letter-spacing-icon spacing-icon button-icon plus-icon"
                                            aria-labelledby="increase letter spacing"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </div>
                                </div>

                            </section><!-- col-12 col-lg-4 -->
                            <section class=" text-center col-12 col-md-4" id="WordSpacing_option">

                                <div class="form-group ">
                                    <div class="form-group-heading ">
                                        <div
                                            class="section-title flex-nowrap d-flex  justify-content-center  align-items-center">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/word-spacing.png"
                                                alt="Change word spacing icon" />
                                            <h3 class="flourish_option_title " for="exampleFormControlSelect1">
                                                Word
                                                Spacing</h3>
                                        </div>
                                    </div>
                                    <div
                                        class="input-container d-flex flex-wrap justify-content-center align-items-center">
                                        <svg class="word-spacing-icon spacing-icon button-icon minus-icon"
                                            aria-labelledby="decrease word spacing"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                        </svg>
                                        <select class="spacing-value" name="word_spacing" id="word_spacing">
                                            <option value="inherit" selected>2</option>
                                            <option value="3px">3</option>
                                            <option value="4px">4</option>
                                            <option value="5px">5</option>
                                            <option value="6px">6</option>
                                            <option value="7px">7</option>
                                            <option value="8px">8</option>
                                            <option value="9px">9</option>

                                        </select>
                                        <svg class="word-spacing-icon spacing-icon button-icon plus-icon"
                                            aria-labelledby="increase word spacing"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </div>
                                </div>

                            </section><!-- col-12 col-md-4 -->
                            <section class=" text-center col-12 col-md-4" id="LineHeight_option">

                                <div class="form-group ">
                                    <div class="form-group-heading ">
                                        <div
                                            class="section-title flex-nowrap d-flex  justify-content-center  align-items-center">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/line-spacing.png"
                                                alt="Change line height icon" />
                                            <h3 class="flourish_option_title  font-weight-bold">Line
                                                Height</h3>
                                        </div>
                                    </div>
                                    <div
                                        class="input-container d-flex flex-wrap justify-content-center align-items-center">
                                        <svg class="line-height-icon spacing-icon button-icon minus-icon"
                                            aria-labelledby="decrease line height"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                        </svg>
                                        <select class="spacing-value" name="line_height" id="line_height">
                                            <option value="inherit" selected>2</option>
                                            <option value="1.9">3</option>
                                            <option value="2.1">4</option>
                                            <option value="2.3">5</option>
                                            <option value="2.5">6</option>
                                            <option value="2.7">7</option>
                                            <option value="2.9">8</option>
                                            <option value="3.1">9</option>

                                        </select>
                                        <svg class="line-height-icon spacing-icon button-icon plus-icon"
                                            aria-labelledby="increase line height"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </div>
                                </div>

                            </section><!-- col-12 col-lg-6 -->
                        </div><!-- row -->
                        <div id="text-reading-assistance" class="row   flourish-sub-section">
                            <section
                                class="flourish-toggle-container col-12 col-md-6 d-flex flex-wrap flex-column justify-content-start justify-content-sm-center justify-content-lg-start "
                                id="ReadingMask_option">
                                <div class="flourish_toggleContainer pb-0" id="ReadingMask">
                                    <div class="flourish_content ">
                                        <div
                                            class="flourish-links-toggle-container justify-content-center justify-content-lg-start flex-wrap">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/reading-mask.png" alt="Reading mask icon" />
                                            <h3
                                                class="type flourish_option_title text-wrap text-center text-sm-center text-lg-left ">
                                                Reading
                                                Mask</h3>
                                            <div class="flourish_toggle">
                                                <label class="switch" title="Toggle On/Off Reading Mask">
                                                    <input type="checkbox" class="switch-input"
                                                        id="ToggleReadingMask" name="ReadingMask">
                                                    <span class="switch-label" data-on="On" data-off="Off"></span>
                                                    <span class="switch-handle"></span>
                                                </label>
                                            </div><!-- flourish_toggle -->
                                            <button onclick="restoreDefaultMaskSettings()" id="reset-mask-btn"
                                                class="  flourish-reset-btn" data-container="#flourish_widget"
                                                data-trigger="hover" data-toggle="popover" data-placement="top"
                                                data-content="Reset mask" role="
                        button" type="button"><img data-id="hide-img-hover" class="img-fluid flourish-reset-icon"
                                                    src="./flourish/img/reset.png"
                                                    alt="Reset reading mask icon" /></button>
                                        </div>
                                        <p class="description text-sm-center text-lg-left">Adds a horizontal reading
                                            mask</p>
                                    </div><!-- flourish_content -->
                                </div><!-- class="flourish_toggleContainer" id="ReadingMask" -->
                                <div id="edit-reading-mask"
                                    class=" edit-reading-mask justify-content-start align-items-start disable-settings">
                                    <div id="edit-mask-opacity"
                                        class="input-container d-flex flex-wrap flex-column justify-content-center align-items-center">
                                        <label class="mb-2">Opacity:</label>
                                        <div
                                            class="opacity-select d-flex flex-wrap justify-content-center align-items-center">
                                            <svg class="opacity-icons  button-icon minus-icon mr-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-labelledby="decrease mask opacity" width="16" height="16"
                                                fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path
                                                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                            <select class=" opacity-value " name="reading-mask-opacity"
                                                id="reading-mask-opacity">
                                                <option value=".11">1</option>
                                                <option value=".22">2</option>
                                                <option value=".33">3</option>
                                                <option value=".44">4</option>
                                                <option value=".55">5</option>
                                                <option selected value=".66">6</option>
                                                <option value=".77">7</option>
                                                <option value=".88">8</option>
                                                <option value="1">9</option>
                                                <!-- <option value="1">10</option> -->
                                            </select>
                                            <svg class="opacity-icons  button-icon plus-icon ml-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-labelledby="increase mask opacity" width="16" height="16"
                                                fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="edit-mask-color"
                                        class="  color_picker_form d-flex flex-wrap flex-column justify-content-center align-items-center">
                                        <label class="mb-2" for="mask-color">
                                            Color:
                                        </label>
                                        <!-- <img style="min-width:16px;min-height:16px;box-sizing:unset;box-shadow:none;background:unset;padding:0 6px 0 0;cursor:pointer;" src="chrome-extension://ohcpnigalekghcmgcdcenkpelffpdolg/img/icon16.png" title="Select with ColorPick Eyedropper - See advanced option: &quot;Add ColorPick Eyedropper near input[type=color] fields on websites&quot;" class="colorpick-eyedropper-input-trigger"> -->
                                        <input type="color" class="color_swatch mb-0 reading-color-picker"
                                            id="mask_color" title="Choose Link Color" value="#363636"
                                            colorpick-eyedropper-active="true">
                                        <!-- <span class="hexVal" id="mask_hexVal">#363636</span> -->
                                    </div>
                                    <div
                                        class="edit-middle-section d-flex flex-wrap flex-column justify-content-center align-items-center">
                                        <div id="edit-mask-size "
                                            class=" d-flex flex-wrap flex-column justify-content-center align-items-center">
                                            <label for="customRange" class="form-label mb-0">Size:</label>
                                            <input name="mask-size-input" type="range"
                                                class="form-range mask-size-input" step="1" value="60" min="10"
                                                max="200" id="mask-size-input">
                                            <span id="mask-opacity"></span>
                                        </div>

                                    </div>
                                </div>

                            </section><!-- col-12 col-lg-4 -->
                            <section
                                class="flourish-toggle-container col-12 col-md-6 d-flex flex-wrap flex-column justify-content-start justify-content-sm-center justify-content-lg-start "
                                id="ReadingGuide_option">
                                <div class="flourish_toggleContainer pb-0" id="ReadingGuide">
                                    <div class="flourish_content">
                                        <div
                                            class="flourish-links-toggle-container d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/reading-guide.png" alt="Reading guide icon" />
                                            <h3
                                                class="type flourish_option_title text-wrap text-center text-sm-center text-lg-left ">
                                                Reading
                                                Guide</h3>
                                            <div class="flourish_toggle" style="margin-left:6px;">
                                                <label class="switch" title="Toggle On/Off Reading Guide">
                                                    <input type="checkbox" class="switch-input"
                                                        id="ToggleReadingGuide" name="CursorGuide">
                                                    <span class="switch-label" data-on="On" data-off="Off"></span>
                                                    <span class="switch-handle"></span>
                                                </label>
                                            </div><!-- flourish_toggle -->
                                            <button onclick="restoreDefaultguideSettings()" id="reset-guide-btn"
                                                data-container="#flourish_widget" data-trigger="hover"
                                                data-toggle="popover" data-placement="top"
                                                data-content="Reset guide" class="  flourish-reset-btn"
                                                role="button" type="button"><img data-id="hide-img-hover"
                                                    class="img-fluid flourish-reset-icon"
                                                    src="./flourish/img/reset.png"
                                                    alt="Reset reading guide icon" /></button>
                                        </div>
                                        <p class="description text-sm-center text-lg-left">Adds a horizontal reading
                                            guide</p>
                                    </div><!-- flourish_content -->
                                </div><!-- class="flourish_toggleContainer" id="ReadingGuide" -->
                                <div id="edit-reading-guide"
                                    class=" edit-reading-guide justify-content-start align-items-start disable-settings mb-3">
                                    <div id="edit-guide-color"
                                        class="ml-4 mr-4 color_picker_form d-flex flex-wrap flex-column justify-content-center align-items-center">
                                        <label for="guide-color">
                                            Color:
                                        </label>
                                        <!-- <img style="min-width:16px;min-height:16px;box-sizing:unset;box-shadow:none;background:unset;padding:0 6px 0 0;cursor:pointer;" src="chrome-extension://ohcpnigalekghcmgcdcenkpelffpdolg/img/icon16.png" title="Select with ColorPick Eyedropper - See advanced option: &quot;Add ColorPick Eyedropper near input[type=color] fields on websites&quot;" class="colorpick-eyedropper-input-trigger"> -->
                                        <input type="color" class="color_swatch mb-0 reading-color-picker"
                                            id="guide_color" title="Choose Link Color" value="#363636"
                                            colorpick-eyedropper-active="true">
                                        <!-- <span class="hexVal" id="guide_hexVal">#363636</span> -->
                                    </div>
                                    <div
                                        class="edit-middle-section d-flex flex-wrap flex-column justify-content-center align-items-center">
                                        <div id="edit-guide-size "
                                            class=" d-flex flex-wrap flex-column justify-content-center align-items-center">
                                            <label for="customRange" class="form-label mb-0">Size:</label>
                                            <input type="range" class="form-range guide-size-input" step="5"
                                                value="8" min="3" max="98" id="guide-size-input">
                                            <span id="guide-opacity"></span>
                                        </div>

                                    </div>
                                </div>
                            </section><!-- col-12 col-lg-4 -->
                        </div><!-- row -->
                        <section class="row d-flex flex-wrap pt-1 flourish-sub-section" id="TTS_option">
                            <div id="trigger-speech"
                                class="col-12 col-lg-4 d-flex flex-wrap justify-content-center   ">
                                <div class="flourish_toggleContainer " id="TTS_click">
                                    <div class="flourish_content text-sm-center text-lg-left">
                                        <div
                                            class="d-flex flex-nowrap  justify-content-center justify-content-lg-start align-items-center">
                                            <img class="img-fluid flourish-icon-style"
                                                src="./flourish/img/text-to-speech.png" alt="Text-to-speech icon" />
                                            <h3 class=" flourish_option_title">Text-to-Speech </h3>
                                            <div class="flourish_toggle " style="margin-left:6px;">
                                                <label class="switch" title="Toggle On/Off Text-to-Speech">
                                                    <input type="checkbox" class="switch-input" id="ToggleTTS_click"
                                                        name="TTS_click_enabled">
                                                    <span class="switch-label" data-on="On" data-off="Off"></span>
                                                    <span class="switch-handle"></span>
                                                </label>
                                            </div><!-- flourish_toggle -->
                                        </div>

                                        <p class="description text-center text-lg-left mt-2 mt-lg-0">Read aloud text
                                            with settings for
                                            voice, volume, rate,
                                            and
                                            pitch </p>

                                    </div><!-- flourish_content -->
                                </div><!-- class="flourish_toggleContainer" id="PhotoSens" -->
                            </div><!-- col-12 col-lg-6 -->
                            <div id="speech-settings" class="col-12 col-lg-8 disable mt-1">
                                <div id="TTS_Utterance">
                                    <div id="voice-settings-header">
                                        <form id="select-voice-settings"
                                            class="d-flex flex-column flex-md-row align-items-center justify-content-center mt-2 mt-lg-0">
                                            <label for="voice" id="voice-settings-label"
                                                class="flourish-setting-title mb-0 mr-md-2">Select
                                                Voice:</label>
                                            <div
                                                class="select-reset-container d-flex justify-content-center align-items-center">
                                                <select class="custom-select" name="voice" id="voice">

                                                </select>
                                                <div id="reset-voice-settings">
                                                    <button id="reset-voice-btn" data-container="#flourish_widget"
                                                        data-trigger="hover" data-toggle="popover"
                                                        data-placement="top" data-content="Reset voice settings"
                                                        id="remove_cookie"
                                                        class="btn flourish-reset-btn flourish-popover-item d-flex justify-content-center align-items-center"
                                                        role="
                            button" type="button" data-original-title="" title=""><img data-id="hide-img-hover"
                                                            class="img-fluid flourish-reset-icon"
                                                            src="./flourish/img/reset.png"
                                                            alt="Reset text to speech settings icon">

                                                    </button>

                                                </div>
                                            </div>

                                        </form>

                                    </div>

                                    <div
                                        class="round-sliders d-none d-md-flex  justify-content-center align-items-center ">

                                        <div class="round-slider ">

                                            <div id="volume"></div>
                                            <div
                                                class="round-slider-icons d-flex justify-content-around align-items-center">
                                                <svg id="volume-minus-icon"
                                                    class="button-icon volume-minus-icon speech-volume speech-minus-icon speech-icon"
                                                    aria-labelledby="decrease speech volume"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                                                    </path>
                                                </svg>
                                                <svg id="volume-plus-icon"
                                                    class="button-icon volume-plus-icon speech-volume speech-plus-icon speech-icon"
                                                    aria-labelledby="increase speech volume"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="round-slider ">

                                            <div id="rate"></div>
                                            <div
                                                class="round-slider-icons d-flex justify-content-around align-items-center">
                                                <svg id="rate-minus-icon"
                                                    class="button-icon rate-minus-icon speech-rate speech-minus-icon speech-icon"
                                                    aria-labelledby="decrease speech rate"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                                                    </path>
                                                </svg>
                                                <svg id="rate-plus-icon"
                                                    class="button-icon rate-plus-icon speech-rate speech-plus-icon speech-icon"
                                                    aria-labelledby="increase speech rate"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="round-slider ">

                                            <div id="pitch"></div>
                                            <div
                                                class="round-slider-icons d-flex justify-content-around align-items-center">
                                                <svg id="pitch-minus-icon"
                                                    class="button-icon pitch-minus-icon speech-pitch speech-minus-icon speech-icon"
                                                    aria-labelledby="decrease speech pitch"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z">
                                                    </path>
                                                </svg>
                                                <svg id="pitch-plus-icon"
                                                    class="button-icon pitch-plus-icon speech-pitch speech-plus-icon speech-icon"
                                                    aria-labelledby="increase speech pitch"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div><!--TTS_Utterance-->

                            </div><!-- col-12 col-lg-6 -->
                        </section><!-- row -->
                    </section>

                    <section id="flourish-contact-section" class="flourish-section-container">
                        <div class="space-holder"></div>
                        <div id="flourish-contact-info"
                            class="flourish-sub-section flourish-contact-info d-flex flex-column justify-content-center align-items-center">

                            <div id="dos-statement"
                                class="d-flex flex-column justify-content-center align-items-center">
                                <img id="flourish-statement-icon" class="img-fluid flourish-icon-style text-center"
                                    src="./flourish/img/flourish-logo-square-notext.png" alt="Flourish logo icon" />
                                <a class="text-center" id="flourish-statement-link"
                                    href="https://dos.myflorida.com/accessibility/">Florida Department of State
                                    Accessibility
                                    Statement</a>
                            </div>

                            <div id="email-info"
                                class=" d-flex flex-column justify-content-center align-items-center mb-2">
                                <img id="flourish-email-icon" class="img-fluid flourish-icon-style "
                                    src="./flourish/img/email.png" alt="Email icon" />
                                <p class=" flourish-statement-info-p text-center"> For questions and
                                    concerns, email us at <a
                                        href="mailto:FloridaMemory@dos.myflorida.com">FloridaMemory@dos.myflorida.com</a>
                                </p>
                            </div>

                        </div>
                        <div class="space-holder"></div>
                    </section>

                    <footer id="flourish-statement-section"
                        class="row flourish-section-container text-center flourish-sub-section">

                        <div class="col-12 d-flex justify-content-center align-items-center flex-wrap">

                            <p id="fl-mem-statement" class=" flourish-statement-info-p text-center">
                                Florida Memory is funded under the provisions of the Library Services and Technology
                                Act from the
                                Institute of Museum and Library Services.
                                Florida's LSTA program is administered by the Department of State's Division of
                                Library and
                                Information Services.
                            </p>

                        </div>
                        <div id="flourish-logos"
                            class="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">

                            <a href="https://dos.fl.gov/"><img id="flourish-dos-logo"
                                    src="./flourish/img/dos-logo.png" alt="Florida Department of State logo "></a>

                            <a href="https://dos.fl.gov/library-archives/"> <img id="flourish-dlis-logo"
                                    src="./flourish/img/dlis-logo.png"
                                    alt="Division of Library and Information Services logo"></a>

                            <a href="https://www.imls.gov/"><img id="flourish-imls-logo"
                                    src="./flourish/img/imls-logo.png"
                                    alt="Institute of Museum and Library Services logo"></a>

                        </div>
                    </footer><!-- row -->

                </div><!-- container fluid -->

            </div><!-- modal_body -->

        </div>

        </main><!-- modal_content -->
    </div><!-- id="flourish_widget" class="flourish_modal_background" -->

    `
}
createFlourish()