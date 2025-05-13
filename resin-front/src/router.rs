use yew::prelude::*;
use yew_router::prelude::*;
use yew::platform::spawn_local;
use lucide_yew::{X, Download};
use web_sys::wasm_bindgen::JsCast;
use nostr_minions::browser_api::BeforeInstallPromptEvent;

use crate::{
    components::{modal::Modal, settings::SettingsPageTemplate},
    contexts::user_data::ResinUserStore,
    pages::{
        chat::ChatPage,
        favorites::FavoritesPage,
        home::ResinHomePage,
        keys::NostrKeysPage,
        listing::ListingDetailPage,
        login::LoginPage,
        profile::ProfilePage,
        search::SearchPage,
        settings::SettingsPage,
        terms::{FrequentlyAskedQuestions, TermsAndConditions},
    },
};

#[derive(Clone, Routable, PartialEq, Eq, Debug)]
pub enum ResinRoute {
    #[at("/")]
    Home,
    #[at("/search")]
    Search,
    #[at("/chat")]
    Messages,
    #[at("/favorites")]
    Favorites,
    #[at("/profile")]
    Profile,
    #[at("/keys")]
    Keys,
    #[at("/settings")]
    Settings,
    #[at("/listing/:listing_id")]
    Listing { listing_id: String },
    #[at("/login")]
    Login,
}
#[derive(Clone, Properties, PartialEq, Eq)]
pub struct MainPanelProps {
    pub route: ResinRoute,
}

#[function_component(MainPanel)]
pub fn main_panel(props: &MainPanelProps) -> Html {
    let background = match props.route {
        ResinRoute::Search => html! {
            <>
                <div class="h-full w-full bg-[#3C3C3D]"></div>
                <img src="/public/BG_Hexagon_Dark.svg" alt="Background" class="absolute inset-0 h-full w-full object-cover opacity-10" />
            </>
        },
        _ => html! {
            <img src="/public/BG_Hexagon_White.svg" alt="Background" class="absolute inset-0 h-full w-full object-cover opacity-5" />
        },
    };

    let showing_class = "absolute inset-0  overflow-hidden opacity-100 transition-all duration-300 ease-in-out scale-100";
    let hidden_class = "absolute inset-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out scale-0";
    html! {
        <div class="relative h-screen w-full overflow-hidden">
            <div class="absolute inset-0 z-0">
                {background}
            </div>
            <div class="overflow-hidden z-10 flex flex-col h-screen">
                <div class="relative flex-1">
                    <div class={if matches!(props.route, ResinRoute::Home) { showing_class } else { hidden_class }}>
                        <ResinHomePage />
                    </div>
                    <div class={if matches!(props.route, ResinRoute::Search) { showing_class } else { hidden_class }}>
                        <SearchPage />
                    </div>
                    <div class={if matches!(props.route, ResinRoute::Favorites) { showing_class } else { hidden_class }}>
                        <FavoritesPage />
                    </div>
                    <div class={if matches!(props.route, ResinRoute::Messages) { showing_class } else { hidden_class }}>
                        <ChatPage />
                    </div>
                    <div class={if matches!(props.route, ResinRoute::Listing { .. }) { showing_class } else { hidden_class }}>
                        {if let ResinRoute::Listing { listing_id } = props.route.clone() {
                            html! { <ListingDetailPage {listing_id} /> }
                        } else {
                            html! {}
                        }}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    }
}

