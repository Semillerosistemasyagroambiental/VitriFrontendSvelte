<script>
  import { onMount } from 'svelte';
  import Nav from '../components/nav.svelte';
  import Menufooter from '../components/menufooter.svelte';
  import Footer from '../components/Footer.svelte';

  let listProductos = [];

  onMount(async () => {
    try {
      // Obtener productos desde API
      const responseProductos = await fetch("https://vitribackendflask.onrender.com/api/publico/productos");
      listProductos = await responseProductos.json();
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  });
</script>

<style>

  @font-face {
     font-family: 'Myanmar Text';
     src: url('/fonts/mmrtext.ttf') format('truetype');
   }
 
   @font-face {
     font-family: 'MyanmarText-Bold';
     src: url('/fonts/mmrtextb.ttf') format('truetype');
   }

   .cls-3, .cls-4, .cls-5, .cls-6 {
     fill: #fff;
   }
 
   .cls-4, .cls-7 {
     font-size: 16.16px;
   }
 
   .cls-4, .cls-7, .cls-8, .cls-6 {
     font-family: MyanmarText, 'Myanmar Text';
   }
 
   .cls-5 {
     font-family: MyanmarText, 'Myanmar Text';
     font-size: 13px;
     letter-spacing: .02em;
     
     text-decoration: line-through;
   }
 
   .cls-9, .cls-10 {
     fill: none;
   }
 
   .cls-9, .cls-11 {
     stroke: url(#Degradado_sin_nombre_69);
     stroke-miterlimit: 10;
     stroke-width: 2px;
   }
 
   .cls-12 {
     fill: #f2e500;
   }
 
   .cls-13 {
     letter-spacing: 0em;
   }
 
   .cls-7, .cls-14, .cls-8, .cls-15, .cls-16 {
     fill: #1d1e1c;
   }
 
   .cls-17 {
     letter-spacing: -.02em;
   }
 
   .cls-18 {
     letter-spacing: 0em;
   }
 
   .cls-19 {
     clip-path: url(#clippath-1);
   }
 
   .cls-14 {
     font-size: 47px;
     letter-spacing: -.03em;
   }
 
   .cls-14, .cls-16 {
     font-family: MyanmarText-Bold, 'Myanmar Text';
     font-weight: 700;
   }
 
   .cls-8 {
     font-size: 15.5px;
   }
 
   .cls-20 {
     letter-spacing: 0em;
   }
 
   .cls-21 {
     letter-spacing: 0em;
   }
 
   .cls-22 {
     letter-spacing: .01em;
   }
 
   .cls-11, .cls-23 {
     fill: rgb(255, 255, 255);
   }
 
   .cls-24 {
     letter-spacing: 0em;
   }
 
   .cls-25 {
     font-family: MyanmarText, 'Myanmar Text';
     font-size: 19px;
   }
 
   .cls-26 {
     letter-spacing: 0em;
   }
 
   .cls-27 {
     letter-spacing: 0em;
   }
 
   .cls-16 {
     font-size: 65.95px;
     letter-spacing: -.07em;
   }
 
   .cls-28 {
     clip-path: url(#clippath);
   }
 
   .cls-29 {
     fill: #fdea14;
   }
 
   .cls-6 {
     font-size: 18px;
   }
</style>

<main>
  <Nav/>

  <div class="container" style="min-height: 100vh;">
    <div class="row">
      <div class="col-12">
        <h5>
          Ofertas disponibles 
        </h5>
      </div>
      {#each listProductos as values}
        {#if values.is_activo === true && values.is_promocion === true && values.stock > 0}
        <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-3 px-2">
          <a href="{`/ver_producto/${values.id}`}" class="card position-relative mb-2 mx-n4-5">
            <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 250">
              <defs>
                
                <clipPath id="clippath">
                  <rect class="cls-10" y="0" width="400" height="250" rx="12.13" ry="12.13"/>
                </clipPath>
                <radialGradient id="Degradado_sin_nombre_69" data-name="Degradado sin nombre 69" cx="237.54" cy="141.36" fx="237.54" fy="141.36" r="162.42" gradientTransform="translate(-31.45 -.42) scale(1.14 .98)" gradientUnits="userSpaceOnUse">
                  <stop offset=".18" stop-color="#000" stop-opacity="0"/>
                  <stop offset=".92" stop-color="#000"/>
                </radialGradient>
                <clipPath id="clippath-1">
                  <path class="cls-11" d="M63-19.53c102.97,47.03,125.16,93.9,133.93,131.32,10.26,43.8,10.87,114.66,51.51,167.57,6.72,8.76,15.35,13.93,20.6,17.64l153.96-52.43V-21l-360,1.47Z"/>
                </clipPath>
              </defs>
              <rect class="cls-3" y="0" width="400" height="250" rx="12.13" ry="12.13"/>
              <g class="cls-28">
                <path d="M0,225h229.84c6.71,0,12.16,5.45,12.16,12.16v12.84H0v-25h0Z"/>
                <g>
                  <path class="cls-23" d="M63-19.53c102.97,47.03,125.16,93.9,133.93,131.32,10.26,43.8,10.87,114.66,51.51,167.57,6.72,8.76,15.35,13.93,20.6,17.64l153.96-52.43V-21l-360,1.47Z"/>
                  <g class="cls-19">
                    <image width="2048" height="1536" transform="translate(78 -37) scale(.21)" xlink:href="{values.url_imagen}"/>
                  </g>
                  <path class="cls-9" d="M63-19.53c102.97,47.03,125.16,93.9,133.93,131.32,10.26,43.8,10.87,114.66,51.51,167.57,6.72,8.76,15.35,13.93,20.6,17.64l153.96-52.43V-21l-360,1.47Z"/>
                </g>
                <g id="estrella">
                  <path class="cls-12" d="{values.descuento.length <= 4 ? "M104.82,75.93c.08,2.23" : "M131.97,75.93c.08,2.23"}-.66,3.58-2.14,4.48-1.61.99-3.26.94-4.87-.04-5.08-3.13-10.18-6.24-15.22-9.45-1.15-.73-1.99-.77-3.17-.02-4.78,3.06-9.65,5.98-14.45,9.02-1.96,1.24-3.89,1.75-5.93.31-1.78-1.25-2.26-3.05-1.61-5.71,1.37-5.57,2.7-11.15,4.14-16.7.33-1.28.03-2.02-.97-2.85-4.43-3.65-8.77-7.41-13.18-11.08-1.74-1.45-2.77-3.14-2.04-5.42.69-2.16,2.31-3.07,4.55-3.31,5.83-.64,11.68-.97,17.53-1.25,1.33-.06,1.96-.53,2.44-1.74,2.2-5.55,4.45-11.08,6.76-16.58,1.4-3.33,5.32-4.08,7.69-1.57.58.62.89,1.38,1.21,2.15,2.2,5.36,4.41,10.71,6.58,16.09.38.94.74,1.55,1.95,1.63,6.03.38,12.04.88,18.06,1.33,2.26.17,3.82,1.28,4.45,3.19.62,1.87.02,3.72-1.74,5.21-4.29,3.64-8.53,7.33-12.91,10.84-1.52,1.22-1.87,2.29-1.35,4.18,1.44,5.18,2.62,10.44,3.89,15.67.17.69.27,1.39.31,1.62Z"/>
                  <path class="cls-29" d="{values.descuento.length <= 4 ? "M59.32,76.14c.58" : "M86.47,76.14c.58"}-2.4,1.21-5.04,1.85-7.68.92-3.79,1.78-7.6,2.81-11.37.35-1.3.08-2.06-.92-2.9-4.74-3.93-9.42-7.93-14.11-11.91-.45-.38-.91-.79-1.21-1.28-.98-1.64.09-3.42,2.17-3.59,6.26-.49,12.51-.98,18.78-1.38,1.5-.1,2.28-.62,2.84-2.07,2.22-5.67,4.6-11.28,6.89-16.92.5-1.24,1.11-2.27,2.6-2.26,1.4.01,2.01.99,2.48,2.17,2.31,5.7,4.7,11.37,6.95,17.09.54,1.37,1.3,1.89,2.73,1.98,6.2.4,12.4.91,18.6,1.34,1.23.08,2.24.42,2.67,1.65.47,1.32-.19,2.25-1.17,3.08-4.8,4.04-9.57,8.12-14.4,12.13-.95.79-1.24,1.52-.93,2.74,1.49,5.85,2.89,11.71,4.33,17.57.07.29.15.57.22.86.28,1.16.27,2.24-.83,3.03-1.09.78-2.11.48-3.14-.16-5.33-3.31-10.69-6.57-15.97-9.94-1.19-.76-2.05-.7-3.2.03-5.3,3.35-10.65,6.62-15.98,9.93-.91.57-1.85.86-2.84.3-.83-.46-1.28-1.21-1.24-2.45Z"/>
                  <image width="512" height="512" transform="{values.descuento.length <= 4 ? "translate(65.21 35.21) scale(.06)" : "translate(92.36 35.21) scale(.06)"}" xlink:href="/illustrator/PNG/porcentaje.png"/>
                  <text class="cls-16" transform="translate(17.57 80.33)"><tspan x="0" y="0">{parseInt(values.descuento, 10)}</tspan></text>
                  <text class="cls-8" transform="translate(23.88 92.35)"><tspan x="0" y="0">de dtco</tspan></text>
                </g>
                <g>
                  <g>
                    <text class="cls-14" transform="translate(33 173.85)"><tspan x="0" y="0">${values.precio-values.precio*values.descuento/100}</tspan></text>
                    <text class="cls-7" transform="translate(33.12 178.98) rotate(-90)"><tspan class="cls-20" x="0" y="0">Ahora</tspan></text>
                  </g>
                  <g>
                    <g>
                      <rect class="cls-15" x="36" y="109" width="114" height="18" rx="9" ry="9"/>
                      <text class="cls-5" transform="translate(89.52 122.53) scale(1.15 1)"><tspan x="0" y="0">${values.precio}</tspan></text>
                    </g>
                    <text class="cls-4" transform="translate(44.76 122.74)"><tspan class="cls-20" x="0" y="0">Antes</tspan></text>
                  </g>
                </g>
                <text class="cls-6" transform="translate(46.8 241.94)"><tspan x="-30" y="0">Hasta agotar existencias</tspan></text>
              </g>
              <text class="cls-25" transform="translate(24.86 206.59)"><tspan x="0" y="0">{values.nombre.split(' ').slice(0, 3).join(' ')}</tspan></text>
            </svg>
          </a>
        </div>
          
        {/if}
      {/each}
    </div>
  </div>

<Menufooter/>  
<Footer/>
</main>
