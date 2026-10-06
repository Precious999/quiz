'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">RCA39Quiz2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
    <button type="button"
        class="search-input-clear"
        aria-label="Clear search"
        data-search-input-clear>&times;</button>
</div>
` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="index.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                                <li class="link">
                                    <a href="architecture.html" data-type="chapter-link">
                                        <span class="icon ion-ios-git-branch"></span>Architecture
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutPageModule.html" data-type="entity-link" >AboutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AboutPageModule-656c93df9e085cc544ceedffa7dddc09c68d5c33878839e9488bb94666f020f9a6b4eb1ebb12d51443aa84eaea44310e6f42f01cb2cdfa642cf2e467dbc36c6f"' : 'data-bs-target="#xs-components-links-module-AboutPageModule-656c93df9e085cc544ceedffa7dddc09c68d5c33878839e9488bb94666f020f9a6b4eb1ebb12d51443aa84eaea44310e6f42f01cb2cdfa642cf2e467dbc36c6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutPageModule-656c93df9e085cc544ceedffa7dddc09c68d5c33878839e9488bb94666f020f9a6b4eb1ebb12d51443aa84eaea44310e6f42f01cb2cdfa642cf2e467dbc36c6f"' :
                                            'id="xs-components-links-module-AboutPageModule-656c93df9e085cc544ceedffa7dddc09c68d5c33878839e9488bb94666f020f9a6b4eb1ebb12d51443aa84eaea44310e6f42f01cb2cdfa642cf2e467dbc36c6f"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutPageRoutingModule.html" data-type="entity-link" >AboutPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-970dc01625a47e2164275b776c3b9ad29e3a94f5f0902a28818808c9941f33c1ab4f4b6b34e058160a6b0ac06e6863a446a9186c2c392fbd7e76bd64bb118786"' : 'data-bs-target="#xs-components-links-module-AppModule-970dc01625a47e2164275b776c3b9ad29e3a94f5f0902a28818808c9941f33c1ab4f4b6b34e058160a6b0ac06e6863a446a9186c2c392fbd7e76bd64bb118786"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-970dc01625a47e2164275b776c3b9ad29e3a94f5f0902a28818808c9941f33c1ab4f4b6b34e058160a6b0ac06e6863a446a9186c2c392fbd7e76bd64bb118786"' :
                                            'id="xs-components-links-module-AppModule-970dc01625a47e2164275b776c3b9ad29e3a94f5f0902a28818808c9941f33c1ab4f4b6b34e058160a6b0ac06e6863a446a9186c2c392fbd7e76bd64bb118786"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JobListingPageModule.html" data-type="entity-link" >JobListingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-JobListingPageModule-85774eb563186e8f8dd9eb71036d09cde7b7706308c0efc3ad4b905fbc5ca29960048d70d86d56388d1457460c9fb10f270332ebdd605f673d7bd3677e6ff43b"' : 'data-bs-target="#xs-components-links-module-JobListingPageModule-85774eb563186e8f8dd9eb71036d09cde7b7706308c0efc3ad4b905fbc5ca29960048d70d86d56388d1457460c9fb10f270332ebdd605f673d7bd3677e6ff43b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JobListingPageModule-85774eb563186e8f8dd9eb71036d09cde7b7706308c0efc3ad4b905fbc5ca29960048d70d86d56388d1457460c9fb10f270332ebdd605f673d7bd3677e6ff43b"' :
                                            'id="xs-components-links-module-JobListingPageModule-85774eb563186e8f8dd9eb71036d09cde7b7706308c0efc3ad4b905fbc5ca29960048d70d86d56388d1457460c9fb10f270332ebdd605f673d7bd3677e6ff43b"' }>
                                            <li class="link">
                                                <a href="components/JobListingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobListingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobListingPageRoutingModule.html" data-type="entity-link" >JobListingPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JobOverviewPageModule.html" data-type="entity-link" >JobOverviewPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-JobOverviewPageModule-16b207e2927a0290a0044a86a7f87f542d7eace1d721ea10e9b2e606921dbbcf589c2f43f15202bb2da148ad374770370188d8cee33745e4e6f20e981f7f09a9"' : 'data-bs-target="#xs-components-links-module-JobOverviewPageModule-16b207e2927a0290a0044a86a7f87f542d7eace1d721ea10e9b2e606921dbbcf589c2f43f15202bb2da148ad374770370188d8cee33745e4e6f20e981f7f09a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JobOverviewPageModule-16b207e2927a0290a0044a86a7f87f542d7eace1d721ea10e9b2e606921dbbcf589c2f43f15202bb2da148ad374770370188d8cee33745e4e6f20e981f7f09a9"' :
                                            'id="xs-components-links-module-JobOverviewPageModule-16b207e2927a0290a0044a86a7f87f542d7eace1d721ea10e9b2e606921dbbcf589c2f43f15202bb2da148ad374770370188d8cee33745e4e6f20e981f7f09a9"' }>
                                            <li class="link">
                                                <a href="components/JobOverviewPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobOverviewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobOverviewPageRoutingModule.html" data-type="entity-link" >JobOverviewPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginPageModule-6e2c873d5f9004ccde265984b9846fe7b696fe0a7e911d6b9e09967dc2db957923bb2cabb008266007cfa119e970a246f90db39c4923195420609d5d83eb74f8"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-6e2c873d5f9004ccde265984b9846fe7b696fe0a7e911d6b9e09967dc2db957923bb2cabb008266007cfa119e970a246f90db39c4923195420609d5d83eb74f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-6e2c873d5f9004ccde265984b9846fe7b696fe0a7e911d6b9e09967dc2db957923bb2cabb008266007cfa119e970a246f90db39c4923195420609d5d83eb74f8"' :
                                            'id="xs-components-links-module-LoginPageModule-6e2c873d5f9004ccde265984b9846fe7b696fe0a7e911d6b9e09967dc2db957923bb2cabb008266007cfa119e970a246f90db39c4923195420609d5d83eb74f8"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagePageModule.html" data-type="entity-link" >MessagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MessagePageModule-45b6f9ead1e21bd0a821469a27a58116a80307445bfe1e91defc6ba8c8caa8849571a397d2e3b8629c144de23b51685e352edada6d0c0630772586b79a3c119f"' : 'data-bs-target="#xs-components-links-module-MessagePageModule-45b6f9ead1e21bd0a821469a27a58116a80307445bfe1e91defc6ba8c8caa8849571a397d2e3b8629c144de23b51685e352edada6d0c0630772586b79a3c119f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessagePageModule-45b6f9ead1e21bd0a821469a27a58116a80307445bfe1e91defc6ba8c8caa8849571a397d2e3b8629c144de23b51685e352edada6d0c0630772586b79a3c119f"' :
                                            'id="xs-components-links-module-MessagePageModule-45b6f9ead1e21bd0a821469a27a58116a80307445bfe1e91defc6ba8c8caa8849571a397d2e3b8629c144de23b51685e352edada6d0c0630772586b79a3c119f"' }>
                                            <li class="link">
                                                <a href="components/MessagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessagePageRoutingModule.html" data-type="entity-link" >MessagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectTabPageModule.html" data-type="entity-link" >ProjectTabPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProjectTabPageModule-2d97077f9b445975eceaac4294352f8696dcb9d622bb98487314559968ada600a9d9876769395e8c564b0d57998e50f4da2b196b416782cff5ba0f4c8087d824"' : 'data-bs-target="#xs-components-links-module-ProjectTabPageModule-2d97077f9b445975eceaac4294352f8696dcb9d622bb98487314559968ada600a9d9876769395e8c564b0d57998e50f4da2b196b416782cff5ba0f4c8087d824"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectTabPageModule-2d97077f9b445975eceaac4294352f8696dcb9d622bb98487314559968ada600a9d9876769395e8c564b0d57998e50f4da2b196b416782cff5ba0f4c8087d824"' :
                                            'id="xs-components-links-module-ProjectTabPageModule-2d97077f9b445975eceaac4294352f8696dcb9d622bb98487314559968ada600a9d9876769395e8c564b0d57998e50f4da2b196b416782cff5ba0f4c8087d824"' }>
                                            <li class="link">
                                                <a href="components/ProjectTabPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectTabPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectTabPageRoutingModule.html" data-type="entity-link" >ProjectTabPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReadMessagePageModule.html" data-type="entity-link" >ReadMessagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ReadMessagePageModule-500dc97cb3531aadba079dbdbc7eaff5e79c16640c2a197a7c38bb97ea54722ed560db202f49031d57d2a187dabc667f78f0f2d323b9bfc37f9bb50aba565f9e"' : 'data-bs-target="#xs-components-links-module-ReadMessagePageModule-500dc97cb3531aadba079dbdbc7eaff5e79c16640c2a197a7c38bb97ea54722ed560db202f49031d57d2a187dabc667f78f0f2d323b9bfc37f9bb50aba565f9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReadMessagePageModule-500dc97cb3531aadba079dbdbc7eaff5e79c16640c2a197a7c38bb97ea54722ed560db202f49031d57d2a187dabc667f78f0f2d323b9bfc37f9bb50aba565f9e"' :
                                            'id="xs-components-links-module-ReadMessagePageModule-500dc97cb3531aadba079dbdbc7eaff5e79c16640c2a197a7c38bb97ea54722ed560db202f49031d57d2a187dabc667f78f0f2d323b9bfc37f9bb50aba565f9e"' }>
                                            <li class="link">
                                                <a href="components/ReadMessagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadMessagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReadMessagePageRoutingModule.html" data-type="entity-link" >ReadMessagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatePlaygroundModule.html" data-type="entity-link" >TemplatePlaygroundModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' : 'data-bs-target="#xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' :
                                        'id="xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <li class="link">
                                            <a href="injectables/HbsRenderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HbsRenderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TemplateEditorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateEditorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ZipExportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZipExportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HbsRenderService.html" data-type="entity-link" >HbsRenderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobListingService.html" data-type="entity-link" >JobListingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateEditorService.html" data-type="entity-link" >TemplateEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZipExportService.html" data-type="entity-link" >ZipExportService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CompoDocConfig.html" data-type="entity-link" >CompoDocConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JobListing.html" data-type="entity-link" >JobListing</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template.html" data-type="entity-link" >Template</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