#[function_component(ResinPages)]
pub fn resin_pages() -> Html {
    html! {
        <Switch<ResinRoute> render = { move |switch: ResinRoute| {
            match switch {
                ResinRoute::Home | ResinRoute::Search | ResinRoute::Messages | ResinRoute::Favorites | ResinRoute::Listing { .. }
                    => html! { <MainPanel route={switch}/> },
                ResinRoute::Login => html! {
                    <LoginPage />
                },
                ResinRoute::Keys =>html! {
                    <SettingsPageTemplate title="Nostr Keys">
                        <NostrKeysPage />
                    </SettingsPageTemplate>
                },
                ResinRoute::Profile =>
                    html! { <SettingsPageTemplate title="Profile"><ProfilePage /></SettingsPageTemplate> },
                ResinRoute::Settings =>
                    html! { <SettingsPageTemplate title="Settings"><SettingsPage /></SettingsPageTemplate> },
            }}}
        />
    }
}
#[function_component(Footer)]
pub fn footer() -> Html {
    let is_open = use_state(|| false);
    let user_ctx =
        use_context::<ResinUserStore>().expect("Footer must be a child of ResinUserProvider");
    let profile_icon = user_ctx.profile().map_or(
        {
            if *is_open {
                "/public/OrangeUser.png".to_string()
            } else {
                "/public/User.svg".to_string()
            }
        },
        |profile| profile.image_url,
    );

    let onclick = {
        let is_open = is_open.clone();
        Callback::from(move |_| is_open.set(!*is_open))
    };
    let current_route = use_route::<ResinRoute>().expect("Footer must be a child of Router");

    html! {
        <>
        <footer class="bg-gray-100 w-full h-fit py-3 flex-shrink-0 z-30">
            <div class="flex justify-center w-full">
                <div class="flex items-center flex-row justify-evenly w-full flex-1">
                    <yew_router::components::Link<ResinRoute> to={ResinRoute::Messages}>
                        {if matches!(current_route, ResinRoute::Messages) {
                            html! { <img src="/public/OrangeChat.png" class="size-6" /> }
                        } else {
                            html! { <img src="/public/ChatCircle.svg" class="size-6" /> }
                        }}
                    </yew_router::components::Link<ResinRoute>>
                    <yew_router::components::Link<ResinRoute> to={ResinRoute::Search}>
                        {if matches!(current_route, ResinRoute::Search) {
                            html! { <img src="/public/OrangeSearch.png" class="size-5" /> }
                        } else {
                            html! { <img src="/public/Search.svg" class="size-5" /> }
                        }}
                    </yew_router::components::Link<ResinRoute>>
                    <yew_router::components::Link<ResinRoute> to={ResinRoute::Home}>
                        {if matches!(current_route, ResinRoute::Home) {
                            html! { <img src="/public/BrandIcon_RESIN.png" class="size-6" /> }
                        } else {
                            html! { <img src="/public/daedalus_small_gray.png" class="size-6" /> }
                        }}
                    </yew_router::components::Link<ResinRoute>>
                    <yew_router::components::Link<ResinRoute> to={ResinRoute::Favorites}>
                        {if matches!(current_route, ResinRoute::Favorites) {
                            html! { <img src="/public/OrangeHeart.png" class="w-6 h-5" /> }
                        } else {
                            html! { <img src="/public/HeartStraight.svg" class="size-6" /> }
                        }}
                    </yew_router::components::Link<ResinRoute>>
                    <button {onclick}>
                        <img src={profile_icon} class="size-6 rounded-full" />
                    </button>
                </div>
            </div>
        </footer>
        <crate::components::drawer::LeftDrawer {is_open} >
            <SettingsDrawer />
        </crate::components::drawer::LeftDrawer>
        </>
    }
}

