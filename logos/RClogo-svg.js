const rcgreen = '#3dc06c';

const body = "0,0 0,9.5 4,9.5 4,10.5 1,10.5 1,11.5 0,11.5 0,14 12,14 12,11.5 11,11.5 11,10.5 8,10.5 8,9.5 12,9.5 12,0";

const svg = `
      <svg height="255" width="220">
      
      <g transform="scale(18)">
      <polygon points="${body}" style="fill:black;" />

      <rect x="1.5" y="1.5" height="6.5" width="9" style="stroke:white;stroke-width:1;" />

      <rect x="2" y="12.5" height="1" width="1" style="fill:white;" /> 
      <rect x="4" y="12.5" height="1" width="1" style="fill:white;" />
      <rect x="6" y="12.5" height="1" width="1" style="fill:white;" />
      <rect x="8" y="12.5" height="1" width="1" style="fill:white;" />

      <rect x="3" y="11.5" height="1" width="1" style="fill:white;" /> 
      <rect x="5" y="11.5" height="1" width="1" style="fill:white;" />
      <rect x="7" y="11.5" height="1" width="1" style="fill:white;" />
      <rect x="9" y="11.5" height="1" width="1" style="fill:white;" />

      <rect x="2" y="3" height="1" width="1" style="fill:${rcgreen};" />
      <rect x="4" y="3" height="1" width="1" style="fill:${rcgreen};" />
      <rect x="6" y="3" height="1" width="1" style="fill:${rcgreen};" />

      <rect x="3" y="5" height="1" width="2" style="fill:${rcgreen};" />
      <rect x="6" y="5" height="1" width="2" style="fill:${rcgreen};" />
      </g>
      </svg>
`;

document.getElementById('svg-container').innerHTML = svg;
