<script lang="ts">
    import { Parallax, ParallaxLayer } from 'svelte-parallax';
</script>

<Parallax sections={3} config={{stiffness: 0.2, damping: 0.3}}>
    <ParallaxLayer rate={0} span={3} style={"background-color: orange;"} />
  
    <ParallaxLayer rate={-0.5} offset={1}>
      <img src='horse.jpg' alt='a horse'>
    </ParallaxLayer>
  
    <ParallaxLayer rate={1} offset={1.75}>
      <img src='bird.jpg' alt='a bird'>
    </ParallaxLayer>
  
    <ParallaxLayer rate={2} offset={2} style={"background-color: lightblue;"} />
  </Parallax>