#[function_component(SettingsDrawer)]
fn settings_drawer() -> Html {
    let user_ctx = use_context::<nostr_minions::key_manager::NostrIdStore>()
        .expect("SettingsDrawer must be a child of NostrIdProvider");
    let logout_onclick = {
        let user_ctx = user_ctx.clone();
        Callback::from(move |_| {
            user_ctx.dispatch(nostr_minions::key_manager::NostrIdAction::DeleteIdentity);
        })
    };
    let is_terms_open = use_state(|| false);
    let is_faq_open = use_state(|| false);

    let toggle_terms = {
        let is_terms_open = is_terms_open.clone();
        Callback::from(move |_| is_terms_open.set(!*is_terms_open))
    };
    let toggle_faq = {
        let is_faq_open = is_faq_open.clone();
        Callback::from(move |_| is_faq_open.set(!*is_faq_open))
    };
    html! {
        <>
            <div class="flex flex-col h-fit">
                <div class="flex justify-between items-center">
                    <p class="text-md text-neutral-400 ">{"Account"}</p>
                    <X class="text-neutral-400 size-5" />
                </div>
                <div class="border-1 border-neutral-300 rounded-md mt-5">
                    <yew_router::components::Link<ResinRoute> to={ResinRoute::Profile}>
                        <div class="p-3 border-b border-b-neutral-300 flex items-center gap-x-2">
                            <img src="/public/User.svg" alt="User Icon" class="size-4 text-neutral-400" />
                            <p class="text-neutral-600 text-md">{"Profile"}</p>
                        </div>
                    </yew_router::components::Link<ResinRoute>>
                    <yew_router::components::Link<ResinRoute> to={ResinRoute::Keys}>
                        <div class="p-3 border-b border-b-neutral-300 flex items-center gap-x-2">
                            <img src="/public/NostrKeys.svg" alt="Nostr Keys Icon" class="size-4 text-neutral-400" />
                            <p class="text-neutral-600 text-md">{"NOSTR Keys"}</p>
                        </div>
                    </yew_router::components::Link<ResinRoute>>
                    <yew_router::components::Link<ResinRoute> to={ResinRoute::Settings}>
                        <div class="p-3 border-b border-b-neutral-300 flex items-center gap-x-2">
                            <img src="/public/Settings.svg" alt="Settings Icon" class="size-4 text-neutral-400" />
                            <p class="text-neutral-600 text-md">{"Settings"}</p>
                        </div>
                    </yew_router::components::Link<ResinRoute>>

                    <button onclick={toggle_faq} class="p-3 flex items-center gap-x-2">
                        <img src="/public/Question.svg" alt="FAQ Icon" class="size-4 text-neutral-400" />
                        <p class="text-neutral-600 text-md">{"Help"}</p>
                    </button>
                </div>
            </div>

            <div class="flex flex-col justify-end mt-[575px]">
                {user_ctx.get_identity().is_some().then(|| {
                    html! {
                        <button onclick={logout_onclick} class="text-red-500 flex items-center gap-3">
                            <img src="/public/SignOut.svg" alt="SingOut icon" />
                            {"Logout"}
                        </button>
                }})}

                <button onclick={toggle_terms} class="mt-5">
                    <p class="text-neutral-600 text-md text-left">{"Terms & conditions"}</p>
                </button>
            </div>
            <Modal is_open={is_terms_open} >
                <TermsAndConditions />
            </Modal>
            <Modal is_open={is_faq_open} >
                <FrequentlyAskedQuestions />
            </Modal>
        </>
    }
}

#[function_component(PwaInstall)]
pub fn pwa_install() -> Html {
    let is_installable = use_state(|| None);
    let is_installed = use_state(|| false);

    let is_installable_handle = is_installable.clone();
    let is_installed_handle = is_installed.clone();
    use_effect_with((), move |()| {
        let window = web_sys::window().expect("No window found");
        let handle_clone = is_installable_handle.clone();
        let callback: web_sys::js_sys::Function = web_sys::wasm_bindgen::closure::Closure::wrap(
            Box::new(move |e: BeforeInstallPromptEvent| {
                handle_clone.set(Some(e));
            }) as Box<dyn FnMut(_)>,
        )
        .into_js_value()
        .unchecked_into();
        window
            .add_event_listener_with_callback("beforeinstallprompt", &callback)
            .expect("Failed to add event listener");
        if let Ok(Some(media_match)) = window.match_media("(display-mode: standalone)") {
            if media_match.matches() {
                is_installed_handle.set(true);
            }
        };
        || {}
    });
    let install_event = is_installable.clone();
    let on_install = Callback::from(move |_| {
        let install_event = (*install_event).as_ref().expect("No install event found");
        let promise = install_event.prompt();
        let handle = wasm_bindgen_futures::JsFuture::from(promise);
        spawn_local(async move {
            let _ = handle.await;
        });
    });

    let is_installable_handle = is_installable.clone();
    let is_installed_handle = is_installed.clone();
    let handle_dismiss = Callback::from(move |_| {
        is_installable_handle.set(None);
        is_installed_handle.set(true);
    });
    
    if is_installable.is_some() && !(*is_installed) {
        html! {
            <div class="fixed bottom-12 md:bottom-16 right-4 z-[999]">
                <div class="relative">
                    <div class="absolute inset-0 bg-bitcoin-orange rounded-full blur-md animate-pulse"></div>
                    <div class="relative bg-bitcoin-orange rounded-full shadow-lg p-1">
                        <div class="flex items-center space-x-2">
                            <button
                                class="text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-300 cursor-pointer"
                                onclick={on_install}
                            >
                                <Download class="w-5 h-5" />
                                <span>{"Install App"}</span>
                            </button>
                            <button
                                class="text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
                                onclick={handle_dismiss}
                                >
                                <X class="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
    } else {
        html! {}
    }
}