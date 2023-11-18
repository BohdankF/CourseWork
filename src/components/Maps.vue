<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import {Map, MapStyle, config, Marker} from '@maptiler/sdk';
import {shallowRef, onMounted, onUnmounted, markRaw} from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
  config.apiKey = 'AEH6p7nKltnBOJ14FLYz';

  const initialState = {lng: 30.465, lat: 50.451, zoom: 10};

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));

  new Marker({color: "#FF0000"})
      .setLngLat([ 30.46593297701272, 50.45116224655399])
      .addTo(map.value);
}),
    onUnmounted(() => {
      map.value?.remove();
    })
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: 51.5vh; /* calculate height of the screen minus the heading */
}

.map {
  //position: absolute;
  width: 100%;
  height: 100%;
}
</style>