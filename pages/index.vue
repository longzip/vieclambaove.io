<template>
  <div>

  <navbar-compoment />
  <feature-compoment />
  <cta-compoment />
  <form-compoment />
    


  </div>
</template>

<script>
import NavbarCompoment from '@/components/HeroSections.vue'
import FeatureCompoment from '@/components/FeatureSections.vue'
import CtaCompoment from '@/components/CTASections.vue'
import FormCompoment from '@/components/FormLayouts.vue'
export default {
  components: {
    NavbarCompoment,
    FeatureCompoment,
    CtaCompoment,
    FormCompoment,
  },
}
</script>
