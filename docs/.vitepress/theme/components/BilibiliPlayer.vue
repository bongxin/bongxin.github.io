 <template>
  <!-- <el-affix :offset="120"> -->
    <div style="position: relative; padding: 30% 45%">
      <iframe
        :src="iframeSrc"
        :style="{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
        }"
        scrolling="no"
        frameborder="0"
        framespacing="0"
        allowfullscreen
      />
    </div>
  <!-- </el-affix> -->
</template>

<script>
export default {
  name: "BilibiliPlayer",
  props: {
    baseSrc: {
      type: String,
      required: true,
    },
  },
  computed: {
    iframeSrc() {
      const query = new URLSearchParams({
        as_wide: 1,
        high_quality: 1,
        danmaku: 0,
        autoplay: 0,
        muted: false,
      });
      return `${this.baseSrc}?${query.toString()}`;
    },
  },
};
</script>
