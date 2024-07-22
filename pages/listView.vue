<template>
   <div>
      <div
         class="mx-auto flex w-11/12 flex-col items-center justify-center gap-8"
      >
         <PropertyCard
            v-for="property in properties"
            :key="property.id"
            :image-urls="property.imageUrls"
            :address="property.address"
            :location="property.location"
            :price="property.price"
            :size="property.size"
            :beds="property.beds"
            class="w-full md:w-96"
            @open-gallery="openGallery(property.imageUrls)"
         />
      </div>
      <FlowbiteImageDrawer
         :show-drawer="showDrawer"
         :image-urls="currentPropertyImages"
         @close="showDrawer = false"
      />
   </div>
</template>

<script setup>
const properties = [
   {
      id: 1,
      imageUrls: [
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
      ],
      address: "Mahonylaan 5",
      location: "Paramaribo, Suriname",
      price: 1950,
      size: 195,
      beds: 3,
   },
   {
      id: 2,
      imageUrls: [
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
      ],
      address: "Mahonylaan 5",
      location: "Paramaribo, Suriname",
      price: 1950,
      size: 195,
      beds: 3,
   },
   {
      id: 3,
      imageUrls: [
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
      ],
      address: "Mahonylaan 5",
      location: "Paramaribo, Suriname",
      price: 1950,
      size: 195,
      beds: 3,
   },
   {
      id: 4,
      imageUrls: [
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
         "https://s3-alpha-sig.figma.com/img/e04a/d227/d5ddc759cf5cfe9bb020e5138f46fad3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFD-FyLKN7yebXfO9ozxJxd~euwuxd5-Pu48ZPnzHpfFlhTQcZt-ZvjUDqwEeXRpurfqyn21e8zeqwnwduDYdP~fzCkUxzLbP1l1li20xEp9rCGl5ggNO1mT2OC0mxjxkNhGIIEQ3JDQoOK16MXi0Uua9ZYdqHE9CBUSOKGx-EOO11MUEWrvdrCQAzdyzoS2Cx~bTqNw36ltmeOKMSjBoesdNutPKfZ5aZaqqFE-uXOdDvUfEpf1W4tQWqXWar3~LVlQ62NZW-KpPCfWv8FW3fwKoWPgturtijKAyINONiBm9LtohCM-1Mio~xgaB-M9vZGtOFAiitWwNLjHghnG~Q__",
         "https://s3-alpha-sig.figma.com/img/856c/2c61/eb974252c054c08c6c30dab8fda2d9f6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHciok09~EnMNbBOSbXc1~r4B7UrXx6icVz8HxOzUNxj-Zzqn0rRIwnwsYZxqTyPFpiR6~ZhDdOboWMMpK8SpndXpNN~ysLpqYPAN1400mwYrMCAZhQ6xADI1k~4N3WEwsomiJBvFS7ybdPEI6-frIqpO8TyrRko5ePG6gFOQo5HyRq5MfNf23ZsqrGSYcgsj4dGShXMrkQOtoDtCBTjyQ7jJTdUtZzWbnJr9NZduGkfSofyO3IWjWxvVgEkWBOd98hHl5EM3FevfiBQEpmI3o~NmlUP7AwIZwzi5ka0eKLFI2tdtGKUti1LnVgrIK9uqOG6imBlDFgZjjdyh13KFQ__",
      ],
      address: "Mahonylaan 5",
      location: "Paramaribo, Suriname",
      price: 1950,
      size: 195,
      beds: 3,
   },
];

const showDrawer = ref(false);
const currentPropertyImages = ref([]);

const openGallery = (propertyImages) => {
   currentPropertyImages.value = propertyImages;
   showDrawer.value = true;
};
</script>
