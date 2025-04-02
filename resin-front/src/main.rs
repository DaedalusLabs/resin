use resin_front::{
    contexts::{
        chat_provider::ResinChatProvider, loading_provider::LoadingCtxProvider,
        provider::ListingDataProvider, user_data::ResinUserProvider,
    },
    router::{ResinPages, PwaInstall},
};
use yew::prelude::*;
use yew_router::BrowserRouter;

fn main() {
    yew::Renderer::<App>::new().render();
}

#[function_component(App)]
fn app() -> Html {
    html! {
        <>
            <PwaInstall />
            <BrowserRouter>
                <AppProviders>
                    <LoadingCtxProvider>
                        <ResinPages />
                    </LoadingCtxProvider>
                </AppProviders>
            </BrowserRouter>
        </>
    }
}

#[function_component(AppProviders)]
fn app_nostr_providers(props: &yew::html::ChildrenProps) -> Html {
    let relays = vec![
        nostr_minions::relay_pool::UserRelay {
            url: "wss://relay.illuminodes.com".to_string(),
            read: true,
            write: true,
        },
        nostr_minions::relay_pool::UserRelay {
            url: "wss://relay.arrakis.lat".to_string(),
            read: true,
            write: false,
        },
    ];
    html! {
        <nostr_minions::relay_pool::RelayProvider {relays}>
            <nostr_minions::key_manager::NostrIdProvider>
                <ListingDataProvider>
                    <ResinUserProvider>
                        <ResinChatProvider>
                            {props.children.clone()}
                        </ResinChatProvider>
                    </ResinUserProvider>
                </ListingDataProvider>
            </nostr_minions::key_manager::NostrIdProvider>
        </nostr_minions::relay_pool::RelayProvider>
    }
}
