<template lang="pug">
div
  title-link(h2) Basic
  example
    w-tabs(:items="tabs1")
    //- template(#pug).
      w-tabs(:items="tabs")
    template(#html).
      &lt;w-tabs :items="tabs"&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Align center and right
  example
    w-tabs(:items="tabs4.items" center)
    w-tabs.mt4(:items="tabs4.items" right)
    //- template(#pug).
      w-tabs(:items="tabs" center)
      w-tabs(:items="tabs" right)
    template(#html).
      &lt;w-tabs :items="tabs" center&gt;&lt;/w-tabs&gt;
      &lt;w-tabs :items="tabs" right&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Fill bar &amp; disabled items
  example
    w-switch.mb3(v-model="tabs2.fillBar") Fill bar
    w-tabs(:items="tabs2.items" :fill-bar="tabs2.fillBar")
    //- template(#pug).
      w-switch.mb3(v-model="fillBar") Fill bar
      w-tabs(:items="tabs" :fill-bar="fillBar")
    template(#html).
      &lt;w-switch class="mb3" v-model="fillBar"&gt;
        Fill bar
      &lt;/w-switch&gt;

      &lt;w-tabs :items="tabs" :fill-bar="fillBar"&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ],
        fillBar: true
      })

  title-link(h2) V-model
  alert(warning).
    #[strong Since version 1.21.0], the v-model/value only accepts a numeric tab index (previously an array of boolean).
  p It is possible to open a particular tab programmatically via #[code v-model] or #[code value].
  example
    w-tabs.mb2(v-model="tabs2.active" :items="tabs2.items")
    strong
      | v-model:
      code.ml2 {{ tabs2.active }}
    //- template(#pug).
      w-tabs(v-model="activeTab" :items="tabs")
      strong
        | v-model:
        code.ml2 {{ '\{\{ activeTab \}\}' }}
    template(#html).
      &lt;w-tabs v-model="activeTab" :items="tabs"&gt;&lt;/w-tabs&gt;
      &lt;strong&gt;
        v-model:
        &lt;code class="ml2"&gt;
          {{ '\{\{ activeTab \}\}' }}
        &lt;/code&gt;
      &lt;/strong&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ],
        activeTab: 2
      })

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background. You can also set a #[code slider-color] and an #[code active-class].

  .title3 Color &amp; bg-color
  example
    w-tabs(:items="tabs2.items" color="blue" bg-color="indigo-light5")
    //- template(#pug).
      w-tabs(:items="tabs" color="blue" bg-color="indigo-light5")
    template(#html).
      &lt;w-tabs 
        :items="tabs" 
        color="blue" 
        bg-color="indigo-light5"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  .title3.mt4 Slider color
  example
    w-tabs(:items="tabs2.items" slider-color="blue-light2")
    //- template(#pug).
      w-tabs(:items="tabs" slider-color="blue-light2")
    template(#html).
      &lt;w-tabs 
        :items="tabs" 
        slider-color="blue-light2"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  .title3 Active class
  example
    w-tabs(
      :items="tabs2.items"
      color="blue"
      active-class="pink"
      slider-color="pink")
    //- template(#pug).
      w-tabs(
        :items="tabs"
        color="blue"
        active-class="pink"
        slider-color="pink")
    template(#html).
      &lt;w-tabs
        :items="tabs"
        color="blue"
        active-class="pink"
        slider-color="pink"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  title-link(h2) No slider
  example
    w-switch.mb3(v-model="tabs2.slider") Slider
    w-tabs(:items="tabs2.items" :no-slider="!tabs2.slider" active-class="pink")
    //- template(#pug).
      w-switch.mb3(v-model="tabsSlider") Slider
      w-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")
    template(#html).
      &lt;w-switch class="mb3" v-model="tabsSlider"&gt;
        Slider
      &lt;/w-switch&gt;

      &lt;w-tabs 
        :items="tabs" 
        :no-slider="!tabsSlider" 
        active-class="pink"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabsSlider: false,
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  title-link(h2) Content transitions
  example
    w-radios.mb3(:items="transitions" v-model="tabs4.transition")
    w-tabs(:items="tabs4.items" :transition="tabs4.transition")
    //- template(#pug).
      w-radios.mb3(:items="transitions" v-model="transition")
      w-tabs(:items="tabs" :transition="transition")
    template(#html).
      &lt;w-radios 
        class="mb3" 
        :items="transitions" 
        v-model="transition"&gt;
      &lt;/w-radios&gt;

      &lt;w-tabs 
        :items="tabs" 
        :transition="transition"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ],
        transition: 'fade',
        transitions: [
          { label: 'default', value: '' },
          { label: 'fade' },
          { label: 'slide-fade-up' },
          { label: 'slide-fade-down' },
          { label: 'slide-fade-left' },
          { label: 'slide-fade-right' },
          { label: 'scale-fade' },
          { label: 'none', value: false }
        ]
      })

  title-link(h2) Add / remove tabs
  p.
    The tabs will naturally try to fit in the available space. But if they can't fit because there are
    too many, a scrollbar will allow navigation to all the tabs.
  example
    w-flex.mb3(align-center)
      | Number of tabs:
      w-button.mx2(icon="wi-minus" sm @click="tabs3.tabsCount -= tabs3.tabsCount < 1 ? 0 : 1")
      code {{ tabs3.tabsCount }}
      w-button.mx2(icon="wi-plus" sm @click="tabs3.tabsCount++")
    w-tabs(:items="tabs3.tabsCount")
      template(#item-title="{ index }") Tab {{ index }}
      template(#item-content="{ index }") Content {{ index }}
    //- template(#pug).
      w-flex.mb3(align-center)
        | Number of tabs:
        w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount &lt; 1 ? 0 : 1")
        code {{ '\{\{ tabsCount \}\}' }}
        w-button.mx2(icon="wi-plus" sm @click="tabsCount++")
      w-tabs(:items="tabsCount")
        template(#item-title="{ index }") Tab {{ '\{\{ index \}\}' }}
        template(#item-content="{ index }") Content {{ '\{\{ index \}\}' }}
    template(#html).
      &lt;w-flex class="mb3" align-center&gt;
        Number of tabs:
        &lt;w-button 
          class="mx2" 
          icon="wi-minus" 
          sm 
          @click="tabsCount -= tabsCount &lt; 1 ? 0 : 1"&gt;
        &lt;/w-button&gt;

        &lt;code&gt;{{ '\{\{ tabsCount \}\}' }}&lt;/code&gt;

        &lt;w-button 
          class="mx2" 
          icon="wi-plus" 
          sm 
          @click="tabsCount++"&gt;
        &lt;/w-button&gt;
      &lt;/w-flex&gt;

      &lt;w-tabs :items="tabsCount"&gt;
        &lt;template #item-title="{ index }"&gt;
          Tab {{ '\{\{ index \}\}' }}
        &lt;/template&gt;

        &lt;template #item-content="{ index }"&gt;
          Content {{ '\{\{ index \}\}' }}
        &lt;/template&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabsCount: 3
      })

  title-link(h2) Card style tabs
  example
    w-tabs(:items="tabs1" card)
    //- template(#pug).
      w-tabs(:items="tabs" card)
    template(#html).
      &lt;w-tabs :items="tabs" card&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Close button
  alert(tip).
    When using a close button, don't forget to stop the click propagation #[code @click.stop] to prevent
    the navigation to the tab that you are deleting!
  example
    w-tabs(:items="tabs6.items" card)
      template(#item-title="{ item, index }")
        | {{ item.title }}
        w-button.ml1.mr-1(
          @click.stop="tabs6.items.splice(index - 1, 1)"
          icon="wi-cross"
          outline
          xs)
    w-button.mt4(
      bg-color="primary"
      @click="tabs6.items = tabs6.originals.slice(0)"
      :disabled="tabs6.items.length === 3") Reset tabs

    //- template(#pug).
      w-tabs(:items="tabs" card)
        template(#item-title="{ item, index }")
          | {{ '\{\{ item.title \}\}' }}
          w-button.ml1.mr-1(
            @click.stop="tabs.splice(index - 1, 1)"
            icon="wi-cross"
            outline
            xs)
    template(#html).
      &lt;w-tabs :items="tabs" card&gt;
        &lt;template #item-title="{ item, index }"&gt;
          | {{ '\{\{ item.title \}\}' }}
          &lt;w-button 
            class="ml1 mr-1"
            @click.stop="tabs.splice(index - 1, 1)"
            icon="wi-cross"
            outline
            xs&gt;
          &lt;/w-button&gt; 
        &lt;/template&gt; 
      &lt;/w-tabs&gt;            
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Customizing the tabs title &amp; contents
  example
    w-tabs(:items="tabs5" card)
      template(#item-title="{ item }")
        w-icon.mr1.green mdi mdi-star
        span.green {{ item.title }}
      template(#item-title.3="{ item }")
        w-icon.pink mdi mdi-heart
        span.pink.mx1 {{ item.title }}
        w-icon.pink mdi mdi-heart
      template(#item-content.1="{ item }")
        .title3 This is a custom tab content.
        div(v-html="item.content")
    //- template(#pug).
      w-tabs(:items="tabs" card)
        template(#item-title="{ item }")
          w-icon.mr1.green mdi mdi-star
          span.green {{ '\{\{ item.title \}\}' }}
        template(#item-title.3="{ item }")
          w-icon.pink mdi mdi-heart
          span.pink.mx1 {{ '\{\{ item.title \}\}' }}
          w-icon.pink mdi mdi-heart
        template(#item-content.1="{ item }")
          .title3 This is a custom tab content.
          div(v-html="item.content")
    template(#html).
      &lt;w-tabs :items="tabs" card&gt;
        &lt;template #item-title="{ item }"&gt;
          &lt;w-icon class="mr1 green"&gt;
            mdi mdi-star
          &lt;/w-icon&gt;

          &lt;span class="green"&gt;
            {{ '\{\{ item.title \}\}' }}
          &lt;/span&gt;
        &lt;/template&gt; 

        &lt;template #item-title.3="{ item }"&gt;
          &lt;w-icon class="pink"&gt;
            mdi mdi-heart
          &lt;/w-icon&gt;

          &lt;span class="pink mx1"&gt;
            {{ '\{\{ item.title \}\}' }}
          &lt;/span&gt;

          &lt;w-icon class="pink"&gt;
            mdi mdi-heart
          &lt;/w-icon&gt;
        &lt;/template&gt; 

        &lt;template #item-content.1="{ item }"&gt;
          &lt;div class="title3"&gt;
            This is a custom tab content.
          &lt;/div&gt; 

          &lt;div v-html="item.content"&gt;&lt;/div&gt; 
        &lt;/template&gt; 
      &lt;/w-tabs&gt; 
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ]
      })
</template>

<script>
export default {
  data: () => ({
    tabs1: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
    ],
    tabs2: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' },
        { title: 'Tab 4', content: 'Tab 4 content.' },
        { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
      ],
      active: 2,
      fillBar: true,
      slider: false
    },
    tabs3: {
      tabsCount: 3
    },
    tabs4: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' }
      ],
      transition: 'fade'
    },
    tabs5: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3', content: 'Tab 3 content.' }
    ],
    tabs6: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' }
      ],
      originals: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' }
      ],
    },
    transitions: [
      { label: 'default', value: '' },
      { label: 'fade' },
      { label: 'slide-fade-up' },
      { label: 'slide-fade-down' },
      { label: 'slide-fade-left' },
      { label: 'slide-fade-right' },
      { label: 'scale-fade' },
      { label: 'none', value: false }
    ]
  })
}
</script>
